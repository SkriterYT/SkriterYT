function adaptTitlePosition() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var title = document.querySelector('.v9_2');

  var titleWidth = title.offsetWidth;
  var titleHeight = title.offsetHeight;
  var titleTop = title.getBoundingClientRect().top;
  var titleLeft = title.getBoundingClientRect().left;

  var extraOffsetY = 0; // Величина смещения по оси Y
  var extraOffsetX = 0; // Величина смещения по оси X

  if (titleTop + titleHeight > windowHeight) {
    extraOffsetY = titleTop + titleHeight - windowHeight + 10; // Здесь можно изменять величину смещения по оси Y
  }

  if (titleLeft + titleWidth > windowWidth) {
    extraOffsetX = titleLeft + titleWidth - windowWidth + 10; // Здесь можно изменять величину смещения по оси X
  }

  title.style.marginTop = '-' + extraOffsetY + 'px';
  title.style.marginLeft = '-' + extraOffsetX + 'px';
}

window.addEventListener('load', adaptTitlePosition);
window.addEventListener('resize', adaptTitlePosition);


window.addEventListener('load', adaptTitlePosition);
window.addEventListener('resize', adaptTitlePosition);


function adaptButtonPosition() {
  var windowHeight = window.innerHeight;
  var button = document.querySelector('.v11_5');

  var buttonHeight = button.offsetHeight;
  var buttonTop = button.getBoundingClientRect().top;

  if (buttonTop + buttonHeight > windowHeight) {
    var extraOffset = buttonTop + buttonHeight - windowHeight + 10; // Здесь можно изменить величину поднятия кнопки

    button.style.transform = 'translateY(-' + extraOffset + 'px)';
  } else {
    button.style.transform = 'translateY(0)';
  }
}

window.addEventListener('load', adaptButtonPosition);
window.addEventListener('resize', adaptButtonPosition);



function adaptLayout() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  if (windowWidth < 768) {
    // Применить стили для мобильного устройства
    document.querySelector('.v2_16').style.height = 'calc(100vh - 127px)';
    document.querySelector('.v11_5').style.top = 'auto';
    document.querySelector('.v11_5').style.bottom = '20px';
  } else if (windowWidth >= 768 && windowWidth < 1200) {
    // Применить стили для планшета
    document.querySelector('.v2_16').style.height = 'calc(100vh - 127px)';
    document.querySelector('.v11_5').style.top = 'auto';
    document.querySelector('.v11_5').style.bottom = '40px';
  } else {
    // Применить стили для десктопа
    document.querySelector('.v2_16').style.height = 'calc(100vh - 127px)';
    document.querySelector('.v11_5').style.top = '810px';
    document.querySelector('.v11_5').style.bottom = 'auto';
  }
  
  
  
  
}

window.addEventListener('load', adaptLayout);
window.addEventListener('resize', adaptLayout);
