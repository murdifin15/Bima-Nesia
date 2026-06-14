#!/usr/bin/env node
/**
 * =====================================================
 *  BIMA-NESIA – Dataset Updater
 *  update-dataset.js
 *
 *  Cara pakai:
 *    node update-dataset.js
 *
 *  Script ini membaca dua file CSV:
 *    - kosakata_bima_indonesia.csv  → update array `vocabulary`
 *    - kalimat_bima_indonesia.csv   → update array `sentences`
 *
 *  Kemudian secara otomatis mengganti isi kedua array
 *  tersebut di dalam file script.js.
 * =====================================================
 */

const fs   = require('fs');
const path = require('path');

/* ─── Konfigurasi path ─── */
const ROOT          = __dirname;
const VOCAB_CSV     = path.join(ROOT, 'kosakata_bima_indonesia.csv');
const SENTENCE_CSV  = path.join(ROOT, 'kalimat_bima_indonesia.csv');
const SCRIPT_JS     = path.join(ROOT, 'script.js');

/* ─────────────────────────────────────────────────────
   1. PARSER CSV
   Mendukung:
     - Nilai yang dibungkus tanda kutip ganda "..."
     - Koma di dalam nilai (jika dikutip)
     - Newline di dalam nilai (jika dikutip)
     - Escape kutip ganda dengan "" di dalam nilai
───────────────────────────────────────────────────── */
function parseCSV(raw) {
  const rows    = [];
  const lines   = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  let   i       = 0;
  let   isFirst = true;

  while (i < lines.length) {
    const row = [];
    // Parse satu baris (bisa multi-line jika nilai dikutip)
    while (i < lines.length) {
      let cell = '';

      if (lines[i] === '"') {
        // Nilai dikutip
        i++; // lewati kutip pembuka
        while (i < lines.length) {
          if (lines[i] === '"' && lines[i + 1] === '"') {
            cell += '"'; i += 2;          // escaped quote ""
          } else if (lines[i] === '"') {
            i++; break;                   // kutip penutup
          } else {
            cell += lines[i++];
          }
        }
      } else {
        // Nilai biasa
        while (i < lines.length && lines[i] !== ',' && lines[i] !== '\n') {
          cell += lines[i++];
        }
      }

      row.push(cell.trim());

      if (i < lines.length && lines[i] === ',') {
        i++; // lanjut ke kolom berikutnya
      } else {
        break; // akhir baris
      }
    }

    // Lewati karakter newline
    if (i < lines.length && lines[i] === '\n') i++;

    // Lewati baris kosong atau header
    if (isFirst) { isFirst = false; continue; }
    if (row.length === 0 || (row.length === 1 && row[0] === '')) continue;

    rows.push(row);
  }

  return rows;
}

/* ─────────────────────────────────────────────────────
   2. KONVERSI BARIS CSV → ENTRI OBJEK JS
───────────────────────────────────────────────────── */
function csvRowsToEntries(rows) {
  return rows
    .filter(r => r.length >= 2 && r[0] !== '' && r[1] !== '')
    .map(r => ({ bima: r[0], indonesia: r[1] }));
}

/* ─────────────────────────────────────────────────────
   3. GENERATE STRING ARRAY JS
   Menghasilkan blok teks seperti:
     const vocabulary = [
       { bima: "...", indonesia: "..." },
       ...
     ];
───────────────────────────────────────────────────── */
function generateArrayString(varName, entries) {
  const escQ = s => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const longestBima = Math.max(...entries.map(e => e.bima.length));

  const items = entries.map(e => {
    const bimaField = `"${escQ(e.bima)}"`.padEnd(longestBima + 2);
    return `  { bima: ${bimaField}, indonesia: "${escQ(e.indonesia)}" },`;
  });

  return `const ${varName} = [\n${items.join('\n')}\n];`;
}

/* ─────────────────────────────────────────────────────
   4. GANTI ARRAY DI DALAM script.js
   Mencari blok `const <varName> = [` ... `];`
   dan menggantinya dengan konten baru.
───────────────────────────────────────────────────── */
function replaceArrayInScript(scriptContent, varName, newArrayString) {
  // Regex: cocokkan seluruh blok `const varName = [ ... ];`
  // Menggunakan [\s\S]*? agar bisa melewati baris-baris
  const pattern = new RegExp(
    `(const ${varName}\\s*=\\s*\\[)[\\s\\S]*?\\];`,
    'g'
  );

  if (!pattern.test(scriptContent)) {
    throw new Error(`❌  Tidak dapat menemukan "const ${varName} = [...]" di script.js`);
  }

  return scriptContent.replace(
    new RegExp(`(const ${varName}\\s*=\\s*\\[)[\\s\\S]*?\\];`, 'g'),
    newArrayString
  );
}

