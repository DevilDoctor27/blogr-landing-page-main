const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
})

const accordionToggle = document.querySelectorAll(".nav__item")

accordionToggle.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.contains("active")) {
            element.classList.remove("active")
        } else {
            accordionToggle.forEach(item => {
                item.classList.remove("active")
            })
            element.classList.add("active")
        }
    })
});