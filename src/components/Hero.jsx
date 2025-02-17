import React from 'react';

const Hero = () => {
  return (
    <header className="relative min-h-screen w-full overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-500" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-white rounded-full opacity-30" />
      <div className="absolute bottom-40 right-40 w-4 h-4 bg-white rounded-full opacity-30" />
      <div className="absolute top-40 left-20 w-4 h-4 bg-white rounded-full opacity-30" />
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Main Content Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Избавьтесь от тревоги и усталости
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Всего 10 минут в день помогут вам обрести спокойствие, энергию и здоровье
            </p>
            <button className="bg-white text-teal-600 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Пройти бесплатный тест дыхания
            </button>
            <p className="mt-4 text-sm text-white/80">
              Время прохождения теста: 2-3 минуты
            </p>
          </div>

          {/* Statistics Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-lg mx-auto">
            <h3 className="text-5xl font-bold mb-4 text-white">90%</h3>
            <p className="text-lg text-white/90">
              людей не знают, что их проблемы со здоровьем связаны с неправильным дыханием
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path 
            fill="white" 
            d="M0,0 C280,74 720,74 1440,0 L1440,74 L0,74 Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Hero; 