import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTransition from './SectionTransition';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Добавляем небольшую задержку для более заметного эффекта
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTest = () => {
    const testSection = document.getElementById('quick-test');
    if (testSection) {
      testSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-out ${
          isLoaded ? 'opacity-85 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
        }`}
        style={{
          backgroundImage: 'url("/hero.png")',
          filter: 'brightness(0.9)',
          backgroundPosition: 'center 20%'
        }}
        animate={{
          scale: isLoaded ? [1.1, 1] : 1,
          transition: {
            duration: 1.5,
            ease: [0.645, 0.045, 0.355, 1.000]
          }
        }}
      />

      {/* Gradient Overlay with Animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-teal-500/70 to-teal-700/70"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          transition: {
            duration: 1,
            delay: 0.5
          }
        }}
      />
      
      {/* Animated Particles */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          transition: {
            duration: 0.5,
            delay: 1
          }
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`
            }}
            animate={{
              y: [-100, 100],
              x: [-20, 20],
              opacity: [0, 0.2, 0],
              transition: {
                duration: Math.random() * 4 + 6,
                repeat: Infinity,
                delay: Math.random() * 5
              }
            }}
          />
        ))}
      </motion.div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Main Content Card */}
          <SectionTransition>
            <motion.div
              className="bg-black/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 border border-white/10 hover:bg-black/10 hover:backdrop-blur-md"
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.3
                }
              }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.5
                  }
                }}
              >
                Избавьтесь от тревоги и усталости <span className="text-orange-400">уже сегодня</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.7
                  }
                }}
              >
                Всего 10 минут в день помогут вам обрести спокойствие, энергию и здоровье. 
                <span className="font-semibold">Начните прямо сейчас!</span>
              </motion.p>

              <motion.button 
                onClick={scrollToTest}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-orange-700 active:scale-95 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-teal-800 group"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.9
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Пройти бесплатный тест дыхания
              </motion.button>

              <motion.p 
                className="mt-4 text-sm text-white/90 drop-shadow"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 1.1
                  }
                }}
              >
                ⚡️ Время прохождения теста: 2-3 минуты
              </motion.p>
            </motion.div>
          </SectionTransition>

          {/* Statistics Card */}
          <SectionTransition>
            <motion.div
              className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto border border-white/10 hover:bg-black/10 hover:backdrop-blur-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 1.3
                }
              }}
            >
              <motion.h3 
                className="text-5xl font-bold mb-4 text-white drop-shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 1.5
                  }
                }}
              >
                90%
              </motion.h3>
              <motion.p 
                className="text-lg text-white/95 drop-shadow"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 1.7
                  }
                }}
              >
                людей не знают, что их проблемы со здоровьем связаны с неправильным дыханием. 
                <span className="font-semibold text-orange-300">Узнайте свой результат сейчас!</span>
              </motion.p>
            </motion.div>
          </SectionTransition>
        </div>
      </div>

      {/* Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100 }}
        animate={{ 
          y: 0,
          transition: {
            duration: 0.8,
            delay: 1.9
          }
        }}
      >
        <svg className="w-full h-24" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <motion.path 
            fill="white" 
            d="M0,0 C280,74 720,74 1440,0 L1440,74 L0,74 Z"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              transition: {
                duration: 1.5,
                delay: 2
              }
            }}
          />
        </svg>
      </motion.div>
    </motion.header>
  );
};

export default Hero; 