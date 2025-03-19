// script.js
const projectList = document.getElementById('project-list');

async function fetchProjects() {
  try {
    const response = await fetch('https://api.github.com/users/Davzn-Leo/repos');
    const data = await response.json();
    displayProjects(data);
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
  }
}

function displayProjects(projects) {
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description || 'Sem descrição.'}</p>
      <a href="${project.html_url}" target="_blank">Ver no GitHub</a>
    `;
    projectList.appendChild(projectCard);
  });
}

fetchProjects();
