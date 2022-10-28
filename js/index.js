var p1 = document.getElementsByTagName("p")[0];
p1.addEventListener("click", function() {
    p1.innerHTML = "js更改之后的内容 小凯";
    p1.style.backgroundColor = "yellow";
    p1.style.color = "green";
});
var span1 = document.getElementsByTagName("span")[0];
span1.addEventListener("click", function() {
    span1.innerHTML = "js更改之后的内容 小凯";
    span1.style.backgroundColor = "yellow";
    span1.style.color = "green";
});
var p4 = document.getElementsByTagName("p")[3];
p4.addEventListener("click", function() {
    p4.innerHTML = "js更改之后的内容 小赵";
    p4.style.backgroundColor = "red";
    p4.style.color = "skyblue";
});