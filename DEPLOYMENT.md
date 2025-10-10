# Deployment Guide

This Next.js application can be deployed to various platforms. Here are the most common options:

## Vercel (Recommended for Next.js)

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - `TURNSTILE_SECRET_KEY`
5. Deploy!

Vercel will automatically detect Next.js and configure everything.

## Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

## Docker

A Dockerfile can be created if needed. The application is already configured with standard Next.js structure.

## Environment Variables

Make sure to set these in your deployment platform:

```env
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key_here
TURNSTILE_SECRET_KEY=your_secret_key_here
```

### Getting API Keys

**Resend:**
1. Sign up at https://resend.com
2. Navigate to API Keys section
3. Create a new API key
4. (Optional) Add and verify your domain for custom "from" addresses

**Cloudflare Turnstile:**
1. Log in to Cloudflare Dashboard
2. Go to Turnstile section
3. Create a new site
4. Copy both the Site Key and Secret Key

## Custom Domain

After deployment, you can add a custom domain through your hosting platform's dashboard.

## Email Configuration

By default, the contact form uses `onboarding@resend.dev` as the sender address. This works for testing but for production:

1. Verify your domain in Resend
2. Update the `from` field in `app/api/contact/route.ts`:
   ```typescript
   from: "Contact Form <contact@yourdomain.com>"
   ```

## Monitoring

- Check the deployment logs for any errors
- Test the contact form after deployment
- Verify that emails are being received
- Ensure Turnstile widget loads correctly

## Troubleshooting

**Contact form not sending emails:**
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for error logs
- Ensure the "to" email address is valid

**Turnstile not loading:**
- Verify both Turnstile keys are set
- Check browser console for errors
- Ensure the site is accessed via HTTPS in production

**Build fails:**
- Check that all environment variables are set (even if empty)
- Review build logs for specific error messages
