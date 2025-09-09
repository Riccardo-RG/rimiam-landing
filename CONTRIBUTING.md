# Contributing to RIMIAM Landing Page

Thank you for your interest in contributing to the RIMIAM Landing Page! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (recommended: Node.js 20+)
- npm, yarn, or pnpm
- Git
- Code editor (VS Code recommended)

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Start development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## 📋 Development Guidelines

### Code Style
- Use **JavaScript ES6+** syntax
- Follow **React functional components** with hooks
- Use **Tailwind CSS** for styling
- Maintain **consistent indentation** (2 spaces)
- Use **meaningful variable and function names**

### Component Structure
```javascript
'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ComponentName({ prop1, prop2 }) {
  const { t } = useLanguage();
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Effect logic
  }, [dependencies]);

  return (
    <div className="component-container">
      {/* Component JSX */}
    </div>
  );
}
```

### Styling Guidelines
- Use **CSS custom properties** for theme-aware styling
- Prefer **Tailwind utility classes** over custom CSS
- Use **semantic color variables**: `var(--text-primary)`, `var(--bg-surface)`
- Ensure **responsive design** with mobile-first approach
- Test in both **light and dark themes**

### Internationalization
- Add new text strings to `src/lib/translations.js`
- Use the `t()` function for all user-facing text
- Test with all supported languages (en, it, es)
- Ensure proper URL routing for localized content

## 🌍 Adding New Languages

1. **Add language code** to supported locales:
   ```javascript
   // src/middleware.js
   const locales = ['en', 'it', 'es', 'fr']; // Add 'fr' for French
   ```

2. **Add translations** to translations file:
   ```javascript
   // src/lib/translations.js
   export const translations = {
     // ... existing translations
     fr: {
       nav: {
         howItWorks: "Comment ça marche",
         // ... other translations
       }
     }
   };
   ```

3. **Update language selector**:
   ```javascript
   // src/contexts/LanguageContext.js
   const languages = [
     // ... existing languages
     { code: 'fr', name: 'Français' }
   ];
   ```

## 🎨 Theme Development

### Adding New Theme Variables
1. Define in CSS custom properties:
   ```css
   /* src/app/globals.css */
   :root {
     --new-color: #value;
   }
   
   [data-theme="light"] {
     --new-color: #light-value;
   }
   ```

2. Use in components:
   ```javascript
   <div className="bg-[var(--new-color)]">
   ```

### Theme Testing Checklist
- [ ] Component displays correctly in light mode
- [ ] Component displays correctly in dark mode
- [ ] Smooth transitions between themes
- [ ] Proper contrast ratios for accessibility
- [ ] Mobile responsiveness maintained

## 📝 Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```
feat(i18n): add French language support

- Add French translations to translations.js
- Update middleware to support 'fr' locale
- Add French option to language selector

fix(theme): resolve language selector display in dark mode

- Replace hardcoded colors with CSS custom properties
- Ensure proper contrast in both themes
- Fix dropdown positioning issues
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Language switching works properly
- [ ] Theme switching works properly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] All links navigate correctly
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Performance is acceptable

### Browser Testing
Test in major browsers:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow coding guidelines
   - Test thoroughly
   - Update documentation if needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat(scope): your descriptive message"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Provide clear description
   - Include screenshots for UI changes
   - Reference any related issues

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested in development
- [ ] Tested in multiple browsers
- [ ] Tested responsive design
- [ ] Tested both themes

## Screenshots
[Include screenshots for UI changes]
```

## 🐛 Bug Reports

When reporting bugs, please include:
- **Browser and version**
- **Operating system**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)

## 💡 Feature Requests

For feature requests, please provide:
- **Clear description** of the feature
- **Use case** and motivation
- **Proposed implementation** (if you have ideas)
- **Mockups or examples** (if applicable)

## 📞 Questions and Support

- Create an issue for bugs or feature requests
- Use discussions for general questions
- Contact the team for urgent matters

## 🙏 Recognition

Contributors will be recognized in:
- Project README
- Release notes
- Special thanks in documentation

Thank you for contributing to RIMIAM! 🚀
