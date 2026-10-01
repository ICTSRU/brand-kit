# CHANGELOG — SRU · ICTD Brand Kit

## [1.1] — 2026-10-01
### Added | إضافات
- `lang: "en"` — دعم التطبيقات الإنجليزية (LTR) مع تثبيت مواضع الشعارات وITOC.
- `buttonsMode: "tabs"` و`SRU.setActive()` — تبويبات بزر نشط.
- `statusText` / `statusIcon` — نص ثابت في منطقة الحالة.
- `settings: false` و`printChrome: false`.
- أيقونات مضمّنة إضافية: layout-dashboard, pen-line, refresh-cw, clipboard-list, arrow-up.
### Changed | تعديلات
- أنماط `body` الأساسية عبر `:where()` (أولوية صفرية) لكي تبقى أنماط التطبيق هي الغالبة.
- أنماط الحقول (label/input/select/textarea) محصورة داخل `.sru-card`.
- الفوتر الثابت أسفل الصفحة عبر `position:sticky` بدل Flexbox، لتفادي كسر تخطيط الحاويات القائمة.
### Migrated | نماذج مُرحّلة
- ICTD Weekly Status Report 3.9 → 4.0.

## [1.0] — 2026-10-01
### Added | إضافات
- `sru-ui.css`: رموز الهوية (SRU_IDENTITY.md)، الهيدر، شريط العنوان، الخط القُطري، شريط الأدوات، البطاقات، الحقول، الأزرار، الفوتر، التجاوب مع الجوال، وقواعد الطباعة A4.
- `sru-brand.js`: الدالة `SRU.init()` لبناء الهيدر والفوتر وشريط الأدوات من إعداد واحد؛ تحميل `sru-ui.css` تلقائياً إن لم يُضمَّن.
- الأزرار القياسية: Google Sheets، السجل، PDF/طباعة، جديد، تحميل المثال، تصدير JSON، استيراد.
- حفظ المسودة محلياً تلقائياً لكل حقل يحمل `data-field`.
- 21 أيقونة Lucide مضمّنة تعمل دون إنترنت.
- الشعارات الأصلية: الجامعة، الإدارة التنفيذية، ITOC (مرتبط بـ `https://ictsru.github.io/ITOC/#forms`).
- `starter.html` قالب البدء، و`index.html` صفحة العرض التوضيحي.

### Origin | المصدر
- مبني على هيدر وفوتر نموذج `SRU-FRM-SOP-01` (الإصدار 1.8) وقالب البدء المستقل `sru-project-template-v1.1.html`.