/* ─────────────────────────────────────────────────────
   5. BACA FILE
───────────────────────────────────────────────────── */
function readFile(filePath, label) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌  File tidak ditemukan: ${filePath}`);
    console.error(`    Pastikan file "${path.basename(filePath)}" ada di folder yang sama.`);
    process.exit(1);
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log(`✔  Membaca ${label}: ${path.basename(filePath)} (${content.split('\n').length - 1} baris)`);
  return content;
}

/* ─────────────────────────────────────────────────────
   6. MAIN – Jalankan semua langkah
───────────────────────────────────────────────────── */
function main() {
  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   Bima-Nesia – Dataset Updater           ║');
  console.log('╚══════════════════════════════════════════╝\n');

  /* ── Baca CSV ── */
  const vocabRaw    = readFile(VOCAB_CSV,    'Kosakata CSV');
  const sentenceRaw = readFile(SENTENCE_CSV, 'Kalimat CSV');
  let   scriptRaw   = readFile(SCRIPT_JS,    'script.js   ');
  console.log('');

  /* ── Parse CSV ── */
  const vocabRows    = parseCSV(vocabRaw);
  const sentenceRows = parseCSV(sentenceRaw);

  const vocabEntries    = csvRowsToEntries(vocabRows);
  const sentenceEntries = csvRowsToEntries(sentenceRows);

  console.log(`📖  Kosakata ditemukan  : ${vocabEntries.length} entri`);
  console.log(`💬  Kalimat ditemukan   : ${sentenceEntries.length} entri`);
  console.log('');

  if (vocabEntries.length === 0) {
    console.warn('⚠   Peringatan: Tidak ada entri kosakata yang valid. Periksa CSV kosakata Anda.');
  }
  if (sentenceEntries.length === 0) {
    console.warn('⚠   Peringatan: Tidak ada entri kalimat yang valid. Periksa CSV kalimat Anda.');
  }

  /* ── Generate blok array JS ── */
  const newVocabArray    = generateArrayString('vocabulary', vocabEntries);
  const newSentenceArray = generateArrayString('sentences',  sentenceEntries);

  /* ── Ganti array di script.js ── */
  try {
    scriptRaw = replaceArrayInScript(scriptRaw, 'vocabulary', newVocabArray);
    console.log('✔  Array `vocabulary` berhasil diperbarui');
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }

  try {
    scriptRaw = replaceArrayInScript(scriptRaw, 'sentences', newSentenceArray);
    console.log('✔  Array `sentences`  berhasil diperbarui');
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }

  /* ── Buat backup script.js lama ── */
  const backupPath = SCRIPT_JS + '.bak';
  fs.copyFileSync(SCRIPT_JS, backupPath);
  console.log(`\n📂  Backup disimpan   : ${path.basename(backupPath)}`);

  /* ── Tulis script.js baru ── */
  fs.writeFileSync(SCRIPT_JS, scriptRaw, 'utf-8');
  console.log(`✅  script.js berhasil diperbarui!\n`);

  /* ── Ringkasan ── */
  console.log('╔══════════════════════════════════════════╗');
  console.log('║   Ringkasan Update                       ║');
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║  📖 Kosakata : ${String(vocabEntries.length).padEnd(25)} ║`);
  console.log(`║  💬 Kalimat  : ${String(sentenceEntries.length).padEnd(25)} ║`);
  console.log(`║  📁 Output   : script.js${' '.repeat(17)} ║`);
  console.log('╚══════════════════════════════════════════╝\n');

  /* ── Preview 3 entri pertama ── */
  console.log('--- Preview Kosakata (3 entri pertama) ---');
  vocabEntries.slice(0, 3).forEach((e, i) =>
    console.log(`  ${i + 1}. ${e.bima.padEnd(15)} → ${e.indonesia}`)
  );
  console.log('\n--- Preview Kalimat (3 entri pertama) ---');
  sentenceEntries.slice(0, 3).forEach((e, i) =>
    console.log(`  ${i + 1}. ${e.bima.padEnd(35)} → ${e.indonesia}`)
  );
  console.log('');
}

main();
