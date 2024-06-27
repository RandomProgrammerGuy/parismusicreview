window.onload = function () {
    const expandmenubutton = document.querySelector('.chevron');
    const sidebar = document.getElementById('sidebar')

    expandmenubutton.addEventListener('click', function () {
        expandmenubutton.classList.toggle('is-active')
        sidebar.classList.toggle('sidebar')
        sidebar.classList.toggle('sidebaractive')
    })
}