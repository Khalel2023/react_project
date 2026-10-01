import React, { useEffect, useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', childAge: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // TODO: отправьте form на ваш сервер, в Telegram-бота или CRM
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', childAge: '' }); onClose(); }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">✕</button>
        {sent ? (
          <div className="modal-done">
            <h3 id="modal-title">Заявка отправлена</h3>
            <p>Администратор позвонит вам в течение 15 минут в рабочее время.</p>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h3 id="modal-title">Запись на экскурсию</h3>
            <p>Покажем группы, кухню и площадку. Выберем удобное время.</p>
            <label>Ваше имя<input required autoComplete="name" value={form.name} onChange={set('name')} /></label>
            <label>Телефон<input required type="tel" autoComplete="tel" placeholder="+7 700 000 00 00" value={form.phone} onChange={set('phone')} /></label>
            <label>Возраст ребёнка<input placeholder="Например, 3 года" value={form.childAge} onChange={set('childAge')} /></label>
            <button type="submit" className="btn btn-sun btn-block">Отправить заявку</button>
          </form>
        )}
      </div>
    </div>
  );
}
