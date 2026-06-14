/* ===================================================
   BIMA-NESIA – JavaScript
   script.js
=================================================== */

/* ===================================================
   DATASET – Kosakata Bahasa Bima & Indonesia
=================================================== */
const vocabulary = [
  { bima: "Nahu"   , indonesia: "Saya (Kasual)" },
  { bima: "Mada"   , indonesia: "Saya (Sopan)" },
  { bima: "Nggomi" , indonesia: "Kamu (Kasual)" },
  { bima: "Ita"    , indonesia: "Anda (Sopan)" },
  { bima: "Sia"    , indonesia: "Dia" },
  { bima: "Cou"    , indonesia: "Siapa" },
  { bima: "Au"     , indonesia: "Apa" },
  { bima: "Ngaha"  , indonesia: "Makan" },
  { bima: "Nono"   , indonesia: "Minum" },
  { bima: "Maru"   , indonesia: "Tidur" },
  { bima: "Lao"    , indonesia: "Pergi" },
  { bima: "Mai"    , indonesia: "Datang" },
  { bima: "Dula"   , indonesia: "Pulang" },
  { bima: "Doho"   , indonesia: "Duduk" },
  { bima: "Nggahi" , indonesia: "Bicara" },
  { bima: "Nee"    , indonesia: "Mau/Ingin" },
  { bima: "Uma"    , indonesia: "Rumah" },
  { bima: "Dana"   , indonesia: "Tanah" },
  { bima: "Oi"     , indonesia: "Air" },
  { bima: "Afi"    , indonesia: "Api" },
  { bima: "Wadu"   , indonesia: "Batu" },
  { bima: "Ina"    , indonesia: "Ibu" },
  { bima: "Ama"    , indonesia: "Ayah" },
  { bima: "Ompu"   , indonesia: "Kakek" },
  { bima: "Wai"    , indonesia: "Nenek" },
  { bima: "Ana"    , indonesia: "Anak" },
  { bima: "Amba"   , indonesia: "Pasar" },
  { bima: "Taho"   , indonesia: "Baik/Bagus" },
  { bima: "Nae"    , indonesia: "Besar" },
  { bima: "Toi"    , indonesia: "Kecil" },
  { bima: "Wati"   , indonesia: "Tidak" },
  { bima: "Iyo"    , indonesia: "Iya" },
  { bima: "Au"     , indonesia: "Apa" },
  { bima: "Bau?"   , indonesia: "Kenapa?" },
  { bima: "Sabune?", indonesia: "Berapa?" },
  { bima: "Tabe?"  , indonesia: "Di mana?" },
  { bima: "Lampa"  , indonesia: "Jalan" },
  { bima: "Ringu"  , indonesia: "Gila" },
];

