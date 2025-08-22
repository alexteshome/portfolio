# Portfolio

A modern, responsive portfolio website built with Next.js and TypeScript.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript 5
- **Responsive Design**: Mobile-first approach with SCSS styling
- **Performance Optimized**: Built-in image optimization, code splitting
- **SEO Ready**: Structured metadata and Open Graph tags
- **Security Headers**: Built-in security configurations
- **Accessibility**: Semantic HTML and ARIA compliance
- **Animation Effects**: Smooth scroll and reveal animations
- **Contact Form**: Integrated SendGrid email functionality

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14.2
- **Language**: TypeScript 5.7
- **Styling**: SCSS/Sass
- **UI Components**: Material-UI 5
- **Icons**: React Icons 5
- **Animations**: React Awesome Reveal

### Development
- **Linting**: ESLint 8 with TypeScript support
- **Formatting**: Prettier 3
- **Package Manager**: npm
- **Build Tool**: Next.js built-in SWC compiler

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/alexteshome/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Add your SendGrid API key
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🔧 Configuration

### Next.js
The project includes a modern `next.config.js` with:
- React Strict Mode enabled
- SWC minification
- Image optimization settings
- Security headers
- Production console removal

### TypeScript
Modern TypeScript configuration with:
- Latest ECMAScript target (ES2022)
- Bundler module resolution
- Strict type checking
- Path aliases for clean imports

## 🚀 Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

The `vercel.json` file includes optimized settings for production deployment.

## 📄 License

This project is licensed under the ISC License.
