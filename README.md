# 🚀 Swaraj Chikhale — 3D Portfolio

An immersive, interactive 3D portfolio website built with **Next.js**, **Three.js** (React Three Fiber), **Tailwind CSS**, and **Framer Motion**.

![Portfolio Preview](https://img.shields.io/badge/3D-Portfolio-cyan?style=flat-square&logo=three.js)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan?style=flat-square&logo=tailwind-css)

---

## ✨ Features

- **3D Hero Scene** — 1500 floating particles with real-time mouse interaction, rotating icosahedron, and orbital rings
- **Holographic ID Card** — 3D tilt card that follows your mouse movement
- **3D Skills Galaxy** — Interactive skill cards with perspective tilt and animated progress bars
- **Project Showcases** — Glassmorphic project cards with 3D hover effects for Identix & Fitness Station
- **Journey Timeline** — Scroll-triggered alternating timeline for work & education
- **Terminal Contact** — Command-line aesthetic contact section with animated satellite dish
- **Custom Cursor** — Glowing dot cursor with trailing ring
- **Loading Screen** — Animated blockchain cube preloader
- **Scroll Progress Bar** — Gradient progress indicator at top
- **Fully Responsive** — Optimized for desktop, tablet, and mobile

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with static export |
| React 18 + TypeScript | UI components |
| Three.js (React Three Fiber) | 3D hero scene & particles |
| Framer Motion | Scroll animations & transitions |
| Tailwind CSS | Styling, glassmorphism, gradients |
| Lucide React | Icons |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ 
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/swaraj-portfolio.git
cd swaraj-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
The static output will be in the `dist/` folder.

---

## 🌐 Deploy to GitHub Pages (Automatic)

This repository includes a **GitHub Actions workflow** that automatically deploys to GitHub Pages on every push to `main`.

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Name it exactly `swaraj-portfolio`
3. Make it **Public**
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

### Step 2: Push Your Code
```bash
cd swaraj-portfolio
git init
git add .
git commit -m "Initial commit: 3D portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/swaraj-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under **Build and deployment**, select **GitHub Actions**
3. The workflow will automatically run and deploy

### Step 4: Access Your Live Site
After the workflow completes (usually 2–3 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/swaraj-portfolio/
```

> 💡 **Tip:** Every time you push to `main`, the site automatically rebuilds and deploys!

---

## 📁 Project Structure

```
swaraj-portfolio/
├── app/
│   ├── sections/          # Page sections (Hero, About, Skills, Projects, Experience, Contact)
│   ├── components/        # Shared components (Navbar, CustomCursor, LoadingScreen)
│   ├── page.tsx           # Main page assembly
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles, animations, glassmorphism
├── .github/workflows/     # GitHub Actions CI/CD
├── dist/                 # Static build output (auto-generated)
├── next.config.js        # Next.js config with basePath for GitHub Pages
├── tailwind.config.ts    # Tailwind custom theme
└── package.json
```

---

## 🎨 Customization

### Change your name / details
Edit the files in `app/sections/`:
- `Hero.tsx` — Name, tagline
- `About.tsx` — Bio, floating icons
- `Skills.tsx` — Skills list & levels
- `Projects.tsx` — Project details
- `Experience.tsx` — Work history, education, certifications
- `Contact.tsx` — Email, phone, LinkedIn

### Change color scheme
Edit `tailwind.config.ts`:
```ts
colors: {
  cyan: "#00f0ff",     // Change accent color
  purple: "#a855f7",   // Change secondary accent
}
```

### Change GitHub Pages basePath
If you use a different repo name, update `next.config.js`:
```js
basePath: "/your-repo-name",
assetPrefix: "/your-repo-name",
```

---

## 📄 License

This project is open source and available for personal use.

---

<p align="center">
  Built with 💙 by <strong>Swaraj Chikhale</strong>
</p>
