# 🌤️ Weather App (Full Stack)

A beautifully designed, full-stack weather web application built with **React.js**, **Express.js**, and **OpenWeatherMap API**, supporting real-time weather data, geolocation, and persistent history logging via **MongoDB**.

---

## 🚀 Features

- 🌍 **Search Weather by City**  
  Instantly fetch temperature, humidity, and conditions for any city.

- 📍 **Geolocation Support**  
  Auto-fetch your current location’s weather using the browser's GPS API.

- 💾 **Weather History (MongoDB)**  
  Stores and displays past weather searches with timestamps.

- 🌈 **Modern UI**  
  Responsive, glassy UI with animated icons and a dark/light theme toggle.

- 📤 **Export Options**  
  Export weather logs as CSV or JSON (optional: add PDF support).

---

## ⚙️ Tech Stack

| Layer        | Tech                             |
|--------------|----------------------------------|
| Frontend     | React.js, HTML5, CSS3            |
| Backend      | Node.js, Express.js              |
| Database     | MongoDB Atlas                    |
| APIs Used    | OpenWeatherMap API               |
| Deployment   | GitHub (code), Render/Netlify (optional) |

---

## 🔍 Why Is This App Different?

Unlike most basic weather apps, this one:
- 🧠 **Persists user activity** — Tracks weather queries using MongoDB.
- 🎯 **Geolocation-enabled** — Auto-detects user location on load.
- 🧾 **Exportable data** — Useful for weather analysis or travel planning.
- 🎨 **iOS-glass design** — Clean, animated interface with a neon-glow theme.
- 🔐 **Secure API key handling** — `.env` is excluded from GitHub (`.env.example` included for setup).

