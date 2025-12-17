
function toggleTheme(){
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
window.onload = () => document.body.classList.add("light");
