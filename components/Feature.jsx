import React from 'react';

const IMG = (id, w, h) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
const BENTO_PHOTO = IMG('1503454537195-1dcabb73ffb9', 800, 900);
const GALLERY = [IMG('1596464716127-f2a82984de30', 900, 600), IMG('1575783970733-1aaedde1db74', 600, 600), IMG('1566004100631-35d015d6a491', 600, 600)];
const AVATARS = [IMG('1534528741775-53994a69daeb', 120, 120), IMG('1507003211169-0a1dd7228f2d', 120, 120), IMG('1494790108377-be9c29b29330', 120, 120)];

const care = [
  ['Безопасность', 'Закрытая охраняемая территория и видеонаблюдение с доступом для родителей.', 'tile-sky'],
  ['Питание', 'Пять приёмов пищи в день. Меню составляет детский нутрициолог, аллергии учитываем.', 'tile-sun'],
  ['Развитие', 'Английский, робототехника, хореография, логопед и подготовка к школе.', 'tile-mint'],
  ['Педагоги', 'Воспитатели с профильным высшим образованием и опытом от 5 лет.', 'tile-coral'],
];
const stats = [['11 лет', 'работаем с 2015 года'], ['5 раз', 'питание в течение дня'], ['24/7', 'видео онлайн для родителей'], ['1,5–7', 'лет — возраст детей']];
// Время примерное — поправьте под свой режим
const day = [['08:00', 'Приём детей, свободная игра'], ['09:00', 'Завтрак и утренний круг'], ['09:30', 'Занятия по программе'], ['12:00', 'Обед и тихий час'], ['15:30', 'Полдник, творческие студии'], ['17:00', 'Прогулка и встреча с родителями']];
// Отзывы-образцы — замените на настоящие
const reviews = [
  ['Дочка пошла в сад без слёз уже через неделю. Воспитатели сами присылают фото и рассказывают, как прошёл день.', 'Айгерим, мама Амины, 3 года'],
  ['За полгода сын заговорил по-английски и перестал бояться выступать. Кухня и чистота — отдельное удовольствие.', 'Руслан, папа Тимура, 5 лет'],
  ['Подготовка к школе проходила легко: к осени ребёнок читал и считал. Камеры помогают быть спокойной на работе.', 'Динара, мама Алины, 6 лет'],
];
const faq = [
  ['С какого возраста принимаете детей?', 'С 1,5 лет. Для самых маленьких предусмотрена мягкая адаптация: сначала пара часов в день вместе с мамой.'],
  ['Можно ли прийти на пробный день?', 'Да. Запишитесь на экскурсию, и мы договоримся о визите, где можно познакомиться с воспитателями и группой.'],
  ['Как устроено питание?', 'Пять приёмов пищи в день по меню детского нутрициолога. Аллергии и особенности питания учитываем индивидуально.'],
  ['Как следить за ребёнком днём?', 'Во всех помещениях стоят камеры, родителям выдаём доступ к онлайн-трансляции.'],
];

export default function Features() {
  return (
    <>
      <section id="about" className="band">
        <div className="wrap">
          <h2 className="h2-center">Чем мы отличаемся от других садов</h2>
          <div className="bento">
            <figure className="bento-photo">
              <img src={BENTO_PHOTO} alt="Дети на занятии" />
              <figcaption>Небольшие группы и внимание к каждому ребёнку</figcaption>
            </figure>
            {care.map(([title, text, cls]) => (
              <article key={title} className={`tile ${cls}`}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-grid">
          {stats.map(([n, t]) => <div key={n}><strong>{n}</strong><span>{t}</span></div>)}
        </div>
      </section>

      <section id="day" className="band bg-sky">
        <div className="wrap">
          <h2>Распорядок дня</h2>
          <ol className="day-list">
            {day.map(([time, what]) => <li key={time}><time>{time}</time><span>{what}</span></li>)}
          </ol>
          <div className="gallery">
            {GALLERY.map((src, i) => <img key={src} src={src} alt={`Жизнь сада, фото ${i + 1}`} />)}
          </div>
        </div>
      </section>

      <section id="reviews" className="band bg-mint">
        <div className="wrap">
          <h2 className="h2-center">Что говорят родители</h2>
          <div className="reviews">
            {reviews.map(([text, who], i) => (
              <blockquote key={who}>
                <p>{text}</p>
                <footer><img src={AVATARS[i]} alt="" /><span>{who}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="band">
        <div className="wrap faq">
          <h2>Частые вопросы</h2>
          <div>
            {faq.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
