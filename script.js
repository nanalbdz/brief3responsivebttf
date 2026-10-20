const boutonMenu = document.querySelector("#menu-toggle");
const navigation = document.querySelector("header nav");

boutonMenu.addEventListener("click", function() {
    navigation.classList.toggle("menu-ouvert");

    const menuOuvert = navigation.classList.contains("menu-ouvert");

    boutonMenu.setAttribute("aria-expanded", menuOuvert);
});
