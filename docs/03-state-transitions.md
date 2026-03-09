# 03 — State Transitions

## 1. UserAccount

- invited -> active
- invited -> suspended
- active -> inactive
- active -> suspended
- suspended -> active
- suspended -> inactive

### Notes
- invited -> active: пользователь завершил onboarding и привязал Telegram
- active -> inactive: пользователь деактивирован без удаления истории
- active -> suspended: временная блокировка вручную
- suspended -> active: ручная разблокировка
- invited -> inactive: не используем в MVP
- inactive -> active: не используем напрямую, вместо этого создаем отдельное управляемое восстановление позже

---

## 2. Assignment

- assigned -> in_progress
- in_progress -> completed
- assigned -> archived
- in_progress -> archived
- completed -> archived

### Notes
- assigned -> in_progress: пользователь начал обучение
- completed -> archived: завершенное назначение уходит в архив при скрытии из активной работы

---

## 3. SegmentVersion

- draft -> published
- published -> archived

### Notes
- archived -> published: не используем
- если нужна новая активная версия, создается новая запись SegmentVersion

---

## 4. LessonVersion

- draft -> published
- published -> archived

### Notes
- archived -> published: не используем
- для изменения опубликованного урока создается новая версия

---

## 5. LessonProgress

- not_started -> available
- available -> in_progress
- in_progress -> awaiting_answer
- awaiting_answer -> passed
- awaiting_answer -> failed
- passed -> completed
- failed -> awaiting_answer
- failed -> locked
- locked -> awaiting_answer

### Notes
- not_started -> available: prerequisites выполнены
- available -> in_progress: пользователь открыл урок
- in_progress -> awaiting_answer: контент урока просмотрен, ждем ответ
- awaiting_answer -> passed: попытка успешна
- awaiting_answer -> failed: попытка не прошла порог
- passed -> completed: урок зафиксирован завершенным
- failed -> awaiting_answer: разрешена пересдача
- failed -> locked: лимит попыток исчерпан или действует cooldown
- locked -> awaiting_answer: cooldown истек или админ вручную разблокировал

---

## 6. SegmentProgress

- not_started -> in_progress
- in_progress -> completed
- not_started -> locked
- locked -> in_progress

### Notes
- not_started -> locked: сегмент скрыт из-за prerequisites
- locked -> in_progress: prerequisite выполнен и сегмент открыт

---

## 7. Attempt

- submitted -> evaluated
- evaluated -> accepted
- evaluated -> rejected
- accepted -> overridden
- rejected -> overridden

### Notes
- submitted -> evaluated: автоматическая проверка завершена
- evaluated -> accepted: score >= threshold
- evaluated -> rejected: score < threshold
- overridden: ручное изменение результата админом

---

## 8. ScheduledNotification

- pending -> processing
- processing -> sent
- processing -> failed
- pending -> canceled

### Notes
- pending -> processing: worker взял задачу
- processing -> failed: ошибка доставки или временный сбой
- pending -> canceled: задача отменена до выполнения

---

## 9. DeliveryLog

### Allowed final states
- sent
- failed
- skipped

### Notes
- DeliveryLog не живет как state machine с множеством переходов
- это финальная запись результата попытки доставки