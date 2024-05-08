window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    // const toTop = document.querySelector('#to-top');

    // Add Line
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');

        // console.log('offset');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

/* Active Menu */
const navList = document.querySelector('#nav-list');

navList.addEventListener(
    'click',
    (event) => {
        // event.preventDefault();

        event.target.addEventListener('click', (event) => {
            const activeElement = document.querySelector(
                '#nav-list li a.active'
            );

            // console.log(event.target);
            // Clean Active Element
            activeElement.classList.remove('active');
            // Add New Active Element
            event.target.classList.add('active');
        });
    },
    true
);

// Character list
const navigationItemsParent = document.querySelector('#character-list ul');
const cardList = document.querySelector('#character-card');

navigationItemsParent.addEventListener(
    'click',
    function (event) {
        const activeElement = document.querySelector(
            '#character-list ul li.active'
        );

        if (event.target.nodeName === 'LI') {
            // Clean Active Element
            activeElement.classList.remove('active');
            // Add New Active Element
            event.target.classList.add('active');

            // Delete Active Card
            const activeCard = document.querySelector(
                '#character-card div.active'
            );
            // console.log(activeCard === null);

            activeCard.classList.remove('active');

            // if (activeCard === null)

            if (event.target.id === 'list-kaho-hoshita') {
                document.querySelector('#kaho-hoshita').classList.add('active');
            } else if (event.target.id === 'list-kozue-otomune') {
                document
                    .querySelector('#kozue-otomune')
                    .classList.add('active');
            } else if (event.target.id === 'list-sayaka-murano') {
                document
                    .querySelector('#sayaka-murano')
                    .classList.add('active');
            } else if (event.target.id === 'list-tsuzuri-yugiri') {
                document
                    .querySelector('#tsuzuri-yugiri')
                    .classList.add('active');
            } else if (event.target.id === 'list-rurino-osawa') {
                document.querySelector('#rurino-osawa').classList.add('active');
            } else if (event.target.id === 'list-megumi-fujishima') {
                document
                    .querySelector('#megumi-fujishima')
                    .classList.add('active');
            } else if (event.target.id === 'list-ginko-momose') {
                document.querySelector('#ginko-momose').classList.add('active');
            } else if (event.target.id === 'list-kosuzu-kachimachi') {
                document
                    .querySelector('#kosuzu-kachimachi')
                    .classList.add('active');
            } else if (event.target.id === 'list-hime-anyoji') {
                document.querySelector('#hime-anyoji').classList.add('active');
            }
        }
        // console.log(event.target.nodeName);

        // console.log(activeElement);
        // console.log('clicked parent');

        // console.log(event.target);
    },
    true
);

/* Hamburger Action */
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (event) => {
    const listMenu = document.querySelector('nav.nav-list');
    const listMenuDetail = document.querySelectorAll('nav.nav-list ul li');

    listMenu.style.display =
        listMenu.style.display === 'block' ? 'none' : 'block';

    listMenu.classList.add('fadeIn');

    // console.log(listMenuDetail);
    listMenuDetail.forEach((each) => each.classList.add('fadeInTop'));
});

// navigationItemsChild.addEventListener('click', function () {
//     console.log('child');
// });

// console.log(navigationItems);

// function toggleActiveNavItem() {
// navigationItems.forEach((item) => {
//     item.addEventListener('click', function () {
//         // addClickEventToNavitation(item);
//         // console.log(item);
//         const current = document.getElementsByClassName('active');
//         // console.log(current);
//         current[0].className = current[0].className.replace('active', '');
//         this.className += 'active';
//     });
// });
// }

// function addClickEventToNavitation(item) {
//     navigationItems.forEach((individualNavigationItem) => {
//         if (individualNavigationItem != item) {
//             individualNavigationItem.classList.remove('active');
//         }

//         if (!item.classList.contains('active')) {
//             individualNavigationItem.classList.add('active');
//         }
//     });
// }

/* Carousel */
document.querySelectorAll('.carousel').forEach((carousel) => {
    const items = carousel.querySelectorAll('.subunit-list');

    console.log(items);

    const buttonsHTML = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    // console.log(buttonsHTML);

    carousel.insertAdjacentHTML(
        'beforeend',
        `
        <div class="carousel__nav">
        ${buttonsHTML.join('')}
        </div>
        `
    );

    const buttons = carousel.querySelectorAll('.carousel__button');

    // console.log(buttons);
    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            // un-select all the items
            items.forEach((item) => {
                console.log(item);
                item.classList.remove('subunit-list--selected');
            });

            buttons.forEach((button) => {
                button.classList.remove('carousel__button--selected');
            });

            items[i].classList.add('subunit-list--selected');
            buttons[i].classList.add('carousel__button--selected');
        });
    });

    const leftClick = document.querySelector('.carousel__nav__arrow_left');

    leftClick.addEventListener('click', () => {
        // console.log('click');
        let activeIndex = 0;
        items.forEach((each, i) => {
            // var isActive = document.querySelector('.item').classList.contains('active');
            // console.log(each.classList.contains('subunit-list--selected'), i);
            if (each.classList.contains('subunit-list--selected')) {
                activeIndex = i;
            }
        });
        console.log(activeIndex);

        items[activeIndex].classList.remove('subunit-list--selected');
        buttons[activeIndex].classList.remove('carousel__button--selected');

        if (activeIndex === 0) {
            items[items.length - 1].classList.add('subunit-list--selected');
            buttons[items.length - 1].classList.add(
                'carousel__button--selected'
            );
        } else {
            items[activeIndex - 1].classList.add('subunit-list--selected');
            buttons[activeIndex - 1].classList.add(
                'carousel__button--selected'
            );
        }
    });

    const rightClick = document.querySelector('.carousel__nav__arrow_right');
    rightClick.addEventListener('click', () => {
        // console.log('click');
        let activeIndex = 0;
        items.forEach((each, i) => {
            // var isActive = document.querySelector('.item').classList.contains('active');
            // console.log(each.classList.contains('subunit-list--selected'), i);
            if (each.classList.contains('subunit-list--selected')) {
                activeIndex = i;
            }
        });
        console.log(activeIndex);

        items[activeIndex].classList.remove('subunit-list--selected');
        buttons[activeIndex].classList.remove('carousel__button--selected');

        if (activeIndex === items.length - 1) {
            items[0].classList.add('subunit-list--selected');
            buttons[0].classList.add('carousel__button--selected');
        } else {
            items[activeIndex + 1].classList.add('subunit-list--selected');
            buttons[activeIndex + 1].classList.add(
                'carousel__button--selected'
            );
        }
    });
    // const rightleftClick = document.querySelector('.carousel__nav__arrow_left');

    //     // console.log(buttonsHTML);

    items[0].classList.add('subunit-list--selected');
    buttons[0].classList.add('carousel__button--selected');

    // console.log(buttons[0]);
});
