import { projects } from './projects.js';

function getFeaturedProjects(projectsArray) {
    return projectsArray.filter(project => project.featured === true);
}

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `${project.title} project image`;
    img.loading = 'lazy'; 
    
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
    
    return card;
}


function renderFeaturedProjects(featuredProjects) {
    const container = document.getElementById('featured-projects-container');
    
    if (container) {
        container.innerHTML = '';

        featuredProjects.forEach(project => {
            const card = createProjectCard(project);
            container.appendChild(card);
        });
    }
}


const highlightFacts = [
    "Experienced in CAD design, FEA analysis, and rapid prototyping with a focus on creating efficient and sustainable solutions.",
    "Passionate about robotics and automation, with hands-on experience building autonomous systems and control mechanisms.",
    "Strong background in thermal and fluid systems, specializing in heat exchanger design and optimization.",
    "Committed to continuous learning and staying current with emerging technologies in mechanical engineering."
];

let currentHighlightIndex = 0;

function updateHighlight() {
    const highlightElement = document.getElementById('highlight-text');
    
    if (highlightElement) {
        currentHighlightIndex = (currentHighlightIndex + 1) % highlightFacts.length;

        highlightElement.textContent = highlightFacts[currentHighlightIndex];
    }
}

function initHomePage() {
    const featuredProjects = getFeaturedProjects(projects);
    renderFeaturedProjects(featuredProjects);
    
    const highlightButton = document.getElementById('highlight-button');
    if (highlightButton) {
        highlightButton.addEventListener('click', updateHighlight);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomePage);
} else {
    initHomePage();
}