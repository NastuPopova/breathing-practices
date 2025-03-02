import React, { useState, useEffect } from 'react';
import { ClipboardCheck, X, ArrowLeft, AlertTriangle, CheckCircle2, AlertCircle, Shield, Clock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTransition from './SectionTransition';
import Timer from './Timer';

const questions = [
  {
    id: 1,
    category: 'breathing',
    question: 'Как часто вы испытываете затруднения с дыханием?',
    options: [
      { text: 'Практически никогда', score: 1 },
      { text: 'Иногда в течение дня', score: 2 },
      { text: 'Часто чувствую нехватку воздуха', score: 3 },
      { text: 'Постоянно ощущаю проблемы с дыханием', score: 4 }
    ],
    impact: {
      anxiety: 0.5,
      energy: 0.3
    }
  },
  {
    id: 2,
    category: 'energy',
    question: 'Как бы вы оценили свой уровень энергии в течение дня?',
    options: [
      { text: 'Высокий уровень энергии весь день', score: 1 },
      { text: 'Средний уровень, бывает усталость', score: 2 },
      { text: 'Часто чувствую упадок сил', score: 3 },
      { text: 'Постоянная усталость', score: 4 }
    ],
    impact: {
      sleep: 0.4,
      breathing: 0.3
    }
  },
  {
    id: 3,
    category: 'sleep',
    question: 'Как вы оцениваете качество своего сна?',
    options: [
      { text: 'Сплю хорошо, просыпаюсь отдохнувшим', score: 1 },
      { text: 'Иногда бывают проблемы со сном', score: 2 },
      { text: 'Часто просыпаюсь уставшим', score: 3 },
      { text: 'Постоянные проблемы со сном', score: 4 }
    ],
    impact: {
      energy: 0.5,
      anxiety: 0.3
    }
  },
  {
    id: 4,
    category: 'breathing',
    question: 'Замечали ли вы, что дышите через рот?',
    options: [
      { text: 'Нет, всегда дышу носом', score: 1 },
      { text: 'Иногда при физической нагрузке', score: 2 },
      { text: 'Часто, особенно в стрессе', score: 3 },
      { text: 'Да, в основном дышу ртом', score: 4 }
    ],
    impact: {
      sleep: 0.4,
      breathing: 0.6
    }
  },
  {
    id: 5,
    category: 'anxiety',
    question: 'Испытываете ли вы тревожность или беспокойство?',
    options: [
      { text: 'Очень редко', score: 1 },
      { text: 'Иногда в стрессовых ситуациях', score: 2 },
      { text: 'Довольно часто', score: 3 },
      { text: 'Практически каждый день', score: 4 }
    ],
    impact: {
      breathing: 0.4,
      sleep: 0.3
    }
  },
  {
    id: 6,
    category: 'physical',
    question: 'Как часто вы занимаетесь спортом или физической активностью?',
    options: [
      { text: 'Регулярно, 3-4 раза в неделю', score: 1 },
      { text: '1-2 раза в неделю', score: 2 },
      { text: 'Очень редко', score: 3 },
      { text: 'Практически не занимаюсь', score: 4 }
    ],
    impact: {
      energy: 0.5,
      breathing: 0.4
    }
  },
  {
    id: 7,
    category: 'physical',
    question: 'Замечаете ли вы напряжение в шее и плечах?',
    options: [
      { text: 'Нет, не замечаю', score: 1 },
      { text: 'Иногда после долгой работы', score: 2 },
      { text: 'Часто к концу дня', score: 3 },
      { text: 'Постоянное напряжение', score: 4 }
    ],
    impact: {
      breathing: 0.4,
      anxiety: 0.3
    }
  },
  {
    id: 8,
    category: 'physical',
    question: 'Как часто вы испытываете головные боли?',
    options: [
      { text: 'Крайне редко', score: 1 },
      { text: '1-2 раза в месяц', score: 2 },
      { text: 'Несколько раз в неделю', score: 3 },
      { text: 'Практически ежедневно', score: 4 }
    ],
    impact: {
      breathing: 0.3,
      anxiety: 0.4
    }
  },
  {
    id: 9,
    category: 'breathing',
    question: 'Замечаете ли вы, что вам не хватает воздуха при физической нагрузке?',
    options: [
      { text: 'Нет, дыхание всегда ровное', score: 1 },
      { text: 'Иногда при интенсивной нагрузке', score: 2 },
      { text: 'Часто даже при умеренной активности', score: 3 },
      { text: 'Да, даже при небольшой нагрузке', score: 4 }
    ],
    impact: {
      energy: 0.5,
      physical: 0.4
    }
  },
  {
    id: 10,
    category: 'energy',
    question: 'Как часто вы чувствуете себя энергичным после пробуждения?',
    options: [
      { text: 'Почти всегда', score: 1 },
      { text: 'Часто, но не всегда', score: 2 },
      { text: 'Редко', score: 3 },
      { text: 'Практически никогда', score: 4 }
    ],
    impact: {
      sleep: 0.6,
      anxiety: 0.3
    }
  },
  {
    id: 11,
    category: 'anxiety',
    question: 'Замечаете ли вы, что ваше дыхание учащается в стрессовых ситуациях?',
    options: [
      { text: 'Нет, остаётся спокойным', score: 1 },
      { text: 'Иногда немного учащается', score: 2 },
      { text: 'Часто становится поверхностным', score: 3 },
      { text: 'Да, всегда сбивается', score: 4 }
    ],
    impact: {
      breathing: 0.5,
      anxiety: 0.5
    }
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [estimatedTimeLeft, setEstimatedTimeLeft] = useState('2-3');
  const [activeUsers, setActiveUsers] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalTestPassed, setTotalTestPassed] = useState(0);

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmitResults = (e) => {
    e.preventDefault();
    setShowForm(false);
    setShowResults(true);
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem('testProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCurrentQuestion(progress.currentQuestion);
      setAnswers(progress.answers);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      localStorage.setItem('testProgress', JSON.stringify({
        currentQuestion: currentQuestion,
        answers
      }));
    }
  }, [currentQuestion, answers]);

  useEffect(() => {
    const calculateTotalTestPassed = () => {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const daysPassed = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
      
      // Базовое количество в день (в среднем 2-3 человека)
      const basePerDay = 2;
      // Добавляем случайность для реалистичности
      const randomFactor = Math.floor(Math.random() * 2);
      
      const total = (daysPassed * basePerDay) + randomFactor + 100; // 100 - начальная база
      setTotalTestPassed(total);
    };

    calculateTotalTestPassed();
    const interval = setInterval(calculateTotalTestPassed, 3600000); // Обновляем каждый час

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => Math.max(8, Math.min(15, prev + Math.floor(Math.random() * 3) - 1)));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentQuestion < questions.length) {
      const remainingQuestions = questions.length - currentQuestion;
      const estimatedMinutes = Math.ceil(remainingQuestions * 0.3);
      setEstimatedTimeLeft(`${estimatedMinutes}-${estimatedMinutes + 1}`);
    }
  }, [currentQuestion, questions.length]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answerIndex) => {
    const question = questions[currentQuestion];
    if (!question || !question.options) return;

    const selectedOption = question.options[answerIndex];
    const newAnswers = [...answers, { 
      questionId: question.id,
      answerIndex,
      score: selectedOption.score,
      category: question.category
    }];
    setAnswers(newAnswers);

    const feedback = generateFeedback(selectedOption.score, question.category);
    setFeedback(feedback);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const totalScore = newAnswers.reduce((total, answer) => {
        return total + answer.score;
      }, 0);
      setTotalScore(totalScore);
      setShowForm(true);
    }
  };

  const generateFeedback = (score, category) => {
    const feedbacks = {
      breathing: {
        low: 'Ваше дыхание в хорошем состоянии',
        medium: 'Есть некоторые проблемы с дыханием',
        high: 'Рекомендуется уделить внимание дыхательным практикам'
      },
      energy: {
        low: 'У вас хороший уровень энергии',
        medium: 'Есть потенциал для улучшения энергии',
        high: 'Необходимо работать над повышением энергии'
      },
      sleep: {
        low: 'Ваш сон в норме',
        medium: 'Есть проблемы со сном',
        high: 'Требуется серьезная работа над качеством сна'
      },
      anxiety: {
        low: 'Уровень тревожности в норме',
        medium: 'Средний уровень тревожности',
        high: 'Высокий уровень тревожности'
      },
      general: {
        low: 'Хороший результат',
        medium: 'Есть области для улучшения',
        high: 'Требуется внимание к здоровью'
      }
    };

    let level;
    if (score <= 2) level = 'low';
    else if (score <= 3) level = 'medium';
    else level = 'high';

    const feedbackCategory = category && feedbacks[category] ? category : 'general';
    return feedbacks[feedbackCategory][level];
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setShowForm(false);
    setTotalScore(0);
  };

  const handleConsultation = () => {
    window.open('https://t.me/NastuPopova', '_blank');
    setShowResults(false);
  };

  const result = getResultCategory(totalScore);

  const BenefitsList = () => (
    <div className="bg-teal-50 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">
        После прохождения теста вы получите:
      </h4>
      <ul className="space-y-3">
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
          <span>Персональный план улучшения дыхания</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
          <span>PDF-гайд "Базовые техники дыхания"</span>
        </li>
        <li className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0" />
          <span>Специальное предложение на курс (действует 24 часа)</span>
        </li>
      </ul>
    </div>
  );

  const SecurityBadge = () => (
    <div className="flex items-center justify-center text-sm text-gray-600 mt-4">
      <Shield className="h-4 w-4 text-teal-600 mr-2" />
      <span>Ваши данные защищены и не передаются третьим лицам</span>
    </div>
  );

  const ActiveUsersIndicator = () => (
    <div className="bg-teal-50/50 rounded-lg px-4 py-2 text-sm text-teal-800 flex items-center justify-center mb-4">
      <div className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse" />
      Сейчас тест проходят еще {activeUsers} человек
    </div>
  );

  const TimeEstimate = () => (
    <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
      <Clock className="h-4 w-4 mr-1" />
      Осталось примерно {estimatedTimeLeft} минуты
    </div>
  );

  if (showResults) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-6">Результаты теста</h2>
        <div className="bg-green-100 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-4 text-green-800">
            Ваш персональный план дыхательных практик готов
          </h3>
          <p className="text-green-700">
            На основе ваших ответов мы подготовили индивидуальные рекомендации
          </p>
        </div>
        <button 
          className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
          onClick={() => window.location.href = '#products'}
        >
          Получить рекомендации
        </button>
      </div>
    );
  }

  const currentQuestionObj = questions[currentQuestion];
  
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
                      onClick={() => {
                        setIsModalOpen(true);
                        setCurrentQuestion(0);
                      }}
                      className="bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Пройти тест за 2-3 минуты ➜</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                    <div className="mt-4 flex flex-col items-center space-y-2">
                      <p className="text-sm text-orange-600 font-medium">
                        ⚡️ Сейчас проходят тест: {activeUsers} человек
                      </p>
                    </div>
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
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
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                >
                  <X className="h-6 w-6 text-gray-500" />
                </motion.button>

                <div className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!showForm && currentQuestionObj ? (
                      <>
                        {currentQuestion === 0 && <BenefitsList />}
                        <ActiveUsersIndicator />
                        <div className="mb-8">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Вопрос {currentQuestion + 1} из {questions.length}
                            </h3>
                            <div className="text-sm text-gray-500">
                              Прогресс: {Math.round(progress)}%
                            </div>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-teal-500 to-teal-600 transition-all duration-300"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          {feedback && (
                            <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                              <p className="text-teal-800">{feedback}</p>
                            </div>
                          )}
                        </div>

                        <div className="mb-8">
                          <h4 className="text-xl text-gray-900 mb-6">
                            {currentQuestionObj.question}
                          </h4>
                          <div className="space-y-4">
                            {currentQuestionObj.options.map((option, index) => (
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
                        <TimeEstimate />
                        <SecurityBadge />
                      </>
                    ) : showForm ? (
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
                        <Timer onTimeEnd={() => {
                          console.log('Время вышло');
                        }} />
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
                    ) : null}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default QuickTest; 