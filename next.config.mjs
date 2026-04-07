/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          // Prevent MIME-type sniffing attacks
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // Prevent clickjacking — blocks site from being embedded in iframes
          { key: 'X-Frame-Options', value: 'DENY' },

          // Only send the origin as referrer when navigating cross-origin
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

          // Restrict access to browser features this site does not need
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },

          // Force HTTPS for 1 year (only effective on HTTPS — ignored on localhost)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },

          // Content Security Policy
          // next/font self-hosts Google Fonts, so no external font CDN needed.
          // 'unsafe-inline' for scripts/styles is required by Next.js App Router
          // (hydration scripts and Tailwind utility classes).
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // 'unsafe-eval' is only needed in dev for webpack HMR source maps.
              // Production builds do not use eval — it is excluded to reduce attack surface.
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "img-src 'self' data: blob:",
              "connect-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
