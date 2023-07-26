const openMenu = () => {
    document.querySelector('.backdrop').classList.add('active');
    document.querySelector('aside').classList.add('active');
};

const closeMenu = () => {
    document.querySelector('.backdrop').classList.remove('active');
    document.querySelector('aside').classList.remove('active');
};

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
};

document.querySelector('aside button.close').onclick = e => {
    e.preventDefault();
    closeMenu();
};

document.querySelector('.backdrop').onclick = e => {
    e.preventDefault();
    closeMenu();
};
