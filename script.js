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
      <p>${project.description || 'Sem descrição disponível.'}</p>
      <a href="${project.html_url}" target="_blank" class="btn">Ver Projeto</a>
      ${project.homepage ? `<a href="${project.homepage}" target="_blank" class="btn">Ver Site</a>` : ''}
    `;
    projectList.appendChild(projectCard);
  });
}

fetchProjects();
