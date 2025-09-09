# RIMIAM Landing Page

> **The luxury smart pendant that transcends distance**

A sophisticated, multilingual landing page for RIMIAM - an innovative smart pendant designed to create intimate connections across any distance through three simple gestures: pulse, light, and shared memory.

## ✨ Features

### 🌍 **Internationalization**
- **Multi-language support**: English (default), Italian, Spanish
- **SEO-friendly URLs**: `/en/`, `/it/`, `/es/`
- **Automatic language detection** from browser preferences
- **Dynamic language switching** with URL updates

### 🎨 **Design & UX**
- **Dual theme support**: Light and Dark modes with smooth transitions
- **Responsive design**: Optimized for mobile, tablet, and desktop
- **Luxury aesthetic**: Gold gradient accents and premium typography
- **Smooth animations**: Micro-interactions and page transitions

### 🚀 **Performance**
- **Next.js 15** with App Router for optimal performance
- **Static generation** for fast loading times
- **Optimized images** and assets
- **Modern CSS** with CSS custom properties for theming

### 📱 **Pages & Sections**
- **Homepage**: Hero, features preview, quick links, development roadmap
- **How it Works**: Detailed product functionality
- **Design**: Product design philosophy and aesthetics
- **Mission**: Company vision and values
- **Gallery**: Visual showcase (coming soon)
- **FAQ**: Frequently asked questions
- **Updates**: Newsletter signup and community updates

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + CSS Custom Properties
- **Language**: JavaScript (ES6+)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Icons**: Custom SVG icons and Heroicons
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: Node.js 20+)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rimiam-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🌐 Internationalization

The site supports three languages with automatic routing:

### URL Structure
- **English (default)**: `/en/`, `/en/design`, `/en/how-it-works`
- **Italian**: `/it/`, `/it/design`, `/it/come-funziona`
- **Spanish**: `/es/`, `/es/diseño`, `/es/como-funciona`

### Language Detection
1. **URL-based**: If user visits `/it/design`, Italian is selected
2. **Browser detection**: Automatic detection from `Accept-Language` header
3. **Default fallback**: English if no preference detected

### Adding New Languages
1. Add language code to `src/middleware.js` locales array
2. Add translations to `src/lib/translations.js`
3. Update language selector in `src/contexts/LanguageContext.js`

## 🎨 Theming

### Theme System
- **CSS Custom Properties** for consistent theming
- **Automatic theme detection** from system preferences
- **Manual theme switching** via theme toggle
- **Persistent theme selection** across sessions

### Color Palette
- **Primary Gold**: `#e6b547` (18kt gold inspired)
- **Secondary**: Elegant grays and neutrals
- **Accent**: Complementary warm tones
- **Semantic**: Success, warning, error states

## 📁 Project Structure

```
rimiam-landing/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Localized pages
│   │   │   ├── page.js        # Homepage
│   │   │   ├── design/        # Design page
│   │   │   ├── how-it-works/  # How it works
│   │   │   ├── mission/       # Mission page
│   │   │   ├── gallery/       # Gallery page
│   │   │   ├── faq/          # FAQ page
│   │   │   ├── updates/       # Updates page
│   │   │   └── thank-you/     # Thank you page
│   │   ├── assets/           # Images and static assets
│   │   ├── globals.css       # Global styles and CSS variables
│   │   └── layout.js         # Root layout
│   ├── components/           # Reusable React components
│   │   ├── Navbar.js         # Navigation component
│   │   ├── LanguageSelector.js # Language switcher
│   │   ├── ThemeToggle.js    # Theme switcher
│   │   └── RimiamLogo.js     # Logo component
│   ├── contexts/             # React contexts
│   │   ├── LanguageContext.js # i18n state management
│   │   └── ThemeContext.js   # Theme state management
│   ├── lib/
│   │   └── translations.js   # Translation strings
│   └── middleware.js         # Next.js middleware for routing
├── public/                   # Static assets
├── .gitignore               # Git ignore rules
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Deploy with zero configuration

### Manual Deployment
```bash
npm run build    # Build the application
npm run start    # Start production server
```

### Environment Variables
No environment variables required for basic functionality.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

For questions about this project, please contact the RIMIAM team.

---

**Built with ❤️ for RIMIAM** - *Engineered for connection*
