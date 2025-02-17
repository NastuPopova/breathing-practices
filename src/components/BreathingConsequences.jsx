import React from 'react';
import { Heart, Brain, Battery, AlertTriangle } from 'lucide-react';

const consequences = [
  {
    icon: <Heart className="h-12 w-12" />,
    title: 'Здоровье ухудшается',
    items: [
      'Иммунитет падает',
      'Хронические заболевания обостряются',
      'Появляются новые болезни'
    ],
    color: 'from-red-500 to-red-600',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500'
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: 'Эмоциональное состояние',
    items: [
      'Тревожность становится постоянной',
      'Панические атаки учащаются',
      'Стресс накапливается'
    ],
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500'
  },
  {
    icon: <Battery className="h-12 w-12" />,
    title: 'Качество жизни',
    items: [
      'Энергии всё меньше',
      'Работоспособность падает',
      'Отношения страдают'
    ],
    color: 'from-orange-500 to-orange-600',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500'
  }
];

const BreathingConsequences = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Последствия неправильного дыхания
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Игнорирование проблем с дыханием может привести к серьезным последствиям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consequences.map((item, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Gradient line at top */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
              
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">
                    {item.title}
                  </h3>
                </div>

                {/* List of consequences */}
                <ul className="space-y-4">
                  {item.items.map((consequence, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start"
                    >
                      <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 bg-gradient-to-r ${item.color}`} />
                      <span className="text-gray-600">{consequence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Начать исправлять сейчас
          </button>
        </div>
      </div>
    </section>
  );
};

export default BreathingConsequences; 