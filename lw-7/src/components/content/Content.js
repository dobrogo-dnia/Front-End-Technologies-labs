import React, { Component } from 'react';
import Image from '../image/Image';
import './styles/style.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.n = 9;
    this.targetIndex = (this.n % 10) + 1;
  }

  toggleColor(element, colorClass) {
    element.classList.toggle(colorClass);
  }

  componentDidMount() {
    const targetElementId = document.getElementById(`item-${this.targetIndex}`);
    const nextElement = document.querySelector(`#item-${this.targetIndex + 1}`);

    if (targetElementId) {
      targetElementId.addEventListener('click', () => {
        this.toggleColor(targetElementId, 'bg-color-1');
      });
    }

    if (nextElement) {
      nextElement.addEventListener('click', () => {
        this.toggleColor(nextElement, 'bg-color-2');
      });
    }

    const imageContainer = document.querySelector('a[href="https://rada-uzhgorod.gov.ua"]');

    const addImage = () => {
      const newImage = document.createElement('img');
      
      newImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80%2C_%D0%B0%D0%B5%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE_2.jpg/1280px-%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80%2C_%D0%B0%D0%B5%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE_2.jpg';
      newImage.alt = 'Ужгородський кафедральний собор';
      newImage.width = 800;
      imageContainer.appendChild(newImage);
  };

    const increaseImage = () => {
      const image = document.getElementById('image');
      if (image) {
        image.width += 50;
      }
    };

    const decreaseImage = () => {
      const image = document.getElementById('image');
      if (image && image.width > 50) {
        image.width -= 50;
      }
    };

    const removeImage = () => {
      const image = imageContainer.querySelector('img');
      if (image) {
          image.remove();
      }
    };

    document.getElementById('add').addEventListener('click', addImage);
    document.getElementById('increase').addEventListener('click', increaseImage);
    document.getElementById('decrease').addEventListener('click', decreaseImage);
    document.getElementById('remove').addEventListener('click', removeImage);
  }

  render() {
    return (
      <div>
        <p id="item-2">
            Місце народження: 19 лютого, 2005 року, м. Добропілля
        </p>
        <p id="item-3">
            Освіта: Добропільська ЗОШ 1-3 ступенів, №3;
        </p>
        <blockquote id="item-4">
            НТУУ "КПІ", м. Київ
        </blockquote>
        <p id="item-5">
            Хобі:
        </p>
        <ul id="u-list">
            <li id="item-7">Велоспорт</li>
            <li id="item-8">Комп'ютерні ігри</li>
            <li id="item-9">Читання</li>
        </ul>
        <p id="item-10">
            Улюблені книги:
        </p>
        <ol>
            <li id="item-11">"1984", Джордж Орвелл</li>
            <li>"Мистецство війни", Сунь-дзи</li>
            <li>"Мандрівний замок Хаула", Діана Вінн Джонс</li>
        </ol>
        <p>Ужгород — місто на заході України, обласний центр Закарпатської області, центр Ужгородської міської громади, Ужгородського району та Ужгородської агломерації.<br />
            Розташоване на річці Уж біля підніжжя Українських Карпат, за 811 км від Києва, на кордоні зі Словаччиною.<br />
            <br />
            Є найменшим обласним центром України, проте має багату й давню історію. Засноване у IX столітті. Місто тимчасово перебувало під владою Угорщини, а згодом — Австро-Угорщини. Було тривалий час фортецею роду Другетів.<br />
            Ужгород розвивався як промисловий та культурний центр Закарпаття. У 1919 році був столицею Підкарпатської Русі у складі Чехословаччини, з 1991 року — у складі Незалежної України.<br />
            <br />
            Серед найвідоміших місць Ужгорода є його замок, туристів також приваблюють костел, синагога та резиденція єпископа. У 1646 році під егідою Ватикану проголошено Ужгородську унію та утворено греко-католицьку церкву на Закарпатті.<br />
        </p>
    <Image />
        <div>
          <button id="add">Додати зображення</button>
          <button id="increase">Збільшити зображення</button>
          <button id="decrease">Зменшити зображення</button>
          <button id="remove">Видалити зображення</button>
        </div>
      </div>
    );
  }
}

export default Content;