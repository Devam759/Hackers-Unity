# Contributing to Hacker's Unity

Thank you for your interest in contributing to Hacker's Unity! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We're building a welcoming community for developers of all skill levels.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/hackers-unity.git`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test locally: `npm run dev`
7. Commit your changes: `git commit -m "Add your feature"`
8. Push to your fork: `git push origin feature/your-feature-name`
9. Open a Pull Request

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing code structure and naming conventions
- Use functional components with hooks
- Keep components small and focused
- Use Tailwind CSS utility classes for styling

### Component Guidelines

- Place reusable components in the `components/` directory
- Use proper TypeScript types and interfaces
- Add proper accessibility attributes (ARIA labels, semantic HTML)
- Ensure components are responsive and mobile-friendly
- Add JSDoc comments for complex components

### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add new event card component
fix: Resolve mobile menu overflow issue
docs: Update README with deployment steps
style: Format code with Prettier
refactor: Simplify navigation logic
```

## Testing

Before submitting a PR:

1. Run the linter: `npm run lint`
2. Build the project: `npm run build`
3. Test the production build: `npm run start`
4. Test on multiple screen sizes
5. Check accessibility with browser tools

## Pull Request Process

1. Update documentation if needed
2. Add a clear description of changes
3. Reference any related issues
4. Request review from maintainers
5. Address review feedback promptly

## Questions?

Join our Discord: https://discord.gg/hackersunity
Email: hello@hackersunity.dev

Thank you for contributing! 🎉

