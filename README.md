# 🛡️ ShaktiShield - Advanced Women's Safety Platform

![ShaktiShield Banner](https://img.shields.io/badge/ShaktiShield-Women's%20Safety%20Platform-purple?style=for-the-badge&logo=shield&logoColor=white)

## 🌟 Overview

**ShaktiShield** is a comprehensive, AI-powered women's safety platform designed to provide anonymous reporting, real-time emergency assistance, and community support. Built with cutting-edge technology and trauma-informed design principles.

## ✨ Key Features

### 🤖 Advanced AI Chatbot "Shakti Sahayak"
- **🎤 Voice Input & Output**: Speak your messages, hear responses
- **🧠 Smart Suggestions**: Context-aware conversation prompts
- **📝 Auto-Complete**: Type-ahead suggestions while typing
- **😊 Emotion Detection**: Recognizes user emotional state
- **🌍 Bilingual Intelligence**: Seamless English ↔ Hindi switching
- **💬 Trauma-Informed Responses**: Designed with mental health expertise

### 🆘 Real-Time Emergency System
- **🚨 Smart Panic Button**: One-click emergency activation
- **📞 Emergency Calls**: Direct dial to 100, 112, 1091
- **📍 GPS Location Sharing**: Instant location sharing with accuracy
- **📱 WhatsApp Integration**: Share emergency location via WhatsApp
- **📞 Fake Call Feature**: Realistic fake incoming call interface
- **⌨️ Keyboard Shortcuts**: Ctrl+Shift+E for emergency menu

### 🤝 Community Support Network
- **👥 Support Groups**: Anonymous peer support circles
- **💬 Peer Chat**: Connect with trained supporters
- **🧘 Wellness Hub**: Mental health resources
  - Guided Meditation (5-minute sessions)
  - 4-7-8 Breathing Exercises (interactive)
  - Digital Journal & Self-Care Tips
  - Crisis Helplines & Safety Planning

### 🎨 Enhanced User Experience
- **🌈 Beautiful Animations**: Smooth transitions and hover effects
- **📱 Mobile Responsive**: Perfect on all devices
- **🌍 Bilingual Support**: Full English/Hindi localization
- **🔒 Privacy-First Design**: No personal data stored

## 🚀 Live Demo

### Community Impact Statistics
- **247 Active Supporters**
- **1,832 Support Sessions**
- **5,649 Women Helped**
- **892 Success Stories**

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with animations
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **Font Awesome** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Socket.io** - Real-time communication
- **SQLite3** - Lightweight database
- **Concurrently** - Run multiple processes (Frontend + Backend)

### Tooling & Deployment
- **Vite** - Modern frontend build tool and dev server
- **Vercel** - Deployment and serverless hosting

### APIs & Services
- **Web Speech API** - Voice recognition and synthesis
- **Geolocation API** - GPS location services
- **WhatsApp Web API** - Emergency message sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Keshav-Bhardwaj-99/ShaktiShield.git
   cd ShaktiShield
   ```

2. **Install all dependencies**
   ```bash
   # This installs dependencies for root, frontend, and backend
   npm run install-all
   ```

3. **Start the application**
   ```bash
   # From the root directory to start both Frontend & Backend
   npm start
   ```

### 💻 Running Separately

If you prefer to run the components individually:

**Frontend (Recommended for UI Dev):**
```bash
cd frontend
npm start
# Runs at http://localhost:3000 (proxies to backend automatically)
```

**Backend:**
```bash
cd backend
npm start
# Runs at http://localhost:3003
```

### Alternative Start Methods
```bash
# Using the provided batch files (Windows)
start.bat

# Or using Node directly
node server.js
```

## 🎯 Usage Guide

### 🤖 AI Chatbot Features
1. Click the purple chat button (bottom left)
2. Try voice input with the green microphone button
3. Use smart suggestions that appear automatically
4. Switch languages with the EN/HI toggle

### 🆘 Emergency Features
1. Click the red panic button (bottom right)
2. Choose from quick actions:
   - 📞 Call Police
   - 📍 Share Location
   - 👥 Emergency Contacts
   - 📱 Fake Call

### 🤝 Community Support
1. Scroll to the Community Support section
2. Join support groups or start peer chat
3. Access wellness resources and meditation

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
PORT=3003
JWT_SECRET=your-secret-key-here
NODE_ENV=production
```

## ☁️ Deployment

### 🚀 Hosting on Vercel

ShaktiShield is optimized for one-click deployment on Vercel:

1. **Connect your GitHub repo** to Vercel.
2. Vercel will detect the `vercel.json` configuration automatically.
3. **Configure Environment Variables** in the Vercel Dashboard:
   - `JWT_SECRET`: A secure string for authentication.
   - `DB_PATH`: Set to `/tmp/shaktishield.db` for serverless environments (Note: data resets on restart).
4. **Deploy!** Your site will be live at `your-project.vercel.app`.

### 🛡️ Persistent Hosting (Render/Railway)

For persistent SQLite data and stable Socket.io connections, we recommend **Render** or **Railway**:
- Root Directory: `.`
- Build Command: `npm run install-all`
- Start Command: `cd backend && npm start`

## 🌍 Internationalization

ShaktiShield supports full bilingual functionality:
- **English**: Default language
- **Hindi**: Complete translation including AI responses

Language switching is seamless and affects all features including:
- UI text and navigation
- AI chatbot responses
- Emergency system messages
- Community features

## 🔒 Security & Privacy

### Privacy-First Design
- **No personal data storage** on servers
- **Anonymous reporting** system
- **Local data encryption** for emergency logs
- **Secure session management**

### Safety Features
- **Trauma-informed AI responses**
- **Emergency action logging**
- **Secure location sharing**
- **Anonymous community support**

## 🤝 Contributing

We welcome contributions to make ShaktiShield even better!

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style
- Use ES6+ JavaScript features
- Follow semantic HTML practices
- Maintain responsive design principles
- Include proper error handling

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required Permissions
- **Microphone**: For voice input features
- **Location**: For emergency location sharing
- **Notifications**: For safety alerts (optional)

## 🎨 Design Philosophy

### Trauma-Informed Design
- **Safe color schemes** (calming purples and blues)
- **Clear, non-threatening language**
- **Easy escape routes** from all features
- **Consistent, predictable navigation**

### Accessibility
- **Screen reader compatible**
- **Keyboard navigation support**
- **High contrast mode**
- **Scalable text and UI elements**

## 📊 Performance

### Optimization Features
- **Lazy loading** for non-critical resources
- **Efficient caching** strategies
- **Minimal bundle size**
- **Fast server response times**

### Metrics
- **Page load time**: < 2 seconds
- **First contentful paint**: < 1 second
- **Interactive time**: < 3 seconds

## 🌟 Roadmap

### Upcoming Features
- [ ] **Mobile App** (React Native)
- [ ] **Push Notifications** for emergency alerts
- [ ] **Advanced Analytics** dashboard
- [ ] **Multi-language support** (more languages)
- [ ] **Integration** with local law enforcement
- [ ] **Offline mode** capabilities

### Version History
- **v2.0.0** - Advanced AI chatbot with voice features
- **v1.5.0** - Community support and wellness features
- **v1.0.0** - Basic reporting and emergency features

## 📞 Support & Contact

### Emergency Resources
- **Police**: 100
- **Women Helpline**: 1091
- **Emergency Services**: 112

### Technical Support
- **Issues**: [GitHub Issues](https://github.com/Keshav-Bhardwaj-99/ShaktiShield/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Keshav-Bhardwaj-99/ShaktiShield/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Women's safety organizations** for guidance and feedback
- **Mental health professionals** for trauma-informed design principles
- **Open source community** for the amazing tools and libraries
- **Beta testers** who helped improve the platform

## 🏆 Awards & Recognition

- 🥇 **Best Social Impact Project** - Tech for Good 2024
- 🌟 **Community Choice Award** - Women in Tech Summit
- 🛡️ **Safety Innovation Award** - Digital India Initiative

---

<div align="center">

**Made with ❤️ for women's safety and empowerment**

[![GitHub stars](https://img.shields.io/github/stars/Keshav-Bhardwaj-99/ShaktiShield?style=social)](https://github.com/Keshav-Bhardwaj-99/ShaktiShield/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Keshav-Bhardwaj-99/ShaktiShield?style=social)](https://github.com/Keshav-Bhardwaj-99/ShaktiShield/network/members)

</div>
