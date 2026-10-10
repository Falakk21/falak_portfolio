<<<<<<< HEAD
# Falak Baharwani — Personal Portfolio Website (Multi-Page Architecture)

A bespoke, responsive personal portfolio website engineered for **Falak Baharwani**, Computer Science and Engineering student at Chandigarh University specializing in Generative AI.

Built with **React Router**, **React 19**, and **Vite 8**, featuring an editorial multi-page architecture combining **Deep Burgundy**, **Warm Cream**, and **Elegant Gold**, refined typography, real profile and certification assets, and a standalone **Number Systems Playground** application.

---

## 🧭 Multi-Page Route Structure

The website is structured into dedicated pages with active navigation highlighting, automatic scroll restoration, editorial breadcrumb banners, and previous/next section links:

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Curated editorial gateway with personal brand hero, featured highlights, and section portals. |
| `/about` | **About Me** | Complete student bio, studio portrait in an offset gold frame, and 6 personal interests in exact order. |
| `/education` | **Education** | Academic timeline detailing B.E. (Hons.) CSE (Generative AI) at Chandigarh University and secondary schooling. |
| `/skills` | **Technical Skills** | Categorized competencies in Programming, Web Dev, AI/ML, Cloud/Systems, Databases, and Tools. |
| `/projects` | **Featured Projects** | Flagship Instruction Set Simulator (with interactive COA format visualizer), Phishing Link Detector, and C Shop Billing System. |
| `/certifications` | **Certifications & Honors** | Microsoft Azure Fundamentals (AZ-900 with original certificate viewer), AI-900, UCMAS 7th Rank in India, and Bharti Airtel Scholarship. |
| `/internship` | **Social Internship** | Shresth Navnirman Foundation two-phase engagement (Village Panchayat & NGO community programs). |
| `/resume` | **Curriculum Vitae** | Official PDF embedded document viewer, instant download button, and external tab fallback. |
| `/contact` | **Get In Touch** | Direct channels (Email, Phone, WhatsApp, LinkedIn, GitHub, Location) and validated message form with anti-bot honeypot. |
| `/playground` | **Number Systems Playground** | COA laboratory tool supporting all 12 bi-directional conversions between Binary, Octal, Decimal, and Hex with BigInt precision, mathematical steps, and local storage history. |

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 8
- **Routing:** React Router v7 (`BrowserRouter` with SPA rewrites in `vercel.json`)
- **Language:** JavaScript (ES6+), HTML5, CSS3
- **Icons:** Custom SVG vector icons + Lucide React
- **Design System:** Custom CSS variables, responsive typography (`Playfair Display`, `Cormorant Garamond`, `Plus Jakarta Sans`, `JetBrains Mono`)
- **Deployment Platform:** Vercel (Free tier, zero configuration with `vercel.json` SPA rewrites)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (version 18+ or 20+)
- npm (version 9+)

### Installation & Run

```bash
# Clone or navigate to the repository
cd falak_portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build & Preview

```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploying to Vercel (Free Tier)

This application is configured for deployment on Vercel with single-page routing support ([vercel.json](file:///c:/Users/bahar/Downloads/falak_portfolio/vercel.json)).

### Option 1: Deploy with Vercel Web Dashboard (Recommended)

1. Push this project to GitHub (`https://github.com/Falakk21/falak_portfolio`).
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New..."** &rarr; **"Project"**.
4. Import your GitHub repository.
5. In Project Settings:
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. (Optional) Under **Environment Variables**, add:
   - `VITE_FORMSPREE_ENDPOINT`: `https://formspree.io/f/your_form_id`
7. Click **Deploy**.

---

## 📁 Project Directory Layout

```
falak_portfolio/
├── public/
│   ├── assets/
│   │   ├── falak_profile.png          # Portrait of Falak Baharwani
│   │   ├── Falak_Baharwani_Resume.pdf  # Verified vector PDF resume
│   │   └── Azure_Fundamentals.pdf     # Official Microsoft AZ-900 certificate
│   ├── favicon.svg                    # Custom burgundy & gold monogram favicon
│   ├── robots.txt                     # Crawler indexing rules
│   └── sitemap.xml                    # Complete multi-page sitemap
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Sticky burgundy multi-page navbar with mobile drawer
│   │   ├── Hero.jsx                   # Typography-led hero with CTAs
│   │   ├── PageHeader.jsx             # Reusable editorial breadcrumb & header banner
│   │   ├── PageNavFooter.jsx          # Smooth previous/next page navigation links
│   │   ├── ScrollToTop.jsx            # Automatic scroll restoration on route change
│   │   ├── About.jsx                  # Portrait frame & ordered interests
│   │   ├── Education.jsx              # Timeline layout of academic background
│   │   ├── Skills.jsx                 # Categorized technical competencies
│   │   ├── Projects.jsx               # COA simulator prominence & verified projects
│   │   ├── Certifications.jsx         # Microsoft AZ-900, AI-900 & national honors
│   │   ├── Internship.jsx             # Shresth Navnirman Foundation social internship
│   │   ├── ResumeSection.jsx          # Embedded PDF viewer with download action
│   │   ├── Contact.jsx                # Validated form with anti-bot honeypot
│   │   ├── Footer.jsx                 # Copyright, quote, and social links
│   │   ├── LoadingScreen.jsx          # Initial visit burgundy-gold entrance animation
│   │   └── Icons.jsx                  # Crisp SVG icons for GitHub & LinkedIn
│   ├── pages/
│   │   ├── HomePage.jsx               # / (Editorial gateway & featured highlights)
│   │   ├── AboutPage.jsx              # /about
│   │   ├── EducationPage.jsx          # /education
│   │   ├── SkillsPage.jsx             # /skills
│   │   ├── ProjectsPage.jsx           # /projects
│   │   ├── CertificationsPage.jsx     # /certifications
│   │   ├── InternshipPage.jsx         # /internship
│   │   ├── ResumePage.jsx             # /resume
│   │   ├── ContactPage.jsx            # /contact
│   │   └── PlaygroundPage.jsx         # /playground (Number Systems Converter)
│   ├── config/
│   │   └── contact.js                 # Contact details & Formspree configuration
│   ├── utils/
│   │   └── numberSystems.js           # BigInt & fractional conversion engine + COA steps
│   ├── App.jsx                        # React Router configuration
│   ├── index.css                      # Design tokens, typography & responsive styling
│   └── main.jsx                       # React DOM entry point
├── vercel.json                        # Vercel SPA route rewrite rules
├── package.json
└── vite.config.js
```

---

## 📄 License & Attribution

&copy; 2026 Falak Baharwani. All rights reserved.  
*"Curious mind. Always learning."*
=======
# falak_portfolio
A personal portfolio website showcasing my skills, projects, education, certifications, and achievements, featuring a premium burgundy, cream, and gold design, interactive Number Systems Playground, and downloadable resume. Built with React, Vite, JavaScript, and CSS.
>>>>>>> 5dca3d33fd6481170a6ea85ffce0836667837535
