import React from 'react';
import { Sunrise, Sun, Sunset, Coffee, BatteryLow, Brain, Headphones, BedDouble } from 'lucide-react';

const symptoms = [
  {
    icon: <Sunrise className="h-8 w-8" />,
    title: 'Утром',
    items: [
      {
        icon: <BedDouble className="h-5 w-5" />,
        text: 'Просыпаетесь уставшим, даже после 8 часов сна'
      },
      {
        icon: <BatteryLow className="h-5 w-5" />,
        text: 'Трудно встать с кровати'
      },
      {
        icon: <Coffee className="h-5 w-5" />,
        text: 'Нужно много кофе, чтобы проснуться'
      }
    ]
  },
  {
    icon: <Sun className="h-8 w-8" />,
    title: 'Днем',
    items: [
      {
        icon: <BatteryLow className="h-5 w-5" />,
        text: 'К обеду чувствуете полное истощение'
      },
      {
        icon: <Brain className="h-5 w-5" />,
        text: 'Трудно сосредоточиться на работе'
      },
      {
        icon: <BedDouble className="h-5 w-5" />,
        text: 'Хочется прилечь и отдохнуть'
      },
      {
        icon: <Headphones className="h-5 w-5" />,
        text: 'Частые головные боли'
      }
    ]
  },
  {
    icon: <Sunset className="h-8 w-8" />,
    title: 'Вечером',
    items: [
      {
        icon: <BatteryLow className="h-5 w-5" />,
        text: 'Приходите домой без сил'
      },
      {
        icon: <Brain className="h-5 w-5" />,
        text: 'Трудно расслабиться после работы'
      },
      {
        icon: <BedDouble className="h-5 w-5" />,
        text: 'Долго не можете уснуть'
      },
      {
        icon: <Brain className="h-5 w-5" />,
        text: 'Тревожные мысли мешают заснуть'
      }
    ]
  }
];

const Symptoms = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
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
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-teal-100 rounded-full">
                  <div className="text-teal-600">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start space-x-3"
                  >
                    <div className="text-teal-600 mt-1">
                      {item.icon}
                    </div>
                    <span className="text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-teal-700 transition-colors duration-300">
            Пройти тест на качество дыхания
          </button>
        </div>
      </div>
    </section>
  );
};

export default Symptoms; 