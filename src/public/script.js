const API_BASE = "";


async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error ${res.status}: ${text}`);
  }
  return res.json();
}

async function loadData() {
  try {
    const user = await fetchJson(`${API_BASE}/api/user`);
    const repos = await fetchJson(`${API_BASE}/api/repos`);

    document.getElementById("username").textContent = user.login ?? "(sin username)";
    document.getElementById("repoCount").textContent = Array.isArray(repos) ? repos.length : 0;

    const list = document.getElementById("repoList");
    list.innerHTML = "";

    (repos || []).forEach((repo) => {
      const li = document.createElement("li");
      const name = repo.name ?? "sin-nombre";
      const stars = repo.stargazers_count ?? 0;

      li.textContent = `${name} ⭐ ${stars}`;
      list.appendChild(li);
    });
  } catch (err) {
    document.getElementById("username").textContent = "Error cargando datos";
    console.error(err);
    alert("No se pudo cargar la información.");
  }
}

loadData();
