# Interior AI

Interior AI is a beginner-friendly web app designed by Sienna Kirby & Tashon Zeigler for our Software Engineering course. The goal was to make a simple tool that lets users design a room layout, visualize it in 3D, and get real AI-generated tips for making the space look good. We wanted it to be useful for people who don’t know where to start with interior design but still want to plan something out visually.

---

## 🛠 Features We Built

- 🧱 **2D Room Layout Tool**: Click buttons to add furniture blocks and create your space layout.
- 🪑 **3D Visualization**: View your room and drop simple 3D furniture shapes in a virtual space.
- 🧠 **AI Design Suggestions**: Type a keyword like “cozy” or “modern” and get visual + written interior design tips from a pre-built catalog. We also show images pulled from Unsplash that match the vibe.
- 💡 **Budget Planner**: Add items with prices, track the total, and remove things as needed. We kept this simple and useful.
- 🔍 **Material Catalog**: View real sample materials with clickable links that take you to Google to explore prices.
- 💾 **Save & Share**: You can export your design area as a PDF and copy the homepage link. We also tell users that saving designs isn't cloud-based yet, so PDF export is the main method.

---

## 🔧 Tech Stack
- React.js
- React Router
- Three.js (@react-three/fiber)
- html2canvas + jsPDF
- GitHub Pages (static deployment)

---

## 🧠 How the AI Suggestions Work
We built a keyword system that matches design terms like “boho,” “elegant,” “bathroom,” or “kids room” to a short tip and a matching room photo. It’s basically a curated mini-AI that gives helpful style advice.

We used Unsplash to generate image previews based on the keyword. So when you enter something like "cozy," the app shows a tip *and* a cozy room image. This makes the suggestions feel more real and useful, especially for people who learn visually.

---

## 🧪 How to Run It Locally
1. Clone the repo:
```bash
git clone https://github.com/120503tz/interior-ai.git
```
2. Install dependencies:
```bash
npm install
```
3. Start the app:
```bash
npm start
```
4. To deploy it to GitHub Pages:
```bash
npm run build
npm run deploy
```

---

## 💬 Notes from Us
We learned a lot building this. Things like managing GitHub Pages, using Three.js for the first time, and trying to make features that actually help users (not just look cool). Our biggest challenge was making it all feel connected — like you could actually go from idea to layout to design tips in one flow.

We're proud of the features, especially the AI suggestions and how the budget planner turned out. We tried to keep things functional but still add a little design flavor to the site.

---

## 👥 Credits
Made by Sienna Kirby & Tashon Zeigler
Shoutout to the open source packages and documentation that helped us out along the way ✌️


