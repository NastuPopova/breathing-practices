document.addEventListener('DOMContentLoaded', function() {
    // Конфигурация
    const totalQuestions = 10;
    let currentQuestion = 1;
    let answers = {};

    // Элементы DOM
    const form = document.getElementById('breathingTest');
    const questions = document.querySelectorAll('.question');
    const results = document.querySelector('.results');

    // Скрываем все вопросы кроме первого
    questions.forEach(q => {
        q.style.display = 'none';
        q.classList.remove('active');
    });
    questions[0].style.display = 'block';
    setTimeout(() => {
        questions[0].classList.add('active');
    }, 10);

    // Показ следующего вопроса
    function showNextQuestion(currentQ, nextQ) {
        // Скрываем текущий вопрос
        currentQ.classList.remove('active');
        setTimeout(() => {
            currentQ.style.display = 'none';
            // Показываем следующий вопрос
            nextQ.style.display = 'block';
            setTimeout(() => {
                nextQ.classList.add('active');
            }, 10);
        }, 300);
    }

    // Обработка выбора ответа
    questions.forEach(question => {
        const options = question.querySelectorAll('input[type="radio"]');
        options.forEach(option => {
            option.addEventListener('change', () => {
                const questionNumber = parseInt(question.dataset.question);
                answers[`q${questionNumber}`] = option.value;

                // Задержка перед переключением вопроса
                setTimeout(() => {
                    if (questionNumber < totalQuestions) {
                        const nextQ = document.querySelector(`[data-question="${questionNumber + 1}"]`);
                        currentQuestion = questionNumber + 1;
                        showNextQuestion(question, nextQ);
                    } else {
                        // Плавно скрываем форму
                        form.style.opacity = '0';
                        setTimeout(() => {
                            form.style.display = 'none';
                            // Плавно показываем результаты
                            results.style.display = 'block';
                            setTimeout(() => {
                                results.style.opacity = '1';
                            }, 10);
                            // Анализируем ответы
                            analyzeAnswers(answers);
                        }, 300);
                    }
                }, 500); // Увеличенная задержка для лучшего UX
            });
        });
    });

    // Анализ ответов
    function analyzeAnswers(answers) {
        let totalScore = 0;
        for (let key in answers) {
            totalScore += parseInt(answers[key]);
        }
        
        const averageScore = totalScore / totalQuestions;
        const resultText = document.createElement('p');
        resultText.style.marginBottom = '20px';
        resultText.style.fontSize = '1.1rem';
        resultText.style.color = '#333';
        
        if (averageScore <= 1.5) {
            resultText.textContent = 'У вас хорошее дыхание, но есть потенциал для улучшения.';
        } else if (averageScore <= 2.5) {
            resultText.textContent = 'Обнаружены небольшие проблемы с дыханием. Рекомендуется обратить внимание на дыхательные практики.';
        } else if (averageScore <= 3.5) {
            resultText.textContent = 'Выявлены значительные проблемы с дыханием. Рекомендуется пройти курс по улучшению дыхания.';
        } else {
            resultText.textContent = 'Обнаружены серьезные проблемы с дыханием. Настоятельно рекомендуется пройти полный курс по восстановлению правильного дыхания.';
        }
        
        const benefitsList = results.querySelector('.benefits-list');
        benefitsList.insertBefore(resultText, benefitsList.firstChild);
    }

    // Обработка формы контактов
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            // Здесь будет логика отправки данных на сервер
            alert('Спасибо! Результаты теста отправлены на ваш email.');
        });
    }
}); 