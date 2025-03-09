# Next.js + TypeScript + Supabase Template

This is a lightweight template for building web applications with Next.js 14, TypeScript, and Supabase.

## Features

- [Next.js 14](https://nextjs.org/) with App Router
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [Supabase](https://supabase.io/) for authentication, database, and storage
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Basic authentication setup
- Responsive design with Tailwind CSS
- Type-safe database access with your custom database types
- ESLint for code linting

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account and project

### Setup

1. Clone this repository:

```bash
git clone https://github.com/yourusername/next-template.git
cd next-template
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file based on `.env.local.example`:

```bash
cp .env.local.example .env.local
```

4. Update the `.env.local` file with your Supabase credentials.

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Configuration

This template is designed to work with your custom database schema package. If you have a private database package, you'll need to:

1. Configure your `.npmrc` file with the appropriate authentication token:

```
@your-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. Install your database package:

```bash
npm install @your-org/your-db-package
```

3. Update the imports in the Supabase client files to use your database types.

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   ├── auth/                 # Authentication pages
│   ├── components/           # React components
│   │   ├── auth/             # Authentication components
│   │   └── ui/               # UI components
│   ├── lib/                  # Utility functions
│   │   ├── supabase/         # Supabase clients
│   │   └── utils/            # Utility functions
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── types/                    # TypeScript type definitions
├── .env.local.example        # Example environment variables
├── next.config.js            # Next.js configuration
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Deployment

This template can be deployed to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## Customization

### Styling

This template uses Tailwind CSS for styling. You can customize the design by:

1. Updating the `tailwind.config.ts` file
2. Modifying the CSS variables in `app/globals.css`

### Database Schema

To use your own database schema:

1. Update the Supabase type definitions in `types/supabase.ts` or replace with your own type imports
2. Modify the database queries throughout the application to match your schema

## License

[MIT](LICENSE)

---

Made with ❤️ by [Your Name or Company]
