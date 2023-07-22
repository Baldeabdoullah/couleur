// creer trois variables pour stocker trois chiffres aleatoires

setInterval(() => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  // donner au body une couleure de fond en rgb
  const color = `rgb(${r}, ${g}, ${b})`;
  console.log(color);

  document.body.style.background = color;

  // montrer sur le body la couleure

  document.body.innerHTML = `<h2> ${color} </h2>`;
}, 2000);
