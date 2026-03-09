# 04 — Scoring Rules

## 1. Default Scoring Strategy

Для MVP используется hybrid scoring:
- rule-based проверка по ключевым словам и якорным фразам
- rubric-based проверка по смысловым критериям
- без обязательного LLM

---

## 2. Score Components

### Rubric Score
- диапазон: 0–70
- оценивает смысловую полноту ответа по рубрике

### Keyword Score
- диапазон: 0–30
- оценивает наличие обязательных ключевых слов, терминов или якорных фраз

### Penalty Adjustments
- диапазон: 0 до -20
- применяется за нарушения правил ответа

### Final Score
Формула:

final_score = rubric_score + keyword_score + penalty_adjustments

Ограничение:
- minimum final_score = 0
- maximum final_score = 100

---

## 3. Pass Threshold

- значение по умолчанию: 70
- если final_score >= 70, попытка считается успешной
- если final_score < 70, попытка считается неуспешной

### Override Rules
- у LessonVersion может быть свой pass_threshold_override
- если override не задан, используется значение по умолчанию

---

## 4. Best Score Policy

Для MVP используется политика best score:
- в LessonProgress сохраняется лучший результат пользователя
- более слабая последующая попытка не ухудшает лучший балл
- прохождение урока определяется по лучшей попытке

### Why
- мотивирует пересдачу
- проще объяснить пользователю
- проще считать агрегаты

---

## 5. Retry Policy

### Attempt Limits
- максимум 3 попытки на один урок в течение 24 часов

### Cooldown
- после неуспешной попытки включается cooldown 15 минут

### Lock Rule
- если исчерпан лимит попыток, LessonProgress переводится в locked
- повторная попытка открывается:
  - после истечения cooldown
  - или после ручной разблокировки админом
  - или после нового расчетного окна попыток

---

## 6. Anti-Abuse Rules

### Minimum Interaction Time
- если пользователь отвечает слишком быстро и не достиг минимального времени взаимодействия с уроком, попытка может быть помечена как suspicious

### Duplicate Answer Check
- одинаковый ответ не должен бесконечно засчитываться как новая полноценная попытка без флага

### Retry Throttling
- запрещено отправлять новую попытку во время активного cooldown

### Suspicious Patterns
Примеры подозрительного поведения:
- слишком быстрые ответы
- многократная отправка одного и того же текста
- резкий скачок результата после серии однотипных неудачных ответов

---

## 7. What Must Be Stored Per Attempt

Для каждой попытки должны сохраняться:
- raw_answer
- normalized_answer
- rubric_score
- keyword_score
- penalty_adjustments
- final_score
- grading_reason
- confidence_level (optional for MVP)
- suspicious_flag
- created_at

---

## 8. Failure Feedback Rules

После неуспешной попытки пользователь должен получить:
- факт, что порог не пройден
- итоговый балл
- короткую причину
- информацию о cooldown или следующей доступной попытке

### Important
- не раскрывать полный эталонный ответ
- не показывать внутреннюю техническую логику scoring полностью
- давать достаточно feedback, чтобы пересдача была осмысленной

---

## 9. Admin Override Rules

Админ может:
- вручную изменить итог попытки
- вручную выставить accepted / rejected
- добавить reviewer_note

### Audit Requirement
Любой override обязан попадать в audit log:
- кто изменил
- когда изменил
- старое значение
- новое значение
- причина изменения

---

## 10. Aggregation Rules

### Lesson Best Score
- берется максимальный final_score среди допустимых попыток

### Segment Average
- считается как среднее значение best score по обязательным урокам сегмента

### Course Average
- считается как среднее значение best score по обязательным урокам курса
- для MVP допустимо считать по lesson-level average без сложных весов