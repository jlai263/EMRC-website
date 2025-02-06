# Erin Mills Run Club Website

A modern, visually stunning website for the Erin Mills Run Club built with Next.js, Three.js, and Tailwind CSS.

## Features

- 🌓 Dark theme with glassmorphism effects
- 🎨 Modern and futuristic design
- 🎬 Advanced animations using Framer Motion
- 🌟 Interactive 3D background with Three.js
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Three.js](https://threejs.org/) - 3D graphics library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/EMRC-website.git
cd EMRC-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Homepage
├── components/        # React components
│   ├── hero/         # Hero section components
│   └── navigation/   # Navigation components
├── lib/              # Utility functions
├── styles/           # Global styles
└── types/           # TypeScript types
```

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Three.js Documentation](https://threejs.org/docs/) 