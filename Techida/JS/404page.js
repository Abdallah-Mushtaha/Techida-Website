window.onload = () => {
    if (localStorage.getItem('mode') == 'dark') {
        document.body.classList.add('dark')


    } else {
        document.body.classList.remove('dark')


    }

}