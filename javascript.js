function setTheme() {
    const root = document.documentElement
    root.classList.toggle('dark')
}

document.querySelector(".darkbtn").addEventListener('click', setTheme)