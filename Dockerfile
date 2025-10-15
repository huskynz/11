# -------------------------------------------------------
# Build stage
# -------------------------------------------------------
FROM node:20.11-slim AS builder
WORKDIR /app
ENV PUPPETEER_SKIP_DOWNLOAD=TRUE

# Install any needed system dependencies for the build
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential && \
    rm -rf /var/lib/apt/lists/*

# Enable corepack and set pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm --version

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (node_modules linker for Docker)
RUN pnpm install --frozen-lockfile --prefer-offline

# Build the app
COPY . .
RUN pnpm build

# -------------------------------------------------------
# Runtime stage
# -------------------------------------------------------
FROM node:20.11-slim AS runtime
WORKDIR /app

ENV HOST=0.0.0.0 \
    PORT=4322 \
    NODE_ENV=production

# Copy build artifacts and runtime deps
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs && \
    chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 4322
CMD ["node", "./dist/server/entry.mjs"]
