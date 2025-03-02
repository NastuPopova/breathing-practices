import { Shield } from 'lucide-react';

const ReviewForm = ({ onSubmit, isVerified, isVerifying, telegramUsername, onStartVerification }) => {
  return (
    <form onSubmit={handleSubmit} className="review-form">
      {!isVerified ? (
        <div className="verification-section mb-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Верификация через Telegram</h4>
          <p className="text-gray-600 mb-4">
            Для публикации отзыва необходимо пройти верификацию через Telegram. 
            Это поможет повысить доверие к вашему отзыву.
          </p>
          <button
            type="button"
            onClick={onStartVerification}
            disabled={isVerifying}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50"
          >
            <Shield className="w-5 h-5" />
            {isVerifying ? 'Проверка...' : 'Верифицировать через Telegram'}
          </button>
        </div>
      ) : (
        <div className="verified-badge mb-4 p-4 bg-green-50 rounded-lg flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-500" />
          <span className="text-green-700">
            Верифицировано через {telegramUsername}
          </span>
        </div>
      )}

      {/* Остальные поля формы */}
    </form>
  );
};

export default ReviewForm; 