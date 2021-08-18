const aboutButton = document.querySelector('.about-button')
const projectsButton = document.querySelector('.projects-button')
const backgroundButton = document.querySelector('.background-button')
const contactButton = document.querySelector('.contact-button')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const downProjectButton = document.querySelector('.down-project')
const downBackgroundButton = document.querySelector('.down-background')
const downContactButton = document.querySelector('.down-contact')

const scrollTo = (event) => {
  console.log('scrolling')
  const target = event.target.id
  console.log(target)
  document.querySelector(`.${target}`).scrollIntoView({
    behavior: 'smooth'
  })
}

aboutButton.addEventListener('click', scrollTo)
projectsButton.addEventListener('click', scrollTo)
backgroundButton.addEventListener('click', scrollTo)
contactButton.addEventListener('click', scrollTo)
upButton.addEventListener('click', scrollTo)
downButton.addEventListener('click', scrollTo)
downProjectButton.addEventListener('click', scrollTo)
downBackgroundButton.addEventListener('click', scrollTo)
downContactButton.addEventListener('click', scrollTo)