/* ===================================================
   DATASET – Kalimat Bahasa Bima & Indonesia
=================================================== */
const sentences = [
  { bima: "Bune haba?"                   , indonesia: "Apa kabar?" },
  { bima: "Haba taho"                    , indonesia: "Kabar baik" },
  { bima: "Selamat pagi."                , indonesia: "Selamat pagi." },
  { bima: "Selamat sore."                , indonesia: "Selamat sore." },
  { bima: "Selamat malam."               , indonesia: "Selamat malam." },
  { bima: "Nahu lao aka uma."            , indonesia: "Saya pergi ke rumah." },
  { bima: "Nahu nee ngaha."              , indonesia: "Saya mau makan." },
  { bima: "Nahu nee nono."               , indonesia: "Saya mau minum air." },
  { bima: "Nahu dari Mbojo."             , indonesia: "Saya berasal dari Bima." },
  { bima: "Cou ngara nggomi?"            , indonesia: "Siapa nama kamu?" },
  { bima: "Ngara nahu ifin."             , indonesia: "Nama saya Ahmad." },
  { bima: "Dou tabe nggomi?"             , indonesia: "Dari mana kamu berasal?" },
  { bima: "Pila umur nggomi?"            , indonesia: "Berapa umur kamu?" },
  { bima: "Nahu umur dua mpuru ini mbaa.", indonesia: "Saya berumur dua puluh enam tahun." },
  { bima: "Nggomi lao tabe?"             , indonesia: "Kamu pergi ke mana?" },
  { bima: "Nahu lao aka amba."           , indonesia: "Saya pergi ke pasar." },
  { bima: "Ina nahu taho."               , indonesia: "Ibu saya baik." },
  { bima: "Ama nahu lao aka uma."        , indonesia: "Ayah saya pergi ke rumah." },
  { bima: "Ana nahu doho di uma."        , indonesia: "Anak saya duduk di rumah." },
  { bima: "Ompu nahu waura ngaha."       , indonesia: "Kakek saya sudah makan." },
  { bima: "Wai nahu nggahi taho."        , indonesia: "Nenek saya berbicara dengan baik." },
  { bima: "Nahu ei mada"                 , indonesia: "Saya mengantuk" },
  { bima: "Nahu wati nee lao."           , indonesia: "Saya tidak mau pergi." },
  { bima: "Nggomi doho tabe?"            , indonesia: "Kamu duduk di mana?" },
  { bima: "Sia mai aka uma nahu."        , indonesia: "Dia datang ke rumah saya." },
  { bima: "Nahu dula aka uma."           , indonesia: "Saya pulang ke rumah." },
  { bima: "Nahu nuntu lao sia."          , indonesia: "Saya berbicara dengannya." },
  { bima: "Bau nggomi wati mai?"         , indonesia: "Kenapa kamu tidak datang?" },
  { bima: "Au nee nggomi?"               , indonesia: "Apa yang kamu inginkan?" },
  { bima: "Sabune harga ake?"            , indonesia: "Berapa harga ini?" },
  { bima: "Tabe uma nggomi?"             , indonesia: "Di mana rumah kamu?" },
  { bima: "Cou mai aka uma nahu?"        , indonesia: "Siapa yang datang ke rumah saya?" },
  { bima: "Nahu dihi ade"                , indonesia: "Saya senang." },
  { bima: "Nahu hido loko"               , indonesia: "Saya lapar." },
  { bima: "Uma nahu nae."                , indonesia: "Rumah saya besar." },
  { bima: "Uma nggomi toi"               , indonesia: "Rumah kamu kecil." },
  { bima: "Dana Mbojo ma gaga"           , indonesia: "Kampung Bima sangat indah." },
  { bima: "Iyo nahu ngerti."             , indonesia: "Iya saya mengerti." },
  { bima: "Nahu wati ngerti"             , indonesia: "Saya tidak mengerti." },
  { bima: "Maaf nahu salah."             , indonesia: "Maaf saya salah." },
  { bima: "Mori Susa"                    , indonesia: "Hidup Susah" },
  { bima: "Mori Jokowi"                  , indonesia: "Hidup Jokowi" },
  { bima: "Mori Sugiono"                 , indonesia: "Hidup Sugiono" },
  { bima: "Lampa kese"                   , indonesia: "Jalan Sendiri" },
  { bima: "Ica Edi Lako"                 , indonesia: "Ica Edi anjing" },
  { bima: "Nggomi ana lako"              , indonesia: "Kamu anak anjing" },
  { bima: "Nggomi ana setan"             , indonesia: "Kamu anak setan" },
  { bima: "Kalembo ade"                  , indonesia: "Lapang dada" },
  { bima: "Lampa sama"                   , indonesia: "Jalan bersama" },
];

/* ===================================================
   STATE
=================================================== */
let direction = 'bima-ina'; // 'bima-ina' | 'ina-bima'
let mode      = 'kata';     // 'kata' | 'kalimat' | 'semua'

// STT state
let recognition  = null;
let isRecording  = false;

// TTS state
let currentUtt   = null;
let isSpeaking   = false;
let activeSpeakBtn = null;

/* ===================================================
   INIT
=================================================== */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('totalWords').textContent     = vocabulary.length;
  document.getElementById('totalSentences').textContent = sentences.length;
  document.getElementById('badgeKata').textContent      = vocabulary.length;
  document.getElementById('badgeKalimat').textContent   = sentences.length;
  renderVocabTable(vocabulary);
  renderSentenceTable(sentences);
  initScrollTop();
  initSTT();
  updatePlaceholders();
});

