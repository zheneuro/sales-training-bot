
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Users() {
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const { data: users, error, isLoading } = useSWR(`${API_BASE}/admin/users`, fetcher);

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Управление сотрудниками</h2>
      </div>

      {isLoading ? (
        <div className="text-center py-10 text-gray-500">Загрузка данных...</div>
      ) : error ? (
        <div className="text-red-500">Ошибка загрузки списка сотрудников</div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Имя сотрудника</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telegram ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Роль</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Пройдено уроков</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Баллы (Рейтинг)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дней подряд (Текущий / Макс)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата регистрации</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users?.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-500">
                      Нет зарегистрированных сотрудников
                    </td>
                  </tr>
                ) : (
                  users?.map((user: any) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <span className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                              {(user.name || '?')[0].toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.name || 'Ожидает ввода имени'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.telegramId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.completedLessons}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        {user.totalPoints}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="flex items-center">
                          {user.currentStreak > 0 && <span className="text-orange-500 mr-1">🔥</span>}
                          {user.currentStreak || 0} 
                          <span className="text-gray-400 ml-1 text-xs">(max: {user.maxStreak || 0})</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString('ru-RU')}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
