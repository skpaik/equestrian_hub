# Multi-Subdomain Equestrian Platform

A comprehensive Next.js 15 application with App Router featuring a multi-subdomain architecture for equestrian content, marketplace, and horse sales.

## 🏗️ Architecture

### Subdomains
- **www.domain.com** - Main hub with videos, news, live events, academy
- **marketplace.domain.com** - Equipment and tack marketplace
- **horsesales.domain.com** - Horse sales and breeding platform

### Tech Stack
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Lucide React** for icons

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Main homepage
│   ├── videos/page.tsx          # Video library
│   ├── news/page.tsx            # News section
│   ├── live/page.tsx            # Live events
│   ├── events/page.tsx          # Events calendar
│   ├── academy/page.tsx         # Online courses
│   ├── marketplace/page.tsx     # Equipment marketplace
│   └── horsesales/page.tsx      # Horse sales platform
│
├── components/                   # Reusable components
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Site footer
│   ├── sections/                # Page sections
│   │   ├── VideoGrid.tsx        # Video content grid
│   │   ├── NewsSection.tsx      # News articles
│   │   ├── LiveVideoSection.tsx # Live streaming
│   │   ├── EventsGrid.tsx       # Events display
│   │   ├── AcademySection.tsx   # Course listings
│   │   ├── MarketplaceGrid.tsx  # Product listings
│   │   └── HorseSalesGrid.tsx   # Horse listings
│   └── ui/                      # Base UI components (shadcn/ui)
│
├── data/                        # Mock data and types
│   └── mockData.ts             # Sample content
│
├── types/                       # TypeScript definitions
│   └── index.ts                # Global types
│
├── utils/                       # Utility functions
│   └── subdomain.ts            # Subdomain configuration
│
└── lib/                        # Shared utilities
    └── utils.ts                # Helper functions
```

## 🎨 Components

### Layout Components
- **Header**: Responsive navigation with subdomain-specific styling
- **Footer**: Consistent footer across all subdomains

### Content Sections
- **VideoGrid**: Filterable video content with categories and search
- **NewsSection**: Article cards with featured content
- **LiveVideoSection**: Live streaming with upcoming events
- **EventsGrid**: Calendar events with registration tracking
- **AcademySection**: Course listings with instructor profiles
- **MarketplaceGrid**: Product listings with advanced filtering
- **HorseSalesGrid**: Horse listings with breed/age filtering

### Features
- **Responsive Design**: Mobile-first approach
- **Advanced Filtering**: Category, search, price range filters
- **Loading States**: Skeleton components and transitions
- **Accessibility**: WCAG 2.1 AA compliant
- **Type Safety**: Full TypeScript implementation

## 🌐 Subdomain Configuration

Each subdomain has its own configuration in `utils/subdomain.ts`:

```typescript
export const subdomainConfigs: Record<string, SubdomainConfig> = {
  'www': {
    name: 'EquestrianHub',
    primaryColor: 'blue',
    navigation: [...],
    theme: {...}
  },
  'marketplace': {
    name: 'EquiMarket',
    primaryColor: 'green',
    navigation: [...],
    theme: {...}
  },
  'horsesales': {
    name: 'EquiSales',
    primaryColor: 'purple',
    navigation: [...],
    theme: {...}
  }
};
```

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly interface elements
- Optimized navigation for smaller screens
- Fast loading with image optimization

## 🔧 Customization

### Adding New Subdomains
1. Add configuration to `utils/subdomain.ts`
2. Create new page in `app/` directory
3. Configure navigation and theming
4. Add any subdomain-specific components

### Styling
- Uses Tailwind CSS with custom design system
- Consistent color palette across subdomains
- shadcn/ui for base components
- Custom component styling in component files

### Mock Data
All content uses mock data from `data/mockData.ts`:
- Videos, news articles, live events
- Course information and instructors
- Marketplace items and horse listings
- Easy to replace with real API calls

## 🚀 Deployment

### Static Export
The project is configured for static export:
```bash
npm run build
```

### Subdomain Routing
Configure your hosting provider to route subdomains to the same deployment:
- `www.domain.com` → `/`
- `marketplace.domain.com` → `/marketplace`
- `horsesales.domain.com` → `/horsesales`

### Environment Variables
No environment variables required for static UI version.

## 🔮 Future Enhancements

### Backend Integration
- API routes for dynamic content
- User authentication and profiles
- Database integration for content management
- Real-time features for live streaming

### Mobile App
- React Native implementation using shared components
- Cross-platform mobile experience
- Push notifications for live events

### Advanced Features
- Payment processing for marketplace/courses
- Video streaming infrastructure
- Real-time chat for live events
- Advanced search with filters
- User-generated content moderation

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For technical support or questions, contact the development team.