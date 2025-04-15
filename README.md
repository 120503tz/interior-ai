# Interior AI

Interior AI is a beginner-friendly interior design app created by Sienna Kirby & Tashon Zeigler. The goal was to build something that makes it easy for anyone to plan out room layouts, drop in furniture, and see how it would look — all from a simple web app.

This was built for a software engineering course and taught us a lot about React, 3D visualization, saving data, and deploying to GitHub Pages.

---

## 🔨 Features
- 2D room layout tool
- Click-to-spawn 3D furniture (basic models)
- AI keyword-based design suggestions
- Material catalog with real samples
- Save/export your layout as a PDF
- Share your design via link

---

## 🧰 Tech Stack
- React.js
- React Router
- Three.js (@react-three/fiber + drei)
- html2canvas + jsPDF
- GitHub Pages for deployment

---

## 🛠 How to Run It
1. Clone the repo:
```bash
git clone https://github.com/120503tz/interior-ai.git
```
2. Install dependencies:
```bash
npm install
```
3. Start the app locally:
```bash
npm start
```
4. To deploy:
```bash
npm run deploy
```

---

## 🧠 Challenges We Hit
- Setting up React Router for GitHub Pages
- Getting WebGL objects to load correctly
- Making html2canvas actually capture what we needed
- Accidentally pushing a secret key 😬 (GitHub saved us tho)

---

## 🚀 Future Plans
- Drag-to-move furniture in 3D
- Let users save their rooms in localStorage
- Add real AI backend for better suggestions
- Upload your own materials or floor textures
- User accounts (stretch goal)

---

## 🙏 Credits
Created by Sienna Kirby & Tashon Zeigler

Thanks to all the open-source tools we used and the docs that got us through the weird bugs 🙌


