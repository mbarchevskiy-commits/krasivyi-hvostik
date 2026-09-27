const prices = [
  {id:'decorative',name:'Декоративные породы',cols:['Гигиена','Комплекс'],items:[
    ['Йоркширский терьер','2200 ₽','2800 ₽'],['Бивер-йорк','2200 ₽','2800 ₽'],['Бишон-фризе','2800 ₽','3600 ₽'],['Мальтийская болонка','2200 ₽','2900 ₽'],['Мальтипу','2400 ₽','3100 ₽'],['Папийон','2100 ₽','2700 ₽'],['Пекинес','2700 ₽','3200 ₽'],['Русская болонка','2300 ₽','2900 ₽'],['Той-терьер','1700 ₽','2400 ₽'],['Чихуахуа','1800–2000 ₽','2500–2800 ₽'],['Цветная болонка','2300 ₽','2900 ₽'],['Ши-тцу','2600 ₽','3200 ₽'],['Японский хин','2600 ₽','3500 ₽']
  ]},
  {id:'poodles',name:'Пудели',cols:['Гигиена','Комплекс'],items:[
    ['Пудель королевский / лабрадудль 46–62 см','3500 ₽','6500 ₽'],['Пудель средний 35–45 см','3000 ₽','4800 ₽'],['Пудель малый (карликовый) 28–35 см','2800 ₽','4000 ₽'],['Пудель той 20–27 см','2300 ₽','3500 ₽'],['Бедлингтон-терьер','3200 ₽','4200 ₽']
  ]},
  {id:'mixed',name:'Метисы',cols:['Гигиена','Комплекс','Тримминг'],items:[
    ['Метис до 5 кг','2000 ₽','2800–3100 ₽','3300 ₽'],['Метис до 15 кг','2500 ₽','3100–3600 ₽','4000 ₽'],['Метис 20 кг','2700 ₽','3600–4100 ₽','4500 ₽'],['Метис 30 кг','3300 ₽','4100–4600 ₽','4900 ₽'],['Метис 40 кг','3500 ₽','4600–5100 ₽','5400 ₽'],['Метис 50 кг','3700 ₽','5100–5600 ₽','6000 ₽']
  ]},
  {id:'dachshunds',name:'Таксы',cols:['Гигиена','Бритьё без мытья','Комплекс'],items:[
    ['Гладкошерстная','2200 ₽','—','2800 ₽'],['Длинношерстная','2500 ₽','2700 ₽','3000–3500 ₽'],['Жесткошерстная','2500 ₽','2700 ₽','3900–4100 ₽ · тримминг'],['Кроличья','2000 ₽','2300–2600 ₽','2900 ₽']
  ]},
  {id:'spitz',name:'Шпицы',cols:['Гигиена','Комплекс'],items:[
    ['Шпиц малый','2500 ₽','2900–3300 ₽'],['Шпиц средний','2800 ₽','3100–3600 ₽'],['Вольфшпиц (кеесхонд)','3000–3500 ₽','3800–4500 ₽']
  ]},
  {id:'spaniels',name:'Спаниели',note:'+1000 ₽ за грязную шерсть',cols:['Гигиена','Комплекс / тримминг'],items:[
    ['Американский коккер-спаниель','3500 ₽','4500–5000 ₽'],['Английский коккер-спаниель','3000 ₽','4000–4500 ₽'],['Кавалер кинг-чарльз-спаниель','2600 ₽','3000–3500 ₽'],['Русский охотничий спаниель','3000 ₽','4000–4500 ₽']
  ]},
  {id:'trim',name:'Триммингуемые породы',note:'+1000 ₽ за грязную шерсть',cols:['Гигиена','Тримминг'],items:[
    ['Бордер-терьер','2900 ₽','4700 ₽'],['Вест-хайленд-уайт-терьер','2700 ₽','4500 ₽'],['Гриффон','2300 ₽','3700 ₽'],['Джек-рассел','2500 ₽','3500–4000 ₽'],['Миттельшнауцер','2700 ₽','4500–5000 ₽'],['Норвич-терьер','2700 ₽','4700 ₽'],['Ризеншнауцер','4200 ₽','6800–7500 ₽'],['Скотчтерьер','2700 ₽','4500 ₽'],['Цвергшнауцер','2700 ₽','4000–4500 ₽'],['Фокс-терьер','2500 ₽','4000–4500 ₽'],['Ирландский терьер','3000 ₽','4700–5500 ₽'],['Ягдтерьер','2700 ₽','4300–4600 ₽'],['Эрдельтерьер','3700 ₽','5500–6000 ₽']
  ]},
  {id:'medium',name:'Средние породы',cols:['Гигиена','Комплекс'],items:[
    ['Американский стаффордширский терьер','2300 ₽','2800–3500 ₽'],['Американский булли','2300–2500 ₽','3000–3700 ₽'],['Английский бульдог','2500 ₽','3500 ₽'],['Бассет-хаунд','2900 ₽','3300–3600 ₽'],['Басенджи','2500 ₽','3300 ₽'],['Бордер-колли','3500 ₽','4200–4500 ₽'],['Бигль','2300 ₽','3000–3500 ₽'],['Вельш-корги-пемброк','2400–2600 ₽','3200–3400 ₽'],['Вельш-корги-кардиган','2900–3100 ₽','3400–3600 ₽'],['Джек-рассел гладкошерстный','2000 ₽','2700 ₽'],['Китайская хохлатая голая / пуховка','1600–1800 ₽','2500–3200 ₽'],['Мопс','2100–2300 ₽','3100–3400 ₽'],['Питбуль','2500 ₽','3200 ₽'],['Сиба-ину','2600–3000 ₽','3500–3800 ₽'],['Французский бульдог','2100–2300 ₽','3100–3400 ₽'],['Шелти','2800 ₽','3500–4000 ₽']
  ]},
  {id:'large',name:'Крупные породы',cols:['Гигиена','Комплекс'],items:[
    ['Афганская борзая','4500 ₽','5700 ₽'],['Алабай (среднеазиатская овчарка)','5000 ₽','6500–7000 ₽'],['Австралийская овчарка (аусси)','3500 ₽','4000–4500 ₽'],['Акита-ину японская','4500 ₽','5000–5800 ₽'],['Акита-ину американская','5500 ₽','6000–6500 ₽'],['Аляскинский маламут','5500 ₽','7000–7500 ₽'],['Бельгийская овчарка малинуа','3800–4500 ₽','4600–5500 ₽'],['Бельгийская овчарка грюнендаль','4000–4700 ₽','4600–5500 ₽'],['Бельгийская овчарка тервюрен','4000–4700 ₽','4600–5500 ₽'],['Бельгийская овчарка лакенуа','4800–5100 ₽','5500–5800 ₽'],['Бобтейл','5500 ₽','6000–6500 ₽'],['Бриар','5500 ₽','6000 ₽'],['Бувье','4800 ₽','5800 ₽'],['БШО','4000 ₽','5000–5300 ₽'],['Бурбуль','4000 ₽','4900–5500 ₽'],['Бернский зенненхунд','4000 ₽','5800 ₽'],['Доберман','3500 ₽','4000–4500 ₽'],['Далматинец','3500 ₽','3200–3800 ₽'],['Дог немецкий','4500 ₽','5500 ₽'],['Дог канарский','4500 ₽','5500 ₽'],['Дог канадский','4500 ₽','5500 ₽'],['Ирландский сеттер','4000 ₽','5500 ₽'],['Кабебо','3500 ₽','4800 ₽'],['Лабрадор','3500 ₽','4200–4500 ₽'],['Лайка, по кг','3200–3500 ₽','4200–4500 ₽'],['Маремма','4000 ₽','6500–7000 ₽'],['Мастиф тибетский','4500 ₽','7500–8000 ₽'],['Мастиф неаполитано','4000 ₽','6800–7500 ₽'],['Московская сторожевая','4500 ₽','6500–7000 ₽'],['Немецкая овчарка','4000 ₽','5000–5500 ₽'],['Русская борзая','4000 ₽','5000–5500 ₽'],['Ретривер золотистый','3800 ₽','4500–5200 ₽'],['Ротвейлер','4000 ₽','4800–5200 ₽'],['Самоед','4000 ₽','5500–6000 ₽'],['Сенбернар','5000 ₽','7000–7500 ₽'],['Хаски','4000 ₽','5500–6000 ₽'],['Чёрный терьер','4500 ₽','7000–7500 ₽']
  ]},
  {id:'cats',name:'Кошки',note:'Обязателен ветпаспорт · мытьё +300 ₽',cols:['Цена'],items:[
    ['Стрижка под машинку без мытья','2800 ₽'],['Стрижка под машинку мейн-кун без мытья','3100 ₽'],['Полный комплекс: вычёсывание + мытьё','2800–3100 ₽'],['Мейн-кун: комплекс, вычёс + мытьё','3500 ₽'],['Обезжиривающая паста (маска)','300 ₽'],['Сфинкс','1800 ₽'],['Вычёс без мытья','1800–2000 ₽'],['Стрижка когтей','350 ₽'],['Поддержка второго мастера','500–1000 ₽']
  ]},
  {id:'rodents',name:'Грызуны',cols:['Комплекс','Стрижка когтей / зубов'],items:[
    ['Морская свинка','1700 ₽','250–450 ₽'],['Крыса','1400 ₽','250 ₽'],['Кролик','2200 ₽','300–500 ₽']
  ]},
  {id:'extras',name:'Дополнительные услуги',cols:['Цена'],items:[
    ['Вычёс мелких и средних собак без мытья, 1 ч','1700 ₽'],['Вычёс крупных собак без мытья, 1 ч','2000 ₽'],['Стрижка когтей кошки','350 ₽'],['Стрижка когтей собак: мелкие / средние / крупные','400 / 450 / 500 ₽'],['Подпил когтей','50 ₽'],['Чистка и выщипывание ушей собаки / чистка ушей кошки','200–500 ₽'],['Чистка параанальных желёз','200–500 ₽'],['Стрижка ушей','300 ₽'],['Стрижка морды','500 ₽'],['Пуделиные лапки','300–500 ₽'],['Окантовка лап','300 ₽'],['Бритьё паховой и анальной зоны','300 ₽'],['Окрашивание шерсти','300–500 ₽'],['Стразы в ушах','100 ₽'],['Блеск-тату','200 ₽'],['Чистка зубов','150–500 ₽'],['Штраф за агрессию','500–1000 ₽'],['Опоздание 30 мин – 1 ч','250–500 ₽'],['Травмы грумера','от 1000 ₽'],['Передержка, 1 час','500 ₽']
  ]},
  {id:'mats',name:'Удаление колтунов',cols:['Цена'],items:[
    ['1-я степень, 1/4 тела','от 400 ₽'],['2-я степень, 1/2 тела','от 700 ₽'],['100% тела','от 1000 ₽']
  ]}
];

