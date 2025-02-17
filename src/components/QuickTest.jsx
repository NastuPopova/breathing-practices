import React, { useState } from 'react';
import { ClipboardCheck, X, ArrowRight, ArrowLeft, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
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

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  Ответьте на несколько простых вопросов и получите персональные рекомендации
                </p>
                <button 
                  onClick={openModal}
                  className="bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Начать тестирование
                </button>
              </div>
              <div className="flex justify-center items-center space-x-8 mt-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">2-3</p>
                  <p className="text-gray-600">минуты</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">{questions.length}</p>
                  <p className="text-gray-600">вопросов</p>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900 mb-2">100%</p>
                  <p className="text-gray-600">бесплатно</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>

            <div className="p-8">
              {!showContactForm && !showResults ? (
                <>
                  <div className="w-full bg-gray-200 h-1 rounded-full mb-8">
                    <div 
                      className="bg-teal-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    {questions[currentQuestion].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full p-4 text-left rounded-xl border border-gray-200 hover:border-teal-600 hover:bg-teal-50 transition-all duration-200"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>

                  {currentQuestion > 0 && (
                    <button
                      onClick={goBack}
                      className="mt-6 flex items-center text-gray-600 hover:text-teal-600 transition-colors duration-200"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Вернуться к предыдущему вопросу
                    </button>
                  )}
                </>
              ) : showContactForm ? (
                <div className="text-center">
                  <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
                    <ClipboardCheck className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Получить результаты теста
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Оставьте свои контактные данные, чтобы получить подробный анализ и рекомендации
                  </p>
                  <form onSubmit={handleSubmitResults} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        required
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Ваш email"
                        required
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200"
                      />
                    </div>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={restartTest}
                        className="flex-1 bg-gray-100 text-gray-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors duration-200"
                      >
                        Пройти тест заново
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-teal-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-teal-700 transition-colors duration-200"
                      >
                        Получить результаты
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center">
                  <div className={`inline-block p-6 rounded-full mb-6 ${result.color}`}>
                    {result.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {result.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {result.description}
                  </p>
                  <div className="mb-8">
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                        style={{ width: `${(totalScore / (questions.length * 4)) * 100}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Ваш результат: {totalScore} из {questions.length * 4} баллов
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Рекомендации:</h4>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-teal-500 mt-2 mr-3" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={restartTest}
                      className="flex-1 bg-gray-100 text-gray-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    >
                      Пройти тест заново
                    </button>
                    <button
                      onClick={handleConsultation}
                      className="flex-1 bg-teal-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-teal-700 transition-colors duration-200"
                    >
                      Записаться на консультацию
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickTest; 