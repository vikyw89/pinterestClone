# Pinterest Clone - A Pinterest-inspired Image Sharing Platform

A full-featured Pinterest clone built with Next.js, Supabase, and TailwindCSS. Share, save, and discover visual content in a beautiful masonry-style grid layout.

![Pinterest Clone Screenshot](https://github.com/vikyw89/pinterestClone/assets/112059651/5732c5ca-4a9d-4e86-9c8a-ab3309f2c9ca)

## Live Demo

- **Alpha:** https://vikyw89.github.io/pinterestClone/
- **Beta:** https://pinterest-clone-lemon.vercel.app/

## Lighthouse Score

![Lighthouse Score](https://github.com/vikyw89/pinterestClone/assets/112059651/49057d9f-3883-4d4f-9034-30f3adf7b7cd)

## Features

### Core Functionality
- **Infinite Scroll Feed** - Masonry-style grid displaying pins with automatic infinite loading
- **User Authentication** - Sign up, sign in, and sign out via Supabase Auth
- **Pin Creation** - Upload and share images with titles, descriptions, and links
- **Pin Details** - View full pin information with comments and creator details
- **Save to Boards** - Save pins to organized boards
- **User Profiles** - View user profiles with their boards and created pins
- **Theme Switching** - Multiple visual themes with dark mode support

### Technical Highlights
- **SWR Data Fetching** - Efficient data fetching with stale-while-revalidate pattern
- **Real-time Subscriptions** - Live auth state updates via Supabase subscriptions
- **Image Optimization** - Cloudinary-powered image storage with WebP conversion and blur placeholders
- **Responsive Design** - Mobile-first approach with TailwindCSS and daisyUI
- **CI/CD Pipeline** - GitHub Actions for automated linting and deployment

## Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend Framework** | [Next.js 13](https://nextjs.org/) (SSG) |
| **UI Library** | [React 18](https://react.dev/) |
| **Styling** | [TailwindCSS](https://tailwindcss.com/) + [daisyUI](https://daisyui.com/) |
| **Backend/Auth** | [Supabase](https://supabase.com/) (BAAS) |
| **Image Storage** | [Cloudinary](https://cloudinary.com/) |
| **Data Fetching** | [SWR](https://swr.vercel.app/) + [swr-sync-state](https://www.npmjs.com/package/swr-sync-state) |
| **Icons** | [MUI Icons](https://mui.com/material-ui/material-icons/) |
| **Image Compression** | [browser-image-compression](https://www.npmjs.com/package/browser-image-compression) |
| **Deployment** | Vercel (frontend) + Firebase (legacy) |

## Database Schema

```
users ──────────< boards ──────────< boards_pins >──────── pins
    │                    │                    │
    │                    │                    │
    └── users_followers ─┘    pins_comments ──┘
                │
                └── boards_comments
```

### Tables
- **users** - User profiles and metadata
- **boards** - User-created pin collections
- **pins** - Image pins with titles, descriptions, and links
- **boards_pins** - Many-to-many relationship between pins and boards
- **pins_comments** - Comments on pins
- **boards_comments** - Comments on boards
- **boards_members** - Board collaboration
- **users_followers** - User follow relationships

## Page Routing

| Route | Description |
|-------|-------------|
| `/` | Home feed with all pins (infinite scroll) |
| `/pin/[pin_uuid]` | Pin detail page with comments |
| `/profile` | User profile page |
| `/profile/[board_uuid]` | Board page with pins |
| `/createPin` | Create new pin page |

## Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Supabase account
- Cloudinary account

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/vikyw89/pinterestClone.git
cd pinterestClone
```

2. **Install dependencies**
```bash
cd client
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_PROJECT_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
```

4. **Initialize Supabase database**
Run the SQL schema in `client/supabase.sql` in your Supabase SQL editor.

5. **Start development server**
```bash
npm run dev
```

6. **Open browser**
Navigate to http://localhost:3000

## Project Structure

```
pinterestClone/
├── client/                    # Next.js frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── boards/       # Board-related components
│   │   │   ├── feed/         # Feed and pin card components
│   │   │   ├── pin/          # Pin detail components
│   │   │   ├── profile/      # Profile components
│   │   │   └── signIn/       # Authentication components
│   │   ├── common/           # Shared components
│   │   │   ├── layout/       # Header, footer, page layout
│   │   │   ├── loading/      # Loading states
│   │   │   └── notif/        # Notifications
│   │   ├── lib/              # Utilities
│   │   │   ├── hooks/        # Custom React hooks
│   │   │   ├── supabase/      # Supabase client
│   │   │   ├── cloudinary/    # Cloudinary utilities
│   │   │   └── store/         # State management
│   │   ├── pages/            # Next.js pages
│   │   └── styles/           # Global styles
│   └── supabase.sql          # Database schema
└── initSupabase.js            # Supabase initialization script
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run export        # Static export

# Code Quality
npm run lint          # Run ESLint
npm run lint:fix      # Fix ESLint issues
```

## Contributing

This project was created as part of [The Odin Project](https://www.theodinproject.com/) curriculum. Contributions welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is available under the MIT License.

## Acknowledgments

- Design inspired by [Pinterest](https://pinterest.com/)
- Built as a learning project for [The Odin Project](https://www.theodinproject.com/)
- Image storage powered by [Cloudinary](https://cloudinary.com/)
- Backend services by [Supabase](https://supabase.com/)
