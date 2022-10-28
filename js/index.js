var p1 = document.getElementsByTagName("p")[0];
p1.addEventListener("click", function () {
  p1.innerHTML = "js更改之后的内容 小凯";
  p1.style.backgroundColor = "yellow";
  p1.style.color = "green";
});
