# Vignesh N Salian Portfolio

A premium AI Engineer and Full Stack Developer portfolio showcasing research publications, projects, professional experience, and creative artwork.

## 🚀 Features

- **Cybernetic Dark Theme**: Dark purple and neon-cyan visual design with interactive particle backdrop.
- **Fluid Sidebar Navigation**: Floating desktop sidebar navigation with spring-based active links and a responsive menu drawer on mobile.
- **Interactive Lightbox Art Gallery**: Fullscreen modal/lightbox showcasing original graphite drawings (Tiger and Kitten) with spring scale animations, keyboard arrow navigation, and native download links.
- **Tech Arsenal (Skills)**: Skill classifications equipped with custom, glowing neon cybernetic icons.
- **Curated Projects Showcase**: Clean GitHub repository cards with hover spotlight glows and badge indicators.
- **Experience & Education Timeline**: Reverse-chronological timeline cards highlighting internships, publications, and GPA statistics with view and download fallbacks.
- **Direct Connect Contact Form**: EmailJS integrated with client-side spam protection, locale timestamping, replies mapping, and Sonner toasts.
- **UX Refinements**: Glowing cursor tracker (desktop), viewport reveal stagger animations, and smooth scroll anchors.

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router, React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & custom SVG vectors
- **Email Service**: EmailJS Browser
- **Toast Notifications**: Sonner Toaster

## 💻 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Vignesh-Salian/vignesh-portfolio.git
cd vignesh-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## ⚙️ Local Development
To start the development server locally:
```bash
npm run dev
```
Access the application at [http://localhost:3000](http://localhost:3000).

## 📦 Build Instructions
To verify TypeScript, ESLint rules, and build an optimized production bundle:
```bash
npm run build
```

## ⚡ Deployment Instructions

### Netlify Deployment
1. Connect your GitHub repository to Netlify.
2. Build Settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (automatically detected for Next.js)
3. Environment Variables:
   Add `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` under Site Settings > Environment Variables.
4. Deploy the site.

### Vercel Deployment
1. Import the repository into the Vercel dashboard.
2. Vercel will auto-detect Next.js configuration.
3. Configure the EmailJS environment variables in the Project Settings.
4. Click **Deploy**.


## 📬 Contact Information

- **Email**: salianvignesh05@gmail.com
- **Phone**: +91 9535299491
- **GitHub**: [Vignesh-Salian](https://github.com/Vignesh-Salian)
- **LinkedIn**: [Vignesh N Salian](https://linkedin.com/in/vignesh-n-salian)
