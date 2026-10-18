This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## Production Build Output

```text
▲ Next.js 16.3.8 (Turbopack)

✓ Running next.config.mjs took 224ms

Creating an optimized production build ...

✓ Compiled successfully in 9.4s
✓ Finished TypeScript in 22ms
✓ Collecting page data using 1 worker in 4.0s
✓ Generating static pages using 1 worker (10/10) in 1251ms
✓ Finalizing page optimization in 38ms

Route (app)

┌ ○ /
├ ○ /_not-found
├ ƒ /api/dish
├ ƒ /api/dish/[id]
├ ƒ /api/dish/orders
├ ○ /cart
├ ○ /checkout
├ ƒ /dish/[id]
├ ○ /menu
└ ○ /menu/id


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
