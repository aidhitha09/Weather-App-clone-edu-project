// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5001; // ✅ Changed port from process.env.PORT || 5000 to fixed 5001

// ✅ Middleware Configuration
// Allow requests from React frontend running on localhost:3000
app.use(cors({
  origin: 'http://localhost:3000' // Remove credentials: true unless using cookies
}));
app.use(express.json()); // Parse incoming JSON requests

// ✅ Health Check Route
app.get('/', (req, res) => {
  res.status(200).send('🌤️ Weather API is live!');
});

// ✅ Weather Data Endpoint
app.get('/weather', async (req, res) => {
  const { city, unit = 'metric' } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  // Validate query
  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }

  try {
    // Call OpenWeather API
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        units: unit,
        appid: apiKey,
      },
    });

    // Return weather data
    res.status(200).json(response.data);
  } catch (error) {
    console.error('❌ Weather fetch error:', error.message);
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || 'Internal Server Error';
    res.status(status).json({ error: message });
  }
});

// ✅ Start the Express server
app.listen(PORT, () => {
  console.log(`🌦️ Weather server running at http://localhost:${PORT}`);
});
