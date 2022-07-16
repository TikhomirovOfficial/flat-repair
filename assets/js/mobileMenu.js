let isMobile = window.screen.width < 734;

const setHeader = () => {
    if(isMobile) {
        $('.welcome__top').html(`
       <div class="wrapper">
             <div class="logo">
                <img src="assets/img/logo.png" alt="">
                <div>
                    <h1>РЕМОНТ КВАРТИР</h1>
                    <h3>В Петрозаводске и Калерии</h3>
                </div>
            </div>
            <img  src="assets/img/icons/burger.svg" class="burger__menu" alt="">
        </div>
    `)
    } else {
        $('.welcome__top').html(`
         <div class="logo">
            <img src="assets/img/logo.png" alt="">
            <h1>РЕМОНТ КВАРТИР</h1>
            <h3>В Петрозаводске и Калерии</h3>
        </div>
        <div class="nav">
            <div class="nav__left">
                <div class="nav__rel">
                    <a class="nav__rel-item scroll-to" href="#services" >
                        <h4>услуги</h4>
                    </a>
                    <a class="nav__rel-item scroll-to" href="#prices">
                        <h4>цены</h4>
                    </a>
                    <a class="nav__rel-item scroll-to" href="#projects">
                        <h4>Наши работы</h4>
                    </a>
                    <hr>
                </div>
                <div class="nav__social">
                    <a href="">
                        <img src="assets/img/icons/vk.svg">
                    </a>
                    <a href="">
                        <img src="assets/img/icons/telegram.svg">
                    </a>
                    <a href="">
                        <img src="assets/img/icons/whatsup.svg">
                    </a>
                </div>
            </div>
            <a href="#order" class="btn__order scroll-to">
                заказать звонок
            </a>
        </div>
    `)
    }
}
window.onresize = () => {
    isMobile = window.screen.width < 734;
    setHeader()
}
setHeader()
const menu = document.querySelector('.menu')
$('.burger__menu').click(()=> {
    if (menu.classList.contains('menu-opened')) {
        closeMenu()
    } else {
        menu.classList.add('menu-opened')
    }
})

$('.menu > a').click(()=> {
    closeMenu()
})

const closeMenu = () => menu.classList.remove('menu-opened')

$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 500);
});