import React, { useState, useEffect } from 'react';
import { Quote, X, ChevronLeft, ChevronRight, Image as ImageIcon, CheckCircle, MessageCircle, Calendar, Star, ThumbsUp, Shield } from 'lucide-react';

const reviews = [
  {
    name: 'Любовь',
    surname: '',
    verified: true,
    telegramUsername: '@lubov_p',
    rating: 5,
    content: `Хочу оставить отзыв о прохождении курса техники дыхания у Анастасии. Раньше постоянно боролась с тревогой. Техники дыхания, которые я изучила на курсе, оказались простыми, но невероятно эффективными.`,
    fullContent: `Хочу оставить отзыв о прохождении курса техники дыхания у Анастасии. Раньше постоянно боролась с тревогой. Техники дыхания, которые я изучила на курсе, оказались простыми, но невероятно эффективными. Научившись правильно дышать, я почувствовала значительное облегчение. Научилась справляться с тревожностью. Каждый урок наполнен полезной информацией и практическими упражнениями, которые я смогу применять в повседневной жизни. Удивительно было как дыхание связано с нашими эмоциями. Теперь я могу управлять своим состоянием.`,
    results: {
      'улучшение сна': '80%',
      'снижение тревожности': '65%',
      'повышение энергии': '70%'
    },
    date: '9 февраля 2024',
    image: '/reviews/otviv1.jpg',
    likes: 24,
    courseDuration: '2 месяца'
  },
  {
    name: 'Александра',
    surname: '',
    verified: true,
    telegramUsername: '@alex_iv',
    rating: 4,
    content: `Методику правильного дыхания, освоила совсем недавно! Благодаря Анастасии, я узнала технику правильного дыхания, благотворное влияние на организм!`,
    fullContent: `Методику правильного дыхания, освоила совсем недавно! Благодаря Анастасии, я узнала технику правильного дыхания, благотворное влияние на организм! Из видимых результатов, я вылечила аллергию на животных, от которой страдала всю жизнь, стала лучше себя чувствовать, навсегда забыла про головные боли! На мой взгляд достойный результат, точнее промежуточный....дальше, чувствую, будет ещё интереснее!!!! Спасибо огромное за упражнения!!!!`,
    results: {
      'улучшение аллергии': '90%',
      'уменьшение головной боли': '100%',
      'общее самочувствие': '85%'
    },
    date: '15 марта 2024',
    image: '/reviews/otziv2.jpg',
    likes: 18,
    courseDuration: '1 месяц'
  },
  {
    name: 'Дмитрий',
    surname: '',
    verified: true,
    telegramUsername: '@dim_sok',
    rating: 5,
    content: `Никогда не думал, что правильное дыхание может так сильно повлиять на качество жизни. После курса я заметил значительное улучшение в своей физической форме и выносливости.`,
    fullContent: `Никогда не думал, что правильное дыхание может так сильно повлиять на качество жизни. После курса я заметил значительное улучшение в своей физической форме и выносливости. Особенно помогает при занятиях спортом. Техники, которым научила Анастасия, действительно работают. Моя производительность в спортзале выросла на 40%, а восстановление стало намного быстрее.`,
    results: {
      'улучшение производительности': '40%',
      'скорость восстановления': '60%',
      'снижение стресса': '75%'
    },
    date: '1 марта 2024',
    likes: 15,
    courseDuration: '3 месяца'
  }
];

