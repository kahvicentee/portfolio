let changeMode = document.getElementById('change-mode');
let body = document.querySelector('body');
let sectionMe = document.getElementById('me');
let sectionThingsILove = document.getElementById('things-i-love');
let sectionAboutMe = document.getElementById('about-me');
let skillSets = document.getElementById('my-skillsets')
let skills = document.getElementById('skills')
let sectionProjects = document.getElementById('projects')

changeMode.addEventListener('click', () => {
    changeMode.classList.toggle('dark')
    body.classList.toggle('dark')
    sectionMe.classList.toggle('dark')
    sectionThingsILove.classList.toggle('dark')
    sectionAboutMe.classList.toggle('dark')
    skillSets.classList.toggle('dark')
    skills.classList.toggle('dark')
    sectionProjects.classList.toggle('dark')
})