document.addEventListener("DOMContentLoaded", (event) => {
    const noButton = document.getElementById("noButton")
    const yesButton = document.getElementById("yesButton")
    const question = document.getElementById("question")
    const gif = document.getElementById("gif")
  
    // Preload the second GIF
    const secondGif = new Image()
    secondGif.src =
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bugcat-spin-3eFqUPzVlKV1ODtKciuPJAsokWWKVZ.gif"
  
    function moveButton() {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const buttonWidth = noButton.offsetWidth
      const buttonHeight = noButton.offsetHeight
  
      // Add padding from edges
      const padding = 50
      const maxX = windowWidth - buttonWidth - padding
      const maxY = windowHeight - buttonHeight - padding
  
      const randomX = Math.max(padding, Math.floor(Math.random() * maxX))
      const randomY = Math.max(padding, Math.floor(Math.random() * maxY))
  
      noButton.style.left = randomX + "px"
      noButton.style.top = randomY + "px"
    }
  
    noButton.addEventListener("mouseover", moveButton)
    noButton.addEventListener("click", moveButton)
  
    yesButton.addEventListener("click", () => {
      question.textContent = "Let's go!"
      gif.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bugcat-spin-3eFqUPzVlKV1ODtKciuPJAsokWWKVZ.gif"
      yesButton.style.display = "none"
      noButton.style.display = "none"
    })
  
    // Set initial position for the "No" button
    setTimeout(moveButton, 0)
  })
  
  
