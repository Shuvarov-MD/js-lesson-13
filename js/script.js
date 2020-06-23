document.addEventListener('DOMContentLoaded', function() {

  'use strict';

  //Класс DomElement
  const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = parseFloat(height);
    this.width = parseFloat(width);
    this.bg = bg;
    this.fontSize = parseFloat(fontSize);

    this.createElement = function() {
      if (this.selector[0] === '.') {
        let div = document.createElement('div');
        div.classList.add(this.selector.slice(1));
        div.style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px; position: absolute';
        document.body.append(div);
      } else if (this.selector[0] === '#') {
        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', this.selector.slice(1));
        paragraph.style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px; position: absolute';
        document.body.append(paragraph);
      }
    };
  };


  //Создаем объекты
  const domElementDiv = new DomElement('.block', 100, 100, 'red', 14);

  domElementDiv.createElement();


  let top = 0,
    left = 0,
    block = document.querySelector('.block');

  document.body.style.margin = '0';

  
  //Отслеживаем нажатие стрелок
  document.addEventListener('keydown', function(event) {
    switch (event.key) {
      case 'ArrowUp':
        top -= 10;
        block.style.top = top + 'px';
        break;
      case 'ArrowLeft':
        left -= 10;
        block.style.left = left + 'px';
        break;
      case 'ArrowDown':
        top += 10;
        block.style.top = top + 'px';
        break;
      case 'ArrowRight':
        left += 10;
        block.style.left = left + 'px';
        break;
    }
  });

});