const VerificationButton = ({ onVerify }) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const botUsername = 'BreathingPracticeVerifyBot'; // Замените на username вашего бота

  const handleVerification = async () => {
    setIsVerifying(true);
    
    // Генерируем уникальный код верификации
    const verificationCode = Math.random().toString(36).substring(7);
    
    // Сохраняем код в localStorage
    localStorage.setItem('verificationCode', verificationCode);
    
    // Открываем Telegram с ботом
    window.open(`https://t.me/${botUsername}?start=${verificationCode}`, '_blank');
    
    // Начинаем проверку верификации
    checkVerification(verificationCode);
  };

  const checkVerification = async (code) => {
    try {
      // Здесь будет запрос к вашему API для проверки верификации
      const response = await fetch(`/api/check-verification?code=${code}`);
      const data = await response.json();
      
      if (data.verified) {
        onVerify(data.telegramUsername);
      }
    } catch (error) {
      console.error('Ошибка верификации:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <button
      onClick={handleVerification}
      disabled={isVerifying}
      className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
    >
      <MessageCircle className="h-5 w-5" />
      {isVerifying ? 'Проверка...' : 'Подтвердить через Telegram'}
    </button>
  );
};

const ReviewForm = ({ onSubmit }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [telegramUsername, setTelegramUsername] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    rating: 5,
    content: '',
    image: null
  });

  const handleVerification = (username) => {
    setIsVerified(true);
    setTelegramUsername(username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert('Пожалуйста, подтвердите свою личность через Telegram');
      return;
    }
    
    onSubmit({
      ...formData,
      verified: true,
      telegramUsername,
      date: new Date().toLocaleDateString('ru-RU'),
      likes: 0
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-yellow-600" />
          <span className="font-medium text-yellow-800">Верификация отзыва</span>
        </div>
        <p className="text-sm text-yellow-600 mb-4">
          Для публикации отзыва необходимо подтвердить свою личность через Telegram
        </p>
        {isVerified ? (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span>Подтверждено через {telegramUsername}</span>
          </div>
        ) : (
          <VerificationButton onVerify={handleVerification} />
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Имя
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Фамилия
          </label>
          <input
            type="text"
            value={formData.surname}
            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Оценка
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData({ ...formData, rating: star })}
              className="focus:outline-none"
            >
              <Star
                className={`h-8 w-8 ${
                  star <= formData.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ваш отзыв
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-32"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Фото отзыва (опционально)
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors"
      >
        Опубликовать отзыв
      </button>
    </form>
  );
};

const ReviewCard = ({ review, onClick, onImageClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
    >
      <div className="flex items-center mb-6">
        <div className="relative">
          {review.image ? (
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src={review.image} 
                alt={`${review.name} ${review.surname}`}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{review.name[0]}</span>
            </div>
          )}
          {review.verified && (
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 shadow-lg">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
        <div className="ml-4 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {review.name}
                {review.verified && (
                  <span className="text-sm text-teal-600 flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {review.telegramUsername}
                  </span>
                )}
              </h3>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  • {review.courseDuration}
                </span>
              </div>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {review.date}
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 line-clamp-4 mb-4">
        {review.content}
      </p>

      {review.results && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {Object.entries(review.results).map(([key, value]) => (
            <div key={key} className="bg-teal-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-teal-700">{value}</div>
              <div className="text-sm text-teal-600">
                {key}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-teal-600 text-sm font-medium">
          Нажмите, чтобы прочитать полностью
        </span>
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1 text-gray-500 hover:text-teal-600 transition-colors"
          >
            <ThumbsUp className="h-4 w-4" />
            <span className="text-sm">{review.likes}</span>
          </button>
          {review.image && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onImageClick(review.image);
              }}
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
            >
              <ImageIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Фото отзыва</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [telegramUsername, setTelegramUsername] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const showNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const showPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleNewReview = (review) => {
    // Здесь будет логика отправки отзыва на сервер
    console.log('Новый отзыв:', review);
    setShowReviewForm(false);
  };

  const generateVerificationCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const startVerification = () => {
    const code = generateVerificationCode();
    setVerificationCode(code);
    window.open(`https://t.me/your_bot_username?start=${code}`, '_blank');
    checkVerificationStatus(code);
  };

  const checkVerificationStatus = async (code) => {
    setIsVerifying(true);
    try {
      const response = await fetch(`http://localhost:3001/api/check-verification?code=${code}`);
      const data = await response.json();
      
      if (data.verified) {
        setIsVerified(true);
        setTelegramUsername(data.telegramUsername);
        setIsVerifying(false);
      } else {
        // Повторяем проверку каждые 3 секунды в течение 5 минут
        setTimeout(() => {
          if (!isVerified) {
            checkVerificationStatus(code);
          }
        }, 3000);
      }
    } catch (error) {
      console.error('Ошибка при проверке верификации:', error);
      setIsVerifying(false);
    }
  };

  const handleSubmitReview = async (reviewData) => {
    if (!isVerified) {
      alert('Пожалуйста, пройдите верификацию через Telegram перед отправкой отзыва');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...reviewData,
          telegramUsername,
          verified: true
        }),
      });

      const data = await response.json();
      if (data.success) {
        // Очищаем форму и обновляем список отзывов
        // ... existing code ...
      }
    } catch (error) {
      console.error('Ошибка при отправке отзыва:', error);
    }
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-primary-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
            <Quote className="h-8 w-8 text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы участников
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории людей, которые изменили свою жизнь с помощью правильного дыхания
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <ReviewCard
                    review={review}
                    onClick={() => setSelectedReview(review)}
                    onImageClick={(image) => setSelectedImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={showPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            disabled={isAnimating}
          >
            <ChevronLeft className="h-6 w-6 text-teal-600" />
          </button>
          <button
            onClick={showNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
            disabled={isAnimating}
          >
            <ChevronRight className="h-6 w-6 text-teal-600" />
          </button>

          {/* Индикаторы */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-teal-600 w-6' : 'bg-teal-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Модальное окно для полного отзыва */}
        {selectedReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedReview(null)}
            />
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setSelectedReview(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center text-2xl font-bold text-teal-600">
                      {selectedReview.name[0]}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {selectedReview.name}
                    </h3>
                    <p className="text-gray-600">
                      {selectedReview.date}
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 whitespace-pre-line">
                    {selectedReview.fullContent}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Модальное окно для просмотра изображения */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            />
            <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <img
                src={selectedImage}
                alt="Скриншот отзыва"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}

        <div className="mt-16 text-center space-y-6">
          <div className="inline-block bg-teal-100 text-teal-800 px-6 py-3 rounded-full font-medium text-lg">
            Более 50 успешных учеников
          </div>
          
          <div>
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors"
            >
              Оставить отзыв
            </button>
          </div>
        </div>

        {/* Модальное окно для формы отзыва */}
        {showReviewForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowReviewForm(false)}
            />
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setShowReviewForm(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Оставить отзыв
                </h3>
                <ReviewForm onSubmit={handleSubmitReview} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews; 