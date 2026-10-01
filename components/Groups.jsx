import React from 'react';

const groups = [
  { id: 'nursery', age: '1,5–3', name: 'Ясельная группа', text: 'Мягкая адаптация, развитие речи, мелкой моторики и сенсорики.', cls: 'g-coral' },
  { id: 'junior', age: '3–4', name: 'Младшая группа', text: 'Творчество, основы конструирования, игры и первые навыки общения.', cls: 'g-sun' },
  { id: 'middle', age: '4–5', name: 'Средняя группа', text: 'Логика, окружающий мир, базовый английский, музыка.', cls: 'g-mint' },
  { id: 'prep', age: '5–7', name: 'Старшая и подготовительная', text: 'Чтение, письмо, математика, ментальная арифметика — подготовка к школе.', cls: 'g-sky' },
];

export default function Groups({ onOpenModal }) {
  return (
    <section id="groups" className="band bg-soft">
      <div className="wrap">
        <h2 className="h2-center">Группы по возрасту</h2>
        <div className="group-grid">
          {groups.map((g) => (
            <article key={g.id} className={`group-card ${g.cls}`}>
              <div className="group-age"><strong>{g.age}</strong><span>года</span></div>
              <h3>{g.name}</h3>
              <p>{g.text}</p>
              <button className="btn btn-dark" onClick={onOpenModal}>Узнать о месте</button>
            </article>
          ))}
        </div>

        <div className="cta">
          <div>
            <h2>Приходите посмотреть сад своими глазами</h2>
            <p>Покажем группы, кухню и площадку. Ответим на любые вопросы.</p>
          </div>
          <button className="btn btn-sun btn-lg" onClick={onOpenModal}>Записаться на экскурсию</button>
        </div>
      </div>
    </section>
  );
}
