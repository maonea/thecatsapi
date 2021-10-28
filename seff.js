const allBoxes = document.createElement('div')
allBoxes.className = 'allBoxes'
document.body.appendChild(allBoxes)

window.addEventListener('scroll', checkBoxes)

fetch('https://api.thecatapi.com/v1/breeds?limit=10', {
  headers: {
    'x-api-key': '08571599-a7ea-492d-9215-af3382b45bd0',
  },
})
  .then((response) => response.json())
  .then((data) => {
    setCats(data)
  })

function setCats(cats) {
  cats.forEach((cat) => {
    const setBox = document.createElement('div')
    setBox.setAttribute('class', 'box')
    allBoxes.appendChild(setBox)

    console.log(setBox)
    const getImg = cat.image.url
    const getName = cat.name
    const getOrigin = cat.origin
    //   console.log(getImg, getName, getOrigin)

    let catDetails = document.createElement('div')
    catDetails.setAttribute('class', 'cat-container')
    setBox.appendChild(catDetails)

    let imgage = document.createElement('img')
    imgage.src = getImg
    let catDescription = document.createElement('div')
    catDescription.setAttribute('class', 'description-container')

    let name = document.createElement('h3')
    name.innerHTML = getName
    let description = document.createElement('p')
    description.innerHTML = getOrigin

    catDetails.appendChild(imgage)
    catDetails.appendChild(catDescription)

    catDescription.appendChild(name)
    catDescription.appendChild(description)
  })
  checkBoxes()
  console.log(cats)
}

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.8
  const all = document.querySelectorAll('.box')

  all.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
