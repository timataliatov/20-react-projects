# 🚀 React Vite Tailwind Starter

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

A lightning-fast ⚡ starter template for building modern React applications with Vite and Tailwind CSS.

## 🌟 Features

- ⚛️ React 18
- 🛠️ Vite 4
- 🎨 Tailwind CSS 3
- 📏 ESLint & Prettier
- 📁 Opinionated folder structure
- 🔐 Environment variables support
- 🚀 Fast refresh
- 📱 Responsive design ready

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or above)
- npm or yarn

### Setting Up Your Project

1. Clone this repository:
   ```bash
   git clone https://github.com/timataliatov/RVNT-tt-01.git your-project-name
   cd your-project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file as needed.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:3000`. Happy coding! 🎉

## 📚 Available Scripts

In the project directory, you can run:

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to catch linting errors
- `npm run format` - Formats code with Prettier

## 📂 Folder Structure

```
react-vite-tailwind-starter/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation (you are here!)
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 🧑‍💻 Development Workflow

1. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Add your meaningful commit message here"
   ```

3. Push your changes to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub for review.

## 🔄 Keeping Your Project Updated

To update your project with the latest changes from this starter:

1. Add this repository as a remote:
   ```bash
   git remote add upstream https://github.com/timataliatov/RVNT-tt-01.git
   ```

2. Fetch the latest changes:
   ```bash
   git fetch upstream
   ```

3. Merge the changes into your main branch:
   ```bash
   git checkout main
   git merge upstream/main
   ```

4. Resolve any conflicts and push the changes to your repository.

## 🎨 Customization

- **Tailwind**: Customize your Tailwind setup in `tailwind.config.js`
- **Vite**: Modify Vite settings in `vite.config.js`
- **ESLint & Prettier**: Adjust rules in `.eslintrc.json` and `.prettierrc`

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

Happy coding! If you find this template helpful, please give it a ⭐️ on GitHub!

---

- **!! WARNING !!**: Make sure to add your custom `.gitignore` and make sure to inclue original `.env` also!