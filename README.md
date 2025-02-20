# TODOenBALANCE - Nutrition Consultation Platform

A professional nutrition consultation platform built with React, featuring multi-language support, appointment booking, and secure payment processing.

## Features

- 📅 Dynamic appointment scheduling
- 💳 Secure payment integration with PayPal
- 🌍 Multi-language support (English, Spanish, Italian)
- 🔐 Social login integration (Google, Facebook)
- 📱 Responsive design with Tailwind CSS
- 📝 Blog system with comments
- 🔍 SEO optimized

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todoenbalance.git
cd todoenbalance
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
REACT_APP_API_BASE_URL=your_api_url
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id
```

4. Update PayPal configuration:
- Open `src/components/BookingForm.js`
- Replace `YourPayPalUsername` with your actual PayPal.me username

## Configuration

### Social Login Setup

#### Google Sign-In
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google Sign-In API
4. Create OAuth 2.0 credentials
5. Add your domain to authorized origins
6. Add the client ID to your `.env` file

#### Facebook Login
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Configure OAuth settings
5. Add your domain to app domains
6. Add the app ID to your `.env` file

### Multi-language Support

Language files are located in:
```
src/locales/
  ├── en/
  │   └── translation.json
  ├── es/
  │   └── translation.json
  └── it/
      └── translation.json
```

To add a new language:
1. Create a new folder in `src/locales`
2. Copy `translation.json` from another language
3. Translate the content
4. Add the language option in `src/components/Navbar.js`

## Project Structure

```
src/
  ├── components/
  │   ├── booking/
  │   │   ├── forms/
  │   │   │   ├── BookingFormStep1.js
  │   │   │   ├── BookingFormStep2.js
  │   │   │   └── BookingSuccess.js
  │   │   ├── BookingContext.js
  │   │   └── BookingService.js
  │   ├── layout/
  │   │   ├── Navbar.js
  │   │   └── Footer.js
  │   └── shared/
  │       └── SocialLogin.js
  ├── pages/
  │   ├── BookingPage.js
  │   ├── Blog.js
  │   └── LandingPage.js
  ├── locales/
  │   ├── en/
  │   ├── es/
  │   └── it/
  └── services/
      └── api/
          └── booking.js
```

## Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Generate sitemap
npm run generate-sitemap
```

## Deployment

1. Build the project:
```bash
npm run build
```

2. The build folder is ready to be deployed:
- Upload to your web server, or
- Deploy to services like Netlify, Vercel, or AWS

## Environment Variables

Required environment variables:
- `REACT_APP_API_BASE_URL`: Backend API URL
- `REACT_APP_GOOGLE_CLIENT_ID`: Google OAuth client ID
- `REACT_APP_FACEBOOK_APP_ID`: Facebook app ID

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [www.todoenbalance.com](https://www.todoenbalance.com)
- Email: support@todoenbalance.com
- LinkedIn: [Paola Michelle](https://www.linkedin.com/in/your-profile)

## Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [i18next](https://www.i18next.com/)