/* ===================================================
   DIRECTION TOGGLE
=================================================== */
function setDirection(dir) {
  direction = dir;
  document.getElementById('btnBimaToIna').classList.toggle('active', dir === 'bima-ina');
  document.getElementById('btnInaToBima').classList.toggle('active', dir === 'ina-bima');
  clearInput();
  updatePlaceholders();
}

function swapDirection() {
  setDirection(direction === 'bima-ina' ? 'ina-bima' : 'bima-ina');
}

/* ===================================================
   MODE TABS
=================================================== */
function setMode(m) {
  mode = m;
  ['kata', 'kalimat', 'semua'].forEach(id => {
    document.getElementById('tab' + id.charAt(0).toUpperCase() + id.slice(1))
      .classList.toggle('active', id === m);
  });
  clearInput();
  updatePlaceholders();
}

function updatePlaceholders() {
  const label  = document.getElementById('inputLabel');
  const inp    = document.getElementById('searchInput');
  const isBima = direction === 'bima-ina';

  if (mode === 'kata') {
    label.textContent = isBima ? 'Ketik kata dalam Bahasa Bima'      : 'Ketik kata dalam Bahasa Indonesia';
    inp.placeholder   = isBima ? 'Contoh: Nahu, Uma, Taho...'        : 'Contoh: Saya, Rumah, Baik...';
  } else if (mode === 'kalimat') {
    label.textContent = isBima ? 'Ketik kalimat dalam Bahasa Bima'   : 'Ketik kalimat dalam Bahasa Indonesia';
    inp.placeholder   = isBima ? 'Contoh: Nahu lao ku uma...'        : 'Contoh: Saya pergi ke rumah...';
  } else {
    label.textContent = isBima ? 'Cari kata atau kalimat Bima'       : 'Cari kata atau kalimat Indonesia';
    inp.placeholder   = isBima ? 'Contoh: Nahu, Uma taho...'         : 'Contoh: Saya, Rumah besar...';
  }
}

/* ===================================================
   INPUT HANDLERS
=================================================== */
function onInputChange() {
  const val      = document.getElementById('searchInput').value;
  const clearBtn = document.getElementById('clearBtn');
  if (val.trim()) {
    clearBtn.classList.add('visible');
    doTranslate();
  } else {
    clearBtn.classList.remove('visible');
    hideResult();
  }
}

function onKeyDown(e) {
  if (e.key === 'Enter')  doTranslate();
  if (e.key === 'Escape') clearInput();
}

function clearInput() {
  document.getElementById('searchInput').value = '';
  document.getElementById('clearBtn').classList.remove('visible');
  hideResult();
  document.getElementById('searchInput').focus();
}

/* ===================================================
   TRANSLATE LOGIC
=================================================== */
function searchDataset(dataset, query) {
  const q       = query.toLowerCase();
  const fromKey = direction === 'bima-ina' ? 'bima' : 'indonesia';
  const exact   = dataset.find(v => v[fromKey].toLowerCase() === q);
  const partial = dataset.filter(v =>
    v[fromKey].toLowerCase().includes(q) && v[fromKey].toLowerCase() !== q
  );
  return { exact, partial };
}

function doTranslate() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) { hideResult(); return; }

  if (mode === 'kata') {
    const { exact, partial } = searchDataset(vocabulary, query);
    showResult([exact].filter(Boolean), partial, [], [], query);

  } else if (mode === 'kalimat') {
    const { exact, partial } = searchDataset(sentences, query);
    showResult([], [], [exact].filter(Boolean), partial, query);

  } else {
    // Cari Semua – search both datasets
    const voc = searchDataset(vocabulary, query);
    const sen = searchDataset(sentences, query);
    showResult(
      [voc.exact].filter(Boolean), voc.partial,
      [sen.exact].filter(Boolean), sen.partial,
      query
    );
  }
}

