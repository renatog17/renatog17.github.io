const btnAboutMe = document.getElementById('about-me')
const sectionTarget = document.getElementById('s-quem-sou')
btnAboutMe.addEventListener('click', (event)=>{
    event.preventDefault()
    sectionTarget.scrollIntoView({behavior: 'smooth'})
})