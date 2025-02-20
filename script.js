const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) { //еси секция активна
      item.classList.remove("active"); // закрываем секцию
    } else {
      items.forEach(i => i.classList.remove("active")); // закрываем все неактивные секции
      item.classList.add("active"); // открываем текущую секцию
    }
  });
});
