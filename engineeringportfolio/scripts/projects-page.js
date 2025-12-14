
import { projects } from './projects.js';

let currentFilter = 'all';

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `AI generated until I get real image`;
    img.loading = 'lazy';
    img.width = 800;  // Set explicit width
    img.height = 200; // Set explicit height (matches CSS height)
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const meta = document.createElement('div');
    meta.className = 'project-meta';
    meta.textContent = `${project.year} • ${project.category}`;
    
    const summary = document.createElement('p');
    summary.textContent = project.summary;
    
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'project-skills';
    
    project.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
    
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(summary);
    card.appendChild(skillsContainer);
    

    if (project.year === 2024) {
        card.classList.add('project-recent');
    }
    
    return card;
}


function filterProjectsByCategory(projectsArray, category) {
    if (category === 'all') {
        return projectsArray;
    }
    return projectsArray.filter(project => project.category === category);
}


function renderProjects(projectsToRender) {
    const container = document.getElementById('projects-container');
    const noProjectsMessage = document.getElementById('no-projects-message');
    
    if (!container) return;
    
    container.innerHTML = '';

    if (projectsToRender.length === 0) {
        if (noProjectsMessage) {
            noProjectsMessage.style.display = 'block';
        }
    } else {
        if (noProjectsMessage) {
            noProjectsMessage.style.display = 'none';
        }
        
        projectsToRender.forEach(project => {
            const card = createProjectCard(project);
            container.appendChild(card);
        });
    }
}


function updateActiveFilterButton(activeCategory) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        const buttonCategory = button.getAttribute('data-category');
        
        if (buttonCategory === activeCategory) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function handleFilterClick(category) {
    currentFilter = category;

    const filteredProjects = filterProjectsByCategory(projects, category);

    renderProjects(filteredProjects);
    
    updateActiveFilterButton(category);
}

function initProjectsPage() {
    renderProjects(projects);
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            handleFilterClick(category);
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectsPage);
} else {
    initProjectsPage();
}