/* ===================================================
   SHOW RESULT
=================================================== */
function showResult(vocExacts, vocPartials, senExacts, senPartials, query) {
  const area     = document.getElementById('resultArea');
  const content  = document.getElementById('resultContent');
  const fromLang = direction === 'bima-ina' ? 'Bahasa Bima'      : 'Bahasa Indonesia';
  const toLang   = direction === 'bima-ina' ? 'Bahasa Indonesia'  : 'Bahasa Bima';
  const fromKey  = direction === 'bima-ina' ? 'bima'              : 'indonesia';
  const toKey    = direction === 'bima-ina' ? 'indonesia'          : 'bima';

  let html   = '';
  let hasAny = false;

  /* ── Exact word results ── */
  if (vocExacts.length > 0) {
    hasAny = true;
    vocExacts.forEach(v => {
      html += `
        <div class="result-card" style="margin-bottom:12px;">
          <span class="result-type-badge badge-word">📝 Kosakata</span>
          <div class="result-word">${escapeHTML(v[toKey])}</div>
          <div class="result-source">
            <strong>${escapeHTML(v[fromKey])}</strong> dalam ${fromLang} → ${toLang}
          </div>
          <div class="result-actions">
            <button class="speak-btn" onclick="speakFromBtn(this)" data-text="${escapeHTML(v[toKey])}" data-lang="id-ID" title="Dengarkan terjemahan">
              🔊 Dengarkan
            </button>
            <button class="speak-btn speak-btn-src" onclick="speakFromBtn(this)" data-text="${escapeHTML(v[fromKey])}" data-lang="id-ID" title="Dengarkan kata asli">
              🔊 Kata Asli
            </button>
          </div>
        </div>`;
    });
  }

  /* ── Exact sentence results ── */
  if (senExacts.length > 0) {
    hasAny = true;
    senExacts.forEach(v => {
      html += `
        <div class="result-card" style="margin-bottom:12px; border-color:rgba(212,160,23,.3);">
          <span class="result-type-badge badge-sentence">💬 Kalimat</span>
          <div class="result-sentence">${escapeHTML(v[toKey])}</div>
          <div class="result-original">Asli: <strong>${escapeHTML(v[fromKey])}</strong></div>
          <div class="result-actions">
            <button class="speak-btn" onclick="speakFromBtn(this)" data-text="${escapeHTML(v[toKey])}" data-lang="id-ID" title="Dengarkan terjemahan">
              🔊 Dengarkan
            </button>
            <button class="speak-btn speak-btn-src" onclick="speakFromBtn(this)" data-text="${escapeHTML(v[fromKey])}" data-lang="id-ID" title="Dengarkan kalimat asli">
              🔊 Kalimat Asli
            </button>
          </div>
        </div>`;
    });
  }

  /* ── Partial suggestions ── */
  const allPartials = [
    ...vocPartials.map(v => ({ ...v, _type: 'kata' })),
    ...senPartials.map(v => ({ ...v, _type: 'kalimat' })),
  ];

  if (hasAny && allPartials.length > 0) {
    html += `
      <div class="suggestions-list">
        <div class="suggestions-title">📌 Hasil lain yang serupa</div>
        <div class="suggestion-chips">
          ${allPartials.slice(0, 10).map(v =>
            `<button class="suggestion-chip" onclick="fillAndTranslate('${escapeAttr(v[fromKey])}')">
              ${v._type === 'kalimat' ? '💬' : '📝'} ${escapeHTML(v[fromKey])}
            </button>`
          ).join('')}
        </div>
      </div>`;

  } else if (!hasAny && allPartials.length > 0) {
    html += `
      <div class="not-found">
        <div class="nf-icon">🔎</div>
        <h3>Tidak ada hasil persis untuk "${escapeHTML(query)}"</h3>
        <p>Ditemukan ${allPartials.length} hasil yang mengandung kata tersebut:</p>
      </div>
      <div class="suggestions-list" style="margin-top:14px;">
        <div class="suggestions-title">💡 Mungkin maksud Anda:</div>
        <div class="suggestion-chips">
          ${allPartials.slice(0, 12).map(v =>
            `<button class="suggestion-chip" onclick="fillAndTranslate('${escapeAttr(v[fromKey])}')">
              ${v._type === 'kalimat' ? '💬' : '📝'} ${escapeHTML(v[fromKey])}
            </button>`
          ).join('')}
        </div>
      </div>`;

  } else if (!hasAny) {
    html = `
      <div class="not-found">
        <div class="nf-icon">😔</div>
        <h3>Tidak ditemukan</h3>
        <p>"<strong>${escapeHTML(query)}</strong>" tidak ada dalam kamus kami.<br>
        Coba kata/kalimat lain atau periksa ejaan Anda.</p>
      </div>`;
  }

  content.innerHTML = html;
  area.classList.add('show');
}

