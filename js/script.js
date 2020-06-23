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
      div.classList.add(this.selector);
      div.style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px;';
      div.textContent = prompt('Введите текст для созданного элемента div:', '');
      document.body.append(div);
    } else if (this.selector[0] === '#') {
      let paragraph = document.createElement('p');
      paragraph.setAttribute('id', this.selector);
      paragraph.style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px;';
      paragraph.textContent = prompt('Введите текст для созданного элемента p:', '');
      document.body.append(paragraph);
    }
  };
};


//Создаем объекты
const domElementDiv = new DomElement('.block', 100, 100, 'blue', 14);
const domElementParagraph = new DomElement('#best', '50px', '100px', 'green', '14px');


domElementDiv.createElement();
domElementParagraph.createElement();