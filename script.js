// Мобильное меню: burger переключает класс open у header
document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('open');
});

// Плавная прокрутка к якорям + закрытие мобильного меню после клика
document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId.startsWith('#')) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.remove('open');
  });
});

// Тень у шапки при прокрутке — визуально отделяет её от контента
window.addEventListener('scroll', () => {
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 10);
});

// Отправка формы: в демо никуда не уходит, показываем сообщение.
// На реальном заказе сюда подключают бэкенд или сервис форм (например, Telegram-бот).
document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const button = event.target.querySelector('button[type="submit"]');
  button.textContent = 'Готово! Ждите звонка';
  button.disabled = true;
  event.target.reset();

  setTimeout(() => {
    button.textContent = 'Отправить заявку';
    button.disabled = false;
  }, 3000);
});
