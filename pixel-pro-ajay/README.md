# 🚀 Ajay Patil - Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A modern, responsive portfolio showcasing my journey as a Full-Stack Developer**

[🌐 Live Demo](#) • [📧 Contact](mailto:ajayajax-2@gmail.com) • [💼 LinkedIn](#)

</div>

---

## ✨ Features

🎨 **Modern UI/UX**
- Sleek, professional design with smooth animations
- Fully responsive across all devices
- Dark theme with elegant color palette
- Interactive elements and hover effects

📱 **Sections**
- **Hero**: Eye-catching landing with dynamic floating icons
- **About**: Professional profile with skills & achievements
- **Projects**: Portfolio of 6+ real-world projects
- **Services**: Showcase of development capabilities
- **Contact**: Functional email integration with EmailJS

🛠️ **Tech Highlights**
- Built with React 18 & TypeScript for type safety
- Vite for lightning-fast development
- Tailwind CSS for utility-first styling
- Shadcn/ui for beautiful, accessible components
- EmailJS for seamless contact form functionality

---

## 🎯 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd pixel-pro-ajay
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_REPLY_TEMPLATE_ID=your_reply_template_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:8080` 🎉

---

## 📂 Project Structure

```
pixel-pro-ajay/
├── 📁 public/              # Static assets
│   └── robots.txt
├── 📁 src/
│   ├── 📁 assets/          # Images, PDFs, etc.
│   ├── 📁 components/      # React components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Hero.tsx        # Landing section
│   │   ├── Navigation.tsx  # Nav bar
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Services.tsx    # Services offered
│   │   ├── Footer.tsx      # Footer section
│   │   └── 📁 ui/          # Shadcn components
│   ├── 📁 hooks/           # Custom React hooks
│   ├── 📁 lib/             # Utility functions
│   ├── 📁 pages/           # Page components
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite configuration
```

---

## 🎨 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 5.4.19** - Build tool
- **Tailwind CSS 3.4.17** - Styling

### UI Components
- **Shadcn/ui** - Component library
- **Lucide React** - Icon set
- **Sonner** - Toast notifications

### Integrations
- **EmailJS** - Contact form email service
- **React Router** - Navigation

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📧 Contact Form Setup

This portfolio uses **EmailJS** for the contact form. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create email templates (one for notification, one for auto-reply)
4. Copy your Service ID, Template IDs, and Public Key
5. Add them to your `.env` file

📖 See `EMAILJS_SETUP.md` for detailed instructions.

---

## 🎯 Key Features Breakdown

### 🏠 Hero Section
- Animated welcome badge with sparkle effect
- Professional role tags (Intern at Ajni Tech, Team Lead)
- Floating decorative icons
- Call-to-action buttons

### 👤 About Section
- Circular profile photo with glow effect
- Skill progress bars with percentages
- Achievement cards highlighting experience
- Resume download functionality

### 💼 Projects Section
Showcasing 6+ projects including:
- PMSSS Scholarship Portal
- EcoLearn Platform
- E-Commerce Store
- Telemedicine Healthcare App
- Mobile App Design Prototypes
- Console Projects

### 📬 Contact Section
- Fully functional email form
- Real-time form validation
- Success/error toast notifications
- Auto-reply capability (optional)

---

## 🌟 Highlights

✅ **100% Responsive** - Works seamlessly on mobile, tablet, and desktop  
✅ **Fast Performance** - Optimized with Vite and React best practices  
✅ **Type-Safe** - Full TypeScript implementation  
✅ **Modern Design** - Clean, professional UI with smooth animations  
✅ **SEO Ready** - Proper meta tags and semantic HTML  
✅ **Accessible** - WCAG compliant components from Shadcn/ui  

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 About Me

**Ajay Patil**  
Full-Stack Developer | React Enthusiast | UI/UX Lover

- 🔭 Currently working as **Intern at Ajni Tech**
- 🌱 Learning advanced React patterns and backend technologies
- 👯 Open to collaborations on interesting projects
- 📫 Reach me at: **ajayajax-2@gmail.com**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for beautiful components
- [Lucide Icons](https://lucide.dev/) for amazing icons
- [EmailJS](https://www.emailjs.com/) for email service
- [Vite](https://vitejs.dev/) for blazing fast build tool

---

<div align="center">

### ⭐ Star this repo if you like it!

Made with ❤️ by Ajay Patil

[⬆ Back to Top](#-ajay-patil---portfolio-website)

</div>
