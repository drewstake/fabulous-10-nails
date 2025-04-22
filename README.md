```markdown
# Fabulous 10 Nails Salon Website

Live Site: [https://www.fabulous10nails.com/](https://www.fabulous10nails.com/)

A modern, responsive salon website built with React, Tailwind CSS, and AWS Amplify, featuring a booking flow, dynamic gallery, and secure user authentication.

## Features

- **Modular React Components**: Header, Hero, Services, Gallery, Testimonials, Booking CTA, Contact, and Footer  
- **Continuous Testimonials Carousel**: Infinite‑scroll slider with real reviews  
- **Tailwind CSS**: Utility‑first styling for rapid, consistent design  
- **AWS Amplify CI/CD**: Auto‑deploys both `main` (production) and `development` (staging) branches  
- **Auth Flow**: React Router login/signup forms wired to an Express/Mongoose backend with JWT  
- **MongoDB**: Stores user credentials, secure password hashing via bcrypt  
- **Responsive**: Mobile‑first design with fixed header and smooth animations  

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS  
- **Backend**: Node.js, Express, Mongoose (MongoDB), JWT, bcrypt  
- **Hosting & Deployment**: AWS Amplify  
- **CI/CD**: Amplify Build & Deploy from GitHub branches  

## Getting Started

### Prerequisites

- Node.js ≥14  
- npm or yarn  
- MongoDB URI (for local or Atlas)  
- AWS account for Amplify (optional)

### Local Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/drewstake/fabulous-10-nails.git
   cd fabulous-10-nails
   ```

2. **Install dependencies**  
   ```bash
   # frontend
   npm install

   # backend
   cd server
   npm install
   cd ..
   ```

3. **Configure environment**  
   - Copy `server/.env.example` → `server/.env` and fill in your `MONGO_URI`, `JWT_SECRET`, etc.

4. **Run in development**  
   ```bash
   # start backend on :4000
   cd server && npm start

   # in another terminal, start frontend on :3000
   cd .. && npm start
   ```

5. **Build & deploy**  
   ```bash
   npm run build        # creates `build/` folder
   npm run amplify:push # if you have the Amplify CLI configured
   ```

## Contributing

1. Create a `development` branch:  
   ```bash
   git checkout -b development
   git push -u origin development
   ```
2. Make your changes, commit, and push.  
3. Open a PR against `main` when ready.

## License

This project is open‑source under the MIT License.
```
