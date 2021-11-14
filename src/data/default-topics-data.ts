import { TopicsSection } from '../models/topics-section.interface';

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
          'Сортировка пузырьком, шейкерная, выбором, вставками, расческой, слиянием, быстрая, пирамидальная. Последовательный поиск, двоичный поиск, поиск прыжками, интерполяционный поиск.',
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
];
