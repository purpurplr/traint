import { TopicsSection } from '../models/topics-section.interface';

// version
export const defaultTopicsData: TopicsSection[] = [
  {
    id: 'web-and-browser',
    displayText: 'Интернет и браузер',
    optional: true,
    topics: [
      { id: 'http', displayText: 'HTTP' },
      { id: 'dns', displayText: 'DNS' },
    ],
  },
  {
    id: 'data-structures-algorithms',
    displayText: 'Структуры данных и алгоритмы',
    optional: true,
    topics: [
      { id: 'data-structures', displayText: 'Массив, очередь, стек, Map, связный список' },
      {
        id: 'algorithms',
        displayText:
          'Сортировка пузырьком, шейкерная, выбором, вставками, расческой, слиянием, быстрая. Последовательный поиск, двоичный поиск, поиск прыжками, интерполяционный поиск.',
      },
    ],
  },
  {
    id: 'rest',
    displayText: 'Работа с REST API',
    topics: [
      { id: 'url-structure', displayText: 'Структура URL' },
      { id: 'rest-api', displayText: 'REST API' },
    ],
  },
  {
    id: 'html',
    displayText: 'HTML',
    learningResources: [
      { displayText: 'Руководство W3Schools по HTML', url: 'https://www.w3schools.com/html' },
      { displayText: 'Интерактивный курс по HTML на Codecademy', url: 'https://www.codecademy.com/learn/learn-html' },
    ],
    topics: [
      { id: 'html-structure', displayText: 'Структура HTML-документа' },
      { id: 'block-model', displayText: 'REST API' },
      { id: 'block-model', displayText: 'Блочные и строчные элементы' },
      { id: 'block-model', displayText: 'Базовый поток (Normal Flow)' },
      { id: 'block-model', displayText: 'HTML-формы' },
      { id: 'block-model', displayText: 'Семантическая верстка' },
      { id: 'block-model', displayText: 'Обработка DOM-событий' },
    ],
  },
  {
    id: 'css',
    displayText: 'CSS',
    learningResources: [
      { displayText: 'Руководство W3S по CSS', url: 'https://www.w3schools.com/css' },
      { displayText: 'Интерактивный курс по CSS на Codecademy', url: 'https://www.codecademy.com/learn/learn-css' },
      { displayText: 'Гайд по Flexbox', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox' },
      { displayText: 'Игра про лягушек и Flexbox', url: 'https://flexboxfroggy.com/#ru' },
    ],
    topics: [
      { id: 'html-structure', displayText: 'Структура HTML-документа' },
      { id: 'block-model', displayText: 'REST API' },
      { id: 'block-model', displayText: 'Блочные и строчные элементы' },
      { id: 'block-model', displayText: 'Базовый поток (Normal Flow)' },
      { id: 'block-model', displayText: 'HTML-формы' },
      { id: 'block-model', displayText: 'Семантическая верстка' },
      { id: 'block-model', displayText: 'Обработка DOM-событий' },
    ],
  },
  {
    id: 'js',
    displayText: 'JavaScript',
    learningResources: [
      { displayText: 'Современный учебник JavaScript Ильи Кантора', url: 'https://learn.javascript.ru' },
      { displayText: 'Отладка кода', url: 'https://developer.chrome.com/docs/devtools/javascript' },
    ],
    topics: [
      { id: 'syntax', displayText: 'Синтаксис, типы данных' },
      { id: 'basic-entities', displayText: 'Базовые конструкции: условные и логические операторы, циклы' },
      { id: 'declaration-types', displayText: 'Способы объявления переменных и функций' },
      { id: 'data-methods', displayText: 'Методы объектов, массивов' },
      { id: 'classes', displayText: `Конструкторы, классы, ключевое слово 'new'` },
      { id: 'prototypes', displayText: 'Прототипное наследование' },
      { id: 'closure', displayText: 'Замыкания, лексическое окружение, область видимости' },
      { id: 'hoisting', displayText: 'Всплытие' },
      { id: 'promise', displayText: 'Promise' },
      { id: 'event-loop', displayText: 'Event Loop' },
      { id: 'dom-events', displayText: 'DOM event phases, delegation' },
      { id: 'debugging', displayText: 'Отладка кода' },
    ],
  },
  {
    id: 'ts',
    displayText: 'TypeScript',
    learningResources: [
      { displayText: 'Документация Typescript', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
    ],
    topics: [
      { id: 'primitive-types', displayText: 'Примитивные типы' },
      { id: 'complex-types', displayText: 'Массивы, Union Types, Type Alliases' },
      { id: 'enum', displayText: 'Enum' },
      { id: 'function-types', displayText: 'Описание типов аргументов и возвращаемого значения функций' },
      { id: 'generics', displayText: 'Generics, условные типы' },
    ],
  },
  {
    id: 'angular',
    displayText: 'Angular',
    learningResources: [{ displayText: 'Документация Angular', url: 'https://angular.io/docs' }],
    topics: [
      { id: 'angular-entities', displayText: 'Основные составляющие Angular-приложения' },
      { id: 'data-transfer', displayText: 'Взаимодействие и передача данных между компонентами' },
      { id: 'modules', displayText: 'Модули, стратегии загрузок модулей(lazy, preloading, eager)' },
      { id: 'lifecycle', displayText: 'Жизненные циклы компонента' },
      { id: 'di', displayText: 'Dependency Injection' },
      { id: 'cd', displayText: 'Change detection' },
      { id: 'router', displayText: 'Router' },
      { id: 'http-client', displayText: 'Интеграция с API - HttpClient' },
      { id: 'testing', displayText: 'Тестирование с помощью Jasmine и TestBed' },
      { id: 'rxjs', displayText: 'Реактивное программирование с помощью RxJs' },
      { id: 'ngrx', displayText: 'Управление состоянием приложения с помощью NgRx' },
    ],
  },
  {
    id: 'react',
    displayText: 'React',
    learningResources: [{ displayText: 'Документация React', url: 'https://reactjs.org/docs/getting-started.html' }],
    topics: [
      { id: 'react-entities', displayText: 'Основные концепции' },
      { id: 'jsx', displayText: 'JSX' },
      { id: 'props-state', displayText: 'Props, State' },
      { id: 'lifecycle', displayText: 'Жизненный цикл компонента' },
      { id: 'virtual-dom', displayText: 'Virtual DOM' },
      { id: 'hooks', displayText: 'Hooks' },
      { id: 'router', displayText: 'Router' },
      { id: 'redux', displayText: 'Управление состоянием приложения, Redux' },
      { id: 'redux-thunk-saga', displayText: 'Redux Thunk / Redux Saga' },
      { id: 'testing', displayText: 'Тестирование' },
    ],
  },
  {
    id: 'packaging',
    displayText: 'Пакетные менеджеры, системы сборки',
    learningResources: [
      { displayText: 'Пакетный менеджер NPM', url: 'https://docs.npmjs.com/about-npm' },
      { displayText: 'Статический сборщик модулей Webpack', url: 'https://webpack.js.org/concepts' },
    ],
    topics: [
      { id: 'react-entities', displayText: 'Пакетный менеджер npm' },
      { id: 'jsx', displayText: 'Статический сборщик модулей Webpack' },
    ],
  },
  {
    id: 'version-control',
    displayText: 'Контроль версий',
    topics: [
      { id: 'github', displayText: 'Работа с Github' },
      {
        id: 'basic-git-commands',
        displayText: 'Основные Git-операции (commit, fetch, pull, push, merge, rebase, cherry-pick)',
      },
      { id: 'branches', displayText: 'Работа с ветками в Git (создание, переименование, удаление, merge request)' },
      { id: 'git-gui', displayText: 'Git GUI (Sourcetree, TortoiseGit, Github Desktop)' },
      { id: 'hosting', displayText: 'Загрузка проекта на хостинг (Githib Pages, Heroku)' },
    ],
  },
];
