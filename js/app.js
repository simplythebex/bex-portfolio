const aboutButton = document.querySelector('.about-button')
const projectsButton = document.querySelector('.projects-button')
const backgroundButton = document.querySelector('.background-button')
const contactButton = document.querySelector('.contact-button')

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
