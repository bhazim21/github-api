require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const { getProfile, getRepos } = require("./services/github.service");

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/user", async (req, res) => {
  try {
    const profile = await getProfile();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo perfil" });
  }
});

app.get("/api/repos", async (req, res) => {
  try {
    const repos = await getRepos();
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: "Error obteniendo repositorios" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}, abra su navegador en http://localhost:${PORT}`);
});
