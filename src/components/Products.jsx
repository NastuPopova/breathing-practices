import React, { useEffect, useState } from 'react';
import { Check, Clock, Zap, Gift, Send } from 'lucide-react';
import SectionTransition from './SectionTransition';

const TELEGRAM_BOT = 'breathing_opros_bot'; // Замените на имя вашего бота

const Products = () => {
  const [timeLeft, setTimeLeft] = useState('23:59:59');
  const [improvedPeople, setImprovedPeople] = useState(0);
  const [totalTestPassed, setTotalTestPassed] = useState(0);

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

    const calculatePeople = () => {
      const now = new Date();
      const dayOfMonth = now.getDate();
      const baseNumber = 3; // Минимальное количество в начале месяца
      const maxNumber = 35; // Максимальное количество в конце месяца
      const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      
      const calculated = Math.floor(baseNumber + (maxNumber - baseNumber) * (dayOfMonth / daysInMonth));
      setImprovedPeople(calculated);
    };

    calculatePeople();
    const peopleTimer = setInterval(calculatePeople, 3600000);

    const calculateTotalTestPassed = () => {
      const now = new Date();
      const currentMonth = now.getMonth(); // 0-11
      
      // Базовое количество людей для каждого месяца
      const monthlyBase = [15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42];
      
      // Рассчитываем общее количество за все прошедшие месяцы
      let total = 0;
      for (let i = 0; i <= currentMonth; i++) {
        // Добавляем небольшую случайность к базовому числу
        const randomFactor = Math.floor(Math.random() * 5) - 2; // от -2 до +2
        total += monthlyBase[i] + randomFactor;
      }
      
      // Добавляем текущий день месяца
      const dayOfMonth = now.getDate();
      const currentMonthTotal = Math.floor((monthlyBase[currentMonth] / 30) * dayOfMonth);
      
      setTotalTestPassed(total + currentMonthTotal);
    };

    calculateTotalTestPassed();
    const testTimer = setInterval(calculateTotalTestPassed, 3600000); // Обновляем каждый час

    return () => {
      clearInterval(timer);
      clearInterval(peopleTimer);
      clearInterval(testTimer);
    };
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

  const handleTelegramRedirect = (product) => {
    const links = {
      starter: `https://t.me/${TELEGRAM_BOT}?start=starter`,
      consultation: `https://t.me/${TELEGRAM_BOT}?start=consultation`,
      course: `https://t.me/${TELEGRAM_BOT}?start=course`
    };
    window.open(links[product], '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-primary-100">
      <SectionTransition>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Special Offer Banner */}
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Только сегодня: Специальное предложение для участников теста дыхания
              </h3>
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="relative">
                  <Clock className="h-12 w-12 animate-pulse text-yellow-300" />
                  <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-4 h-4 animate-ping"></div>
                </div>
                <p className="font-mono text-4xl font-bold tracking-wider bg-white/10 px-6 py-3 rounded-xl">
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
              Уже {improvedPeople} человек улучшили свое дыхание в этом месяце
            </div>
            <div className="mt-4 inline-block bg-green-50 text-green-800 px-6 py-3 rounded-full font-medium">
              <span className="text-green-600 font-bold">{totalTestPassed}</span> человек прошли тест с начала года
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
            {/* Стартовый комплект */}
            <div className="bg-white rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="relative p-8">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-xl text-lg transform rotate-12 shadow-lg font-bold z-10 whitespace-nowrap">
                  💎 Самый доступный старт 💎
                </div>
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Стартовый комплект дыхательных практик</h3>
                  <p className="text-gray-600 mt-2">Идеально для начинающих</p>
                  <div className="mt-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    ⚡️ Мгновенный доступ
                  </div>
                </div>
                <div className="space-y-4 mb-8 bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900">Преимущества:</h4>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Видеоурок длительностью 40 минут</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">PDF-инструкция для самостоятельной практики</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Мгновенный доступ после оплаты</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Бонусы:</span>
                  </div>
                  <div className="space-y-3">
                    <div className="text-yellow-800 flex items-center">
                      <Check className="h-4 w-4 text-yellow-600 mr-2" />
                      Урок по замеру контрольной паузы
                    </div>
                    <div className="text-yellow-800 flex items-center">
                      <Check className="h-4 w-4 text-yellow-600 mr-2" />
                      Аудиозапись для медитативного дыхания (15 минут)
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900">990</span>
                    <span className="text-xl text-gray-500 ml-1">₽</span>
                    <span className="ml-3 text-lg text-gray-400 line-through">2600 ₽</span>
                    <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">-62%</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleTelegramRedirect('starter')}
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Получить доступ через Telegram
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Доступ открывается мгновенно после оплаты
                </p>
              </div>
            </div>

            {/* Индивидуальные консультации */}
            <div className="bg-white rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300 mt-4">
              <div className="relative p-8">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-xl text-lg transform rotate-12 shadow-lg font-bold z-10 whitespace-nowrap">
                  ⭐️ Персональный подход ⭐️
                </div>
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Индивидуальные консультации</h3>
                  <p className="text-gray-600 mt-2">Персональная работа с экспертом</p>
                  <div className="mt-2 inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-semibold">
                    <Clock className="h-5 w-5 animate-pulse" />
                    Осталось 2 места на этой неделе
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Разбор вашей техники дыхания</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Работа с вашими запросами</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-600">Видеозапись консультаций для повторного просмотра</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-8">
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                    <Gift className="h-5 w-5" />
                    <span>Ваш бонус:</span>
                  </div>
                  <div className="text-yellow-800 font-medium">
                    Бесплатный краткий анализ вашего дыхания перед первой консультацией
                  </div>
                </div>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">4 500</span>
                  <span className="text-xl text-gray-500 ml-1">₽</span>
                  <span className="ml-3 text-lg text-gray-400 line-through">6 000 ₽</span>
                  <span className="ml-2 text-sm text-red-500 font-medium">-25%</span>
                </div>
                <button 
                  onClick={() => handleTelegramRedirect('consultation')}
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Записаться на консультации в Telegram
                </button>
              </div>
            </div>

            {/* Полный курс видеоуроков */}
            <div className="bg-white rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300 mt-4">
              <div className="relative p-8">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-xl text-lg transform rotate-12 shadow-lg font-bold z-10 whitespace-nowrap">
                  🔥 Акция -20% 🔥
                </div>
                <div className="bg-teal-50 rounded-xl p-4 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Полный курс видеоуроков</h3>
                  <p className="text-gray-600 mt-2">Комплексное обучение + записи всех уроков</p>
                  <div className="mt-2 inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-base font-semibold">
                    <Clock className="h-5 w-5 animate-pulse" />
                    Скидка действует 24 часа
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
                <button 
                  onClick={() => handleTelegramRedirect('course')}
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Начать обучение через Telegram
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