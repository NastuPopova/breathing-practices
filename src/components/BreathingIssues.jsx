import React, { useState } from 'react';
import { Monitor, BookX, Brain, AlertCircle, ChevronRight } from 'lucide-react';

const issues = [
  {
    icon: <Monitor size={32} />,
    title: 'Сидячий образ жизни',
    description: 'Длительная работа за компьютером влияет на осанку и дыхание',
    points: [
      '8+ часов за компьютером ежедневно',
      'Нарушение работы диафрагмы',
      'Плохая осанка'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <BookX size={32} />,
    title: 'Незнание техник',
    description: 'Отсутствие правильных знаний о дыхательных практиках',
    points: [
      'Отсутствие базовых знаний',
      'Нет понимания процесса',
      'Самостоятельное изучение'
    ],
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: <Brain size={32} />,
    title: 'Хронический стресс',
    description: 'Постоянное напряжение влияет на глубину и ритм дыхания',
    points: [
      'Постоянное напряжение',
      'Поверхностное дыхание',
      '"Синдром менеджера"'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <AlertCircle size={32} />,
    title: 'Вредные привычки',
    description: 'Ежедневные привычки, ухудшающие качество дыхания',
    points: [
      'Дыхание через рот',
      'Сутулость',
      'Неправильное положение во сне'
    ],
    color: 'from-red-500 to-red-600'
  }
];

const BreathingIssues = () => {
  const [openCards, setOpenCards] = useState(new Array(issues.length).fill(false));

  const toggleCard = (index) => {
    const newOpenCards = [...openCards];
    newOpenCards[index] = !newOpenCards[index];
    setOpenCards(newOpenCards);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Причины неправильного дыхания
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте основные факторы, которые могут негативно влиять на ваше дыхание
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {issues.map((issue, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r ${issue.color}`} />
              
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${issue.color} text-white`}>
                  {issue.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {issue.title === 'Незнание техник' ? (
                      <>
                        Незнание<br />
                        техник
                      </>
                    ) : issue.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {issue.description}
                  </p>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ${
                openCards[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-3">
                  {issue.points.map((point, idx) => (
                    <li 
                      key={idx}
                      className="text-gray-600 flex items-start"
                    >
                      <ChevronRight className="text-teal-600 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full px-4 py-2 mt-4 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                  openCards[index]
                    ? 'border-teal-600 text-teal-600 bg-teal-50' 
                    : 'border-gray-200 text-gray-600 hover:border-teal-600 hover:text-teal-600'
                }`}
                onClick={() => toggleCard(index)}
              >
                {openCards[index] ? 'Скрыть детали' : 'Подробнее'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Узнать как исправить
          </button>
        </div>
      </div>
    </section>
  );
};

export default BreathingIssues; 