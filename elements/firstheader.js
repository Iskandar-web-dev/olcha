let main = document.querySelector('main')

//create
let header = document.createElement('header')
let left = document.createElement('div')
let right = document.createElement('div')
let btnLeft1 = document.createElement('button')
let btnLeft2 = document.createElement('button')
let btnLeft3 = document.createElement('button')
let leftSpan = document.createElement('span')
let rightP = document.createElement('p')
let rightBtn = document.createElement('button')
let rightSpan1 = document.createElement('span')
let rightSpan2 = document.createElement('span')
let rightSpan3 = document.createElement('span')

//styling
header.classList.add('firstHeader')
left.classList.add('left')
right.classList.add('right')
btnLeft1.innerHTML = '0% Рассрочка'
btnLeft2.innerHTML = 'Скидки'
btnLeft3.innerHTML = 'Розыгрыши'
leftSpan.innerHTML = 'Карта сайта'
rightP.innerHTML = '+998 (71)202021'
rightBtn.innerHTML = 'Продавайте на olcha'
rightSpan1.innerHTML = 'Узб'
rightSpan2.innerHTML = "O'z"
rightSpan3.innerHTML = 'Рус'
//append
right.append(rightP, rightBtn, rightSpan1, rightSpan2, rightSpan3)
left.append(btnLeft1, btnLeft2, btnLeft3, leftSpan)
header.append(left, right)




//create
let header2 = document.createElement('div')
let left2 = document.createElement('div')
let center = document.createElement('div')
let right2 = document.createElement('div')
let logoLeft = document.createElement('img')
let btnLeft = document.createElement('button')
let centerinput = document.createElement('input')
let centerBtn = document.createElement('button')
let centerBtnImg = document.createElement('img')
//create MinDiv
let mindivR1 = document.createElement('div')
let mindivR1img = document.createElement('img')
let mindivRspan1 = document.createElement('span')

let mindivR2 = document.createElement('div')
let mindivR2img = document.createElement('img')
let mindivRspan2 = document.createElement('span')

let mindivR3 = document.createElement('div')
let mindivR3img = document.createElement('img')
let mindivRspan3 = document.createElement('span')

let mindivR4 = document.createElement('div')
let mindivR4img = document.createElement('img')
let mindivRspan4 = document.createElement('span')

//styling
header2.classList.add('secondHeader')
left2.classList.add('left')
center.classList.add('center')
right2.classList.add('right')
mindivR1.classList.add('mindivR')
mindivR2.classList.add('mindivR')
mindivR3.classList.add('mindivR')
mindivR4.classList.add('mindivR')
btnLeft.innerHTML = 'Каталог'

mindivRspan1.innerHTML = 'Сравнение'
mindivRspan2.innerHTML = 'Избранные'
mindivRspan3.innerHTML = 'Корзина'
mindivRspan4.innerHTML = 'Войти'
logoLeft.src = './assets/icons/olcha.svg'
mindivR1img.src = './assets/icons/bar-chart-2.svg'
mindivR2img.src = './assets/icons/heart.svg'
mindivR3img.src = './assets/icons/shopping-cart.svg'
mindivR4img.src = './assets/icons/user.svg'
centerBtnImg.src = './assets/icons/search.svg'
centerinput.setAttribute("placeholder", 'Поиск по катологу')

mindivR4.append(mindivR4img, mindivRspan4)
mindivR3.append(mindivR3img, mindivRspan3)
mindivR2.append(mindivR2img, mindivRspan2)
mindivR1.append(mindivR1img, mindivRspan1)
right2.append(mindivR1, mindivR2, mindivR3, mindivR4)
centerBtn.append(centerBtnImg)
center.append(centerinput, centerBtn)
left2.append(logoLeft, btnLeft)
header2.append(left2, center, right2)
main.append(header, header2)
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 let tovars = document.querySelector('.tovars')
  for(let i = 0; i <= 10; i++) {
     
 //create
 let tovar = document.createElement('div')
 let tovarImg = document.createElement('img')
 let footer = document.createElement('footer')
 let nameTovar = document.createElement('p')
 let price = document.createElement('span')
 let kredit = document.createElement('button')
 let buy = document.createElement('button')
 let buyImg = document.createElement('img')
 let butkredit = document.createElement('button')
 //styling
 tovar.classList.add('tovar')
 tovarImg.classList.add('tovarImg')
 footer.classList.add('down')
 kredit.classList.add('kredit')

 buy.classList.add('buy')
 butkredit.classList.add('butkredit')
 nameTovar.innerHTML = 'Apple iPhone 13 mini 128GB'
 price.innerHTML = '9 420 000 сум'
 kredit.innerHTML = '891 000 сум 12мес'
 butkredit.innerHTML = 'В рассрочку'
 
 tovarImg.src = './assets/img/iphone.jpeg'
 buyImg.src = './assets/icons/shopping-cart.svg'

//append
buy.append(buyImg)
footer.append(nameTovar, price, kredit, buy, butkredit )
tovar.append(tovarImg, footer)
tovars.append(tovar)


  }
