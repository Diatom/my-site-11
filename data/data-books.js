export const elems = `
    <search>
      <label for="searchInput">Краткие оценки прочитанных мною книг</label>
      <div>
        <input type="text" id="searchInput" placeholder="Книга, автор, жанр..."/>
        <button id="searchButton" type="submit">🔍</button>
      </div>
    </search>
  <form is="my-tags"></form>
`

export let dat = [
  {
    Id: 0,
    name: `Дюна`,
    author: `Фрэнк Герберт`,
    genre: `научная фантастика`,
    date: `1965`,
    description: `Альтернативное видение будущего, как бы развивалась цивилизация при отказе от микропроцессорных технологий. 
    Власть, интриги, манипуляции, становление, всё через призму неоготичного футуризма.`,
    rating: `8`,
    tags: `научная фантастика, будущее,`,
  },
  {
    Id: 1,
    name: `Мессия Дюны`,
    author: `Фрэнк Герберт`,
    genre: `научная фантастика`,
    date: `1969`,
    description: `Продолжение Дюны. Становление Муад'Диба. Логичное развитие главного героя и того, какую империю он строит. Роман выдержан в духе оригинала, 
    но может вызвать критику за как-бы меньший размах предыдущей части, хотя логично показывает развитие сюжета согласно исходным событиям, 
    что и предаёт высокую ценность произведению.`,
    rating: `7`,
    tags: `научная фантастика, будущее`,
  },
]
  
  export const tags = [
    `научная фантастика`,
    `будущее`,
  ];


// По образцу объектов ниже сделай такие же объекты для книг: Дети Дюны, Бог император Дюны, Еретики Дюны, Капитул Дюны, Основание (Айзек Азимов), Основание и Империя, Второе Основание, Кризис Основания, Основание и Земля, Девять принцев Амбера, Ружья Авалона, Знак Единорога, Рука Оберона, Владения Хаоса, Карты судьбы, Кровь Амбера, Знак Хаоса, Рыцарь Теней, Принц Хаоса, Начало всех начал (Юрий Никитин), Яфет (Юрий Никитин), Трое из Леса (Юрий Никитин), Трое в Песках (Юрий Никитин), Трое и Боги (Юрий Никитин), Трое в Долине (Юрий Никитин), Мрак (Юрий Никитин), Передышка в Барбусе (Юрий Никитин), Передышка не бывает долгой (Юрий Никитин), Семеро Тайных (Юрий Никитин), Изгой (Юрий Никитин), Таргитай (Юрий Никитин), Таргитай-2. Освобождение (Юрий Никитин), Истребивший магию (Юрий Никитин), Фарамунд (Юрий Никитин), Гиперборей (Юрий Никитин), Вещий Олег (Юрий Никитин), Битва за Царьград (Юрий Никитин), Святой Грааль (Юрий Никитин), Стоунхендж (Юрий Никитин), Откровение (Юрий Никитин), Возвращение Томаса (Юрий Никитин), Меч Томаса (Юрий Никитин), Башня-2 (Юрий Никитин), Человек с топором (Юрий Никитин), Зачеловек (Юрий Никитин), Трудно быть богом (Стругацкие), Понедельник начинается в субботу (Стругацкие), Пикник на обочине (Стругацкие), За миллиард лет до конца света (Стругацкие), Несвятые святые, Оргуправленческое мышление (Щедровицкий), Слова. Том I. С болью и любовью о современном человеке, Слова. Том II. Духовное пробуждение, Слова. Том III. Духовная борьба, Слова. Том IV. Семейная жизнь, Преступление и наказание, Двадцать тысяч лье под водой, Старик и море, Исповедь (Толстой), Письма о добром и прекрасном (Лихачев), Отцы и дети, Горе от ума, Портрет Дориана Грея, Аванта+ серия энциклопедий История, 