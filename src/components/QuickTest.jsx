import React, { useState } from 'react';
import { ClipboardCheck, X, ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTransition from './SectionTransition';

const questions = [
  {
    question: 'Как часто вы чувствуете усталость в течение дня?',
    options: [
      { text: 'Почти никогда', score: 1 },
      { text: 'Иногда к вечеру', score: 2 },
      { text: 'Часто после обеда', score: 3 },
      { text: 'Практически постоянно', score: 4 }
    ]
  },
  {
    question: 'Замечали ли вы, что дышите через рот?',
    options: [
      { text: 'Нет, всегда дышу носом', score: 1 },
      { text: 'Иногда при физической нагрузке', score: 2 },
      { text: 'Часто, особенно в стрессе', score: 3 },
      { text: 'Да, в основном дышу ртом', score: 4 }
    ]
  },
  {
    question: 'Как вы оцениваете качество своего сна?',
    options: [
      { text: 'Отлично, высыпаюсь полностью', score: 1 },
      { text: 'Хорошо, но иногда трудно заснуть', score: 2 },
      { text: 'Среднее, часто просыпаюсь', score: 3 },
      { text: 'Плохо, постоянно не высыпаюсь', score: 4 }
    ]
  },
  {
    question: 'Испытываете ли вы тревожность или беспокойство?',
    options: [
      { text: 'Очень редко', score: 1 },
      { text: 'Иногда в стрессовых ситуациях', score: 2 },
      { text: 'Довольно часто', score: 3 },
      { text: 'Практически каждый день', score: 4 }
    ]
  },
  {
    question: 'Как часто вы занимаетесь спортом или физической активностью?',
    options: [
      { text: 'Регулярно, 3-4 раза в неделю', score: 1 },
      { text: '1-2 раза в неделю', score: 2 },
      { text: 'Очень редко', score: 3 },
      { text: 'Практически не занимаюсь', score: 4 }
    ]
  },
  {
    question: 'Замечаете ли вы напряжение в шее и плечах?',
    options: [
      { text: 'Нет, не замечаю', score: 1 },
      { text: 'Иногда после долгой работы', score: 2 },
      { text: 'Часто к концу дня', score: 3 },
      { text: 'Постоянное напряжение', score: 4 }
    ]
  },
  {
    question: 'Как часто вы испытываете головные боли?',
    options: [
      { text: 'Крайне редко', score: 1 },
      { text: '1-2 раза в месяц', score: 2 },
      { text: 'Несколько раз в неделю', score: 3 },
      { text: 'Практически ежедневно', score: 4 }
    ]
  },
  {
    question: 'Замечаете ли вы, что вам не хватает воздуха при физической нагрузке?',
    options: [
      { text: 'Нет, дыхание всегда ровное', score: 1 },
      { text: 'Иногда при интенсивной нагрузке', score: 2 },
      { text: 'Часто даже при умеренной активности', score: 3 },
      { text: 'Да, даже при небольшой нагрузке', score: 4 }
    ]
  },
  {
    question: 'Как часто вы чувствуете себя энергичным после пробуждения?',
    options: [
      { text: 'Почти всегда', score: 1 },
      { text: 'Часто, но не всегда', score: 2 },
      { text: 'Редко', score: 3 },
      { text: 'Практически никогда', score: 4 }
    ]
  },
  {
    question: 'Замечаете ли вы, что ваше дыхание учащается в стрессовых ситуациях?',
    options: [
      { text: 'Нет, остаётся спокойным', score: 1 },
      { text: 'Иногда немного учащается', score: 2 },
      { text: 'Часто становится поверхностным', score: 3 },
      { text: 'Да, всегда сбивается', score: 4 }
    ]
  }
];

const getResultCategory = (score) => {
  const maxScore = questions.length * 4; // Максимально возможный балл
  const percentage = (score / maxScore) * 100;

  if (percentage <= 35) {
    return {
      title: 'Хороший результат',
      description: 'Ваше дыхание в целом здоровое, но есть потенциал для улучшения.',
      icon: <CheckCircle2 className="h-12 w-12 text-green-500" />,
      color: 'bg-green-100 text-green-800',
      recommendations: [
        'Поддерживайте текущие привычки',
        'Изучите техники для улучшения осознанности дыхания',
        'Регулярно практикуйте дыхательные упражнения'
      ]
    };
  } else if (percentage <= 65) {
    return {
      title: 'Требует внимания',
      description: 'Есть признаки нарушения дыхательного паттерна, которые можно исправить.',
      icon: <AlertCircle className="h-12 w-12 text-yellow-500" />,
      color: 'bg-yellow-100 text-yellow-800',
      recommendations: [
        'Обратите внимание на свое дыхание в течение дня',
        'Начните практиковать базовые дыхательные техники',
        'Рассмотрите возможность консультации специалиста'
      ]
    };
  } else {
    return {
      title: 'Необходима коррекция',
      description: 'Выявлены серьезные отклонения в паттерне дыхания.',
      icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
      color: 'bg-red-100 text-red-800',
      recommendations: [
        'Рекомендуется консультация специалиста',
        'Начните курс коррекции дыхания',
        'Обратите внимание на факторы, влияющие на ваше дыхание'
      ]
    };
  }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.645, 0.045, 0.355, 1.000]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
};

const overlayVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const QuickTest = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '' });
  const [showContactForm, setShowContactForm] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowContactForm(false);
    setContactInfo({ name: '', email: '' });
    setTotalScore(0);
    document.body.style.overflow = 'auto';
  };

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = newAnswers.reduce((total, answer, index) => {
        return total + questions[index].options[answer].score;
      }, 0);
      setTotalScore(score);
      setShowContactForm(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowContactForm(false);
    setContactInfo({ name: '', email: '' });
    setTotalScore(0);
  };

  const handleSubmitResults = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки результатов на email
    setShowContactForm(false);
    setShowResults(true);
  };

  const handleConsultation = () => {
    window.open('https://t.me/NastuPopova', '_blank');
    closeModal();
  };

  const result = getResultCategory(totalScore);

  return (
    <section id="quick-test" className="py-20 bg-gradient-to-b from-primary-100 to-white">
      <SectionTransition>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
              <ClipboardCheck className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Экспресс-тест дыхания
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Пройдите быстрый тест, чтобы узнать, есть ли у вас проблемы с дыханием
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Левая колонка - фото инструктора */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/instructor.jpg"
                  alt="Инструктор по дыхательным практикам"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Анастасия Попова</h3>
                  <p className="text-lg opacity-90 mb-4">
                    Сертифицированный инструктор по дыхательным практикам
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm">5+ лет опыта</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm">500+ учеников</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm">Международные сертификаты</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - тест */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Узнайте качество вашего дыхания
                      </h3>
                      <p className="text-gray-600">
                        Пройдите тест и получите персональные рекомендации от эксперта
                      </p>
                      <div className="mt-3 inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm">
                        🎁 Бонус: PDF-гайд по технике дыхания
                      </div>
                    </div>
                    <button 
                      onClick={openModal}
                      className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Пройти тест за 2-3 минуты ➜</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                    <p className="mt-3 text-sm text-orange-600 font-medium">
                      ⚡️ Уже прошли тест: 147 человек
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                      <p className="text-2xl font-bold text-teal-700 mb-2">2-3</p>
                      <p className="text-gray-600">минуты</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
                      <p className="text-2xl font-bold text-teal-700 mb-2">{questions.length}</p>
                      <p className="text-gray-600">вопросов</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl relative group">
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs transform rotate-12">
                        Сегодня
                      </div>
                      <p className="text-2xl font-bold text-teal-700 mb-2">100%</p>
                      <p className="text-gray-600">бесплатно</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
            />
            
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6 text-gray-500" />
                </motion.button>

                <div className="p-8">
                  {!showResults && !showContactForm && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            Вопрос {currentQuestion + 1} из {questions.length}
                          </h3>
                          <div className="text-sm text-gray-500">
                            {Math.round((currentQuestion / questions.length) * 100)}% пройдено
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-xl text-gray-900 mb-6">
                          {questions[currentQuestion].question}
                        </h4>
                        <div className="space-y-4">
                          {questions[currentQuestion].options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleAnswer(index)}
                              className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200"
                            >
                              <span className="text-gray-700">{option.text}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {currentQuestion > 0 && (
                        <button
                          onClick={goBack}
                          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
                        >
                          <ArrowLeft className="h-5 w-5 mr-2" />
                          Вернуться к предыдущему вопросу
                        </button>
                      )}
                    </motion.div>
                  )}

                  {showContactForm && (
                    <motion.form
                      onSubmit={handleSubmitResults}
                      className="space-y-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Получите результаты теста и персональный план
                      </h3>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                        <p className="text-orange-800">
                          ⏰ Ваши результаты будут готовы через: <span className="font-bold">4:59</span>
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ваше имя
                        </label>
                        <input
                          type="text"
                          value={contactInfo.name}
                          onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email для получения результатов
                        </label>
                        <input
                          type="email"
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                      >
                        Получить персональный план улучшения дыхания
                      </button>
                    </motion.form>
                  )}

                  {showResults && (
                    <motion.div
                      className="space-y-6"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`p-6 rounded-xl ${result.color}`}>
                        <div className="flex items-start">
                          {result.icon}
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                            <p>{result.description}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Рекомендации:
                        </h4>
                        <ul className="space-y-3">
                          {result.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start">
                              <ArrowRight className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
                              <span className="text-gray-600">{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                          <p className="text-orange-800 font-medium">
                            🎯 Специальное предложение: персональная консультация со скидкой 30%
                          </p>
                          <p className="text-sm text-orange-600 mt-1">
                            Действует только 24 часа после прохождения теста
                          </p>
                        </div>
                        <button
                          onClick={handleConsultation}
                          className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                        >
                          Получить персональную консультацию эксперта
                        </button>
                        <button
                          onClick={restartTest}
                          className="w-full mt-4 text-teal-600 font-semibold py-3 px-6 rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors duration-200"
                        >
                          Пройти тест ещё раз для уточнения результатов
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default QuickTest; 