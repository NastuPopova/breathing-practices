import React from 'react';
import { Check } from 'lucide-react';

const features = [
  '8 онлайн-занятий в группе',
  'Доступ к видеоурокам',
  'Методические материалы',
  'Чат поддержки',
  'Индивидуальная консультация',
  'Сертификат о прохождении'
];

const BuyCourse = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-600 to-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Записаться на курс
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Начните свой путь к здоровому дыханию уже сегодня
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <span className="text-5xl font-bold text-gray-900">15 000 ₽</span>
              <span className="text-gray-600 ml-2">за курс</span>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-600"
                >
                  <Check className="h-5 w-5 text-teal-600 mr-3" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-teal-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-teal-700 transition-colors duration-300">
              Записаться
            </button>
          </div>

          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center">
              Количество мест ограничено.<br />
              Следующий поток стартует 15 марта
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-teal-100 mb-4">
            Есть вопросы по оплате?
          </p>
          <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-full hover:bg-teal-50 transition-colors duration-300">
            Задать вопрос
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyCourse; 