import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Елена Смирнова',
    role: 'Менеджер проектов',
    content: 'После прохождения курса я стала лучше спать, появилось больше энергии. Техники дыхания помогают быстро успокоиться в стрессовых ситуациях.',
    rating: 5,
    image: '/images/review-1.jpg'
  },
  {
    name: 'Михаил Петров',
    role: 'IT-специалист',
    content: 'Раньше часто болела голова и было тяжело сосредоточиться на работе. Благодаря курсу научился правильно дышать, и эти проблемы ушли.',
    rating: 5,
    image: '/images/review-2.jpg'
  },
  {
    name: 'Анна Козлова',
    role: 'Фитнес-тренер',
    content: 'Как профессиональный тренер, я понимаю важность правильного дыхания. Этот курс дал мне новые знания, которыми я теперь делюсь с клиентами.',
    rating: 5,
    image: '/images/review-3.jpg'
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
            <Quote className="h-8 w-8 text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы участников
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, как курс помог другим улучшить качество жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150?text=Фото';
                        }}
                      />
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
                    {review.role}
                  </p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 italic relative">
                <span className="text-4xl text-teal-200 absolute -top-4 -left-2">"</span>
                <span className="block pt-2">{review.content}</span>
                <span className="text-4xl text-teal-200 absolute -bottom-8 -right-2">"</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-teal-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-teal-700 transition-colors duration-300">
            Присоединиться к курсу
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 