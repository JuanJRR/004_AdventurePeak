// menu de navegación}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(item)

        navLink.forEach(otherItem => {
            otherItem.classList.remove('current-page');
        });

        item.classList.add('current-page');

        console.log(item)
    });
});
