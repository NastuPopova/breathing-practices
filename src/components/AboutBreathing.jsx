import React from 'react';
import { Wind, Heart, Brain, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Wind className="h-6 w-6" />,
    title: 'Улучшение дыхания',
    description: 'Освоение правильной техники дыхания для повседневной жизни'
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Здоровье',
    description: 'Укрепление иммунитета и улучшение работы сердечно-сосудистой системы'
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: 'Ментальное состояние',
    description: 'Снижение стресса и тревожности, улучшение концентрации'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Энергия',
    description: 'Повышение жизненного тонуса и работоспособности'
  }
];

const AboutBreathing = () => {
  return (
    <section id="about-breathing" className="relative py-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-600 to-teal-800" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Дыхательные практики для здоровья
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Научитесь правильно дышать и улучшите качество своей жизни
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-lg hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="text-teal-300 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-teal-100">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-full hover:bg-teal-50 transition-colors duration-300">
            Начать обучение
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBreathing; 