const tabs = document.querySelector('#category-tabs');
const grid = document.querySelector('#price-grid');
const title = document.querySelector('#price-title');
const note = document.querySelector('#price-note');
const search = document.querySelector('#price-search');
const clearSearch = document.querySelector('#clear-search');
let active = prices[0].id;

function card(category,item){
  const values=item.slice(1).map((value,i)=>`<div class="price-value"><small>${category.cols[i]||'Цена'}</small><strong>${value}</strong></div>`).join('');
  return `<article class="price-card"><h3>${item[0]}</h3><div class="price-values">${values}</div></article>`;
}

function renderTabs(){
  tabs.innerHTML=prices.map((category)=>`<button class="category-tab" type="button" role="tab" data-id="${category.id}" aria-selected="${category.id===active}">${category.name}</button>`).join('');
}

function render(){
  const query=search.value.trim().toLocaleLowerCase('ru');
  clearSearch.style.display=query?'grid':'none';
  if(query){
    const matches=[];
    prices.forEach(category=>category.items.forEach(item=>{if(item[0].toLocaleLowerCase('ru').includes(query))matches.push({category,item});}));
    title.textContent=`Результаты поиска: ${matches.length}`;
    note.textContent=query?`по запросу «${search.value.trim()}»`:'';
    grid.innerHTML=matches.length?matches.map(({category,item})=>card(category,item)).join(''):'<div class="price-empty">Ничего не найдено. Напишите нам — уточним стоимость по породе и состоянию шерсти.</div>';
    return;
  }
  const category=prices.find(entry=>entry.id===active);
  title.textContent=category.name;
  note.textContent=category.note||'';
  grid.innerHTML=category.items.map(item=>card(category,item)).join('');
}

