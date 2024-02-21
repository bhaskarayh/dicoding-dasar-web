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
