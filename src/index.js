console.log('%c HI', 'color: firebrick')

let breedArr = []

function fetchImages() {
  const imgURL = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgURL)
  .then(resp => resp.json())
  .then(resp => {
    const imageContainer = document.getElementById('dog-image-container')
    resp.message.forEach(image => {
      const img = document.createElement('img')
      img.src = image
      imageContainer.appendChild(img)
    })
  })
}

function fetchBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(resp => {
    breedArr = Object.keys(resp.message)
    addBreeds(breedArr)
  })
}

function addBreeds(breedArr) {
  const breedCon = document.querySelector('#dog-breeds')
  breedArr.forEach(breed => {
    const li = document.createElement('li')
    li.textContent = breed
    breedCon.append(li)
  })
}

document.addEventListener('click', event => {
  if(event.target.matches('li')) {
    event.target.style.color ='red'
  }
})

document.addEventListener('change', event => {
  if(event.target.matches('#breed-dropdown')) {
    const breedCon = document.querySelector('#dog-breeds')
    breedCon.innerHTML = ''
    const filteredBreeds = breedArr.filter(breed => breed[0] === event.target.value)
    addBreeds(filteredBreeds)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  fetchImages()
  fetchBreeds()
})