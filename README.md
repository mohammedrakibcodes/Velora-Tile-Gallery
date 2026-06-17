# Velora Tile Gallery

Velora Tile Gallery is a modern and responsive web application designed to showcase premium tile collections with an elegant user experience. The platform allows users to explore a curated collection of tiles, view detailed product information, create accounts, authenticate securely, and manage their profiles through a seamless and intuitive interface.

## Live Demo

🔗 https://velora-tile-gallery-bddm.vercel.app

---

## Key Features

### Authentication & User Management

- Secure user registration with email and password
- Login and logout functionality
- Google OAuth authentication
- Persistent user sessions
- Protected routes for authenticated users
- User profile management
- Profile update functionality

### Tile Gallery

- Browse premium tile collections
- Dynamic tile details page
- Category-based tile organization
- Detailed product information display
- Responsive tile cards
- Modern gallery experience

### User Experience

- Fully responsive design
- Mobile-first layout
- Loading states and feedback
- Error handling
- Smooth navigation
- Modern and clean interface

### Security

- Better Auth authentication system
- Protected client and server routes
- Secure session management
- MongoDB-backed user data storage

---

## Technology Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- HeroUI
- React Icons
- Swiper.js

### Backend & Database

- MongoDB Atlas
- MongoDB Driver

### Authentication

- Better Auth
- Google OAuth

### Deployment

- Vercel

---

## Packages Used

- better-auth
- mongodb
- @heroui/react
- react-icons
- swiper
- next
- react
- react-dom

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mohammedrakibcodes/velora-tile-gallery.git
```

### 2. Navigate to the Project Directory

```bash
cd velora-tile-gallery
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGODB_URI=your_mongodb_uri

BETTER_AUTH_SECRET=your_secret

BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 5. Start the Development Server

```bash
npm run dev
```

Visit the application:

```text
http://localhost:3000
```

---

## Project Highlights

- Built using the Next.js App Router architecture
- Integrated Better Auth for modern authentication workflows
- Connected with MongoDB Atlas for cloud database management
- Responsive across mobile, tablet, and desktop devices
- Protected pages and authenticated user experiences
- Production-ready deployment on Vercel

---

## License

This project is developed for educational and portfolio purposes.
