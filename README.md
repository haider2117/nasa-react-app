# 🌌 NASA APOD Viewer

This project is a simple React web app that fetches and displays the **Astronomy Picture of the Day (APOD)** from the [NASA Open APIs](https://api.nasa.gov/). It demonstrates how to use `fetch`, handle asynchronous data, and cache daily responses using `localStorage`.

---

## 📸 Features

- Fetches NASA's APOD using their public API
- Displays the picture or video along with its description and date
- Caches daily data in `localStorage` to reduce API calls
- Mobile-responsive and visually sleek layout
- Modal sidebar with extra information

---

## 🚀 Technologies Used

- React (Vite)
- NASA APOD REST API
- CSS for styling
- FontAwesome icons

---

## 🔑 Setup & Usage

### 1. Clone the repo
```bash
git clone https://github.com/your-username/nasa-apod-viewer.git
cd nasa-apod-viewer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add your NASA API key
Create a `.env` file in the root of the project:

```env
VITE_NASA_API_KEY=your_api_key_here
```

> 🔐 **Note**: Make sure your `.env` is listed in `.gitignore` to avoid exposing your key.

### 4. Run the app
```bash
npm run dev
```

---

## 🧠 Learning Goals

- Understand how to use environment variables in a Vite + React project
- Work with `async/await` and `fetch` for calling external APIs
- Use `localStorage` for client-side caching
- Conditional rendering in React (`media_type` checks, modals, etc.)

---

## 🌠 Demo

> Add a screenshot here if available  
> Or link to a deployed version if hosted (e.g. Netlify, Vercel)

---

## 📂 File Structure (Short Overview)

```
src/
├── components/
│   ├── Main.jsx
│   ├── SideBar.jsx
│   └── Footer.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

## 📜 License

MIT License — feel free to use and improve!

---

## 🙌 Acknowledgements

- [NASA APOD API](https://api.nasa.gov/)
- FontAwesome icons
- React & Vite ecosystem
