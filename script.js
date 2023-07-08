function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light-gp.png")
  } else {
    img.setAttribute("src", "./assets/avatar-gp.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Giovanni Pacelli sorrindo, utilizando óculos, camiseta preta em seu quarto."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Giovanni Pacelli sorrindo, utilizando blusa azul marinho, sentado em uma cadeira em seu quarto."
    )
  }
}
