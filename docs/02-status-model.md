# 02 — Status Model

## 1. UserAccount Status

- invited
- active
- inactive
- suspended

### Meaning
- invited — пользователь создан, но еще не завершил привязку Telegram
- active — пользователь активен и может проходить обучение
- inactive — доступ отключен, история сохранена
- suspended — временно заблокирован вручную

---

## 2. Assignment Status

- assigned
- in_progress
- completed
- archived

### Meaning
- assigned — обучение назначено, но еще не начато
- in_progress — пользователь начал прохождение
- completed — весь назначенный блок завершен
- archived — назначение снято или скрыто из активной работы

---

## 3. Segment Version Status

- draft
- published
- archived

### Meaning
- draft — версия редактируется и не видна пользователям
- published — активная версия, доступная для новых назначений
- archived — устаревшая версия, оставлена только для истории

---

## 4. Lesson Version Status

- draft
- published
- archived

### Meaning
- draft — версия урока редактируется
- published — версия доступна в обучении
- archived — версия выведена из активного использования

---

## 5. LessonProgress Status

- not_started
- available
- in_progress
- awaiting_answer
- passed
- failed
- completed
- locked

### Meaning
- not_started — урок еще не доступен пользователю
- available — урок доступен для открытия
- in_progress — пользователь открыл урок и начал прохождение
- awaiting_answer — контент урока пройден, ожидается ответ
- passed — попытка успешна, порог пройден
- failed — последняя попытка не пройдена
- completed — урок завершен окончательно
- locked — урок заблокирован из-за prerequisites или лимитов

---

## 6. SegmentProgress Status

- not_started
- in_progress
- completed
- locked

### Meaning
- not_started — сегмент еще не начат
- in_progress — сегмент проходитcя
- completed — сегмент полностью завершен
- locked — сегмент пока недоступен

---

## 7. Attempt Status

- submitted
- evaluated
- accepted
- rejected
- overridden

### Meaning
- submitted — ответ отправлен и сохранен
- evaluated — ответ автоматически проверен
- accepted — попытка засчитана как успешная
- rejected — попытка проверена, но порог не пройден
- overridden — результат изменен вручную админом

---

## 8. ScheduledNotification Status

- pending
- processing
- sent
- failed
- canceled

### Meaning
- pending — уведомление запланировано и ждет отправки
- processing — уведомление взято в обработку worker’ом
- sent — успешно отправлено
- failed — попытка отправки завершилась ошибкой
- canceled — уведомление отменено до отправки

---

## 9. DeliveryLog Status

- sent
- failed
- skipped

### Meaning
- sent — сообщение доставлено
- failed — ошибка доставки
- skipped — не отправлено из-за quiet hours, cap или деактивации пользователя