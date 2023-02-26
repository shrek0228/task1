// Функция которая изменяет цвет исходя из атрибута value у option
function changeColor(event) {
    let bobr = document.querySelector('#selectColor')
    let bibr = bobr.value
    document.body.style.background = bibr 
}
// Сюда пишите название события, которое должно произойти после смены option
const selectColorEvent = 'change';
// Создаем события на тег select.
selectColor.addEventListener(selectColorEvent, changeColor);
// Напишите, почему событие делаем на тег select, а работаем с тегом option?
// Здесь писать.