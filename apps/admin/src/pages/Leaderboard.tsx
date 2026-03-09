import React from 'react';
import useSWR from 'swr';
import { Trophy, Medal } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Leaderboard() {
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const { data: users, error, isLoading } = useSWR(`${API_BASE}/admin/users`, fetcher);

  // Sort users by points
  const sortedUsers = React.useMemo(() => {
    if (!users) return [];
    return [...users].sort((a, b) => b.totalPoints - a.totalPoints);
  }, [users]);

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
          Рейтинг сотрудников
        </h2>
      </div>

      {isLoading ? (
        <div className="text-center py-10 text-gray-500">Подгружаем результаты...</div>
      ) : error ? (
        <div className="text-red-500">Ошибка загрузки рейтинга</div>
      ) : (
        <div className="max-w-3xl bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {sortedUsers.map((user: any, index: number) => (
              <li key={user.id} className="px-6 py-5 flex items-center hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 text-center">
                  {index === 0 ? <Medal className="w-8 h-8 text-yellow-500 mx-auto" /> :
                   index === 1 ? <Medal className="w-8 h-8 text-gray-400 mx-auto" /> :
                   index === 2 ? <Medal className="w-8 h-8 text-amber-700 mx-auto" /> :
                   <span className="text-xl font-bold text-gray-400">#{index + 1}</span>}
                </div>
                
                <div className="ml-6 flex-1">
                  <p className="text-lg font-semibold text-gray-900">
                    {user.name || 'Ожидает ввода имени'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Пройдено уроков: {user.completedLessons}
                  </p>
                </div>

                <div className="ml-4 text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-lg font-bold bg-blue-100 text-blue-800">
                    {user.totalPoints} баллов
                  </span>
                </div>
              </li>
            ))}
            
            {sortedUsers.length === 0 && (
              <li className="px-6 py-12 text-center text-gray-500">Недостаточно данных для рейтинга.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
