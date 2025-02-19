import React, { useState, useEffect } from 'react';
import { Quote, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const reviews = [
  {
    name: 'Любовь',
    content: `Хочу оставить отзыв о прохождении курса техники дыхания у Анастасии. Раньше постоянно боролась с тревогой. Техники дыхания, которые я изучила на курсе, оказались простыми, но невероятно эффективными. Научившись правильно дышать, я почувствовала значительное облегчение. Научилась справляться с тревожностью. Каждый урок наполнен полезной информацией и практическими упражнениями, которые я смогу применять в повседневной жизни. Удивительно было как дыхание связано с нашими эмоциями. Теперь я могу управлять своим состоянием. Отдельно хочу отметить благодарность Анастасии за ее профессионализм и поддержку. Рекомендую этот курс всем, кто сталкивается с тревожными состояниями. Это действительно работает, и я ощутила на себе положительный эффект. Большое спасибо!`,
    date: '9 февраля',
    image: '/reviews/otviv1.jpg'
  },
  {
    name: 'Александра',
    content: `Методику правильного дыхания, освоила совсем недавно! Благодаря Анастасии, я узнала технику правильного дыхания, благотворное влияние на организм! Из видимых результатов, я вылечила аллергию на животных, от которой страдала всю жизнь, стала лучше себя чувствовать, навсегда забыла про головные боли! На мой взгляд достойный результат, точнее промежуточный....дальше, чувствую, будет ещё интереснее!!!! Спасибо огромное за упражнения!!!!`,
    date: 'Недавно',
    image: '/reviews/otziv2.jpg'
  },
  {
    name: 'Мария',
    content: `После прохождения курса по дыхательным практикам моя жизнь изменилась к лучшему. Улучшился сон, появилось больше энергии, и я стала намного спокойнее реагировать на стрессовые ситуации. Анастасия - замечательный преподаватель, который действительно знает свое дело. Спасибо за такой полезный курс!`,
    date: '15 февраля'
  },
  {
    name: 'Дмитрий',
    content: `Никогда не думал, что правильное дыхание может так сильно повлиять на качество жизни. После курса я заметил значительное улучшение в своей физической форме и выносливости. Особенно помогает при занятиях спортом. Рекомендую всем, кто хочет улучшить свое здоровье естественным путем.`,
    date: '1 февраля'
  }
];

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
                  <div
                    onClick={() => setSelectedReview(review)}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                  >
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 p-0.5">
                          <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center text-2xl font-bold text-teal-600">
                            {review.name[0]}
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-teal-500 rounded-full p-1.5 shadow-lg">
                          <Quote className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                          {review.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 line-clamp-4">
                      {review.content}
                    </p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-teal-600 text-sm font-medium">
                        Нажмите, чтобы прочитать полностью
                      </span>
                      {review.image && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(review.image);
                          }}
                          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
                        >
                          <ImageIcon className="h-5 w-5" />
                          <span className="text-sm font-medium">Скриншот отзыва</span>
                        </button>
                      )}
                    </div>
                  </div>
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
                    {selectedReview.content}
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

        <div className="mt-16 text-center">
          <div className="inline-block bg-teal-100 text-teal-800 px-6 py-3 rounded-full font-medium text-lg">
            Более 50 успешных учеников
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 