import React from 'react';

export default function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="footer-grid">
        <div>
          <h3>Солнышко</h3>
          <p>Частный детский сад в Алматы. Растим счастливых и уверенных детей с 2015 года.</p>
        </div>
        <div>
          <h4>Контакты</h4>
          <p>г. Алматы, ул. Абая, 150</p>
          <p><a href="tel:+77017546879">+7 (701) 754-68-79</a></p>
          <p>Пн–Пт, 08:00–19:00</p>
        </div>
        <div>
          <h4>Мы в сети</h4>
          <p><a href="https://instagram.com/">Instagram</a></p>
          <p><a href="https://wa.me/77017546879">WhatsApp</a></p>
        </div>
      </div>
      <p className="footer-bottom">© 2026 Детский сад «Солнышко». Все права защищены.</p>
    </footer>
  );
}
