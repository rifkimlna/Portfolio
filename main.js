// toggle & responsive
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// clear form before unload

window.onbeforeunload = () => {
    for (const formn of document.getElementsByTagName("form")) {
        formn.reset();
    }
};

