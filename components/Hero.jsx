import React from 'react';

const IMG = (id, w, h) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
const PHOTO_MAIN = IMG('1587654780291-39c9404d746b', 900, 1100);
const PHOTO_ROUND = IMG('1503454537195-1dcabb73ffb9', 500, 500);
const PHOTO_SMALL = IMG('1596464716127-f2a82984de30', 500, 500);
const SKILLS = ['Английский язык', 'Робототехника', 'Хореография', 'Логопед', 'Ментальная арифметика', 'Подготовка к школе', 'Творческая студия'];

export default function Hero({ onOpenModal }) {
  return (
    <>
      <section id="top" className="hero wrap">
        <div className="hero-text">
          <p className="pill"><span className="pill-dot" /> Идёт набор в группы · Алматы</p>
          <h1>Детский сад, где каждый день — маленькое открытие</h1>
          <p className="hero-lead">
            Частный сад для детей от 1,5 до 7 лет: небольшие группы, воспитатели с высшим образованием,
            пятиразовое питание и камеры, которые можно смотреть с телефона.
          </p>
          <div className="hero-actions">
            <button className="btn btn-sun btn-lg" onClick={onOpenModal}>Записаться на экскурсию</button>
            <a href="#groups" className="btn btn-line btn-lg">Выбрать группу</a>
          </div>
          <ul className="hero-facts">
            <li>Работаем с 2015 года</li>
            <li>Видео онлайн 24/7</li>
            <li>Меню от нутрициолога</li>
          </ul>
        </div>

        <div className="collage">
          <span className="collage-sun" aria-hidden="true" />
          <img className="c-main" src={PHOTO_MAIN} alt="Дети играют в саду «Солнышко»" />
          <img className="c-round" src={PHOTO_ROUND} alt="Занятие в группе" />
          <img className="c-small" src={PHOTO_SMALL} alt="Творческое занятие" />
          <p className="sticker">от 1,5 до 7 лет</p>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...SKILLS, ...SKILLS].map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>
    </>
  );
}
