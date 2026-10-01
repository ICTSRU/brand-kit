# SRU · ICTD Brand Kit — v1.0
**حزمة الهوية الموحّدة لمشاريع الإدارة التنفيذية للاتصالات وتقنية المعلومات**

Sulaiman Al Rajhi University · Executive Directorate of Communications & Information Technology

---

## الفكرة | Concept
سطران في أي صفحة HTML يبنيان تلقائياً:
- **الهيدر**: شعار الجامعة (يمين) + شعار الإدارة التنفيذية (يسار)، شريط العنوان مع شارة الإصدار، الخط القُطري، وشريط الأدوات.
- **الفوتر**: اسم الجامعة والإدارة + رمز النموذج + الإصدار، وشعار ITOC مرتبط بصفحة النماذج.

أي تحديث للهوية في هذا المستودع ينعكس على **جميع** المشاريع المرتبطة به تلقائياً.

Two lines in any HTML page build the branded header, toolbar and footer. Updating this repo updates every linked project.

---

## البدء السريع | Quick start
```html
<link rel="stylesheet" href="https://ictsru.github.io/brand-kit/sru-ui.css">
<script src="https://ictsru.github.io/brand-kit/sru-brand.js"></script>

<main><div class="sru-wrap"> … محتوى المشروع … </div></main>

<script>
SRU.init({
  titleAr: "نموذج طلب جهاز",
  titleEn: "Device Request Form",
  code:    "SRU-FRM-DEV-01",
  version: "1.0"
});
</script>
```
أو انسخ `starter.html` وعدّله مباشرة.

> ⚠️ عدّل الرابط `https://ictsru.github.io/brand-kit/` ليطابق اسم المستودع الفعلي إن اختلف.

---

## خيارات `SRU.init` | Options

| الخيار | الافتراضي | الوصف |
|---|---|---|
| `titleAr` / `titleEn` | — | عنوان الصفحة بالعربية والإنجليزية |
| `code` | `SRU-FRM-XXX-01` | رمز النموذج/المشروع |
| `version` | `1.0` | يظهر في الشارة والفوتر وعنوان التبويب واسم ملف JSON |
| `org` | الجامعة — الإدارة التنفيذية | نص الفوتر |
| `itocUrl` | `https://ictsru.github.io/ITOC/#forms` | رابط شعار ITOC |
| `toolbar` | `true` | `false` لصفحات العرض بلا أزرار |
| `buttons` | 7 أزرار قياسية | `[{label, icon, action}]` — `icon` اسم أيقونة Lucide |
| `actions` | `{}` | دوال مخصّصة تتجاوز السلوك الافتراضي، مثل `openLog` |
| `fieldSelector` | `[data-field]` | الحقول التي تُحفظ وتُصدَّر |
| `sheetsUrl` | `""` | رابط Apps Script Web App لزر Google Sheets |
| `sample` | `null` | بيانات زر «تحميل المثال» |
| `autosave` | `true` | حفظ المسودة محلياً تلقائياً |
| `logos` | `assets/logos/*` | لتجاوز أي شعار |
| `onSettings` | — | دالة زر الإعدادات |

### الأزرار القياسية | Built-in actions
`saveSheets` · `openLog` · `print` · `reset` · `loadSample` · `exportJson` · `importJson`

### واجهة برمجية | API
`SRU.toast(msg)` · `SRU.status(msg)` · `SRU.collect()` · `SRU.fill(obj)` · `SRU.clear()` · `SRU.run(action)` · `SRU.icons()` · `SRU.KIT_VERSION`

---

## المكوّنات الجاهزة | CSS components
`.sru-wrap` · `.sru-card` (+ `h2`, `.sub`) · `.sru-grid` · `.sru-btn .sru-btn-primary` · `.sru-btn .sru-btn-secondary` · `.sru-chip` · `.sru-en` (عزل النص الإنجليزي) · `.no-print`

الأيقونات: `<i data-lucide="printer"></i>` — 21 أيقونة مضمّنة تعمل دون إنترنت، وأي أيقونة أخرى تُحمَّل من Lucide إن أُضيفت مكتبته.

---

## هيكل المستودع | Repository structure
```
sru-brand-kit-v1.0/
├── index.html          صفحة عرض توضيحي (مسارات نسبية)
├── starter.html        قالب البدء لأي مشروع جديد
├── sru-ui.css          الرموز اللونية والمكوّنات وقواعد الطباعة
├── sru-brand.js        بناء الهيدر/الفوتر/الأدوات + الأدوات المساعدة
├── assets/logos/       sru.png · ictd.png · itoc.png (أصلية)
├── CHANGELOG.md
├── README.md
└── .nojekyll
```

## النشر على GitHub Pages | Deploy
1. ارفع **محتوى** المجلد إلى جذر مستودع (مثل `ictsru/brand-kit`).
2. Settings → Pages → Branch: `main` / root.
3. الرابط: `https://ictsru.github.io/brand-kit/`

## الإصدارات | Versioning
- رقم واحد بعد الفاصلة: `1.9 → 2.0`.
- رقم الإصدار في اسم المجلد، وأسماء الملفات بلا إصدار، والإصدار ظاهر داخل الصفحة.
- لتثبيت مشروع على إصدار محدد، انشر كل إصدار في مسار فرعي (مثل `/v1.0/`) واربط به.

## المرجع | Source of truth
`SRU_IDENTITY.md` — بنفسجي `#501e8c` · بنفسجي داكن `#3a1464` · أزرق `#0a6eaa` · خط Cairo · RTL.

---
Mohamed ElMahdy, IT Operations Manager, Sulaiman Al Rajhi University
