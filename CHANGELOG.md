# Changelog

All notable changes to the RIMIAM Landing Page project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-09

### Added
- **Internationalization (i18n) System**
  - Multi-language support for English (default), Italian, and Spanish
  - SEO-friendly localized URLs (`/en/`, `/it/`, `/es/`)
  - Automatic language detection from browser preferences
  - Dynamic language switching with URL updates
  - Middleware for automatic routing and redirects

- **Enhanced Theme System**
  - Fixed language selector display issues in both light and dark modes
  - Improved theme-aware styling using CSS custom properties
  - Better integration between theme and language components

- **New Pages and Features**
  - Gallery page with placeholder content
  - Improved navigation with localized links
  - Enhanced user experience with consistent theming

### Changed
- **Project Structure**
  - Reorganized pages into `[locale]` dynamic routing structure
  - Updated all internal links to support localized routing
  - Refactored LanguageContext to integrate with Next.js router

- **Components**
  - Updated Navbar component with localized link generation
  - Enhanced LanguageSelector with proper theme support
  - Improved RimiamLogo component flexibility

- **Configuration**
  - Updated Next.js configuration for internationalization
  - Enhanced middleware for better routing control
  - Improved .gitignore with additional useful exclusions

### Fixed
- Language selector dropdown now displays correctly in both light and dark themes
- Resolved hardcoded color issues in language selector
- Fixed theme consistency across all components
- Improved responsive design for language selector

### Technical Details
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with CSS Custom Properties
- **Routing**: Dynamic routing with middleware-based language detection
- **State Management**: React Context for theme and language state

## [1.0.0] - 2024-12-XX

### Added
- Initial landing page implementation
- Basic theme system (light/dark mode)
- Responsive design
- Core pages: Home, Design, Mission, FAQ, Updates, How it Works
- Newsletter signup functionality
- Luxury design aesthetic with gold accents

### Features
- Modern Next.js 15 implementation
- Tailwind CSS styling
- Mobile-first responsive design
- Performance optimizations
- SEO-friendly structure

---

## Future Roadmap

### Planned Features
- [ ] Gallery page with actual product images
- [ ] Blog/News section
- [ ] Enhanced animations and micro-interactions
- [ ] A/B testing for conversion optimization
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] Additional language support (French, German)
- [ ] CMS integration for content management

### Technical Improvements
- [ ] TypeScript migration
- [ ] Enhanced testing suite
- [ ] CI/CD pipeline optimization
- [ ] Advanced SEO optimizations
- [ ] Progressive Web App (PWA) features