tabs.addEventListener('click',(event)=>{
  const button=event.target.closest('[data-id]');
  if(!button)return;
  active=button.dataset.id;
  search.value='';
  renderTabs();render();
});
search.addEventListener('input',render);
clearSearch.addEventListener('click',()=>{search.value='';search.focus();render();});
renderTabs();render();

const menuButton=document.querySelector('.menu-button');
const mobileMenu=document.querySelector('.mobile-menu');
menuButton.addEventListener('click',()=>{
  const open=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!open));
  mobileMenu.classList.toggle('open',!open);
});
mobileMenu.addEventListener('click',(event)=>{if(event.target.closest('a')){menuButton.setAttribute('aria-expanded','false');mobileMenu.classList.remove('open');}});

const galleryItems=[...document.querySelectorAll('.gallery-item')];
const lightbox=document.querySelector('#lightbox');
const lightboxImage=lightbox.querySelector('img');
let currentImage=0;
function showImage(index){currentImage=(index+galleryItems.length)%galleryItems.length;const item=galleryItems[currentImage];lightboxImage.src=item.dataset.src;lightboxImage.alt=item.querySelector('img').alt;}
function openLightbox(index){showImage(index);lightbox.hidden=false;document.body.classList.add('lightbox-open');lightbox.querySelector('.lightbox-close').focus();}
function closeLightbox(){lightbox.hidden=true;document.body.classList.remove('lightbox-open');galleryItems[currentImage].focus();}
galleryItems.forEach((item,index)=>item.addEventListener('click',()=>openLightbox(index)));
lightbox.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>showImage(currentImage-1));
lightbox.querySelector('.lightbox-next').addEventListener('click',()=>showImage(currentImage+1));
lightbox.addEventListener('click',(event)=>{if(event.target===lightbox)closeLightbox();});
document.addEventListener('keydown',(event)=>{if(lightbox.hidden)return;if(event.key==='Escape')closeLightbox();if(event.key==='ArrowLeft')showImage(currentImage-1);if(event.key==='ArrowRight')showImage(currentImage+1);});
