import React, { useEffect, useState } from 'react';
import { Check, PlayCircle, Crown, Clock, Zap } from 'lucide-react';

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
    <section id="products" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Special Offer Banner */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Только сегодня: Специальное предложение для участников теста дыхания
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-8 w-8 animate-pulse" />
              <p className="font-mono text-3xl font-bold tracking-wider animate-bounce">
                {timeLeft}
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 text-teal-800 px-6 py-3 rounded-full font-medium text-lg">
            Уже 35 человек улучшили свое дыхание в этом месяце
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Video Course Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">Получить видео-урок</h3>
                <PlayCircle className="h-8 w-8 text-teal-600" />
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
                  <Check className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-600">Базовые техники дыхания</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-600">Практические упражнения</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-teal-500 mr-3" />
                  <span className="text-gray-600">PDF-инструкция</span>
                </div>
              </div>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold text-gray-900">990</span>
                <span className="text-xl text-gray-500 ml-1">₽</span>
                <span className="ml-3 text-lg text-gray-400 line-through">2600 ₽</span>
                <span className="ml-2 text-sm text-red-500 font-medium">-62%</span>
              </div>
              <button className="w-full bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-teal-700 transition-colors duration-300">
                Получить доступ
              </button>
            </div>
          </div>

          {/* Full Course Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <div className="absolute top-4 right-4">
                <div className="bg-yellow-400 text-white px-4 py-1 rounded-full flex items-center">
                  <Crown className="h-4 w-4 mr-1" />
                  Бестселлер
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Полный курс</h3>
                <div className="space-y-6 mb-8">
                  {courseModules.map((module, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-teal-200">
                      <div className="absolute left-0 top-0 -ml-[9px] h-4 w-4 rounded-full bg-teal-600" />
                      <h4 className="font-semibold text-gray-900 mb-1">{module.title}</h4>
                      <p className="text-gray-600 text-sm mb-1">{module.description}</p>
                      <p className="text-sm text-teal-600">{module.duration}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">9900</span>
                  <span className="text-xl text-gray-500 ml-1">₽</span>
                  <span className="ml-3 text-lg text-gray-400 line-through">17000 ₽</span>
                  <span className="ml-2 text-sm text-red-500 font-medium">-42%</span>
                </div>
                <button className="w-full bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-teal-700 transition-colors duration-300">
                  Начать обучение
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 