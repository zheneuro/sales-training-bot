# 09 — DB Schema v1

## 1. Core Identity Tables

### persons
Основная сущность человека.

Ключевые поля:
- id
- full_name
- phone (nullable)
- email (nullable)
- timezone
- created_at
- updated_at

### user_accounts
Учетная запись в системе.

Ключевые поля:
- id
- person_id
- status
- team_id (nullable)
- created_at
- updated_at

### telegram_identities
Привязка Telegram к учетной записи.

Ключевые поля:
- id
- user_account_id
- telegram_user_id
- telegram_username (nullable)
- chat_id
- is_active
- linked_at
- unlinked_at (nullable)

### teams
Команды внутри организации.

Ключевые поля:
- id
- name
- is_active
- created_at

### roles
Справочник ролей.

Ключевые поля:
- id
- code
- name

### user_role_assignments
Связка пользователей и ролей.

Ключевые поля:
- id
- user_account_id
- role_id
- assigned_at

---

## 2. Content Tables

### courses
Верхний уровень обучения.

Ключевые поля:
- id
- title
- slug
- is_active
- created_at

### segments
Логические блоки обучения.

Ключевые поля:
- id
- course_id (nullable)
- title
- slug
- is_active
- sort_order
- created_at

### segment_versions
Версии сегментов.

Ключевые поля:
- id
- segment_id
- version_number
- status
- pass_threshold
- estimated_minutes
- created_at
- published_at (nullable)

### lessons
Базовая сущность урока.

Ключевые поля:
- id
- segment_id
- title
- sort_order
- is_active
- created_at

### lesson_versions
Версии уроков.

Ключевые поля:
- id
- lesson_id
- version_number
- status
- content_type
- body_text (nullable)
- media_asset_id (nullable)
- prerequisite_lesson_id (nullable)
- pass_threshold_override (nullable)
- max_attempts_per_24h
- cooldown_minutes
- created_at
- published_at (nullable)

### media_assets
Медиафайлы и ссылки.

Ключевые поля:
- id
- storage_key
- original_filename
- mime_type
- size_bytes
- public_url (nullable)
- created_at

### questions
Контрольные вопросы.

Ключевые поля:
- id
- lesson_version_id
- prompt_text
- answer_type
- created_at

### rubrics
Правила смысловой оценки.

Ключевые поля:
- id
- question_id
- rubric_text
- max_score
- created_at

### question_keywords
Ключевые слова и якорные фразы.

Ключевые поля:
- id
- question_id
- keyword_text
- weight
- is_required

---

## 3. Learning Tables

### assignments
Назначения обучения.

Ключевые поля:
- id
- user_account_id
- segment_id
- status
- assigned_at
- started_at (nullable)
- completed_at (nullable)
- archived_at (nullable)

### lesson_progress
Прогресс по уроку.

Ключевые поля:
- id
- user_account_id
- lesson_version_id
- status
- best_score
- attempts_count
- last_attempt_at (nullable)
- available_at (nullable)
- completed_at (nullable)
- updated_at

### segment_progress
Прогресс по сегменту.

Ключевые поля:
- id
- user_account_id
- segment_id
- status
- average_score
- completed_lessons
- total_lessons
- started_at (nullable)
- completed_at (nullable)
- updated_at

### course_progress
Прогресс по курсу.

Ключевые поля:
- id
- user_account_id
- course_id
- status
- average_score
- completed_segments
- total_segments
- started_at (nullable)
- completed_at (nullable)
- updated_at

### attempts
Попытки ответа.

Ключевые поля:
- id
- user_account_id
- lesson_version_id
- question_id
- status
- final_score
- suspicious_flag
- grading_reason
- reviewer_note (nullable)
- created_at
- evaluated_at (nullable)

### attempt_answers
Тексты ответа пользователя.

Ключевые поля:
- id
- attempt_id
- raw_answer
- normalized_answer
- created_at

### attempt_score_breakdown
Детализация оценки.

Ключевые поля:
- id
- attempt_id
- rubric_score
- keyword_score
- penalty_adjustments
- final_score
- created_at

---

## 4. Notifications Tables

### notification_rules
Правила уведомлений.

Ключевые поля:
- id
- code
- is_active
- daily_cap
- quiet_hours_start
- quiet_hours_end
- created_at

### scheduled_notifications
Очередь уведомлений.

Ключевые поля:
- id
- user_account_id
- rule_id
- status
- scheduled_for
- payload_json
- created_at
- processed_at (nullable)

### delivery_logs
Лог доставок.

Ключевые поля:
- id
- scheduled_notification_id
- status
- provider_message_id (nullable)
- error_message (nullable)
- created_at

### user_notification_preferences
Настройки уведомлений пользователя.

Ключевые поля:
- id
- user_account_id
- allow_non_critical
- updated_at

---

## 5. Analytics & Audit Tables

### activity_events
Сырые события активности.

Ключевые поля:
- id
- user_account_id
- event_type
- entity_type
- entity_id
- payload_json
- created_at

### daily_user_stats
Дневные агрегаты по пользователю.

Ключевые поля:
- id
- user_account_id
- stat_date
- lessons_opened
- attempts_submitted
- passed_lessons
- average_score
- updated_at

### daily_segment_stats
Дневные агрегаты по сегменту.

Ключевые поля:
- id
- segment_id
- stat_date
- active_users
- completed_users
- average_score
- updated_at

### admin_audit_logs
Журнал действий администратора.

Ключевые поля:
- id
- actor_user_account_id
- action
- entity_type
- entity_id
- before_json (nullable)
- after_json (nullable)
- reason (nullable)
- created_at

---

## 6. Critical Indexes

Обязательные индексы v1:
- telegram_identities.telegram_user_id UNIQUE
- lesson_progress (user_account_id, lesson_version_id) UNIQUE
- attempts (user_account_id, lesson_version_id, created_at DESC)
- activity_events (user_account_id, created_at DESC)
- delivery_logs (scheduled_notification_id, status)
- admin_audit_logs (actor_user_account_id, created_at DESC)