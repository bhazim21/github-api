const axios = require('axios');

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});

async function getProfile() {
  const { data } = await githubApi.get('/user');
  return data;
}

async function getRepos() {
  const { data } = await githubApi.get('/user/repos');
  return data;
}

module.exports = { getProfile, getRepos };
