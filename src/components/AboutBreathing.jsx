import React, { useState } from 'react';
import { Wind, Heart, Brain, Zap, Clock, MapPin, Wallet, ShieldCheck, ChevronRight } from 'lucide-react';

const benefits = [
  {
    icon: <Wind className="h-12 w-12" />,
    title: 'Улучшение дыхания',
    description: 'Освоение правильной техники дыхания для повседневной жизни',
    details: [
      'Увеличение объема легких',
      'Улучшение газообмена',
      'Нормализация ритма дыхания'
    ],
    color: 'from-blue-500 to-blue-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: 'Здоровье',
    description: 'Оздоровите организм более чем от 100+ заболеваний',
    details: [
      'Укрепление иммунной системы',
      'Нормализация давления',
      'Улучшение кровообращения'
    ],
    color: 'from-red-500 to-red-600',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500'
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: 'Ментальное состояние',
    description: 'Снижение стресса и тревожности, улучшение концентрации',
    details: [
      'Снижение уровня стресса',
      'Улучшение качества сна',
      'Повышение концентрации'
    ],
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-500'
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: 'Энергия',
    description: 'Повышение жизненного тонуса и работоспособности',
    details: [
      'Повышение выносливости',
      'Улучшение работоспособности',
      'Естественный прилив сил'
    ],
    color: 'from-yellow-500 to-yellow-600',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-500'
  }
];

const advantages = [
  {
    icon: <Clock className="h-12 w-12" />,
    title: 'Всегда с вами',
    description: 'Дыхание доступно 24/7, не требует специального времени',
    details: [
      'Практикуйте в любое время',
      'Не нужно выделять специальные часы',
      'Совмещайте с повседневными делами'
    ],
    color: 'from-teal-500 to-teal-600',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-500'
  },
  {
    icon: <MapPin className="h-12 w-12" />,
    title: 'Везде доступно',
    description: 'Практиковать можно в любом месте: дома, в офисе, в транспорте',
    details: [
      'Занимайтесь дома или на работе',
      'Подходит для любого помещения',
      'Не требует специальных условий'
    ],
    color: 'from-indigo-500 to-indigo-600',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-500'
  },
  {
    icon: <Wallet className="h-12 w-12" />,
    title: 'Бесплатный инструмент',
    description: 'Не требует дополнительных затрат или оборудования',
    details: [
      'Никаких специальных устройств',
      'Экономия на тренажерах',
      'Доступно каждому'
    ],
    color: 'from-green-500 to-green-600',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-500'
  },
  {
    icon: <ShieldCheck className="h-12 w-12" />,
    title: 'Безопасно',
    description: 'Естественный способ улучшить здоровье без побочных эффектов',
    details: [
      'Природный метод оздоровления',
      'Отсутствие противопоказаний',
      'Подходит для любого возраста'
    ],
    color: 'from-cyan-500 to-cyan-600',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-500'
  }
];

const AboutBreathing = () => {
  const [openBenefits, setOpenBenefits] = useState(new Array(benefits.length).fill(false));
  const [openAdvantages, setOpenAdvantages] = useState(new Array(advantages.length).fill(false));

  const toggleBenefit = (index) => {
    const newOpenBenefits = [...openBenefits];
    newOpenBenefits[index] = !newOpenBenefits[index];
    setOpenBenefits(newOpenBenefits);
  };

  const toggleAdvantage = (index) => {
    const newOpenAdvantages = [...openAdvantages];
    newOpenAdvantages[index] = !newOpenAdvantages[index];
    setOpenAdvantages(newOpenAdvantages);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about-breathing" className="relative py-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-700 to-primary-800" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Дыхательные практики для здоровья
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Ваш естественный путь к здоровью и гармонии, доступный каждому
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white/10 rounded-xl p-6 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.color}`} />
              <div className="flex items-center mb-4">
                <div className={`${benefit.iconBg} ${benefit.iconColor} p-4 rounded-xl inline-block transform group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-primary-100 mb-4">
                {benefit.description}
              </p>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openBenefits[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-2 mb-4">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-primary-100">
                      <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => toggleBenefit(index)}
                className={`w-full px-4 py-2 mt-2 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                  openBenefits[index]
                    ? 'border-white/50 text-white bg-gradient-to-r from-primary-600/50 to-primary-700/50 hover:from-primary-600/60 hover:to-primary-700/60' 
                    : 'border-white/30 text-white/70 hover:border-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {openBenefits[index] ? 'Скрыть детали' : 'Подробнее'}
              </button>
            </div>
          ))}
        </div>

        {/* Advantages Section */}
        <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Почему дыхательные практики - это идеальный инструмент для здоровья
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${advantage.color}`} />
                <div className="flex items-center mb-4">
                  <div className={`${advantage.iconBg} ${advantage.iconColor} p-4 rounded-xl inline-block transform group-hover:scale-110 transition-transform duration-300`}>
                    {advantage.icon}
                  </div>
                  <h4 className="text-lg font-semibold ml-4">
                    {advantage.title}
                  </h4>
                </div>
                <p className="text-primary-100 mb-4">
                  {advantage.description}
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${
                  openAdvantages[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-2 mb-4">
                    {advantage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-primary-100">
                        <ChevronRight className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => toggleAdvantage(index)}
                  className={`w-full px-4 py-2 mt-2 rounded-lg border transition-all duration-300 flex items-center justify-center ${
                    openAdvantages[index]
                      ? 'border-white/50 text-white bg-gradient-to-r from-primary-600/50 to-primary-700/50 hover:from-primary-600/60 hover:to-primary-700/60' 
                      : 'border-white/30 text-white/70 hover:border-white/50 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {openAdvantages[index] ? 'Скрыть детали' : 'Подробнее'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-accent-600 hover:to-accent-700 active:scale-95 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-800"
          >
            Начать обучение
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBreathing; 