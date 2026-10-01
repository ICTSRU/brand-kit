/*!
 * SRU · ICTD Brand Kit — sru-brand.js
 * Kit version: 1.0
 * يبني الهيدر وشريط الأدوات والفوتر تلقائياً لأي صفحة.
 * Owner: Mohamed ElMahdy, IT Operations Manager, Sulaiman Al Rajhi University
 *
 * الاستخدام:
 *   <link rel="stylesheet" href="BASE/sru-ui.css">
 *   <script src="BASE/sru-brand.js"></script>
 *   <script>SRU.init({ titleAr:"…", titleEn:"…", code:"SRU-FRM-XXX-01", version:"1.0" });</script>
 */
(function (global) {
  "use strict";
  var KIT_VERSION = "1.0";
  var me = document.currentScript;
  var BASE = me && me.src ? me.src.replace(/[^\/]*$/, "") : "./";

  /* Auto-load stylesheet if the page forgot it (سطر واحد يكفي) */
  if (!document.querySelector('link[href*="sru-ui.css"]')) {
    var l = document.createElement("link"); l.rel = "stylesheet"; l.href = BASE + "sru-ui.css";
    document.head.appendChild(l);
  }

  var ICONS = {"cloud-upload": "<svg class=\"lucide lucide-cloud-upload\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 13v8\" /> <path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\" /> <path d=\"m8 17 4-4 4 4\" />", "folder-open": "<svg class=\"lucide lucide-folder-open\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2\" />", "printer": "<svg class=\"lucide lucide-printer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\" /> <path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\" /> <rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\" />", "file-plus": "<svg class=\"lucide lucide-file-plus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M9 15h6\" /> <path d=\"M12 18v-6\" />", "sparkles": "<svg class=\"lucide lucide-sparkles\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /> <path d=\"M20 3v4\" /> <path d=\"M22 5h-4\" /> <path d=\"M4 17v2\" /> <path d=\"M5 18H3\" />", "download": "<svg class=\"lucide lucide-download\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"7 10 12 15 17 10\" /> <line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />", "upload": "<svg class=\"lucide lucide-upload\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /> <polyline points=\"17 8 12 3 7 8\" /> <line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\" />", "settings": "<svg class=\"lucide lucide-settings\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /> <circle cx=\"12\" cy=\"12\" r=\"3\" />", "info": "<svg class=\"lucide lucide-info\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 16v-4\" /> <path d=\"M12 8h.01\" />", "file-text": "<svg class=\"lucide lucide-file-text\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /> <path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /> <path d=\"M10 9H8\" /> <path d=\"M16 13H8\" /> <path d=\"M16 17H8\" />", "save": "<svg class=\"lucide lucide-save\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\" /> <path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\" /> <path d=\"M7 3v4a1 1 0 0 0 1 1h7\" />", "plus": "<svg class=\"lucide lucide-plus\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M5 12h14\" /> <path d=\"M12 5v14\" />", "trash-2": "<svg class=\"lucide lucide-trash-2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 6h18\" /> <path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /> <path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /> <line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /> <line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />", "search": "<svg class=\"lucide lucide-search\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"11\" cy=\"11\" r=\"8\" /> <path d=\"m21 21-4.3-4.3\" />", "check": "<svg class=\"lucide lucide-check\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 6 9 17l-5-5\" />", "x": "<svg class=\"lucide lucide-x\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M18 6 6 18\" /> <path d=\"m6 6 12 12\" />", "pencil": "<svg class=\"lucide lucide-pencil\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" /> <path d=\"m15 5 4 4\" />", "list-checks": "<svg class=\"lucide lucide-list-checks\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m3 17 2 2 4-4\" /> <path d=\"m3 7 2 2 4-4\" /> <path d=\"M13 6h8\" /> <path d=\"M13 12h8\" /> <path d=\"M13 18h8\" />", "calendar": "<svg class=\"lucide lucide-calendar\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M8 2v4\" /> <path d=\"M16 2v4\" /> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /> <path d=\"M3 10h18\" />", "users": "<svg class=\"lucide lucide-users\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /> <circle cx=\"9\" cy=\"7\" r=\"4\" /> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /> <path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />"};

  var DEFAULTS = {
    titleAr: "عنوان المشروع",
    titleEn: "Project Title",
    code: "SRU-FRM-XXX-01",
    version: "1.0",
    org: "جامعة سليمان الراجحي — الإدارة التنفيذية للاتصالات وتقنية المعلومات",
    itocUrl: "https://ictsru.github.io/ITOC/#forms",
    logos: { uni: BASE + "assets/logos/sru.png", ictd: BASE + "assets/logos/ictd.png", itoc: BASE + "assets/logos/itoc.png" },
    toolbar: true,                 // false = بدون شريط أدوات (صفحات عرض فقط)
    firstButtonSolid: true,
    buttons: [
      { label: "حفظ في Google Sheets", icon: "cloud-upload", action: "saveSheets" },
      { label: "السجل",               icon: "folder-open",  action: "openLog" },
      { label: "PDF / طباعة",         icon: "printer",      action: "print" },
      { label: "جديد",                icon: "file-plus",    action: "reset" },
      { label: "تحميل المثال",        icon: "sparkles",     action: "loadSample" },
      { label: "JSON",                icon: "download",     action: "exportJson" },
      { label: "استيراد",             icon: "upload",       action: "importJson" }
    ],
    fieldSelector: "[data-field]", // الحقول التي تُحفظ/تُصدَّر — أضف data-field للحقل
    sheetsUrl: "",                 // رابط Apps Script Web App
    sample: null,                  // كائن بيانات المثال {fieldName: value}
    autosave: true,
    storageKey: null,              // افتراضياً: sru-draft-<code>
    actions: {},                   // دوال مخصّصة تتجاوز الافتراضية
    onSettings: null
  };

  var cfg = {};
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function svg(n) { return ICONS[n] ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + "</svg>" : '<i data-lucide="' + esc(n) + '"></i>'; }
  function renderIcons(root) {
    (root || document).querySelectorAll("i[data-lucide]").forEach(function (el) {
      var n = el.getAttribute("data-lucide"); if (ICONS[n]) el.outerHTML = svg(n);
    });
    if (global.lucide) global.lucide.createIcons();
  }

  /* ---------- Toast & status ---------- */
  function toast(m) {
    var t = $(".sru-toast"); if (!t) return;
    t.textContent = m; t.classList.add("show"); clearTimeout(t._h);
    t._h = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }
  function status(m) { var s = $("#sruStatus"); if (s) s.textContent = m; }

  /* ---------- Data helpers ---------- */
  function fields() { return Array.prototype.slice.call(document.querySelectorAll(cfg.fieldSelector)); }
  function key(el) { return el.getAttribute("data-field") || el.name || el.id; }
  function collect() { var o = {}; fields().forEach(function (el) { o[key(el)] = el.type === "checkbox" ? el.checked : el.value; }); return o; }
  function fill(d) { if (!d) return; fields().forEach(function (el) { var k = key(el); if (d[k] !== undefined) { if (el.type === "checkbox") el.checked = !!d[k]; else el.value = d[k]; } }); }
  function clear() { fields().forEach(function (el) { if (el.type === "checkbox") el.checked = false; else if (el.tagName === "SELECT") el.selectedIndex = 0; else el.value = ""; }); }
  function save() { if (!cfg.autosave) return; try { localStorage.setItem(cfg.storageKey, JSON.stringify(collect())); status("مسودة محفوظة محلياً"); } catch (e) {} }
  function restore() { try { var d = JSON.parse(localStorage.getItem(cfg.storageKey) || "null"); if (d) { fill(d); status("مسودة محفوظة محلياً"); } } catch (e) {} }

  /* ---------- Built-in actions ---------- */
  var BUILTIN = {
    saveSheets: function () {
      if (!cfg.sheetsUrl) { toast("لم يُضبط رابط Google Sheets (sheetsUrl)"); return; }
      var body = Object.assign({ code: cfg.code, version: cfg.version, ts: new Date().toISOString() }, collect());
      return fetch(cfg.sheetsUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(body) })
        .then(function () { toast("تم الإرسال إلى Google Sheets"); status("محفوظ في Google Sheets"); })
        .catch(function (e) { toast("تعذّر الإرسال: " + e.message); });
    },
    openLog: function () { toast("أضف منطق السجل عبر actions.openLog"); },
    print: function () { global.print(); },
    reset: function () { if (confirm("مسح جميع الحقول والبدء من جديد؟")) { clear(); try { localStorage.removeItem(cfg.storageKey); } catch (e) {} status("جديد"); } },
    loadSample: function () { if (!cfg.sample) { toast("لم يُعرَّف مثال (sample)"); return; } fill(cfg.sample); save(); toast("تم تحميل المثال"); },
    exportJson: function () {
      var blob = new Blob([JSON.stringify({ meta: { code: cfg.code, version: cfg.version, kit: KIT_VERSION, exported: new Date().toISOString() }, data: collect() }, null, 2)], { type: "application/json" });
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = cfg.code + "-v" + cfg.version + ".json"; a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    },
    importJson: function () {
      var i = document.createElement("input"); i.type = "file"; i.accept = ".json,application/json";
      i.onchange = function () {
        var r = new FileReader();
        r.onload = function () { try { var j = JSON.parse(r.result); fill(j.data || j); save(); toast("تم الاستيراد"); } catch (e) { toast("ملف JSON غير صالح"); } };
        r.readAsText(i.files[0]);
      };
      i.click();
    }
  };
  function run(name) {
    var fn = (cfg.actions && cfg.actions[name]) || BUILTIN[name];
    return fn ? fn.call(API, API) : toast("لا توجد دالة: " + name);
  }

  /* ---------- Build header & footer ---------- */
  function build() {
    document.body.classList.add("sru");
    document.title = cfg.titleAr + " · " + cfg.code + " · v" + cfg.version;

    var header = document.createElement("header");
    header.className = "sru-header";
    header.innerHTML =
      '<div class="sru-brand"><div class="sru-wrap">' +
        '<img class="sru-logo-uni" src="' + esc(cfg.logos.uni) + '" alt="جامعة سليمان الراجحي — Sulaiman Alrajhi University">' +
        '<img class="sru-logo-ictd" src="' + esc(cfg.logos.ictd) + '" alt="الإدارة التنفيذية للاتصالات وتقنية المعلومات">' +
      '</div></div>' +
      '<div class="sru-title"><div class="sru-wrap">' +
        '<h1><span>' + esc(cfg.titleAr) + '</span><span class="sru-en">' + esc(cfg.titleEn) + '</span></h1>' +
        '<span class="sru-chip-ver">إصدار النموذج <b>' + esc(cfg.version) + '</b> · <span class="sru-en">' + esc(cfg.code) + '</span></span>' +
      '</div></div>' +
      '<div class="sru-diag" aria-hidden="true"></div>' +
      (cfg.toolbar ? '<nav class="sru-toolbar no-print"><div class="sru-wrap">' +
        '<div class="sru-tb-actions" id="sruActions"></div>' +
        '<div class="sru-tb-status"><span id="sruStatus">جاهز</span>' +
        '<button type="button" class="sru-tbtn ghost icon" id="sruSettings" title="الإعدادات">' + svg("settings") + '</button></div>' +
      '</div></nav>' : "");
    document.body.insertBefore(header, document.body.firstChild);

    if (cfg.toolbar) {
      var host = $("#sruActions");
      (cfg.buttons || []).forEach(function (b, i) {
        var el = document.createElement("button");
        el.type = "button";
        el.className = "sru-tbtn" + (cfg.firstButtonSolid && i === 0 ? "" : " ghost");
        el.innerHTML = svg(b.icon) + "<span>" + esc(b.label) + "</span>";
        el.addEventListener("click", function () { run(b.action); });
        host.appendChild(el);
      });
      $("#sruSettings").addEventListener("click", function () { cfg.onSettings ? cfg.onSettings(API) : toast("الإعدادات: عرّف onSettings"); });
    }

    var footer = document.createElement("footer");
    footer.className = "sru-footer";
    footer.innerHTML = '<div class="sru-wrap">' +
      '<div class="sru-ft-text" title="SRU Brand Kit ' + KIT_VERSION + '">' + esc(cfg.org) + ' · <span class="sru-en">' + esc(cfg.code) + '</span> · الإصدار <b>' + esc(cfg.version) + '</b></div>' +
      '<a class="sru-itoc" href="' + esc(cfg.itocUrl) + '" target="_blank" rel="noopener" title="ITOC — IT Operations Center"><img src="' + esc(cfg.logos.itoc) + '" alt="ITOC — IT Operations Center"></a>' +
      '</div>';
    document.body.appendChild(footer);

    var t = document.createElement("div"); t.className = "sru-toast"; t.setAttribute("role", "status");
    document.body.appendChild(t);

    var main = document.querySelector("main"); if (main) main.classList.add("sru-main");
    renderIcons();
    if (cfg.autosave) {
      document.addEventListener("input", function (e) { if (e.target.matches && e.target.matches(cfg.fieldSelector)) save(); });
      restore();
    }
  }

  function init(userCfg) {
    cfg = Object.assign({}, DEFAULTS, userCfg || {});
    cfg.logos = Object.assign({}, DEFAULTS.logos, (userCfg || {}).logos || {});
    cfg.storageKey = cfg.storageKey || ("sru-draft-" + cfg.code);
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
    return API;
  }

  var API = {
    KIT_VERSION: KIT_VERSION, BASE: BASE, init: init,
    toast: toast, status: status, collect: collect, fill: fill, clear: clear, save: save,
    run: run, icons: renderIcons, ICONS: ICONS,
    get config() { return cfg; }
  };
  global.SRU = API;
})(window);
