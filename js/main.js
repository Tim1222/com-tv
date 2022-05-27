// закрыть предупреждение начало
headerUpBtn = document.querySelector('.header_up-btn');
headerUp = document.querySelector('.header_up');


headerUpBtn.onclick = function() {
    headerUp.style.display = 'none';
}

line = document.querySelector('.header__menu-btn');
line.onclick = function(){
    line.style.display = 'block';
}



