function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar-gp-big.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, utilizando óculos escuros, blusa preta, sem barba em um fundo (gradiente) roxo e azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Giovanni Pacelli digitando, utilizando blusa azul marinho, sentado em uma cadeira em seu quarto."
    )
  }
}
