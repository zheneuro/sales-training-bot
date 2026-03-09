
import useSWR from 'swr';
import { BookOpen, Users } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';
const API_URL = `${API_BASE}/admin/dashboard`;

export default function Dashboard() {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);

  const stats = data?.stats || {
    totalEmployees: 0,
    activeLessons: 0,
    avgScore: 0,
    aiTokensSpent: 0
  };

  const recentProgress = data?.recentProgress || [];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Ошибка сети! </strong>
          <span className="block sm:inline">Не удалось загрузить данные с сервера ({error.message})</span>
        </div>
      )}
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500 truncate">Всего сотрудников</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.totalEmployees}</dd>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500 truncate">Активных уроков</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.activeLessons}</dd>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500 truncate">Средний балл</dt>
          <dd className="mt-1 text-3xl font-semibold text-green-600">{stats.avgScore}%</dd>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg px-4 py-5 sm:p-6 border border-gray-100">
          <dt className="text-sm font-medium text-gray-500 truncate">Потрачено ИИ-токенов</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">{stats.aiTokensSpent.toLocaleString()}</dd>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white shadow rounded-lg border border-gray-100">
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Прогресс обучения</h3>
            <button className="text-sm text-blue-600 hover:text-blue-500 font-medium">Смотреть все</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сотрудник</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Урок</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Оценка</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentProgress.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500">
                      {isLoading ? 'Загрузка...' : 'Пока нет данных об обучении'}
                    </td>
                  </tr>
                ) : (
                  recentProgress.map((prog: any, idx: number) => (
                    <tr key={idx}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {prog.employeeName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {prog.lessonTitle}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          prog.status === 'completed' ? 'bg-green-100 text-green-800' :
                          prog.status === 'started' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {prog.status === 'completed' ? 'Завершен' : 'В процессе'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {prog.score !== null ? `${prog.score} / 100` : '-'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg border border-gray-100 flex flex-col">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Быстрые действия</h3>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <BookOpen className="mr-2 h-4 w-4" />
              Создать новый урок
            </button>
            <button className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Users className="mr-2 h-4 w-4 text-gray-500" />
              Пригласить сотрудника
            </button>
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Статус токенов ИИ (Лимит)</h4>
              <div className="mt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Токены</span>
                  <span className="font-medium text-gray-900">{stats.aiTokensSpent.toLocaleString()} / 100,000</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min(100, (stats.aiTokensSpent / 100000) * 100)}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
