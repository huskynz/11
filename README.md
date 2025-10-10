# HuskyNZ Landing Page

A modern, clean landing page built with Next.js 15, featuring a contact form with Resend email integration and Cloudflare Turnstile for bot protection.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 🌗 Dark mode support
- 📧 Contact form with email notifications via Resend
- 🤖 Bot protection with Cloudflare Turnstile
- ⚡ Built with Next.js 15 and React 19
- 🔒 Form validation with Zod
- 📱 Mobile-friendly interface

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend
- **Security**: Cloudflare Turnstile
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/huskynz/11.git
cd 11
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Then update the following variables:

- `RESEND_API_KEY`: Get your API key from [Resend](https://resend.com/api-keys)
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Get from [Cloudflare Dashboard](https://dash.cloudflare.com/)
- `TURNSTILE_SECRET_KEY`: Get from [Cloudflare Dashboard](https://dash.cloudflare.com/)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Configuration

### Resend Email Setup

1. Sign up at [Resend](https://resend.com)
2. Create an API key
3. Add your verified domain (or use the default onboarding domain for testing)
4. Update the `from` email in `/app/api/contact/route.ts` to match your verified domain

### Cloudflare Turnstile Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to Turnstile section
3. Create a new site
4. Copy the Site Key and Secret Key
5. Add them to your `.env.local` file

## Project Structure

```
11/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts       # Contact form API endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── About.tsx              # About section
│   ├── Contact.tsx            # Contact form component
│   ├── Hero.tsx               # Hero section
│   └── Socials.tsx            # Social media links
├── public/                    # Static files
├── .env.example               # Environment variables template
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## License

MIT

## Author

**Peter Gallwas** - [HuskyNZ](https://github.com/HuskyNZ)

## Acknowledgements

Based on [huskynz/10](https://github.com/huskynz/10) but rebuilt with Next.js for a more modern approach.
