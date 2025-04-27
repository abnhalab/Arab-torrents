const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// هنا سنقوم بجلب البيانات من موقع Arab-Torrents
app.get("/movies", async (req, res) => {
  try {
    // مثال لجلب الأفلام من الموقع
    const response = await axios.get("https://www.arab-torrents.com");
    const data = response.data;
    
    // قم بتحليل البيانات حسب الحاجة من الصفحة
    // هنا نحن نرسل البيانات كما هي، يمكنك معالجتها لاحقاً
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from Arab-Torrents.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
