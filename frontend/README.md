# Session Management Frontend

A modern, responsive frontend application built with React, TypeScript, and TailwindCSS for user authentication and session management.

## 🚀 Features

- **User Registration** - Create new accounts with email validation
- **User Login** - Secure authentication with JWT tokens
- **Protected Dashboard** - Access control for authenticated users
- **Responsive Design** - Mobile-first approach using TailwindCSS
- **Type Safety** - Full TypeScript implementation
- **API Integration** - Clean separation with OpenAPI specification

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Backend server running on `http://127.0.0.1:8000`

## 🏃 Getting Started

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📁 Project Structure

```
frontend/
├── public/
│   └── logo.svg              # Application logo
├── src/
│   ├── components/           # Reusable components
│   │   └── ProtectedRoute.tsx
│   ├── context/              # React context providers
│   │   └── AuthContext.tsx   # Authentication state management
│   ├── pages/                # Page components
│   │   ├── Login.tsx         # Login page
│   │   ├── Register.tsx      # Registration page
│   │   └── Dashboard.tsx     # Protected dashboard
│   ├── services/             # API services
│   │   └── api.ts            # API client & endpoints
│   ├── types/                # TypeScript types
│   │   └── index.ts          # Type definitions
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles & Tailwind
├── index.html                # HTML template
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies & scripts
```

## 🎨 Design System

### Colors

The application uses a custom color palette based on the Tuhura Tech branding:

- **Primary Blue**: `#00A8E8`
- **Dark Blue**: `#003554`
- **Light Blue**: `#5BC0DE`
- **Gray**: `#6C757D`

### Components

Custom TailwindCSS utility classes are available:

- `btn-primary` - Primary action buttons
- `btn-secondary` - Secondary action buttons
- `input-field` - Form input fields
- `card` - Content cards
- `error-message` - Error text
- `success-message` - Success text

## 🔐 Authentication Flow

1. **Registration**
   - User fills out registration form (email, username, password)
   - Form validation occurs client-side
   - API call to `/api/auth/register`
   - On success, user is redirected to login

2. **Login**
   - User enters email and password
   - API call to `/api/auth/login`
   - Tokens stored in localStorage
   - User info stored in context
   - Redirect to dashboard

3. **Protected Routes**
   - Dashboard and other protected pages check authentication
   - Redirect to login if not authenticated
   - Show loading state during auth check

4. **Logout**
   - Clear tokens from localStorage
   - Clear user context
   - Redirect to login

## 🔌 API Integration

The frontend communicates with the backend via a REST API. See `openapi.yaml` in the project root for full API documentation.

### Endpoints Used

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User authentication

### API Client

The API client (`src/services/api.ts`) includes:

- Automatic token injection in request headers
- Response/error interceptors
- Type-safe request/response handling
- Automatic logout on 401 errors

## 🚦 Environment Configuration

### Development

The dev server proxies API requests to the backend:

```typescript
// vite.config.ts
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8000',
      changeOrigin: true
    }
  }
}
```

### Production

Update the API base URL in `src/services/api.ts`:

```typescript
const apiClient = axios.create({
  baseURL: 'https://your-production-api.com',
  // ...
});
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The application is fully responsive and works on:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎓 For Students & Developers

This project demonstrates:

- **Separation of Concerns** - Clear separation between frontend and backend
- **API-First Design** - OpenAPI specification enables independent development
- **Modern React Patterns** - Hooks, Context API, functional components
- **Type Safety** - TypeScript for better development experience
- **Authentication Best Practices** - JWT tokens, protected routes
- **Responsive Design** - Mobile-first approach with TailwindCSS

Feel free to modify either the frontend or backend independently - the API contract (OpenAPI spec) ensures compatibility!

## 🤝 Contributing

This is an educational project. Students and developers are encouraged to:

- Experiment with different UI frameworks
- Implement additional features
- Improve the design
- Add new pages and components
- Enhance security features

## 📄 License

Educational use - Tuhura Tech

## 🆘 Troubleshooting

### Backend Connection Issues

If you see "Network Error" or connection refused:

1. Ensure backend server is running on `http://127.0.0.1:8000`
2. Check CORS is properly configured in backend
3. Verify proxy settings in `vite.config.ts`

### TypeScript Errors

Run `npm install` to ensure all type definitions are installed.

### Build Errors

Clear the cache and reinstall:

```bash
rm -rf node_modules dist
npm install
npm run build
```

## 📞 Support

For questions or issues, please refer to the project documentation or contact the Tuhura Tech team.
