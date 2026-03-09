import React, { useState } from 'react';
import useSWR from 'swr';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Lessons() {
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';
  const { data: lessons, error, isLoading, mutate } = useSWR(`${API_BASE}/admin/lessons`, fetcher);
  const [isEditing, setIsEditing] = useState(false);
  const [currentLesson, setCurrentLesson] = useState<any>(null);

  const handleEdit = (lesson: any) => {
    setCurrentLesson(lesson);
    setIsEditing(true);
  };

  const handleCreate = () => {
    setCurrentLesson({ title: '', code: '', description: '', order: 1, isPublished: true, aiPrompt: '' });
    setIsEditing(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const isNew = !currentLesson.id;
    const url = isNew ? `${API_BASE}/admin/lessons` : `${API_BASE}/admin/lessons/${currentLesson.id}`;
    const method = isNew ? 'POST' : 'PUT';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentLesson)
    });
    
    setIsEditing(false);
    mutate();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Вы уверены, что хотите удалить этот урок?')) {
      await fetch(`${API_BASE}/admin/lessons/${id}`, { method: 'DELETE' });
      mutate();
    }
  };

  if (isEditing) {
    return (
      <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">{currentLesson.id ? 'Редактировать урок' : 'Создать урок'}</h2>
        <form onSubmit={handleSave} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Код (ID) урока</label>
              <input type="text" required value={currentLesson.code} onChange={e => setCurrentLesson({...currentLesson, code: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="LESSON_1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Порядковый номер</label>
              <input type="number" required value={currentLesson.order} onChange={e => setCurrentLesson({...currentLesson, order: parseInt(e.target.value)})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Название урока</label>
            <input type="text" required value={currentLesson.title} onChange={e => setCurrentLesson({...currentLesson, title: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Описание / Теоретическая часть</label>
            <textarea rows={5} required value={currentLesson.description} onChange={e => setCurrentLesson({...currentLesson, description: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Инструкция для ИИ-клиента (Промпт)</label>
            <textarea rows={4} value={currentLesson.aiPrompt} onChange={e => setCurrentLesson({...currentLesson, aiPrompt: e.target.value})} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" placeholder="Опишите, как должен вести себя ИИ во время тренировки..." />
          </div>

          <div className="flex items-center">
            <input type="checkbox" checked={currentLesson.isPublished} onChange={e => setCurrentLesson({...currentLesson, isPublished: e.target.checked})} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <label className="ml-2 block text-sm text-gray-900">Опубликован (доступен сотрудникам в боте)</label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button type="button" onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Отмена</button>
            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Сохранить урок</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Управление уроками</h2>
        <button onClick={handleCreate} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
          <Plus className="w-4 h-4 mr-2" />
          Добавить Урок
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-10 text-gray-500">Загрузка уроков...</div>
      ) : error ? (
        <div className="text-red-500">Ошибка загрузки</div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {lessons?.map((lesson: any) => (
              <li key={lesson.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1 pr-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-600 truncate">{lesson.title}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${lesson.isPublished ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {lesson.isPublished ? 'Опубликован' : 'Черновик'}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {lesson.code}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button onClick={() => handleEdit(lesson)} className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50"><Edit2 className="w-5 h-5" /></button>
                  <button onClick={() => handleDelete(lesson.id)} className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50"><Trash2 className="w-5 h-5" /></button>
                </div>
              </li>
            ))}
            {!lessons?.length && (
              <li className="px-6 py-12 text-center text-gray-500">Нет добавленных уроков</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
