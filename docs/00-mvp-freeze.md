# 00 — MVP Freeze

## 1. Product
Система обучения отдела продаж состоит из:
1. Telegram-бота для менеджеров
2. Веб-админки для РОП/владельца
3. Единого backend API
4. PostgreSQL
5. Redis + фоновых задач
6. S3-compatible storage для медиа

## 2. Architecture
Архитектура: модульный монолит.

## 3. Default Stack
- Backend: Node.js + TypeScript + NestJS
- Bot: grammY (webhook)
- Database: PostgreSQL
- ORM: Prisma
- Queue: BullMQ + Redis
- Admin: Next.js
- Storage: S3-compatible (MinIO locally)
- Infra local: Docker Compose

## 4. MVP Scope
### Входит в MVP
- Telegram-бот с onboarding по invite token
- Прохождение уроков (text / audio / video)
- Свободные ответы
- Rule-based / hybrid grading
- Gating по проходному баллу
- Пересдачи с лимитом попыток и cooldown
- Прогресс пользователя
- Админка:
  - пользователи
  - прогресс
  - средний балл
  - последняя активность
  - управление контентом
  - аудит действий
- Уведомления:
  - новый урок
  - неактивность
- История обучения на уровне Person / UserAccount

### Не входит в MVP
- Микросервисная архитектура
- Telegram Mini App
- Полноценный LLM-first grading
- Настоящий realtime
- Сложный multi-tenant
- Mobile app
- Геймификация
- SSO / SCIM

## 5. Identity Model
История обучения не привязана только к Telegram ID.

Основные сущности:
- Person
- UserAccount
- TelegramIdentity
- LearningHistory

## 6. Learning Rules
- Проходной балл по умолчанию: 70
- Политика оценки: best score
- Максимум попыток: 3
- Cooldown между попытками: 15 минут
- Следующий урок открывается только после прохождения текущего
- Проверка свободного ответа: hybrid (rules + rubric), без обязательного LLM

## 7. Notification Rules
- Уведомления:
  - новый урок
  - неактивность
- Quiet hours: 22:00–09:00
- Timezone по умолчанию: Asia/Almaty
- Ограничение частоты: не более 3–4 уведомлений в сутки

## 8. Security Baseline
- Webhook, не polling
- Проверка X-Telegram-Bot-Api-Secret-Token
- Идемпотентность по update_id
- RBAC
- Audit log для admin write actions
- Rate limiting
- Secrets только через env
- Backup обязателен

## 9. Admin Roles
- OWNER
- HEAD_OF_SALES
- TRAINER
- VIEWER
- MANAGER (только через бот)

## 10. Realtime Model
Near-realtime:
- события пишутся сразу
- агрегаты пересчитываются async
- задержка обновления 3–15 секунд
- admin UI опрашивает API каждые 10 секунд

## 11. Environments
- dev
- stage
- prod

## 12. Phase Gate
Следующий этап: PHASE 1 — проектирование сущностей, статусов, scoring, user flows, DB schema v1, API v1.