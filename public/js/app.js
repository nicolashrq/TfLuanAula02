const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;

        liElementCollection.forEach((li) => {
            li.classList.remove("selected");
        });

        liElement.classList.add("selected");
    });
});