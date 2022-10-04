a = document.getElementById("a")
b = document.getElementById("b")
c = document.getElementById("c")


a.addEventListener('mouseover', (event) => {
  a.innerHTML = ">1st project<"
});
a.addEventListener('mouseout', (event) => {
  a.innerHTML = "1st project"
});
b.addEventListener('mouseover', (event) => {
  b.innerHTML = ">2nd project<"
});
b.addEventListener('mouseout', (event) => {
  b.innerHTML = "2nd project"
});
c.addEventListener('mouseover', (event) => {
  c.innerHTML = ">3rd project<"
});
c.addEventListener('mouseout', (event) => {
  c.innerHTML = "3rd project"
});

//smowrt