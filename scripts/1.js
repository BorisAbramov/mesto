function insertCard(item){ //пока для первоначальной загрузки
  const listItem = listElementTemplate.cloneNode(true)
  const listItemTitle = listItem.querySelector('.list__name')
  const listItemLink = listItem.querySelector('.list__image')
  listItemTitle.textContent = item.name
  listItemLink.src = item.link
  listItemLink.alt = item.name

  list.prepend(listItem);
}

const card = initialCards.forEach(item => { //делаем первоначальную загрузку карточек на сайте
  insertCard(item)
})

const formAddSubmitHandler = e => { //вставка новой карточки
  e.preventDefault();
  const inputValueName = formAddItemInputName.value;
  const inputValueLink = formAddItemInputLink.value;
  const listItem = listElementTemplate.cloneNode(true);
  const listItemTitle = listItem.querySelector('.list__name');
  const listItemLink = listItem.querySelector('.list__image');
  listItemTitle.textContent = inputValueName;
  listItemLink.src = inputValueLink;
  listItemLink.alt = inputValueName;

  list.prepend(listItem);

  closePopupAdd();
}