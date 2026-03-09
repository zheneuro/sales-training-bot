import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  Settings, 
  MessageSquare,
  Trophy,
  BrainCircuit,
  Bell
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import UsersPage from './pages/Users';
import Leaderboard from './pages/Leaderboard';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'lessons' | 'users' | 'leaderboard'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <BrainCircuit className="h-6 w-6 text-blue-600 mr-2" />
          <span className="text-lg font-bold text-gray-900">SalesTrain AI</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className={`w-full ${currentView === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <BarChart3 className={`mr-3 h-5 w-5 ${currentView === 'dashboard' ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
            Дашборд
          </button>
          <button 
            onClick={() => setCurrentView('users')}
            className={`w-full ${currentView === 'users' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <Users className={`mr-3 h-5 w-5 ${currentView === 'users' ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
            Сотрудники
          </button>
          <button 
            onClick={() => setCurrentView('lessons')}
            className={`w-full ${currentView === 'lessons' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <BookOpen className={`mr-3 h-5 w-5 ${currentView === 'lessons' ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
            Уроки
          </button>
          <button 
            onClick={() => setCurrentView('leaderboard')}
            className={`w-full ${currentView === 'leaderboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'} group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
          >
            <Trophy className={`mr-3 h-5 w-5 ${currentView === 'leaderboard' ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'}`} />
            Рейтинг
          </button>
          <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            <MessageSquare className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
            Логи ИИ-Тренера
          </a>
          <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            <Settings className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
            Настройки
          </a>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div>
              <img className="inline-block h-9 w-9 rounded-full" src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Администратор</p>
              <p className="text-xs font-medium text-gray-500">Мой профиль</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              {currentView === 'dashboard' ? 'Обзор платформы' : currentView === 'lessons' ? 'Управление уроками' : 'Сотрудники'}
            </h1>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-500">
            <Bell className="h-6 w-6" />
          </button>
        </header>

        {/* Dynamic View Area */}
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'lessons' && <Lessons />}
        {currentView === 'users' && <UsersPage />}
        {currentView === 'leaderboard' && <Leaderboard />}
      </main>
    </div>
  );
}

export default App;
