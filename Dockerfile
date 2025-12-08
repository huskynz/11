# -------------------------------------------------------
# Build stage
# -------------------------------------------------------
FROM node:20.11-slim AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system nextjs && adduser --system --ingroup nextjs nextjs

# Install build tools (only if you have native deps)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential && rm -rf /var/lib/apt/lists/*



RUN corepack enable && corepack prepare pnpm@10 --activate

# Copy lockfile and package manifest first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy app source
COPY . .

# Build Next.js app
RUN pnpm build

RUN chown -R nextjs:nextjs /app


# -------------------------------------------------------
# Runtime stage
# -------------------------------------------------------
FROM node:20.11-slim AS runtime
WORKDIR /app


RUN addgroup --system nextjs && adduser --system --ingroup nextjs nextjs

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Enable pnpm via Corepack as root (needs /usr/local/bin write)
RUN corepack enable && corepack prepare pnpm@10 --activate

# Copy only the necessary runtime files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

RUN chown -R nextjs:nextjs /app

USER nextjs

EXPOSE 3000
CMD ["pnpm", "start"]
