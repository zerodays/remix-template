# Remix Template

This repository provides a ready-to-use template for creating a Remix application with modern tooling, including TailwindCSS, Shadcn, environment variable validation with T3-oss, Zodios API client, i18next for localization, and more.

## 🚀 Quick Start

To create a new Remix project from this template, run the following command:

```bash
npx create-remix@latest --template git@github.com:zerodays/remix-template.git
```

This will set up a new Remix app with all the configurations and dependencies outlined below.

### Running the App

After setting up your project, navigate to the project folder and run the following command to install the dependencies:

```bash
pnpm install
```

To start the development server:

```bash
pnpm dev
```

This will run the app locally. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 🛠️ What's Included

This template comes with the following features:

- **Remix**: Uses Remix v1 routing with file-based routing.
- **TailwindCSS**: A utility-first CSS framework for creating responsive, modern designs.
- **Shadcn**: A component library providing pre-designed and customizable components.
- **T3-Oss Env Validation**: T3-oss environment variable validation for managing your app's environment variables securely.
- **Zodios**: An API client based on Zod to create and validate API requests seamlessly.
- **i18next**: Localization framework for adding multi-language support to your app.
- **Infisical**: Secure secret management for your app, storing API keys, DB credentials, and other sensitive information.
- **Prettier**: Code formatting for consistent style across your project.
- **ESLint**: Static analysis tool for identifying problematic patterns in JavaScript/TypeScript code.
- **VSCode Settings**: Pre-configured VSCode settings for consistent development experience.

## 📁 Special Folder and Filename Conventions

In this project, files and folders with a double underscore (`__`) in their filename or folder name are treated as special. Specifically:

- A file named `__guarded.tsx` in the `__guarded` folder is used as the layout for all routes within that folder. This is a key feature of the routing convention used in this template. This approach helps in grouping routes that share common layouts or behavior.

Example:

- `__guarded/__guarded.tsx` will act as a layout for every page inside the `__guarded` folder.

## 🗂️ Folder Structure Example

```
src/
├── routes/
│   ├── __guarded/
│   │      ├── index.tsx
│   │      └── about.tsx
│   └── __guarded.tsx
├── tailwind.css
└── ...
```

In this case, the `__guarded.tsx` layout will be applied to `index.tsx`, `about.tsx`, or any other route placed inside the `__guarded` folder.

## ⚙️ Additional Setup

- **VSCode Settings**: Make sure to install the recommended VSCode extensions to ensure proper formatting and linting.
- **Infisical**:

  Infisical is used to securely manage your environment variables, including API keys, database credentials, and other sensitive information. To initialize Infisical:

  1. **Create an Infisical Account**:
     - Go to [Infisical](https://app.infisical.com) and sign up for an account.
  2. **Create Infisical Project**:
     - You can go to [Infisical Dashboard](https://app.infisical.com) and create a new project. There you can add your environment variables, API keys, and other sensitive information.
  3. **Login to Infisical**:

     - Run the following command to log in to your Infisical account:
       ```bash
       infisical login
       ```

  4. **Initialize Your Project**:
     - Once logged in, link your project to Infisical by running:
       ```bash
       infisical init
       ```

  By following these steps, you can manage your sensitive environment variables securely in Infisical.
