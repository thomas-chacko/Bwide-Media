# Portfolio Website Architecture

## Project Overview
A portfolio/landing page website for a digital marketer and designer to showcase work, with admin capabilities for content management.

## Tech Stack

### Frontend & Backend
- **Next.js** (App Router) - Full-stack React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

### Database
- **MongoDB** - Document database via Docker container
- **Mongoose** - ODM for MongoDB

### Media Storage
- **Cloudinary** - Cloud-based media management and CDN

### Authentication
- **Session-based auth** - Simple ENV credential check (single admin)

### Container
- **Docker** - MongoDB containerization (industry standard approach)

---

## Why Docker for MongoDB?

**Yes, using Docker is the industry standard approach. Benefits:**

✅ No local MongoDB installation needed
✅ Consistent environment across team members
✅ Easy to start/stop/reset database
✅ Production-like setup in development
✅ Version control for database configuration
✅ Easy migration to cloud services later

**Industry Standard Pattern:**
- Development: Docker container
- Production: Managed service (MongoDB Atlas, AWS DocumentDB, etc.)

---

## Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT SIDE                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Public Pages (SSR/SSG)                              │  │
│  │  - Home/Landing                                       │  │
│  │  - Portfolio Gallery                                  │  │
│  │  - Project Details                                    │  │
│  │  - About                                              │  │
│  │  - Contact                                            │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Admin Dashboard (Protected)                          │  │
│  │  - Login                                              │  │
│  │  - Content Management                                 │  │
│  │  - Media Upload                                       │  │
│  │  - Project CRUD                                       │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS API ROUTES                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /api/auth/login      - Admin login (ENV check)      │  │
│  │  /api/auth/logout     - Clear session                │  │
│  │  /api/projects/*      - CRUD operations              │  │
│  │  /api/media/*         - Cloudinary integration       │  │
│  │  /api/admin/*         - Admin operations             │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↕
┌─────────────────────────────────────────────────────────────┐
│                    DATA LAYER                               │
│  ┌────────────────────┐        ┌─────────────────────────┐ │
│  │  MongoDB (Docker)  │        │  Cloudinary API         │ │
│  │  - Projects        │        │  - Image uploads        │ │
│  │  - Settings        │        │  - Video uploads        │ │
│  │                    │        │  - Transformations      │ │
│  │                    │        │  - CDN delivery         │ │
│  └────────────────────┘        └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
portfolio-website/
├── .env.local                      # Environment variables
├── .env.example                    # Example env file
├── .gitignore
├── docker-compose.yml              # MongoDB container setup
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   │
│   │   ├── (public)/               # Public routes group
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx        # Projects gallery
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx    # Project detail
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── contact/
│   │   │       └── page.tsx
│   │   │
│   │   ├── admin/                  # Admin routes (protected)
│   │   │   ├── layout.tsx          # Admin layout with auth check
│   │   │   ├── page.tsx            # Admin dashboard
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx        # Projects management
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx    # Create project
│   │   │   │   └── [id]/
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx # Edit project
│   │   │   ├── media/
│   │   │   │   └── page.tsx        # Media library
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx            # Admin login
│   │   │
│   │   └── api/                    # API routes
│   │       ├── auth/
│   │       │   ├── login/
│   │       │   │   └── route.ts    # Login endpoint
│   │       │   └── logout/
│   │       │       └── route.ts    # Logout endpoint
│   │       ├── projects/
│   │       │   ├── route.ts        # GET all, POST create
│   │       │   └── [id]/
│   │       │       └── route.ts    # GET, PUT, DELETE by ID
│   │       ├── media/
│   │       │   ├── upload/
│   │       │   │   └── route.ts    # Upload to Cloudinary
│   │       │   └── delete/
│   │       │       └── route.ts    # Delete from Cloudinary
│   │       └── admin/
│   │           └── stats/
│   │               └── route.ts    # Dashboard statistics
│   │
│   ├── components/                 # React components
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Spinner.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── public/                 # Public-facing components
│   │   │   ├── Hero.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── AboutSection.tsx
│   │   └── admin/                  # Admin components
│   │       ├── ProjectForm.tsx
│   │       ├── MediaUploader.tsx
│   │       ├── ImageGallery.tsx
│   │       ├── RichTextEditor.tsx
│   │       └── StatsCard.tsx
│   │
│   ├── lib/                        # Utilities and configurations
│   │   ├── db.ts                   # MongoDB connection
│   │   ├── cloudinary.ts           # Cloudinary configuration
│   │   ├── auth.ts                 # NextAuth configuration
│   │   ├── validators.ts           # Input validation schemas
│   │   └── utils.ts                # Helper functions
│   │
│   ├── models/                     # Mongoose models
│   │   ├── User.ts                 # Admin user model
│   │   ├── Project.ts              # Project model
│   │   └── Settings.ts             # Site settings model
│   │
│   ├── types/                      # TypeScript types
│   │   ├── index.ts                # Common types
│   │   ├── project.ts
│   │   └── media.ts
│   │
│   └── middleware.ts               # Next.js middleware for auth
│
└── public/                         # Static assets
    ├── images/
    ├── icons/
    └── favicon.ico
```

---

## Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  email: String,           // Admin email
  password: String,        // Hashed password
  name: String,            // Admin name
  role: String,            // "admin"
  createdAt: Date,
  updatedAt: Date
}
```

### Projects Collection
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String,            // URL-friendly version
  description: String,
  category: String,        // "design", "marketing", "branding", etc.
  tags: [String],
  thumbnail: {
    url: String,           // Cloudinary URL
    publicId: String,      // Cloudinary public ID
    width: Number,
    height: Number
  },
  media: [{
    type: String,          // "image" or "video"
    url: String,           // Cloudinary URL
    publicId: String,      // Cloudinary public ID
    caption: String,
    order: Number
  }],
  clientName: String,      // Optional
  projectDate: Date,
  projectUrl: String,      // Optional external link
  featured: Boolean,       // Featured on homepage
  published: Boolean,      // Published status
  viewCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Settings Collection
```javascript
{
  _id: ObjectId,
  siteTitle: String,
  siteDescription: String,
  heroTitle: String,
  heroSubtitle: String,
  aboutText: String,
  contactEmail: String,
  socialLinks: {
    instagram: String,
    twitter: String,
    linkedin: String,
    behance: String,
    dribbble: String
  },
  updatedAt: Date
}
```

---

## Environment Variables

### `.env.local`
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/portfolio

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-generate-this

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Admin (for initial setup)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change-this-password
```

---

## Docker Setup

### `docker-compose.yml`
```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:7.0
    container_name: portfolio-mongodb
    restart: always
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_DATABASE: portfolio
    volumes:
      - mongodb_data:/data/db
      - mongodb_config:/data/configdb
    networks:
      - portfolio-network

volumes:
  mongodb_data:
    driver: local
  mongodb_config:
    driver: local

networks:
  portfolio-network:
    driver: bridge
```

### Docker Commands
```bash
# Start MongoDB
docker-compose up -d

# Stop MongoDB
docker-compose down

# View logs
docker-compose logs -f mongodb

# Reset database (development only)
docker-compose down -v
```

---

## Cloudinary Integration

### Media Upload Flow
```
1. User selects file in admin panel
2. Frontend uploads to Next.js API route (/api/media/upload)
3. API route uploads to Cloudinary
4. Cloudinary returns URL and public ID
5. Save metadata to MongoDB
6. Display media using Cloudinary URLs with transformations
```

### Cloudinary Features to Use
- **Automatic optimization** - WebP, AVIF conversion
- **Responsive images** - Different sizes for different devices
- **Lazy loading** - Better performance
- **Transformations** - Crop, resize, filters on-the-fly
- **Video streaming** - Adaptive bitrate streaming

### Example Transformations
```javascript
// Thumbnail
cloudinary.url('image-id', {
  width: 400,
  height: 300,
  crop: 'fill',
  quality: 'auto',
  fetch_format: 'auto'
})

// Full size optimized
cloudinary.url('image-id', {
  quality: 'auto',
  fetch_format: 'auto'
})
```

---

## Authentication Flow

```
1. Admin navigates to /login
2. Enters credentials
3. NextAuth validates against MongoDB
4. Creates session with JWT
5. Middleware protects /admin routes
6. Session persists across requests
7. Logout clears session
```

### Protected Routes
- All `/admin/*` routes require authentication
- Middleware checks session before rendering
- Unauthorized users redirected to `/login`

---

## Development Workflow

### Initial Setup
```bash
# 1. Create Next.js app
npx create-next-app@latest portfolio-website --typescript --tailwind --app

# 2. Install dependencies
npm install mongoose next-auth bcryptjs cloudinary zod

# 3. Install dev dependencies
npm install -D @types/bcryptjs

# 4. Start MongoDB
docker-compose up -d

# 5. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 6. Run development server
npm run dev
```

### Development Flow
```bash
# Terminal 1: MongoDB
docker-compose up

# Terminal 2: Next.js dev server
npm run dev

# Access:
# - Public site: http://localhost:3000
# - Admin panel: http://localhost:3000/admin
# - API: http://localhost:3000/api
```

---

## Deployment Strategy

### Option 1: Vercel + MongoDB Atlas (Recommended)
```
Frontend: Vercel (automatic Next.js deployment)
Database: MongoDB Atlas (free tier available)
Media: Cloudinary (free tier available)
```

### Option 2: VPS (DigitalOcean, AWS, etc.)
```
Everything on one server with Docker Compose
MongoDB + Next.js in containers
Nginx as reverse proxy
```

### Environment Variables in Production
- Use platform's secret management
- Never commit `.env.local` to git
- Rotate credentials regularly
- Use strong NEXTAUTH_SECRET

---

## Performance Optimizations

### Next.js
- ✅ Static generation (SSG) for public pages
- ✅ Incremental Static Regeneration (ISR) for projects
- ✅ Image optimization with next/image
- ✅ Dynamic imports for heavy components
- ✅ Route prefetching

### MongoDB
- ✅ Index on slug, category, featured fields
- ✅ Lean queries for read operations
- ✅ Connection pooling

### Cloudinary
- ✅ Automatic format selection
- ✅ Lazy loading
- ✅ Responsive images
- ✅ CDN delivery

---

## Security Considerations

### Authentication
- ✅ Password hashing with bcrypt
- ✅ Secure session management
- ✅ CSRF protection via NextAuth
- ✅ HTTP-only cookies

### API Routes
- ✅ Input validation with Zod
- ✅ Rate limiting (implement with middleware)
- ✅ Sanitize user inputs
- ✅ Proper error handling without leaking info

### Environment
- ✅ Never expose API secrets to client
- ✅ Use NEXT_PUBLIC_ prefix only for public vars
- ✅ Validate environment variables on startup

---

## Testing Strategy

### Unit Tests
- Components (Jest + React Testing Library)
- Utility functions
- API route handlers

### Integration Tests
- API endpoints
- Database operations
- Authentication flow

### E2E Tests (Optional)
- Playwright or Cypress
- Critical user journeys
- Admin workflows

---

## Future Enhancements

### Phase 1 (MVP)
- ✅ Core functionality above

### Phase 2
- Analytics dashboard
- Contact form with email notifications
- Blog/Articles section
- SEO optimizations
- Sitemap generation

### Phase 3
- Multi-language support
- Advanced filtering/search
- Client testimonials
- Newsletter integration
- Progressive Web App (PWA)

---

## Package Dependencies

### Core
```json
{
  "next": "^14.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "typescript": "^5.x"
}
```

### Database & Auth
```json
{
  "mongoose": "^8.x",
  "next-auth": "^4.x",
  "bcryptjs": "^2.x"
}
```

### Media & Validation
```json
{
  "cloudinary": "^2.x",
  "zod": "^3.x"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^3.x",
  "autoprefixer": "^10.x",
  "postcss": "^8.x"
}
```

---

## Summary

This architecture provides:
- ✅ **Scalable structure** - Easy to add features
- ✅ **Industry standards** - Docker, TypeScript, proper separation
- ✅ **Performance** - SSG, ISR, CDN, optimized images
- ✅ **Security** - Authentication, validation, secure secrets
- ✅ **Developer experience** - Type safety, hot reload, good DX
- ✅ **Cost effective** - Free tiers available for all services
- ✅ **Production ready** - Easy deployment path

**Next Steps:**
1. Review this architecture
2. Create the Next.js project
3. Set up Docker for MongoDB
4. Create Cloudinary account
5. Implement folder structure
6. Build features incrementally
