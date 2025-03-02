import React, { useState, useEffect } from 'react';
import { 
  Users, 
  TrendingUp, 
  BookOpen, 
  Clock,
  Heart,
  Brain,
  Moon,
  Battery,
  Info,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import SidebarNotificationsMenu from './SidebarNotificationsMenu';

// Массив случайных имен
const names = [
  'Анна', 'Мария', 'Елена', 'Ольга', 'Наталья', 
  'Александр', 'Дмитрий', 'Михаил', 'Сергей', 'Андрей',
  'Ирина', 'Татьяна', 'Светлана', 'Екатерина', 'Юлия',
  'Павел', 'Максим', 'Артем', 'Владимир', 'Игорь'
];

// Типы уведомлений
const notificationTypes = {
  success: {
    icon: <CheckCircle className="text-emerald-500" />,
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    progressColor: 'bg-emerald-500'
  },
  info: {
    icon: <Info className="text-blue-500" />,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    progressColor: 'bg-blue-500'
  },
  warning: {
    icon: <AlertTriangle className="text-amber-500" />,
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    progressColor: 'bg-amber-500'
  }
};

// Шаблоны уведомлений
const notificationTemplates = [
  {
    icon: <Users className="text-blue-500" />,
    template: 'NAME начал(а) курс дыхательных практик',
    type: 'info'
  },
  {
    icon: <TrendingUp className="text-emerald-500" />,
    template: 'NAME улучшил(а) качество сна на PERCENT%',
    type: 'success'
  },
  {
    icon: <Heart className="text-emerald-500" />,
    template: 'NAME отметил(а) снижение тревожности на PERCENT%',
    type: 'success'
  },
  {
    icon: <Brain className="text-blue-500" />,
    template: 'NAME освоил(а) технику диафрагмального дыхания',
    type: 'info'
  },
  {
    icon: <Moon className="text-emerald-500" />,
    template: 'NAME улучшил(а) качество засыпания на PERCENT%',
    type: 'success'
  },
  {
    icon: <Battery className="text-amber-500" />,
    template: 'NAME отмечает повышение энергии на PERCENT%',
    type: 'warning'
  },
  {
    icon: <BookOpen className="text-blue-500" />,
    template: 'NAME приступил(а) к изучению продвинутых техник',
    type: 'info'
  }
];

const NOTIFICATION_DURATION = 5000; // 5 секунд

// Функция для генерации случайного уведомления
const generateNotification = () => {
  const template = notificationTemplates[Math.floor(Math.random() * notificationTemplates.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  const percent = Math.floor(Math.random() * 30) + 40; // Случайное число от 40 до 70
  
  return {
    id: Date.now() + Math.random(),
    icon: template.icon,
    text: template.template
      .replace('NAME', name)
      .replace('PERCENT', percent),
    time: 'только что',
    type: template.type,
    createdAt: Date.now()
  };
};

const NotificationItem = ({ notification, onRemove, index }) => {
  const [progress, setProgress] = useState(100);
  const type = notificationTypes[notification.type];

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / NOTIFICATION_DURATION) * 100);
      setProgress(remaining);

      if (remaining === 0) {
        clearInterval(timer);
        onRemove(notification.id);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [notification.id, onRemove]);

  return (
    <div 
      className={`
        relative overflow-hidden
        ${type.bgColor} border ${type.borderColor}
        shadow-lg rounded-xl p-4 
        transform transition-all duration-500
        flex items-center
        hover:shadow-xl
        ${index === 0 
          ? 'opacity-100 translate-x-0 scale-100' 
          : 'opacity-90 translate-x-10 scale-95'}
      `}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        minWidth: '300px',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="mr-4 p-2 rounded-lg">
        {notification.icon}
      </div>
      
      <div className="flex-grow">
        <p className="text-sm font-medium text-gray-800">
          {notification.text}
        </p>
        <div className="flex items-center mt-1">
          <Clock className="h-4 w-4 text-gray-400 mr-2" />
          <span className="text-xs text-gray-500">
            {notification.time}
          </span>
        </div>
      </div>

      <button 
        onClick={() => onRemove(notification.id)}
        className="ml-4 text-gray-400 hover:text-gray-600 p-1 hover:bg-white/50 rounded-full transition-colors duration-200"
      >
        ✕
      </button>

      {/* Индикатор прогресса */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
        <div 
          className={`h-full transition-all duration-100 ${type.progressColor}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

const PopupNotifications = () => {
  const [activeNotifications, setActiveNotifications] = useState([]);
  const [notificationSettings, setNotificationSettings] = useState({
    browserNotifications: true,
    soundNotifications: true,
    maxNotificationsPerDay: 5
  });
  const [notificationsToday, setNotificationsToday] = useState(0);

  useEffect(() => {
    // Загружаем настройки из localStorage при монтировании
    const savedSettings = localStorage.getItem('notificationSettings');
    if (savedSettings) {
      setNotificationSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // Сохраняем настройки в localStorage при изменении
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
  }, [notificationSettings]);

  useEffect(() => {
    // Сброс счетчика уведомлений в начале нового дня
    const resetDailyCount = () => {
      const now = new Date();
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        setNotificationsToday(0);
      }
    };

    const intervalId = setInterval(resetDailyCount, 60000); // Проверка каждую минуту
    return () => clearInterval(intervalId);
  }, []);

  const playNotificationSound = () => {
    if (notificationSettings.soundNotifications) {
      const audio = new Audio('/notification-sound.mp3'); // Добавьте свой звук уведомления
      audio.play().catch(error => console.log('Ошибка воспроизведения звука:', error));
    }
  };

  const showBrowserNotification = (notification) => {
    if (notificationSettings.browserNotifications && 'Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification('Новое уведомление', {
          body: notification.text,
          icon: '/logo.png' // Добавьте свою иконку
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            showBrowserNotification(notification);
          }
        });
      }
    }
  };

  const addNotification = () => {
    // Проверяем лимит уведомлений на день
    if (notificationsToday >= notificationSettings.maxNotificationsPerDay) {
      return;
    }

    const newNotification = generateNotification();

    setActiveNotifications(prev => {
      return [newNotification, ...prev].slice(0, 2);
    });

    setNotificationsToday(prev => prev + 1);
    playNotificationSound();
    showBrowserNotification(newNotification);
  };

  useEffect(() => {
    if (notificationsToday < notificationSettings.maxNotificationsPerDay) {
      const initialTimer = setTimeout(addNotification, 5000);
      const intervalId = setInterval(() => {
        const randomDelay = Math.floor(Math.random() * 10000) + 20000;
        setTimeout(addNotification, randomDelay);
      }, 25000);

      return () => {
        clearTimeout(initialTimer);
        clearInterval(intervalId);
      };
    }
  }, [notificationsToday, notificationSettings.maxNotificationsPerDay]);

  const removeNotification = (id) => {
    setActiveNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 space-y-4">
        {notificationSettings.browserNotifications && activeNotifications.map((notification, index) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRemove={removeNotification}
            index={index}
          />
        ))}
      </div>

      <SidebarNotificationsMenu
        notificationSettings={notificationSettings}
        onSettingsChange={(newSettings) => {
          setNotificationSettings(newSettings);
          // Если уведомления выключены, очищаем все активные уведомления
          if (!newSettings.browserNotifications) {
            setActiveNotifications([]);
          }
        }}
      />
    </>
  );
};

export default PopupNotifications; 