function hideResult() {
  document.getElementById('resultArea').classList.remove('show');
}

function fillAndTranslate(text) {
  document.getElementById('searchInput').value = text;
  document.getElementById('clearBtn').classList.add('visible');
  // Auto-switch mode if text contains space and current mode is 'kata'
  if (text.includes(' ') && mode === 'kata') setMode('semua');
  doTranslate();
  document.getElementById('searchInput').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ===================================================
   VOCABULARY TABLE
=================================================== */
function renderVocabTable(data, query = '') {
  const tbody = document.getElementById('vocabTableBody');
  const count = document.getElementById('vocabCount');
  count.textContent = data.length;

  if (data.length === 0) {
    tbody.innerHTML = `<tr class="no-results-row"><td colspan="3">😔 Tidak ada kosakata yang cocok.</td></tr>`;
    return;
  }

  const hl = txt => {
    if (!query) return escapeHTML(txt);
    const re = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return escapeHTML(txt).replace(re, '<mark>$1</mark>');
  };

  tbody.innerHTML = data.map((v, i) => `
    <tr onclick="fillAndTranslate('${escapeAttr(v.bima)}')" title="Klik untuk menerjemahkan">
      <td style="color:var(--text-light);font-size:.8rem;width:40px;">${i + 1}</td>
      <td><span class="bima-badge">${hl(v.bima)}</span></td>
      <td>${hl(v.indonesia)}</td>
      <td class="td-speak">
        <button class="speak-icon-btn" onclick="event.stopPropagation();speakFromBtn(this)" data-text="${escapeHTML(v.bima)}" data-lang="id-ID" title="Ucapkan dalam Bima">🔊</button>
        <button class="speak-icon-btn" onclick="event.stopPropagation();speakFromBtn(this)" data-text="${escapeHTML(v.indonesia)}" data-lang="id-ID" title="Ucapkan terjemahan">🗣️</button>
      </td>
    </tr>`).join('');
}

function filterVocab() {
  const q = document.getElementById('vocabSearch').value.trim().toLowerCase();
  renderVocabTable(
    q ? vocabulary.filter(v =>
      v.bima.toLowerCase().includes(q) || v.indonesia.toLowerCase().includes(q)
    ) : vocabulary,
    q
  );
}

/* ===================================================
   SENTENCE TABLE
=================================================== */
function renderSentenceTable(data, query = '') {
  const tbody = document.getElementById('sentenceTableBody');
  const count = document.getElementById('sentenceCount');
  count.textContent = data.length;

  if (data.length === 0) {
    tbody.innerHTML = `<tr class="no-results-row"><td colspan="3">😔 Tidak ada kalimat yang cocok.</td></tr>`;
    return;
  }

  const hl = txt => {
    if (!query) return escapeHTML(txt);
    const re = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return escapeHTML(txt).replace(re, '<mark>$1</mark>');
  };

  tbody.innerHTML = data.map((v, i) => `
    <tr onclick="fillAndTranslate('${escapeAttr(v.bima)}')" title="Klik untuk menerjemahkan">
      <td style="color:var(--text-light);font-size:.8rem;width:40px;">${i + 1}</td>
      <td><span class="bima-badge">${hl(v.bima)}</span></td>
      <td>${hl(v.indonesia)}</td>
      <td class="td-speak">
        <button class="speak-icon-btn" onclick="event.stopPropagation();speakFromBtn(this)" data-text="${escapeHTML(v.bima)}" data-lang="id-ID" title="Ucapkan kalimat Bima">🔊</button>
        <button class="speak-icon-btn" onclick="event.stopPropagation();speakFromBtn(this)" data-text="${escapeHTML(v.indonesia)}" data-lang="id-ID" title="Ucapkan terjemahan">🗣️</button>
      </td>
    </tr>`).join('');
}

function filterSentences() {
  const q = document.getElementById('sentenceSearch').value.trim().toLowerCase();
  renderSentenceTable(
    q ? sentences.filter(v =>
      v.bima.toLowerCase().includes(q) || v.indonesia.toLowerCase().includes(q)
    ) : sentences,
    q
  );
}

/* ===================================================
   SCROLL TO TOP
=================================================== */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
}

