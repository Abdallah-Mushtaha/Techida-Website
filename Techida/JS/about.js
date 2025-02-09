// change the dark mood

AOS.init();

const btn_light_mode = document.getElementById('btn-light-mode');


btn_light_mode.addEventListener('click', () => {
    const icon = btn_light_mode.querySelector('i');


    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.classList.add('fa-sun');
        btn_light_mode.classList.add('sun-background');
        btn_light_mode.classList.add('icon-color');

    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        btn_light_mode.classList.remove('sun-background');
        btn_light_mode.classList.remove('icon-color');


    }
});



// End dark mode 

const icon = btn_light_mode.querySelector('i');

window.onload = () => {
    if (localStorage.getItem('mode') == 'dark') {
        document.body.classList.add('dark')
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        btn_light_mode.classList.add('sun-background');
        btn_light_mode.classList.add('icon-color');

        //امن المتصفح يحمل شوف مساحة التخزرين وجيب عنصر المود اذا اسود ضيف كلاس الاسود

    } else {

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        btn_light_mode.classList.remove('sun-background');
        btn_light_mode.classList.remove('icon-color');


    }

}

document.querySelector('.mode').onclick = () => {
    document.body.classList.toggle('dark')//الزر عند الضغط عليه اول للبدي حول حل الكلاسات لتنسيق الاسود

    if (document.body.classList.contains('dark') && icon.classList.contains('fa-sun')) {
        localStorage.setItem('mode', 'dark')

        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        icon.classList.add('fa-sun');
        btn_light_mode.classList.add('sun-background');
        btn_light_mode.classList.add('icon-color');




        //في مساحة التخزين في عنصر اسمو مود خلي قيمتو دارك
    } else {
        localStorage.setItem('mode', 'ligth')
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        btn_light_mode.classList.remove('sun-background');
        btn_light_mode.classList.remove('icon-color');

    }

}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // يمكنك تغيير القيمة حسب الحاجة
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
/* ********************************************** */
// Scroling bar page
/* ********************************************** */
let scrollpercentage = () => {
    let scrollprogress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");

    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrollValue = Math.round((pos * 100) / calcHeight);
    console.log(scrollValue);


    // تصحيح الخاصية conic-gradient بإزالة المسافة غير الضرورية
    scrollprogress.style.background = `conic-gradient(rgb(31, 168, 79) ${scrollValue}%, rgb(215, 215, 215) ${scrollValue}%)`;

}
window.onscroll = scrollpercentage;