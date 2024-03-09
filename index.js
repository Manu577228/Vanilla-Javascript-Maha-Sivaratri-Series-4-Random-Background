const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.style.background = randomBackground();
});

const randomBackground = () => {
  return `hsl(${~~(Math.random() * 360)}, 100%, 50%)`;
};
