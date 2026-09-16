# Aditya Raj — Senior Software Engineer Portfolio

A personal portfolio website built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for a Senior Software Engineer specializing in Blockchain, Smart Contracts, and Intelligent AI systems, featuring a sleek dark aesthetic (`#0C0C0C`), Kanit typography, chrome/silver display headlines, purple-magenta-orange accent gradients, sticky project cards, and a CSS-only infinite marquee for testimonials.

---

## 🚀 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (Strict Mode)
- **Bundler / Dev Server**: Vite 5
- **Styling**: Tailwind CSS 3 with custom color tokens & PostCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Keyframe Marquees
- **Data Architecture**: Single JSON file (`src/data/portfolio.json`) accessed via typed `usePortfolio()` hook

---

## 📁 Project Structure

```text
portfolio/
├── index.html                    # Root HTML with Kanit Google Font & SEO metadata
├── vite.config.ts                # Vite React configuration
├── tsconfig.json                 # TypeScript compiler configuration
├── tsconfig.node.json            # TypeScript Node tooling configuration
├── tailwind.config.js            # Tailwind theme tokens (#0C0C0C, gradients, fonts)
├── postcss.config.js             # PostCSS plugins (Tailwind, Autoprefixer)
├── package.json                  # Scripts & dependencies
├── README.md                     # Documentation & setup guide
├── public/
│   ├── avatar.jpg                # 3D Pixar-style portrait
│   └── assets/                   # Project preview screenshots
└── src/
    ├── main.tsx                  # React DOM mount point
    ├── App.tsx                   # Master page layout assembling sections in order
    ├── index.css                 # Global CSS, .hero-heading gradient, marquee keyframes
    ├── types/
    │   └── portfolio.ts          # Type definitions for Profile, Experience, Projects, etc.
    ├── data/
    │   └── portfolio.json        # Centralized source of truth for all content
    ├── hooks/
    │   └── usePortfolio.ts       # Typed hook providing memoized portfolio data
    └── components/
        ├── Navbar.tsx            # Sticky frosted glass navbar with responsive mobile drawer
        ├── SocialLinks.tsx       # Pill icon row (GitHub, LinkedIn, Instagram, Email, Phone)
        ├── HeroSection.tsx       # Viewport hero, chrome-gradient headline, avatar, CTAs
        ├── AboutSection.tsx      # Bio, statistics, skills breakdown & education
        ├── ExperienceSection.tsx # Numbered 01/02/03/04 rows, monospace period pills, highlights
        ├── ServicesSection.tsx   # Numbered engineering capabilities (Backend, AI/LLM, Frontend, Cloud)
        ├── ProjectCard.tsx       # Dark-on-dark card with tag pills, links & fallback placeholder
        ├── ProjectsSection.tsx   # Sticky stacking cards with highlight-first sorting
        ├── TestimonialsSection.tsx # CSS-only infinite marquee with hover pause & reduced motion
        └── Footer.tsx            # 3-column grid (Brand, Navigate, Reach Out + copy email button)
```

---

## 🛠️ Installation & Getting Started

### Prerequisites
- Node.js (v18 or newer recommended, tested on Node v24)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript type checking (`tsc`) followed by Vite's production bundler, producing optimized static output in `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ✏️ How to Edit Content

**No code in components needs to be touched to update content.** All portfolio data is centralized in:

📂 `src/data/portfolio.json`

### 1. Updating Profile & Contact Details
Edit the `"profile"` object:
```json
"profile": {
  "name": "Aditya Raj",
  "shortName": "Aditya",
  "tagline": "Exploring. Building. Learning. Innovating.",
  "role": "Senior Software Engineer",
  "specialization": "Blockchain, Smart Contracts & Intelligent AI Systems",
  "location": "Vellore, India",
  "yearsOfExperience": "3+",
  "bio": "Your updated bio...",
  "avatarSvg": "/avatar.jpg",
  "social": {
    "github": "https://github.com/Adityax2711",
    "linkedin": "https://www.linkedin.com/in/aditya-raj-1a54a02a8/",
    "instagram": "https://www.instagram.com/aditya.rj2711/",
    "email": "araj05036@gmail.com",
    "phone": "+91 9625652583",
    "website": ""
  }
}
```
*Note: Empty or omitted social links are automatically hidden without breaking layout.*

### 2. Adding or Editing Skills
Modify `"skills.categories"` in `portfolio.json`:
```json
{
  "name": "Languages",
  "items": ["Python", "Java", "Solidity", "TypeScript"]
}
```

### 3. Adding or Updating Experience
Add items to the `"experience"` array:
```json
{
  "company": "Company / Organization Name",
  "role": "Your Role",
  "period": "July 2026 – Present",
  "location": "Remote or City",
  "summary": "High-level overview...",
  "highlights": [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3"
  ]
}
```

### 4. Adding or Updating Projects
Add items to the `"projects"` array:
```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "subtitle": "Short subtitle / elevator pitch",
  "description": "Comprehensive project description...",
  "stack": ["Solidity", "Python", "React", "Docker"],
  "role": "Lead Architect",
  "year": "2026",
  "link": "https://live-demo.com",
  "github": "https://github.com/Adityax2711/repo",
  "image": "/assets/project1.jpg",
  "highlight": true
}
```
*If `link` is left blank `""`, the "LIVE PROJECT" button automatically hides. If `image` is omitted or fails to load, a styled dark architectural placeholder is displayed.*

### 5. Updating Testimonials
Edit the `"testimonials"` array (4 peer endorsements included by default):
```json
{
  "id": "test-1",
  "quote": "Peer feedback quote...",
  "name": "Full Name",
  "role": "Title & Organization",
  "avatarColor": "#a855f7"
}
```

---

## 🎨 Design Tokens

- **Background**: `#0C0C0C`
- **Surface / Cards**: `#141414`
- **Borders**: `#242424`
- **Headlines**: Chrome/Silver linear gradient (`.hero-heading`)
- **Accent Gradients**: `linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)`
- **Font**: Kanit (via Google Fonts) & JetBrains Mono (for metadata/tags)