/* ===================================================
   SPEECH-TO-TEXT (STT)
   Menggunakan Web Speech API – SpeechRecognition
   Bahasa: id-ID (Indonesian; Bima tidak tersedia)
=================================================== */
function initSTT() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById('micBtn');

  if (!SR) {
    // Browser tidak mendukung STT – sembunyikan tombol mic
    if (micBtn) micBtn.style.display = 'none';
    const status = document.getElementById('sttStatus');
    if (status) {
      status.textContent = '⚠ Browser Anda tidak mendukung rekam suara.';
      status.classList.add('active', 'unsupported');
    }
    return;
  }

  recognition = new SR();
  recognition.lang            = 'id-ID';
  recognition.continuous      = false;
  recognition.interimResults  = true;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isRecording = true;
    setMicUI(true);
  };

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    const inp = document.getElementById('searchInput');
    inp.value = transcript;
    document.getElementById('clearBtn').classList.add('visible');
    // Langsung terjemahkan setelah hasil final
    if (e.results[0].isFinal) doTranslate();
  };

  recognition.onerror = (e) => {
    console.warn('STT error:', e.error);
    const status = document.getElementById('sttStatus');
    if (status) {
      const msgs = {
        'not-allowed'  : '⚠ Izin mikrofon ditolak.',
        'no-speech'    : '⚠ Tidak ada suara terdeteksi.',
        'network'      : '⚠ Gagal terhubung ke layanan suara.',
        'aborted'      : '',
      };
      status.textContent = msgs[e.error] || `⚠ Error: ${e.error}`;
      status.classList.toggle('active', !!status.textContent);
    }
    isRecording = false;
    setMicUI(false);
  };

  recognition.onend = () => {
    isRecording = false;
    setMicUI(false);
  };
}

function toggleSTT() {
  if (!recognition) { initSTT(); if (!recognition) return; }
  isRecording ? recognition.stop() : recognition.start();
}

function setMicUI(recording) {
  const btn    = document.getElementById('micBtn');
  const status = document.getElementById('sttStatus');
  if (!btn) return;
  btn.classList.toggle('recording', recording);
  btn.title = recording ? 'Berhenti merekam' : 'Rekam suara (klik untuk mulai)';
  btn.setAttribute('aria-label', recording ? 'Berhenti merekam' : 'Rekam suara');
  if (status) {
    status.textContent = recording ? '🔴 Sedang merekam... (bicara sekarang)' : '';
    status.classList.toggle('active', recording);
    status.classList.remove('unsupported');
  }
}

/* ===================================================
   TEXT-TO-SPEECH (TTS)
   Menggunakan Web Speech API – SpeechSynthesis
=================================================== */
function speakFromBtn(btnEl) {
  const text = btnEl.dataset.text;
  const lang = btnEl.dataset.lang || 'id-ID';
  speakText(btnEl, text, lang);
}

function speakText(btnEl, text, lang = 'id-ID') {
  if (!window.speechSynthesis || !text) return;

  // Jika tombol yang sama diklik lagi, hentikan
  if (isSpeaking && activeSpeakBtn === btnEl) {
    stopSpeech();
    return;
  }

  // Hentikan suara sebelumnya
  stopSpeech();

  const utt = new SpeechSynthesisUtterance(text);
  utt.lang  = lang;
  utt.rate  = 0.88;
  utt.pitch = 1.0;

  utt.onstart = () => {
    isSpeaking     = true;
    activeSpeakBtn = btnEl;
    if (btnEl) btnEl.classList.add('speaking');
  };

  utt.onend = utt.onerror = () => {
    isSpeaking     = false;
    activeSpeakBtn = null;
    if (btnEl) btnEl.classList.remove('speaking');
    currentUtt = null;
  };

  currentUtt = utt;
  window.speechSynthesis.speak(utt);
}

function stopSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (activeSpeakBtn) activeSpeakBtn.classList.remove('speaking');
  isSpeaking     = false;
  activeSpeakBtn = null;
  currentUtt     = null;
}

/* ===================================================
   UTILITIES
=================================================== */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
