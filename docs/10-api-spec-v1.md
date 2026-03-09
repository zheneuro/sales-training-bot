# 10 — API Spec v1

## 1. Auth

- POST /api/v1/auth/login
- POST /api/v1/auth/refresh
- POST /api/v1/auth/logout
- GET /api/v1/auth/me

Назначение:
- login — вход в админку
- refresh — обновление access token
- logout — завершение сессии
- me — получить текущего пользователя

---

## 2. Bot

- POST /api/v1/bot/webhook
- POST /api/v1/bot/link-account
- GET /api/v1/bot/profile/:telegramId
- POST /api/v1/bot/commands/resume
- POST /api/v1/bot/commands/retry

Назначение:
- webhook — прием Telegram update
- link-account — привязка Telegram к UserAccount
- profile — получение профиля по Telegram identity
- resume — продолжить текущий урок
- retry — инициировать пересдачу

---

## 3. Users

- GET /api/v1/users
- POST /api/v1/users
- GET /api/v1/users/:id
- PATCH /api/v1/users/:id
- POST /api/v1/users/:id/deactivate
- POST /api/v1/users/:id/replace
- POST /api/v1/users/:id/invite-reset

Назначение:
- users list — список пользователей
- create — создать пользователя
- detail — карточка пользователя
- update — редактировать пользователя
- deactivate — деактивировать без удаления истории
- replace — заменить сотрудника без потери старой истории
- invite-reset — перевыпустить invite token

---

## 4. Content

- GET /api/v1/segments
- POST /api/v1/segments
- GET /api/v1/segments/:id
- PATCH /api/v1/segments/:id
- POST /api/v1/segments/:id/publish

- GET /api/v1/lessons
- POST /api/v1/lessons
- PATCH /api/v1/lessons/:id
- POST /api/v1/lessons/:id/publish

Назначение:
- CRUD сегментов
- CRUD уроков
- publish — публикация новой версии контента

---

## 5. Learning

- GET /api/v1/learning/users/:id/progress
- GET /api/v1/learning/users/:id/attempts
- POST /api/v1/learning/answers
- POST /api/v1/learning/attempts/:id/regrade
- POST /api/v1/learning/attempts/:id/override

Назначение:
- progress — прогресс пользователя
- attempts — история попыток
- answers — отправка ответа
- regrade — повторная автоматическая проверка
- override — ручная корректировка результата

---

## 6. Notifications

- GET /api/v1/notifications/rules
- POST /api/v1/notifications/rules
- PATCH /api/v1/notifications/rules/:id
- GET /api/v1/notifications/delivery-logs

Назначение:
- rules — управление правилами уведомлений
- delivery-logs — просмотр логов доставки

---

## 7. Analytics

- GET /api/v1/analytics/dashboard
- GET /api/v1/analytics/users
- GET /api/v1/analytics/segments
- GET /api/v1/analytics/export

Назначение:
- dashboard — агрегаты для главного экрана
- users — аналитика по пользователям
- segments — аналитика по сегментам
- export — выгрузка данных

---

## 8. Audit

- GET /api/v1/audit

Назначение:
- просмотр журнала действий администраторов

---

## 9. Versioning Rule

- все endpoint’ы идут через /api/v1
- breaking changes выносятся в /api/v2
- payload нельзя менять silently без смены версии

---

## 10. Example Response

### GET /api/v1/users/:id

```json
{
  "id": "usr_123",
  "person": {
    "fullName": "Иван Петров"
  },
  "status": "active",
  "role": "manager",
  "teamId": "team_1",
  "telegram": {
    "telegramUserId": "123456789012",
    "username": "ivan_sales"
  },
  "progress": {
    "courseAvg": 82,
    "completedSegments": 3,
    "lastActivityAt": "2026-02-27T09:12:00Z"
  }
}