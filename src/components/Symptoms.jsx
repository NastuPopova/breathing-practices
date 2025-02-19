import React, { useState } from 'react';
import { ChevronRight, AlertTriangle } from 'lucide-react';

const symptoms = [
  {
    emoji: '😫',
    title: 'Утром',
    description: 'Как неправильное дыхание влияет на ваше утро',
    items: [
      {
        emoji: '🥱',
        text: 'Просыпаетесь уставшим, даже после 8 часов сна'
      },
      {
        emoji: '😴',
        text: 'Трудно встать с кровати'
      },
      {
        emoji: '☕️',
        text: 'Нужно много кофе, чтобы проснуться'
      }
    ],
    color: 'from-red-500 to-red-600',
    bgGradient: 'bg-gradient-to-br from-red-100 to-red-200'
  },
  {
    emoji: '😩',
    title: 'Днем',
    description: 'Проблемы, возникающие в течение рабочего дня',
    items: [
      {
        emoji: '🔋',
        text: 'К обеду чувствуете полное истощение'
      },
      {
        emoji: '🤯',
        text: 'Трудно сосредоточиться на работе'
      },
      {
        emoji: '💤',
        text: 'Хочется прилечь и отдохнуть'
      },
      {
        emoji: '🤕',
        text: 'Частые головные боли'
      }
    ],
    color: 'from-red-600 to-red-700',
    bgGradient: 'bg-gradient-to-br from-red-200 to-red-300'
  },
  {
    emoji: '😮‍💨',
    title: 'Вечером',
    description: 'Как неправильное дыхание мешает отдыхать',
    items: [
      {
        emoji: '😪',
        text: 'Приходите домой без сил'
      },
      {
        emoji: '😖',
        text: 'Трудно расслабиться после работы'
      },
      {
        emoji: '😳',
        text: 'Долго не можете уснуть'
      },
      {
        emoji: '😰',
        text: 'Тревожные мысли мешают заснуть'
      }
    ],
    color: 'from-red-700 to-red-800',
    bgGradient: 'bg-gradient-to-br from-red-300 to-red-400'
  }
];

const Symptoms = () => {
  const [openCards, setOpenCards] = useState(new Array(symptoms.length).fill(false));

  const toggleCard = (index) => {
    const newOpenCards = [...openCards];
    newOpenCards[index] = !newOpenCards[index];
    setOpenCards(newOpenCards);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-red-50 rounded-full mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Симптомы и проблемы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, как неправильное дыхание влияет на ваше самочувствие в течение дня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {symptoms.map((category, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Gradient line at top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />
              
              <div className="p-8">
                {/* Emoji and Title */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${category.bgGradient} text-4xl transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                    {category.emoji}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* List of symptoms */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="text-2xl mr-3">{item.emoji}</span>
                        <span className="flex-1">{item.text}</span>
                        <ChevronRight className="h-5 w-5 text-red-500 flex-shrink-0" />
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => toggleCard(index)}
                  className={`w-full px-4 py-3 mt-6 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                    openCards[index]
                      ? 'border-red-500 text-red-600 bg-red-50 hover:bg-red-100' 
                      : 'border-gray-200 text-gray-600 hover:border-red-500 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {openCards[index] ? 'Скрыть симптомы' : 'Показать симптомы'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Пройти тест на качество дыхания
          </button>
        </div>
      </div>
    </section>
  );
};

export default Symptoms; 