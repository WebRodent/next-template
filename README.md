# Template repository for Next.js app development
**Author:** Webrodent AS
**Features:**
- Codespace Compatible Dev Container
- Next.js 14
- TypeScript
- Tailwind CSS
- Bootstrapped app with `create-next-app`
- Github Pages Deployment

## Before you begin
Before you begin, make a choice of the following:
- **Keep the app as is:** You want to make your app from the nextjs template as it is.
- **Remove the app:** You want to remove the app and start from scratch or from another nextjs template.

# If you want to remove the app
Start the development environment with devcontainer or codespace.

Then remove everything except .devcontainer, .gitignore, README.md
using the following command:
```bash
rm -rf src/ public/ .eslintrc.js next.config.js tsconfig.json package.json package-lock.json postcss.config.js tailwind.config.js tsconfig.json
```
Then you have a clean slate to start from scratch or from another nextjs template.


# If you want to keep the app as is
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
