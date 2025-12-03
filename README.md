# 📅 FlexiSchedule

## Software Engineering Project

This is a Next.js project inspired by Greenhouse Pre-K, built with **Tailwind CSS**.

---

## 🚀 Setup

Follow these steps to get the project running locally.

### 1. Install Dependencies

Run the following command in your terminal to install the project's dependencies listed in `package.json`:

```bash
npm install
```

If you prefer installing only the core packages manually, you can run:

```bash
npm install next react react-dom tailwindcss postcss autoprefixer
```

### 2. Tailwind CSS (already configured)

This repository already includes a `tailwind.config.js` and the Tailwind directives in `styles/globals.css`.

- If you don't have a Tailwind config yet, initialize it with:

```bash
npx tailwindcss init -p
```

- Ensure `styles/globals.css` contains the Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

The existing `tailwind.config.js` scans `pages/` and `components/` by default.

### 3. Local development

Start the Next.js development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the app.

### 4. Build and production

Build the production bundle and run it locally:

```bash
npm run build
npm run start
```

### 5. Useful notes

- Scripts: `package.json` already includes `dev`, `build`, and `start` scripts.
- Fonts: the project uses the `Poppins` font in `styles/globals.css`; add a Google Fonts link in your app head if you want the remote font to load.
- Troubleshooting: if `next` is not found after `npm install`, try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

---

If you'd like, I can also add a short `Contributing` section, example env variables, or update `package.json` with additional helper scripts (lint, format). Let me know which you'd prefer.