
let outer_space = document.getElementById('outer-space')

let space_height = outer_space.offsetHeight
let space_width = outer_space.offsetWidth


function addStars(noOfStars) {
  for (var i = 0; i <= noOfStars; i++) {
    let star = document.createElement('div')
    star.className = starSize(i)

    let leftOffset = Math.ceil(Math.random() * space_width - 100)
    let topOffset = Math.ceil(Math.random() * space_height)

    star.style.left = leftOffset + 'px'
    star.style.top = topOffset + 'px'

    outer_space.appendChild(star)
  }

  moveStars(1)
}
addStars(50)




function moveStars(speed) {

  let stars = document.getElementsByClassName('star')
  setInterval(function() {

    for (var i = 0; i < stars.length; i++) {
      let star = stars[i]
      let currLeft = parseInt(star.style.left)
      let newLeft = currLeft + customSpeed(i) + speed

      if (newLeft > space_width) {
        newLeft = 0
      }
      star.style.left = newLeft + "px"
    }
  }, 20)
}

function starSize(i) {
  if (i % 2 == 0) {
    return 'star'
  } else {
    return 'star small-star'
  }
}

function customSpeed(i) {
  if (i % 2 == 0) {
    return 2
  } else {
    return 1
  }
}