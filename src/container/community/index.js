import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Community')

page.append(title)

const community__block = createElement(
  'div',
  'community__block',
)

page.append(community__block)

const tab = createElement('div', 'tab')

page.append(tab)

const tab__check = createElement('div', 'tab__check')

const tab__desc = createElement(
  'p',
  'tab__desc--1',
  'База знань',
)

const tab__divider = createElement('div', 'tab__divider--1')

tab__check.append(tab__desc, tab__divider)

tab.append(tab__check)

const tab__check_2 = createElement('div', 'tab__check')

const tab__desc_2 = createElement(
  'p',
  'tab__desc--2',
  'Інформація',
)

const tab__divider_2 = createElement(
  'div',
  'tab__divider--2',
)

tab__check_2.append(tab__desc_2, tab__divider_2)

tab.append(tab__check_2)

community__block.append(tab)

const POST_LIST = [
  {
    img: 'https://picsum.photos/100/100',

    title: 'Що таке база знань?',
    info: 'База знаний — база данных,содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом  решения предыдущих задач.',
  },
  {
    button: { text: 'Перейти до ком юніті у Телеграм' },
  },
]

const post__list = createElement('main', 'post__list')

const img__info = createElement('div', 'img__info')

const img = createElement('img', 'img')

img.src = POST_LIST[0].img

img__info.append(img)

const desc__info = createElement('div', 'desc__info')

const info__title = createElement(
  'h1',
  'info__title',
  POST_LIST[0].title,
)

const info__desc = createElement(
  'p',
  'info__desc',
  POST_LIST[0].info,
)

desc__info.append(info__title, info__desc)

const button__info = createElement(
  'button',
  'button__info',
  POST_LIST[1].button.text,
)

post__list.append(img__info, desc__info, button__info)

page.append(post__list)
