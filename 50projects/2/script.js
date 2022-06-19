console.log("hello");

const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log("123");
    // removeActiveClass();
    //panel.classList.add("active");
  });
});

function removeActiveClass(params) {}
