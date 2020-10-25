let color = ["yellow", "red", "green", "blue", "black", "orange", "pink"];
let i = -1;
document.querySelector("button").addEventListener("click", function(){
  i = 1 < color.length ?  ++i : 0;
  document.querySelector("body").style.background = color[i]
})