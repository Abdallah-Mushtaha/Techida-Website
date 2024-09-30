AOS.init();

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





//  Single page application  in the same page

function loadPage(page) {
    const content = document.getElementById('contentBage');
    if (page === 'home') {
        content.innerHTML = ' ';
    } else if (page === '404page') {
        content.innerHTML = $`    <div class="wrapper">
        <div class="container">
            <img src="../Images/404.png" alt="">
            <h1>PAGE NOT FOUND</h1>
            <p>Sorry, We Can't Find What You Search For, We All Have Bad Days</p>

            <a href="#" class="button b-1">go to home page</a>




        </div>
    </div>`;
    } else if (page === 'contact') {
        content.innerHTML = '<h1>اتصل بنا</h1><p>يمكنك التواصل معنا عبر البريد الإلكتروني.</p>';
    }
}


// تحميل الصفحة الرئيسية عند فتح الموقع
loadPage('home');

//  الغاء ال Spa









// change the dark mood

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


// for logo owelcarousel
$(document).ready(function () {

    $("#clients").owlCarousel({
        items: 6,
        margin: 10,
        loop: true,
        dots: true,
        dotsEach: 3,
        autoplay: true,
        autoplayTimeout: 1000
        ,
        responsive: {
            0: {
                items: 2
            }, 600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // for team  owelCarousel
    $(".groupoftime ").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        dots: true,
        dotsEach: 3,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            }, 600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        autoplayTimeout: 1000
    });



});








// Our Portfolio JS


var $portfolio_row = $('.portfolio-row ').isotope({
    itemSelector: '.box-warrapper',
    layoutMode: 'fitRows'

})


$('.button-group .filter-btn').on('click', function () {
    $('.button-group .filter-btn').removeClass('active')
    $(this).addClass('active');

    var value = $(this).attr('data-filter')
    $portfolio_row.isotope({
        filter: value

    })

})


//  شرح //The End  Our Portfolio JS
// بالطبع، سأشرح لك الكود الذي قمت بمشاركته بالتفصيل. هذا الكود يستخدم مكتبة Isotope لترتيب وتصفية العناصر في صفحة الويب بناءً على الفلاتر المحددة.

// الشرح التفصيلي:
// 1. تعريف متغير $portfolio_row
// javascript
// نسخ الكود
// var $portfolio_row = $('.portfolio-row ').isotope({
//     itemSelector: '.box-warrapper',
//     layoutMode: 'fitRows'
// });
// var $portfolio_row = $('.portfolio-row '): هنا نقوم بتحديد العنصر HTML الذي يحتوي على الصف الذي نريد تطبيق الترتيب والتصفية عليه.
// .portfolio-row: هذه هي الكلاس التي تم تعريفها في HTML لتحديد الصف.
// .isotope({ ... }): هنا نقوم بتهيئة مكتبة Isotope على العنصر المحدد.
// itemSelector: '.box-warrapper': هذه الخاصية تحدد العناصر الفرعية داخل الصف والتي ستتم معالجتها بواسطة Isotope. في هذا المثال، يتم تحديد العناصر التي تحمل الكلاس .box-warrapper.
// layoutMode: 'fitRows': تحدد طريقة ترتيب العناصر. في هذا المثال، يتم استخدام وضع "fitRows" لترتيب العناصر في صفوف.
// 2. إضافة حدث النقر على أزرار الفلترة
// javascript
// نسخ الكود
// $('.button-group .filter-btn').on('click', function () {
//     $('.button-group .filter-btn').removeClass('active');
//     $(this).addClass('active');

//     var value = $(this).attr('data-filter');
//     $portfolio_row.isotope({
//         filter: value
//     });
// });
// $('.button-group .filter-btn').on('click', function () { ... }): هنا نقوم بإضافة مستمع لحدث النقر على الأزرار التي تستخدم للفلترة.

// .button-group .filter-btn: هذه هي الكلاسات المستخدمة لتحديد الأزرار. button-group هي الكلاس الرئيسية التي تحتوي على جميع الأزرار، وfilter-btn هي الكلاس لكل زر فلترة.
// $('.button-group .filter-btn').removeClass('active');: عند النقر على أي زر فلترة، نقوم بإزالة كلاس active من جميع الأزرار. هذا يضمن أن يكون زر واحد فقط نشط في نفس الوقت.

// $(this).addClass('active');: نقوم بإضافة كلاس active للزر الذي تم النقر عليه. هذا يغير مظهر الزر ليظهر كأنه نشط.

// var value = $(this).attr('data-filter');: نقوم بالحصول على قيمة الفلترة من الزر الذي تم النقر عليه. يتم استخدام خاصية data-filter لتحديد قيمة الفلترة المطلوبة.

// $portfolio_row.isotope({ filter: value });: نقوم بتطبيق الفلترة على العناصر داخل الصف باستخدام القيمة التي حصلنا عليها من الزر. مكتبة Isotope تقوم بتصفية العناصر بناءً على هذه القيمة.

// توضيح إضافي:
// Isotope: مكتبة JavaScript تستخدم لترتيب وتصفية العناصر في صفحة الويب بطرق متعددة وسهلة.
// itemSelector: تحدد العناصر التي سيتم ترتيبها أو تصفيتها.
// layoutMode: تحدد طريقة ترتيب العناصر (مثل fitRows، masonry، وغيرها).
// filter: خاصية تحدد العناصر التي سيتم عرضها بناءً على الفلتر المحدد.


//  انتهاء الشرح 


//  counert Bar  learn by Elzero web SchooL



let nums = document.querySelectorAll(".nums .num")
let section = document.querySelector(".counters")
let started = false;//function started ? no





window.onscroll = function () {
    if (window.scrollY >= section.offsetTop || window.scrollY >= 3308.800048828125 || window.scrollY >= 7244.7998046875) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true
    }

    scrollpercentage();


}



function startCount(el) {
    let goal = el.dataset.goal
    let count = setInterval(() => {

        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count)
        }

    }, 2000 / goal);





}


//  darke Mode for brawser



const icon = btn_light_mode.querySelector('i');


window.onload = () => {
    if (localStorage.getItem('mode') == 'dark') {
        document.body.classList.add('dark')
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
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

let btn = querySelector(".navbar-toggler")

btn.addEventListener('onclick', () => {
    if (btn.classList.contains('navbar-expand-lg .navbar-toggler')) {
        btn.classList.add('div#navbarNav')
    }


})





