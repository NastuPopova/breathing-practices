import React, { useEffect, useState } from 'react';
import { Check, Clock, Zap, Gift } from 'lucide-react';
import SectionTransition from './SectionTransition';

const Products = () => {
  const [timeLeft, setTimeLeft] = useState('23:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59);
      const diff = endOfDay - now;
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const courseModules = [
    {
      title: 'Модуль 1: Основы дыхания',
      description: 'После этого модуля вы поймете базовые принципы правильного дыхания',
      duration: '2 недели'
    },
    {
      title: 'Модуль 2: Оздоравливающие практики',
      description: 'Оздоровите организм более чем от 100+ заболеваний',
      duration: '2 недели'
    },
    {
      title: 'Модуль 3: Энергетические практики',
      description: 'Освоите техники для повышения энергии и работоспособности',
      duration: '2 недели'
    },
    {
      title: 'Модуль 4: Правильные привычки',
      description: 'Научитесь применять техники в повседневной жизни',
      duration: '2 недели'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-primary-100">
      <SectionTransition>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Special Offer Banner */}
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Только сегодня: Специальное предложение для участников теста дыхания
              </h3>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Clock className="h-8 w-8 animate-pulse" />
                <p className="font-mono text-3xl font-bold tracking-wider animate-bounce">
                  {timeLeft}
                </p>
              </div>
              <div className="text-lg text-primary-100 font-medium">
                Выберите свой путь к здоровому дыханию
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 text-primary-800 px-6 py-3 rounded-full font-medium text-lg">
              Уже 35 человек улучшили свое дыхание в этом месяце
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Начните улучшать своё дыхание <span className="text-teal-600">прямо сейчас</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий формат обучения. <span className="font-semibold text-teal-600">Акция действует до конца недели!</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Бесплатный видео-урок */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Получить видео-урок</h3>
                  <p className="text-gray-600 mt-2">Бесплатный урок по технике дыхания</p>
                  <div className="mt-2 inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                    ⚡️ Доступно сегодня
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Длительность: 20 минут</span>
                </div>
                <div className="flex items-center mb-8 text-gray-600">
                  <Zap className="h-5 w-5 mr-2" />
                  <span>Мгновенный доступ после оплаты</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Базовые техники дыхания</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Практические упражнения</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">PDF-инструкция</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Ваш бонус:</span>
                  </div>
                  <div className="text-yellow-800 font-medium">
                    Урок по замеру контрольной паузы
                  </div>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">990</span>
                  <span className="text-xl text-gray-500 ml-1">₽</span>
                  <span className="ml-3 text-lg text-gray-400 line-through">2600 ₽</span>
                  <span className="ml-2 text-sm text-red-500 font-medium">-62%</span>
                </div>
                <button className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300">
                  Получить доступ
                </button>
              </div>
            </div>

            {/* Групповые занятия */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Групповые занятия</h3>
                  <p className="text-gray-600 mt-2">Практика в мини-группах до 5 человек</p>
                  <div className="mt-2 inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    🔥 Осталось 2 места
                  </div>
                </div>
                <div className="flex items-center mb-4 text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>5 занятий по 40 минут</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Персональная обратная связь</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Адаптация под ваши особенности</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Разбор вашей техники дыхания</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Работа с вашими запросами</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Ваш бонус:</span>
                  </div>
                  <div className="text-yellow-800 font-medium">
                    Бесплатная консультация
                  </div>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">7 500</span>
                  <span className="text-xl text-gray-500 ml-1">₽</span>
                  <span className="ml-3 text-lg text-gray-400 line-through">12 000 ₽</span>
                  <span className="ml-2 text-sm text-red-500 font-medium">-38%</span>
                </div>
                <button className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300">
                  Записаться на занятия
                </button>
              </div>
            </div>

            {/* Индивидуальный курс */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative p-8">
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm transform rotate-12">
                  Акция -20%
                </div>
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Индивидуальный курс</h3>
                  <p className="text-gray-600 mt-2">Персональные занятия с экспертом</p>
                  <div className="mt-2 inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    ⏰ Скидка действует 24 часа
                  </div>
                </div>
                <div className="space-y-6 mb-8">
                  {courseModules.map((module, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-primary-200">
                      <div className="absolute left-0 top-0 -ml-[9px] h-4 w-4 rounded-full bg-primary-600" />
                      <h4 className="font-semibold text-gray-900 mb-1">{module.title}</h4>
                      <p className="text-gray-600 text-sm mb-1">{module.description}</p>
                      <p className="text-sm text-primary-600">{module.duration}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Ваш бонус:</span>
                  </div>
                  <div className="text-yellow-800 font-medium flex items-center">
                    Урок по дыхательным практикам для детей
                  </div>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">14 999</span>
                  <span className="text-xl text-gray-500 ml-1">₽</span>
                  <span className="ml-3 text-lg text-gray-400 line-through">22 000 ₽</span>
                  <span className="ml-2 text-sm text-red-500 font-medium">-32%</span>
                </div>
                <button className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300">
                  Начать обучение
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Не упустите возможность изменить свою жизнь!
              </h3>
              <p className="text-lg mb-6">
                Выберите подходящий вариант и начните свой путь к здоровому дыханию уже сегодня
              </p>
              <div className="inline-block bg-white/20 rounded-lg px-4 py-2">
                До конца акции осталось: {timeLeft}
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Products; 