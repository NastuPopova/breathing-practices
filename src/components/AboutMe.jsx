import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const achievements = [
  {
    icon: <Award className="h-6 w-6" />,
    title: '5+ лет опыта',
    description: 'В обучении дыхательным практикам'
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: '500+ учеников',
    description: 'Успешно прошли обучение'
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: '3 авторских курса',
    description: 'По различным техникам дыхания'
  }
];

const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="lg:flex lg:items-center lg:space-x-12">
          {/* Image */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/instruktor.png"
                  alt="Анастасия Попова - инструктор по дыхательным практикам"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-200 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Анастасия Попова
            </h2>
            <div className="text-xl text-gray-600 space-y-4 mb-8">
              <p>
                Сертифицированный инструктор по дыхательным практикам с более чем 5-летним опытом.
              </p>
              <p>
                Моя миссия — помочь людям улучшить качество жизни через правильное дыхание.
              </p>
              <p>
                Я помогла сотням людей избавиться от проблем со здоровьем, тревожности и стресса с помощью простых, но эффективных техник дыхания.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-teal-600 mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 