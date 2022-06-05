document.addEventListener("DOMContentLoaded", () => {

function accordionCollapse() {

    // currentTarget - элемент, на котором в данный момент сработал обработчик (до которого «доплыло» событие).

    const listItems = document.querySelectorAll(".list-items");

    listItems.forEach( item => {
        item.addEventListener("click", function(event) {
            if (event.currentTarget == item) {
                if (!item.classList.contains("active")) {
                    accordionRemoveActive();
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            }
        });
    });
}

accordionCollapse();

function accordionRemoveActive() {
    const listItems = document.querySelectorAll(".list-items");
    listItems.forEach( item => {
        item.classList.remove("active");
    });
}

function scrollTo() {
    const servicesBlock = document.querySelector('.services-info');
    const residensesBlock = document.querySelector('.residences-cards');
    const callBlock = document.querySelector('.call-form');
    const linkButton = document.querySelectorAll("[data-link]");

    linkButton.forEach( link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            if (event.currentTarget == linkButton[0]) {
                servicesBlock.scrollIntoView({block: "center", behavior: "smooth"});
            } else if (event.currentTarget == linkButton[1]) {
                residensesBlock.scrollIntoView({block: "center", behavior: "smooth"});
            } else if (event.currentTarget == linkButton[2]) {
                callBlock.scrollIntoView({block: "center", behavior: "smooth"});
            }
        });
    });
}

scrollTo();

function fixHeader() {
    const header = document.querySelector(".header");
    const about =  document.querySelector(".about");

    window.addEventListener("scroll", function() {
        header.classList.toggle("header_fixed", window.scrollY > 350);
        if (window.scrollY > 350) {
            about.style.paddingTop = "137px";
        } else {
            about.style.paddingTop = "";
        }
    });
}

fixHeader();

function changeButtonStyle() {
    const buttons = document.querySelectorAll(".services-info__buttton");

    buttons.forEach( button => {
        button.addEventListener("click", function(event) {
            if (event.target == button) {
                buttons.forEach( button => {
                    button.classList.remove("services-info__buttton_active");
                });
                button.classList.add("services-info__buttton_active");
            }
        });
    });
}

changeButtonStyle();

});
