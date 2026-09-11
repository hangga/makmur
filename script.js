/* ==================================================
   DATA PERTANYAAN
   ================================================== */

const questions = [

  {
    type: "radio",
    number: 1,
    question: "Berapa usia Anda saat ini?",
    options: [
      "≤ 20 tahun",
      "20–30 tahun",
      "30–40 tahun",
      "40–50 tahun",
      "50–60 tahun",
      "≥ 60 tahun"
    ]
  },

  {
    type: "radio",
    number: 2,
    question: "Apa posisi/amanah Anda dalam kepengurusan takmir masjid?",
    options: [
      "Ketua",
      "Sekretaris",
      "Bendahara",
      "Koordinator Sie",
      "Anggota Takmir",
      "Jamaah Masjid"
    ]
  },

  {
    type: "radio",
    number: 3,
    question: "Dalam satu pekan terakhir, berapa kali Anda melaksanakan shalat berjamaah di masjid?",
    options: [
      "< 5 kali",
      "5–10 kali",
      "10–15 kali",
      "15–20 kali",
      "20–25 kali",
      "25–30 kali",
      "≥ 30 kali"
    ]
  },

  {
    type: "radio",
    number: 4,
    question: "Berapa usia Ketua Takmir masjid Anda?",
    options: [
      "≤ 20 tahun",
      "20–30 tahun",
      "30–40 tahun",
      "40–50 tahun",
      "50–60 tahun",
      "≥ 60 tahun (60 tahun atau lebih)"
    ]
  },

  {
    type: "radio",
    number: 5,
    question: "Berapa rata-rata usia pengurus takmir masjid Anda?",
    options: [
      "< 20 tahun",
      "20–30 tahun",
      "30–40 tahun",
      "40–50 tahun",
      "50–60 tahun",
      "≥ 60 tahun (60 tahun atau lebih)"
    ]
  },

  {
    type: "section",
    text: "Untuk mengetahui rata-rata jumlah jamaah yang melaksanakan shalat berjamaah di masjid berdasarkan waktu shalat. Berapa rata-rata jumlah jamaah pada setiap waktu shalat?"
  },

  {
    type: "radio",
    number: 6,
    question: "Shalat Subuh",
    options: [
      "< 20 orang (kurang dari 20 orang)",
      "20–30 orang",
      "30–40 orang",
      "40–50 orang",
      "50–60 orang",
      "≥ 60 orang (60 orang atau lebih)"
    ]
  },

  {
    type: "radio",
    number: 7,
    question: "Shalat Zuhur",
    options: [
      "< 20 orang (kurang dari 20 orang)",
      "20–30 orang",
      "30–40 orang",
      "40–50 orang",
      "50–60 orang",
      "≥ 60 orang (60 orang atau lebih)"
    ]
  },

  {
    type: "radio",
    number: 8,
    question: "Shalat Ashar",
    options: [
      "< 20 orang (kurang dari 20 orang)",
      "20–30 orang",
      "30–40 orang",
      "40–50 orang",
      "50–60 orang",
      "≥ 60 orang (60 orang atau lebih)"
    ]
  },

  {
    type: "radio",
    number: 9,
    question: "Shalat Maghrib",
    options: [
      "< 20 orang (kurang dari 20 orang)",
      "20–30 orang",
      "30–40 orang",
      "40–50 orang",
      "50–60 orang",
      "≥ 60 orang (60 orang atau lebih)"
    ]
  },

  {
    type: "radio",
    number: 10,
    question: "Shalat Isya",
    options: [
      "< 20 orang (kurang dari 20 orang)",
      "20–30 orang",
      "30–40 orang",
      "40–50 orang",
      "50–60 orang",
      "≥ 60 orang (60 orang atau lebih)"
    ]
  },

  {
    type: "radio",
    number: 11,
    question: "Berapa jumlah rata-rata jamaah rutin di masjid Anda yang berusia anak-anak (< 15 tahun)?",
    options: [
      "≤ 5 orang",
      "5–10 orang",
      "10–20 orang",
      "20–30 orang",
      "30–40 orang"
    ]
  },

  {
    type: "radio",
    number: 12,
    question: "Berapa jumlah rata-rata jamaah rutin di masjid Anda yang berusia remaja (16–25 tahun)?",
    options: [
      "Tidak ada",
      "1–5 orang",
      "6–10 orang",
      "10–15 orang",
      "15–20 orang"
    ]
  },

  {
    type: "radio",
    number: 13,
    question: "Berapa jumlah rata-rata jamaah rutin di masjid Anda yang berusia dewasa (25–40 tahun)?",
    options: [
      "≤ 5 orang",
      "5–10 orang",
      "10–20 orang",
      "20–30 orang",
      "30–40 orang"
    ]
  },

  {
    type: "radio",
    number: 14,
    question: "Berapa jumlah rata-rata jamaah rutin di masjid Anda yang berusia 40–60 tahun?",
    options: [
      "≤ 5 orang",
      "5–10 orang",
      "10–20 orang",
      "20–30 orang",
      "30–40 orang"
    ]
  },

  {
    type: "radio",
    number: 15,
    question: "Berapa jumlah rata-rata jamaah rutin di masjid Anda yang berusia lanjut (> 60 tahun)?",
    options: [
      "≤ 5 orang",
      "5–10 orang",
      "10–20 orang",
      "20–30 orang",
      "30–40 orang"
    ]
  },

  {
    type: "radio",
    number: 16,
    question: "Berapa jumlah warga yang tercakup dalam wilayah dakwah masjid Anda, meliputi RT, RW, dan kampung?",
    options: [
      "≤ 100 orang",
      "100–200 orang",
      "200–300 orang",
      "300–400 orang",
      "400–500 orang",
      "≥ 500 orang"
    ]
  },

  {
    type: "section",
    text: "Nomor 17–20: Anda boleh memilih lebih dari satu jawaban."
  },

  {
    type: "checkbox",
    number: 17,
    question: "Apa saja problematika yang paling banyak dialami oleh masyarakat di sekitar masjid?",
    options: [
      "Masalah ekonomi",
      "Kenakalan remaja",
      "Prostitusi",
      "Perbuatan Maksiat",
      "Judi online",
      "Minuman keras",
      "Problematika rumah tangga",
      "Pengangguran",
      "Kerukunan warga",
      "Ketimpangan sosial/gap"
    ]
  },

  {
    type: "checkbox",
    number: 18,
    question: "Apa saja masalah atau kendala yang dialami oleh takmir masjid?",
    options: [
      "Masalah keuangan",
      "Minimnya keterlibatan generasi muda",
      "Minimnya keaktifan pengurus",
      "Pemikiran yang kolot",
      "Kurang ramah anak",
      "Pengurus takmir didominasi oleh lansia/tokoh tua",
      "Pengurus takmir didominasi oleh anak muda",
      "Kurangnya dai dari lingkungan sendiri",
      "Minimnya imam yang baik/ideal",
      "Kurangnya kedekatan antarjamaah"
    ]
  },

  {
    type: "checkbox",
    number: 19,
    question: "Solusi apa yang Anda harapkan agar masjid Anda menjadi lebih makmur?",
    options: [
      "Silaturahmi intensif antar-takmir",
      "Pelatihan aktivis masjid",
      "Pelatihan mubaligh muda",
      "Pelatihan imam",
      "Pelatihan manajemen masjid"
    ]
  },

  {
    type: "checkbox",
    number: 20,
    question: "Apa impian Anda terhadap jamaah masjid Anda?",
    options: [
      "Jumlah jamaah semakin bertambah",
      "Jumlah jamaah muda semakin banyak",
      "Jumlah jamaah anak-anak semakin banyak",
      "Semakin banyak kegiatan positif di masjid",
      "Kondisi saat ini sudah baik"
    ]
  },

  {
    type: "radio",
    number: 21,
    question: "Berapa usia Imam termuda di masjid Anda?",
    options: [
      "≤ 20 tahun",
      "20–25 tahun",
      "25–30 tahun",
      "30–35 tahun",
      "35–40 tahun"
    ]
  },

  {
    type: "radio",
    number: 22,
    question: "Berapa usia Imam tertua di masjid Anda?",
    options: [
      "30-40 tahun",
      "40–50 tahun",
      "50–60 tahun",
      "60–70 tahun",
      "≥ 70 tahun"
    ]
  }

];


/* ==================================================
   STATE
   ================================================== */

let responses =
  JSON.parse(localStorage.getItem("kuesionerMasjid")) || [];

let editingIndex = null;


/* ==================================================
   ELEMENTS
   ================================================== */

const formDialog =
  document.getElementById("formDialog");

const questionnaireForm =
  document.getElementById("questionnaireForm");

const dialogTitle =
  document.getElementById("dialogTitle");

const submitButton =
  document.getElementById("submitButton");


/* ==================================================
   GENERATE FORM
   ================================================== */

function generateForm() {

  const container =
    document.getElementById("questionsContainer");

  container.innerHTML = "";


  questions.forEach(item => {

    if (item.type === "section") {

      const section =
        document.createElement("div");

      section.className = "section-note";

      section.textContent = item.text;

      container.appendChild(section);

      return;

    }


    const question =
      document.createElement("div");

    question.className = "question";


    const title =
      document.createElement("div");

    title.className = "question-title";

    title.textContent =
      `${item.number}. ${item.question}`;

    question.appendChild(title);


    item.options.forEach((option, index) => {

      const label =
        document.createElement("label");

      label.className = "option";


      const input =
        document.createElement("input");

      input.type = item.type;

      input.name = `q${item.number}`;

      input.value = option;


      if (
        item.type === "radio" &&
        index === 0
      ) {
        input.required = true;
      }


      const text =
        document.createElement("span");

      text.textContent = option;


      label.appendChild(input);
      label.appendChild(text);

      question.appendChild(label);

    });


    container.appendChild(question);

  });

}


/* ==================================================
   OPEN FORM
   ================================================== */

function openForm() {

  editingIndex = null;

  questionnaireForm.reset();

  dialogTitle.textContent =
    "Tambah Data Responden";

  submitButton.textContent =
    "Simpan Jawaban";

  formDialog.showModal();


  setTimeout(() => {

    document
      .getElementById("namaPeserta")
      .focus();

  }, 50);

}


/* ==================================================
   OPEN EDIT FORM
   ================================================== */

function editData(index) {

  const data = responses[index];

  if (!data) {
    return;
  }


  editingIndex = index;


  document
    .getElementById("namaPeserta")
    .value = data.namaPeserta || "";


  document
    .getElementById("namaMasjid")
    .value = data.namaMasjid || "";


  questions.forEach(item => {

    if (item.type === "section") {
      return;
    }


    const value = data[`q${item.number}`];


    if (item.type === "radio") {

      const inputs =
        document.querySelectorAll(
          `input[name="q${item.number}"]`
        );


      inputs.forEach(input => {

        input.checked =
          input.value === value;

      });

    }


    if (item.type === "checkbox") {

      const selected =
        Array.isArray(value) ? value : [];


      const inputs =
        document.querySelectorAll(
          `input[name="q${item.number}"]`
        );


      inputs.forEach(input => {

        input.checked =
          selected.includes(input.value);

      });

    }

  });


  dialogTitle.textContent =
    "Edit Data Responden";

  submitButton.textContent =
    "Update Jawaban";


  formDialog.showModal();


  setTimeout(() => {

    document
      .getElementById("namaPeserta")
      .focus();

  }, 50);

}


/* ==================================================
   CLOSE FORM
   ================================================== */

function closeForm() {

  formDialog.close();

  editingIndex = null;

}


/* ==================================================
   CLICK OUTSIDE DIALOG
   ================================================== */

formDialog.addEventListener("click", function (event) {

  const rect =
    formDialog.getBoundingClientRect();


  const isOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;


  if (isOutside) {
    closeForm();
  }

});


/* ==================================================
   SUBMIT FORM
   ================================================== */

questionnaireForm.addEventListener("submit", function (event) {

  event.preventDefault();


  const namaPeserta =
    document
      .getElementById("namaPeserta")
      .value
      .trim();


  const namaMasjid =
    document
      .getElementById("namaMasjid")
      .value
      .trim();


  if (!namaPeserta || !namaMasjid) {
    return;
  }


  const response = {

    id:
      editingIndex !== null
        ? responses[editingIndex].id
        : Date.now(),

    namaPeserta,
    namaMasjid

  };


  questions.forEach(item => {

    if (item.type === "section") {
      return;
    }


    if (item.type === "radio") {

      const selected =
        document.querySelector(
          `input[name="q${item.number}"]:checked`
        );


      response[`q${item.number}`] =
        selected ? selected.value : "";

    }


    if (item.type === "checkbox") {

      const selected =
        Array.from(
          document.querySelectorAll(
            `input[name="q${item.number}"]:checked`
          )
        ).map(input => input.value);


      response[`q${item.number}`] = selected;

    }

  });


  if (editingIndex === null) {
    responses.push(response);
  } else {
    responses[editingIndex] = response;
  }


  localStorage.setItem(
    "kuesionerMasjid",
    JSON.stringify(responses)
  );


  renderTable();
  renderCharts();

  questionnaireForm.reset();
  closeForm();

});


/* ==================================================
   RENDER TABLE
   ================================================== */

function renderTable() {

  const tbody =
    document.getElementById("dataTable");

  tbody.innerHTML = "";


  if (responses.length === 0) {

    tbody.innerHTML = `
      <tr>
        <td colspan="26" class="empty">
          Belum ada data responden.
          Klik "Tambah Responden" untuk memasukkan data.
        </td>
      </tr>
    `;

    return;

  }


  responses.forEach((data, index) => {

    const row =
      document.createElement("tr");


    row.innerHTML = `
      <td>${index + 1}</td>
      <td><strong>${escapeHTML(data.namaPeserta)}</strong></td>
      <td>${escapeHTML(data.namaMasjid)}</td>
      <td>${escapeHTML(data.q1)}</td>
      <td>${escapeHTML(data.q2)}</td>
      <td>${escapeHTML(data.q3)}</td>
      <td>${escapeHTML(data.q4)}</td>
      <td>${escapeHTML(data.q5)}</td>
      <td>${escapeHTML(data.q6)}</td>
      <td>${escapeHTML(data.q7)}</td>
      <td>${escapeHTML(data.q8)}</td>
      <td>${escapeHTML(data.q9)}</td>
      <td>${escapeHTML(data.q10)}</td>
      <td>${escapeHTML(data.q11)}</td>
      <td>${escapeHTML(data.q12)}</td>
      <td>${escapeHTML(data.q13)}</td>
      <td>${escapeHTML(data.q14)}</td>
      <td>${escapeHTML(data.q15)}</td>
      <td>${escapeHTML(data.q16)}</td>
      <td>${formatArray(data.q17)}</td>
      <td>${formatArray(data.q18)}</td>
      <td>${formatArray(data.q19)}</td>
      <td>${formatArray(data.q20)}</td>
      <td>${escapeHTML(data.q21)}</td>   <!-- TAMBAH -->
      <td>${escapeHTML(data.q22)}</td>   <!-- TAMBAH -->
      <td>
        <div class="action-buttons">
          <button
            class="btn btn-warning"
            onclick="editData(${index})"
          >Edit</button>
          <button
            class="btn btn-danger"
            onclick="deleteData(${index})"
          >Hapus</button>
        </div>
      </td>
    `;


    tbody.appendChild(row);

  });

}


/* ==================================================
   FORMAT ARRAY
   ================================================== */

function formatArray(value) {

  if (
    !Array.isArray(value) ||
    value.length === 0
  ) {
    return "-";
  }


  return value
    .map(item => escapeHTML(item))
    .join("<br>");

}


/* ==================================================
   ESCAPE HTML
   ================================================== */

function escapeHTML(value) {

  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }


  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* ==================================================
   DELETE DATA
   ================================================== */

function deleteData(index) {

  const data = responses[index];

  if (!data) {
    return;
  }


  const name =
    data.namaPeserta || "responden ini";


  const confirmed =
    confirm(`Hapus data ${name}?`);


  if (!confirmed) {
    return;
  }


  responses.splice(index, 1);


  localStorage.setItem(
    "kuesionerMasjid",
    JSON.stringify(responses)
  );


  renderTable();
  renderCharts();

}


/* ==================================================
   HALAMAN / TAB
   ================================================== */

function switchPage(page) {

  document.getElementById("page-data").hidden =
    page !== "data";

  document.getElementById("page-charts").hidden =
    page !== "charts";


  document
    .querySelectorAll(".tab-btn")
    .forEach(btn => {

      btn.classList.toggle(
        "active",
        btn.dataset.page === page
      );

    });


  if (page === "charts") {
    renderAnalysis();
    renderCharts();
    
  }

}

/* ==================================================
   PANEL METODOLOGI (TRANSPARANSI FORMULA)
   ================================================== */

function buildMethodologyHTML() {
  return `
    <details class="methodology">
      <summary>
        <span class="methodology-icon">Σ</span>
        Metodologi &amp; Formula Perhitungan
      </summary>
      <div class="methodology-body">

        <h4>1. Indeks Kemakmuran Masjid (IKM)</h4>
        <p>
          IKM adalah skor gabungan berskala <strong>0–100</strong> yang dihitung
          dari lima dimensi dengan bobot masing-masing. Skor akhir adalah
          <em>rata-rata dari skor tiap responden</em>, karena setiap responden
          mewakili satu masjid.
        </p>

        <div class="formula-box">
          <span class="var">IKM</span> <span class="op">=</span>
          (<span class="num">0.35</span> <span class="op">×</span> <span class="var">Vitalitas</span>)
          <span class="op">+</span>
          (<span class="num">0.20</span> <span class="op">×</span> <span class="var">Usia</span>)
          <span class="op">+</span>
          (<span class="num">0.20</span> <span class="op">×</span> <span class="var">Kepemimpinan</span>)<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="op">+</span>
          (<span class="num">0.15</span> <span class="op">×</span> <span class="var">Jangkauan</span>)
          <span class="op">+</span>
          (<span class="num">0.10</span> <span class="op">×</span> <span class="var">Partisipasi</span>)
        </div>

        <h4>2. Bobot &amp; Sumber Data Tiap Dimensi</h4>
        <table class="weight-table">
          <thead>
            <tr>
              <th>Dimensi</th>
              <th>Bobot</th>
              <th>Sumber Pertanyaan</th>
              <th>Cara Menghitung Skor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vitalitas Jamaah</strong></td>
              <td class="w-value">35%</td>
              <td>Q6–Q10 (jamaah per waktu shalat)</td>
              <td>Rata-rata jamaah ÷ 60 × 100, dibatasi 100</td>
            </tr>
            <tr>
              <td><strong>Keseimbangan Usia</strong></td>
              <td class="w-value">20%</td>
              <td>Q11–Q15 (jamaah per kelompok usia)</td>
              <td>Rata-rata per kelompok ÷ 35 × 100 (remaja ÷ 20)</td>
            </tr>
            <tr>
              <td><strong>Regenerasi Kepemimpinan</strong></td>
              <td class="w-value">20%</td>
              <td>Q4, Q5, Q21, Q22 (usia ketua, pengurus, imam)</td>
              <td>Kurva usia ideal (lihat poin 3)</td>
            </tr>
            <tr>
              <td><strong>Jangkauan Dakwah</strong></td>
              <td class="w-value">15%</td>
              <td>Q16 (wilayah dakwah)</td>
              <td>Jumlah warga ÷ 500 × 100, dibatasi 100</td>
            </tr>
            <tr>
              <td><strong>Partisipasi Aktif</strong></td>
              <td class="w-value">10%</td>
              <td>Q3 (frekuensi shalat berjamaah/pekan)</td>
              <td>Frekuensi ÷ 30 × 100, dibatasi 100</td>
            </tr>
          </tbody>
        </table>

        <h4>3. Formula Skor Usia (Kurva Non-Linier)</h4>
        <p>
          Usia <em>terlalu muda</em> maupun <em>terlalu tua</em> sama-sama
          dikurangi skornya — yang ideal adalah usia produktif di sekitar titik
          puncak. Semakin jauh dari titik ideal, semakin besar penalti.
        </p>

        <div class="formula-box">
          <span class="var">SkorUsia</span> <span class="op">=</span>
          <span class="op">max(</span><span class="num">0</span>,
          <span class="num">100</span>
          <span class="op">−</span>
          <span class="op">|</span><span class="var">Usia</span>
          <span class="op">−</span> <span class="var">Ideal</span><span class="op">|</span>
          <span class="op">×</span> <span class="var">Penalti</span><span class="op">)</span>
        </div>

        <table class="weight-table">
          <thead>
            <tr>
              <th>Variabel</th>
              <th>Usia Ideal</th>
              <th>Penalti / tahun</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Usia Ketua Takmir (Q4) &amp; Rata-rata Pengurus (Q5)</td>
                <td class="w-value">42 tahun</td><td>2.4 poin</td></tr>
            <tr><td>Usia Imam Termuda (Q21)</td>
                <td class="w-value">27 tahun</td><td>2.8 poin</td></tr>
            <tr><td>Usia Imam Tertua (Q22)</td>
                <td class="w-value">45 tahun</td><td>1.8 poin</td></tr>
          </tbody>
        </table>

        <h4>4. Ekstraksi Angka dari Range Jawaban</h4>
        <p class="muted">
          Jawaban seperti <code>"20–30 orang"</code> diubah menjadi
          <code>25</code> (titik tengah). Jawaban tunggal seperti
          <code>"≤ 5 orang"</code> diubah menjadi <code>5</code>.
          Jawaban <code>"Tidak ada"</code> dihitung sebagai <code>0</code>.
        </p>

        <h4>5. Kategori IKM</h4>
        <ul class="cat-list">
          <li class="cat-item">
            <span class="cat-badge" style="background:#16a34a">Sangat Makmur</span>
            <span class="cat-range">80 – 100</span>
            <span>Masjid ideal: jamaah ramai, regenerasi berjalan, jangkauan luas.</span>
          </li>
          <li class="cat-item">
            <span class="cat-badge" style="background:#2563eb">Makmur</span>
            <span class="cat-range">65 – 79</span>
            <span>Kondisi baik dengan ruang perbaikan di beberapa dimensi.</span>
          </li>
          <li class="cat-item">
            <span class="cat-badge" style="background:#f59e0b">Cukup Makmur</span>
            <span class="cat-range">50 – 64</span>
            <span>Masih dapat ditingkatkan; perlu perhatian pada dimensi terlemah.</span>
          </li>
          <li class="cat-item">
            <span class="cat-badge" style="background:#ea580c">Kurang Makmur</span>
            <span class="cat-range">35 – 49</span>
            <span>Perlu pembenahan serius pada beberapa dimensi sekaligus.</span>
          </li>
          <li class="cat-item">
            <span class="cat-badge" style="background:#dc2626">Perlu Pembenahan</span>
            <span class="cat-range">0 – 34</span>
            <span>Masalah mendasar; butuh pendampingan intensif &amp; strategi ulang.</span>
          </li>
        </ul>

        <h4>6. Metodologi Ranking Masalah, Kendala, Solusi &amp; Impian</h4>
        <p>
          Untuk pertanyaan <em>checkbox</em> (Q17–Q20), setiap pilihan dihitung
          frekuensinya di seluruh responden, lalu diurutkan dari yang paling
          sering dipilih. Persentase dihitung sebagai:
        </p>
        <div class="formula-box">
          <span class="var">Persentase</span> <span class="op">=</span>
          (<span class="var">Jumlah pemilih opsi</span>
          <span class="op">÷</span> <span class="var">Total responden</span>)
          <span class="op">×</span> <span class="num">100%</span>
        </div>
        <p class="muted">
          Karena satu responden boleh memilih lebih dari satu opsi, total
          persentase bisa melebihi 100% &mdash; ini normal dan menunjukkan
          intensitas pilihan.
        </p>

        <h4>7. Catatan Interpretasi</h4>
        <ul>
          <li>IKM bersifat <strong>komparatif</strong>: bandingkan antar waktu atau antar kelompok masjid, bukan sebagai nilai absolut.</li>
          <li>Bobot dapat disesuaikan dengan konteks wilayah (misalnya vitalitas jamaah lebih dominan di perkotaan).</li>
          <li>Responden yang tidak mengisi pertanyaan tertentu tidak dihitung pada dimensi terkait (<em>missing data handling</em>).</li>
          <li>Untuk validitas lebih tinggi, disarankan minimal <strong>10 responden</strong> per kelompok analisis.</li>
        </ul>

      </div>
    </details>
  `;
}


/* ==================================================
   WARNA GRAFIK
   ================================================== */

const CHART_COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#dc2626",
  "#7c3aed",
  "#0891b2",
  "#db2777",
  "#65a30d",
  "#ea580c",
  "#475569"
];


/* ==================================================
   AMBIL DEFINISI PERTANYAAN
   ================================================== */

function getQuestion(number) {

  return questions.find(
    item => item.number === number
  );

}


/* ==================================================
   HITUNG JAWABAN RADIO
   ================================================== */

function radioCounts(number) {

  const q = getQuestion(number);

  if (!q) {
    return [];
  }


  return q.options.map(option => ({

    label: option,

    value: responses.filter(
      data => data[`q${number}`] === option
    ).length

  }));

}


/* ==================================================
   HITUNG JAWABAN CHECKBOX
   ================================================== */

function checkboxCounts(number) {

  const q = getQuestion(number);
  if (!q) return [];

  /* Normalisasi nilai supaya cocok walau ada spasi / dash berbeda */

  const normalize = s =>
    String(s).trim().replace(/\s+/g, " ");


  return q.options.map(option => {

    const normOption = normalize(option);
    let count = 0;

    responses.forEach(data => {

      const selected = data[`q${number}`];

      if (
        Array.isArray(selected) &&
        selected.some(v => normalize(v) === normOption)
      ) {
        count++;
      }

    });

    return { label: option, value: count };

  });

}


/* ==================================================
   GAMBAR PIE CHART (SVG) — label persen di dalam slice
   ================================================== */

function buildPieSVG(items, options) {

  options = options || {};

  const size =
    options.size || 230;

  const scale =
    size / 200;

  const showAllLabels =
    options.showAllLabels || false;


  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 3;


  const visible =
    items.filter(item => item.value > 0);


  const total =
    visible.reduce((sum, item) => sum + item.value, 0);


  if (total === 0) {
    return "";
  }


  function percentOf(value) {

    const raw = (value / total) * 100;
    const rounded = Math.round(raw);

    if (rounded === 0 && value > 0) {
      return 1;
    }

    return rounded;

  }


  /* Satu kategori -> lingkaran penuh */

  if (visible.length === 1) {

    return `
      <svg
        viewBox="0 0 ${size} ${size}"
        width="${size}"
        height="${size}"
        role="img"
      >
        <circle
          cx="${cx}"
          cy="${cy}"
          r="${r}"
          fill="${visible[0].color}"
        ></circle>

        <text
          x="${cx}"
          y="${cy}"
          text-anchor="middle"
          dominant-baseline="central"
          fill="#ffffff"
          font-weight="700"
          font-size="${15 * scale}"
          font-family="Arial, Helvetica, sans-serif"
        >100%</text>
      </svg>
    `;

  }


  let startAngle = -Math.PI / 2;

  let paths = "";
  let labels = "";


  visible.forEach(item => {

    const angle =
      (item.value / total) * Math.PI * 2;

    const endAngle =
      startAngle + angle;


    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);

    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);

    const largeArc =
      angle > Math.PI ? 1 : 0;


    paths += `
      <path
        d="M ${cx} ${cy}
           L ${x1.toFixed(2)} ${y1.toFixed(2)}
           A ${r} ${r} 0 ${largeArc} 1
             ${x2.toFixed(2)} ${y2.toFixed(2)} Z"
        fill="${item.color}"
        stroke="#ffffff"
        stroke-width="${1.5 * scale}"
      ></path>
    `;


    const midAngle =
      startAngle + angle / 2;


    const labelR =
      angle > Math.PI * 0.65
        ? r * 0.55
        : r * 0.7;


    const lx = cx + labelR * Math.cos(midAngle);
    const ly = cy + labelR * Math.sin(midAngle);


    let fontSize = 0;


    if (showAllLabels) {

      fontSize = 13 * scale;

    } else {

      if (angle > 0.9) {
        fontSize = 16 * scale;
      } else if (angle > 0.5) {
        fontSize = 14.5 * scale;
      } else if (angle > 0.28) {
        fontSize = 12 * scale;
      }

    }


    if (fontSize > 0) {

      labels += `
        <text
          x="${lx.toFixed(2)}"
          y="${ly.toFixed(2)}"
          text-anchor="middle"
          dominant-baseline="central"
          fill="#ffffff"
          font-weight="700"
          font-size="${fontSize}"
          font-family="Arial, Helvetica, sans-serif"
          style="paint-order:stroke;stroke:rgba(0,0,0,0.25);stroke-width:${2 * scale}px;stroke-linejoin:round"
        >${percentOf(item.value)}%</text>
      `;

    }


    startAngle = endAngle;

  });


  return `
    <svg
      viewBox="0 0 ${size} ${size}"
      width="${size}"
      height="${size}"
      role="img"
    >
      ${paths}
      ${labels}
    </svg>
  `;

}


/* ==================================================
   REGISTRY CHART (untuk fullscreen)
   ================================================== */

const chartRegistry = {};
let chartRegistryCounter = 0;


/* ==================================================
   KARTU CHART
   ================================================== */

function buildChartCard(title, counts, note) {

  const filtered =
    counts.filter(item => item.value > 0);


  const items =
    filtered.map((item, index) => ({
      ...item,
      color:
        CHART_COLORS[
          index % CHART_COLORS.length
        ]
    }));


  const total =
    items.reduce((sum, item) => sum + item.value, 0);


  if (total === 0) {

    return `
      <div class="chart-card">
        <h3>${escapeHTML(title)}</h3>
        <div class="chart-empty">Belum ada data</div>
      </div>
    `;

  }


  const chartId =
    "chart-" + (++chartRegistryCounter);

  chartRegistry[chartId] = { title, items };


  const legend =
    items.map(item => `
      <div class="legend-item">
        <span
          class="legend-dot"
          style="background:${item.color}"
        ></span>
        <span class="legend-label">
          ${escapeHTML(item.label)}
        </span>
      </div>
    `).join("");


  return `
    <div class="chart-card">

      <h3>${escapeHTML(title)}</h3>

      ${
        note
          ? `<div class="chart-note">${escapeHTML(note)}</div>`
          : ""
      }

      <div class="chart-body">

        <div
          class="chart-pie"
          onclick="openPieFullscreen('${chartId}')"
          title="Klik untuk memperbesar"
        >
          ${buildPieSVG(items, { size: 230 })}
        </div>

        <div class="chart-legend">
          ${legend}
        </div>

      </div>

    </div>
  `;

}


/* ==================================================
   BUKA FULLSCREEN PIE
   ================================================== */

function openPieFullscreen(chartId) {

  const data = chartRegistry[chartId];

  if (!data) {
    return;
  }


  const overlay =
    document.getElementById("pieOverlay");

  const inner =
    document.getElementById("pieOverlayInner");


  const pieSize =
    Math.min(
      480,
      Math.max(
        320,
        Math.floor(
          Math.min(
            window.innerWidth * 0.8,
            window.innerHeight * 0.62
          )
        )
      )
    );


  const legend =
    data.items.map(item => `
      <div class="legend-item">
        <span
          class="legend-dot"
          style="background:${item.color}"
        ></span>
        <span class="legend-label">
          ${escapeHTML(item.label)}
        </span>
      </div>
    `).join("");


  inner.innerHTML = `

    <button
      type="button"
      class="pie-overlay-close"
      onclick="closePieFullscreen()"
      aria-label="Tutup"
    >&times;</button>

    <h2>${escapeHTML(data.title)}</h2>

    <div class="chart-pie">
      ${buildPieSVG(
        data.items,
        {
          size: pieSize,
          showAllLabels: true
        }
      )}
    </div>

    <div class="pie-overlay-legend">
      ${legend}
    </div>

  `;


  overlay.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* ==================================================
   TUTUP FULLSCREEN PIE
   ================================================== */

function closePieFullscreen(event) {

  if (
    event &&
    event.target.id !== "pieOverlay"
  ) {
    return;
  }


  document
    .getElementById("pieOverlay")
    .classList.remove("active");


  document.body.style.overflow = "";

}


/* Tutup dengan tombol ESC */

document.addEventListener("keydown", function (event) {

  if (event.key !== "Escape") {
    return;
  }

  const overlay =
    document.getElementById("pieOverlay");

  if (overlay && overlay.classList.contains("active")) {
    closePieFullscreen();
  }

});


/* ==================================================
   RENDER SEMUA CHART
   ================================================== */

function renderCharts() {

  const container =
    document.getElementById("chartsContainer");

  if (!container) {
    return;
  }


  container.innerHTML = "";


  if (responses.length === 0) {

    container.innerHTML = `
      <div class="card">
        <div class="empty">
          Belum ada data responden.
          Klik "Tambah Responden" untuk memasukkan data.
        </div>
      </div>
    `;

    return;

  }


  const sections = [

    {
      title: "Profil Responden & Takmir",

      charts: [
        {
          title: "1. Usia Responden",
          counts: radioCounts(1)
        },
        {
          title: "2. Posisi / Amanah dalam Takmir",
          counts: radioCounts(2)
        },
        {
          title: "3. Shalat Berjamaah per Pekan",
          counts: radioCounts(3)
        },
        {
          title: "4a. Usia Ketua Takmir",
          counts: radioCounts(4)
        },
        {
          title: "4b. Rata-rata Usia Pengurus",
          counts: radioCounts(5)
        }
      ]
    },

    {
      title: "5. Jumlah Jamaah per Waktu Shalat",

      note:
        "Rata-rata jumlah jamaah pada setiap waktu shalat.",

      charts: [
        { title: "Shalat Subuh",   counts: radioCounts(6)  },
        { title: "Shalat Zuhur",   counts: radioCounts(7)  },
        { title: "Shalat Ashar",   counts: radioCounts(8)  },
        { title: "Shalat Maghrib", counts: radioCounts(9)  },
        { title: "Shalat Isya",    counts: radioCounts(10) }
      ]
    },

    {
      title: "6 & 7. Jumlah Jamaah Berdasarkan Kelompok Usia",

      charts: [
        {
          title: "6. Anak-anak (< 15 tahun)",
          counts: radioCounts(11)
        },
        {
          title: "7a. Remaja (16–25 tahun)",
          counts: radioCounts(12)
        },
        {
          title: "7b. Dewasa (25–40 tahun)",
          counts: radioCounts(13)
        },
        {
          title: "7c. Usia 40–60 tahun",
          counts: radioCounts(14)
        },
        {
          title: "7d. Lanjut Usia (> 60 tahun)",
          counts: radioCounts(15)
        }
      ]
    },

    {
      title: "8. Cakupan Wilayah Dakwah",

      charts: [
        {
          title: "Wilayah Dakwah (RT / RW / Kampung)",
          counts: radioCounts(16)
        }
      ]
    },

    {
      title: "9 – 12. Problematika, Kendala, Solusi & Impian",

      note:
        "Pertanyaan nomor 17–20 boleh dijawab lebih dari satu, sehingga satu responden dapat menyumbang lebih dari satu pilihan.",

      charts: [
        {
          title: "9. Problematika Masyarakat",
          counts: checkboxCounts(17),
          note: "Responden dapat memilih lebih dari satu jawaban."
        },
        {
          title: "10. Kendala Takmir Masjid",
          counts: checkboxCounts(18),
          note: "Responden dapat memilih lebih dari satu jawaban."
        },
        {
          title: "11. Solusi yang Diharapkan",
          counts: checkboxCounts(19),
          note: "Responden dapat memilih lebih dari satu jawaban."
        },
        {
          title: "12. Impian terhadap Jamaah",
          counts: checkboxCounts(20),
          note: "Responden dapat memilih lebih dari satu jawaban."
        }
      ]
    },

    {
      title: "13. Usia Imam di Masjid Anda",

      charts: [
        {
          title: "13. Usia Imam Termuda",
          counts: radioCounts(21)
        },
        {
          title: "14. Usia Imam Tertua",
          counts: radioCounts(22)
        }
      ]
    }

  ];


  sections.forEach(section => {

    const sectionEl =
      document.createElement("div");

    sectionEl.className = "chart-section";


    const cards =
      section.charts
        .map(chart =>
          buildChartCard(
            chart.title,
            chart.counts,
            chart.note
          )
        )
        .join("");


    sectionEl.innerHTML = `
      <h2>${escapeHTML(section.title)}</h2>

      ${
        section.note
          ? `<p class="section-desc">${escapeHTML(section.note)}</p>`
          : ""
      }

      <div class="chart-grid">
        ${cards}
      </div>
    `;


    container.appendChild(sectionEl);

  });

}


/* ==================================================
   INITIALIZE
   ================================================== */

generateForm();

renderTable();

renderCharts();

/* ==================================================
   IMPORT DARI EXCEL / CSV
   ================================================== */

/*
 * Alias nama kolom yang dikenali di baris pertama file.
 * Kunci = field pada objek response (q1..q20).
 * Nilai = daftar nama yang sudah dinormalisasi (huruf kecil, tanpa simbol).
 */

const COLUMN_ALIASES = {

  namaPeserta: ["namapeserta", "nama", "peserta"],
  namaMasjid:  ["namamasjid", "masjid"],

  q1:  ["q1",  "usiaresponden"],
  q2:  ["q2",  "posisiamanah", "posisi", "amanah"],
  q3:  ["q3",  "shalatpekan", "shalatperpekan"],
  q4:  ["q4",  "usiaketua"],
  q5:  ["q5",  "rataratausiapengurus"],

  q6:  ["q6",  "subuh"],
  q7:  ["q7",  "zuhur"],
  q8:  ["q8",  "ashar"],
  q9:  ["q9",  "maghrib"],
  q10: ["q10", "isya"],

  q11: ["q11", "anakanak"],
  q12: ["q12", "remaja"],
  q13: ["q13", "dewasa"],
  q14: ["q14", "4060tahun", "4060"],
  q15: ["q15", "lanjutusia", "lansia"],

  q16: ["q16", "wilayahdakwah", "wilayah"],

  q17: ["q17", "problematikamasyarakat", "problematika"],
  q18: ["q18", "kendalatakmir", "kendala"],
  q19: ["q19", "solusi"],
  q20: ["q20", "impianjamaah", "impian"],

  /* TAMBAH: */
  q21: ["q21", "usiaimamtermuda", "imamtermuda", "usiatermuda"],
  q22: ["q22", "usiaimamtertua", "imamtertua", "usiatertua"]

};


/* --------------------------------------------------
   Normalisasi nama header
   -------------------------------------------------- */

function normalizeHeader(value) {

  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

}


/* --------------------------------------------------
   Bangun peta header -> index kolom
   -------------------------------------------------- */

function buildHeaderMap(headerRow) {

  const map = {};

  headerRow.forEach((rawHeader, index) => {

    const norm = normalizeHeader(rawHeader);

    if (!norm) {
      return;
    }

    for (const [key, aliases] of Object.entries(COLUMN_ALIASES)) {

      if (aliases.includes(norm)) {
        map[key] = index;
        return;
      }

    }

  });

  return map;

}


/* --------------------------------------------------
   Tombol: buka pemilih file
   -------------------------------------------------- */

function triggerImport() {

  document.getElementById("importFile").click();

}


/* --------------------------------------------------
   Unduh template CSV
   -------------------------------------------------- */

function downloadTemplate() {

  const headers = [
    "Nama Peserta",
    "Nama Masjid",
    "Usia Responden",
    "Posisi/Amanah",
    "Shalat/Pekan",
    "Usia Ketua",
    "Rata-rata Usia Pengurus",
    "Subuh",
    "Zuhur",
    "Ashar",
    "Maghrib",
    "Isya",
    "Anak-anak",
    "Remaja",
    "Dewasa",
    "40–60 Tahun",
    "Lanjut Usia",
    "Wilayah Dakwah",
    "Problematika Masyarakat",
    "Kendala Takmir",
    "Solusi",
    "Impian Jamaah",
    "Usia Imam Termuda",   /* TAMBAH */
    "Usia Imam Tertua"     /* TAMBAH */
  ];

  const example = [
    "Ahmad Fauzi",
    "Masjid Al-Ikhlas",
    "30–40 tahun",
    "Ketua",
    "15–20 kali",
    "40–50 tahun",
    "40–50 tahun",
    "20–30 orang",
    "20–30 orang",
    "20–30 orang",
    "30–40 orang",
    "20–30 orang",
    "5–10 orang",
    "1–5 orang",
    "10–20 orang",
    "10–20 orang",
    "≤ 5 orang",
    "100–200 orang",
    /* PENTING: pakai "|" bukan ";" */
    "Masalah ekonomi|Kenakalan remaja",
    "Minimnya keterlibatan generasi muda",
    "Pelatihan manajemen masjid",
    "Jumlah jamaah semakin bertambah",
    "25–30 tahun",       /* TAMBAH */
    "60–70 tahun"        /* TAMBAH */
  ];


  /* Quote SELALU kalau mengandung karakter berbahaya:
     koma, titik-koma, pipe, petik, atau newline. */

  function csvEscape(cell) {

    const s = String(cell);

    if (/[",;|\n\r]/.test(s)) {
      return '"' + s.replace(/"/g, '""') + '"';
    }

    return s;

  }


  const csvRows =
    [headers, example]
      .map(row => row.map(csvEscape).join(","))
      .join("\r\n");


  const blob = new Blob(
    ["\ufeff" + csvRows],
    { type: "text/csv;charset=utf-8;" }
  );

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "template-kuesioner-masjid.csv";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);

}


/* --------------------------------------------------
   Parser CSV manual (mendukung tanda kutip & delimiter ; )
   -------------------------------------------------- */

function parseCSV(text) {

  if (text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1);
  }


  /* ---------- Deteksi delimiter yang lebih pintar ---------- */
  /* Cek 5 baris pertama, abaikan karakter di dalam tanda kutip */

  const sampleLines =
    text.split(/\r?\n/).slice(0, 5).filter(l => l.trim() !== "");

  let commaCount = 0;
  let semicolonCount = 0;

  sampleLines.forEach(line => {

    let inQuotes = false;

    for (let k = 0; k < line.length; k++) {

      const ch = line[k];

      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (!inQuotes) {
        if (ch === ",") commaCount++;
        else if (ch === ";") semicolonCount++;
      }

    }

  });

  const delimiter =
    semicolonCount > commaCount ? ";" : ",";


  /* ---------- Parsing ---------- */

  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;


  while (i < text.length) {

    const c = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (c === '"' && next === '"') { field += '"'; i += 2; continue; }
      if (c === '"') { inQuotes = false; i++; continue; }
      field += c; i++; continue;
    }

    if (c === '"') { inQuotes = true; i++; continue; }

    if (c === delimiter) {
      row.push(field);
      field = "";
      i++;
      continue;
    }

    if (c === "\r" || c === "\n") {
      if (c === "\r" && next === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      i++;
      continue;
    }

    field += c;
    i++;

  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }


  return rows.filter(r => r.some(c => String(c).trim() !== ""));

}

/* --------------------------------------------------
   Handler pemilihan file
   -------------------------------------------------- */

function handleImportFile(event) {

  const file = event.target.files[0];

  if (!file) {
    return;
  }


  const ext =
    file.name.split(".").pop().toLowerCase();

  const reader = new FileReader();


  reader.onload = function (e) {

    try {

      let rows;


      /* ---------- CSV ---------- */

      if (ext === "csv") {

        rows = parseCSV(e.target.result);

      }


      /* ---------- XLSX / XLS ---------- */

      else if (ext === "xlsx" || ext === "xls") {

        if (typeof XLSX === "undefined") {

          alert(
            "Library pembaca Excel (.xlsx) tidak tersedia.\n\n" +
            "Solusi: simpan file Excel Anda sebagai CSV terlebih dahulu " +
            "(File → Save As → CSV UTF-8), lalu impor kembali file CSV tersebut."
          );

          return;

        }

        const data = new Uint8Array(e.target.result);

        const workbook =
          XLSX.read(data, { type: "array" });

        const sheet =
          workbook.Sheets[workbook.SheetNames[0]];

        rows =
          XLSX.utils.sheet_to_json(
            sheet,
            { header: 1, defval: "" }
          );

      }


      /* ---------- Format lain ---------- */

      else {

        alert(
          "Format file tidak didukung.\n" +
          "Gunakan .csv, .xlsx, atau .xls"
        );

        return;

      }


      processImportRows(rows);

    } catch (err) {

      console.error(err);

      alert("Gagal membaca file: " + err.message);

    } finally {

      /* Reset supaya file yang sama bisa diimport ulang */

      event.target.value = "";

    }

  };


  if (ext === "csv") {
    reader.readAsText(file, "UTF-8");
  } else {
    reader.readAsArrayBuffer(file);
  }

}


/* --------------------------------------------------
   Proses baris hasil pembacaan
   -------------------------------------------------- */

function processImportRows(rows) {

  if (!rows || rows.length < 2) {

    alert(
      "File kosong atau tidak memiliki baris data.\n" +
      "Baris pertama harus berisi nama kolom."
    );

    return;

  }


  const headerRow = rows[0];
  const dataRows = rows.slice(1);


  const headerMap =
    buildHeaderMap(headerRow);


  /* Validasi kolom wajib */

  if (
    headerMap.namaPeserta === undefined ||
    headerMap.namaMasjid === undefined
  ) {

    alert(
      'Kolom "Nama Peserta" dan "Nama Masjid" wajib ada di baris pertama file.\n\n' +
      'Silakan klik tombol "⬇ Template" untuk melihat contoh format yang benar.'
    );

    return;

  }


  const imported = [];
  let skipped = 0;


  dataRows.forEach(row => {

  const namaPeserta =
    String(row[headerMap.namaPeserta] || "").trim();

  const namaMasjid =
    String(row[headerMap.namaMasjid] || "").trim();

  if (!namaPeserta || !namaMasjid) {
    skipped++;
    return;
  }

  const response = {
    id: Date.now() + Math.random(),
    namaPeserta,
    namaMasjid
  };


  /* ---------- Loop DINAMIS mengikuti array `questions` ---------- */

  questions.forEach(item => {

    if (item.type === "section") return;

    const key = "q" + item.number;
    const colIndex = headerMap[key];

    /* Kolom tidak ada di file */
    if (colIndex === undefined) {
      response[key] = item.type === "checkbox" ? [] : "";
      return;
    }

    const raw = String(row[colIndex] || "").trim();


    /* ---------- Checkbox ---------- */
    /* PENTING: menerima "|" DAN ";" sebagai separator
       supaya file lama (yang pakai ";") tetap kompatibel. */

    if (item.type === "checkbox") {

      if (!raw) {
        response[key] = [];
      } else {
        response[key] = raw
          .split(/[|;]/)
          .map(s => s.trim())
          .filter(s => s.length > 0);
      }

      return;

    }


    /* ---------- Radio ---------- */
    response[key] = raw;

  });


  imported.push(response);

});


  if (imported.length === 0) {

    alert(
      "Tidak ada baris valid yang dapat diimpor.\n" +
      "Pastikan kolom Nama Peserta dan Nama Masjid terisi."
    );

    return;

  }


  const confirmed = confirm(

    `Ditemukan ${imported.length} baris valid` +

    (skipped > 0
      ? ` (${skipped} baris dilewati karena tidak lengkap)`
      : "") +

    ".\n\n" +

    "Klik OK untuk MENAMBAHKAN ke data yang sudah ada.\n" +
    "Klik Cancel untuk membatalkan."

  );


  if (!confirmed) {
    return;
  }


  responses = responses.concat(imported);


  localStorage.setItem(
    "kuesionerMasjid",
    JSON.stringify(responses)
  );


  renderTable();
  renderCharts();


  alert(
    `Berhasil mengimpor ${imported.length} responden.\n` +
    `Total data sekarang: ${responses.length} responden.`
  );

}

/* ==================================================
   MODUL ANALISIS OTOMATIS
   ================================================== */

/* ---- Helper: ekstrak angka tengah dari range "20–30 orang" ---- */
function extractMidNumber(value) {
  if (value === undefined || value === null || value === "") return 0;
  const s = String(value);
  if (/tidak\s*ada/i.test(s)) return 0;
  const matches = s.match(/\d+/g);
  if (!matches) return 0;
  const nums = matches.map(Number);
  if (nums.length >= 2) return (nums[0] + nums[1]) / 2;
  return nums[0] || 0;
}

/* ---- Skor linear: nilai / max × 100, dibatasi 0–100 ---- */
function scoreLinear(value, max) {
  const n = extractMidNumber(value);
  if (n <= 0) return 0;
  return Math.min(100, (n / max) * 100);
}

/* ---- Skor kurva usia: ideal di `ideal`, spread = penalti per tahun ---- */
function scoreAge(value, ideal, spread) {
  const age = extractMidNumber(value);
  if (age <= 0) return 0;
  return Math.max(0, 100 - Math.abs(age - ideal) * spread);
}

/* ---- Skor per nomor pertanyaan ---- */
function scoreQuestion(number, value) {
  if (value === undefined || value === null || value === "") return null;
  switch (number) {
    case 6: case 7: case 8: case 9: case 10:
      return scoreLinear(value, 60);      // jamaah / waktu shalat
    case 11: case 13: case 14: case 15:
      return scoreLinear(value, 35);      // kelompok usia jamaah
    case 12:
      return scoreLinear(value, 20);      // remaja
    case 16:
      return scoreLinear(value, 500);     // wilayah dakwah
    case 3:
      return scoreLinear(value, 30);      // frekuensi shalat
    case 4: case 5:
      return scoreAge(value, 42, 2.4);    // usia kepemimpinan ideal ~42
    case 21:
      return scoreAge(value, 27, 2.8);    // imam termuda ideal ~27
    case 22:
      return scoreAge(value, 45, 1.8);    // imam tertua ideal ~45
  }
  return null;
}

/* ---- Hitung IKM per responden ---- */
function calculateIKM(response) {
  const avg = arr => arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : 0;

  const vitalitas = [6,7,8,9,10]
    .map(n => scoreQuestion(n, response["q"+n]))
    .filter(s => s !== null);

  const usia = [11,12,13,14,15]
    .map(n => scoreQuestion(n, response["q"+n]))
    .filter(s => s !== null);

  const kepemimpinan = [4,5,21,22]
    .map(n => scoreQuestion(n, response["q"+n]))
    .filter(s => s !== null);

  const jangkauan    = scoreQuestion(16, response.q16) ?? 0;
  const partisipasi  = scoreQuestion(3,  response.q3)  ?? 0;

  const parts = {
    vitalitas:    avg(vitalitas),
    usia:         avg(usia),
    kepemimpinan: avg(kepemimpinan),
    jangkauan:    jangkauan,
    partisipasi:  partisipasi
  };

  const weights = {
    vitalitas: 0.35, usia: 0.20,
    kepemimpinan: 0.20, jangkauan: 0.15, partisipasi: 0.10
  };

  let total = 0;
  for (const k in weights) total += parts[k] * weights[k];

  return { total: Math.round(total), parts };
}

/* ---- Kategori IKM ---- */
function kategoriIKM(score) {
  if (score >= 80) return { label: "Sangat Makmur",     color: "#16a34a" };
  if (score >= 65) return { label: "Makmur",            color: "#2563eb" };
  if (score >= 50) return { label: "Cukup Makmur",      color: "#f59e0b" };
  if (score >= 35) return { label: "Kurang Makmur",     color: "#ea580c" };
  return              { label: "Perlu Pembenahan", color: "#dc2626" };
}

/* ---- Rata-rata IKM semua responden ---- */
function averageIKM() {
  if (responses.length === 0) return null;
  const scores = responses.map(r => calculateIKM(r).total);
  return Math.round(scores.reduce((a,b)=>a+b,0) / scores.length);
}

/* ---- Ranking jawaban checkbox (top N) ---- */
function rankCheckbox(number, topN) {
  topN = topN || 5;
  return checkboxCounts(number)
    .filter(item => item.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, topN);
}

/* ---- Gauge SVG setengah lingkaran ---- */
function buildGaugeSVG(score, size) {
  size = size || 200;
  const strokeW = 14;
  const r  = size / 2 - strokeW;
  const cx = size / 2;
  const cy = size / 2 + 4;

  const angleFor = pct => Math.PI + (pct / 100) * Math.PI;

  const pt = a => ({
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a)
  });

  const start = pt(Math.PI);
  const end   = pt(2 * Math.PI);
  const cur   = pt(angleFor(score));

  const largeArc = score > 50 ? 1 : 0;

  return `
    <svg viewBox="0 0 ${size} ${size * 0.62}"
         width="${size}" height="${size * 0.62}"
         style="display:block;margin:0 auto">
      <path d="M ${start.x} ${start.y}
               A ${r} ${r} 0 0 1 ${end.x} ${end.y}"
            fill="none" stroke="rgba(255,255,255,0.22)"
            stroke-width="${strokeW}" stroke-linecap="round"/>
      ${score > 0 ? `
      <path d="M ${start.x} ${start.y}
               A ${r} ${r} 0 ${largeArc} 1 ${cur.x} ${cur.y}"
            fill="none" stroke="white"
            stroke-width="${strokeW}" stroke-linecap="round"/>` : ""}
    </svg>
  `;
}

/* ---- Render kartu ranking (checkbox) ---- */
function buildRankCard(title, icon, counts, cssClass) {
  const totalResp = responses.length;

  if (counts.length === 0) {
    return `
      <div class="insight-card ${cssClass}">
        <h3>${icon} ${escapeHTML(title)}</h3>
        <div class="rank-empty">Belum ada data</div>
      </div>`;
  }

  const list = counts.map((item, i) => {
    const pct = totalResp
      ? Math.round((item.value / totalResp) * 100)
      : 0;
    return `
      <li class="rank-item">
        <span class="rank-num">${i + 1}</span>
        <span class="rank-text">${escapeHTML(item.label)}</span>
        <span class="rank-meta">${item.value}× · ${pct}%</span>
      </li>`;
  }).join("");

  return `
    <div class="insight-card ${cssClass}">
      <h3>${icon} ${escapeHTML(title)}</h3>
      <ul class="rank-list">${list}</ul>
    </div>`;
}

/* ---- Render seluruh panel analisis ---- */
function renderAnalysis() {
  const container = document.getElementById("analysisContainer");
  if (!container) return;

  if (responses.length === 0) {
    container.innerHTML = "";
    return;
  }

  const ikm = averageIKM();
  const kat = kategoriIKM(ikm);

  /* Agregasi komponen rata-rata untuk breakdown */
  const allParts = responses.map(r => calculateIKM(r).parts);
  const avgPart = key =>
    Math.round(allParts.reduce((s, p) => s + p[key], 0) / allParts.length);

  const parts = {
    "Vitalitas Jamaah":       avgPart("vitalitas"),
    "Keseimbangan Usia":      avgPart("usia"),
    "Regenerasi Kepemimpinan":avgPart("kepemimpinan"),
    "Jangkauan Dakwah":       avgPart("jangkauan"),
    "Partisipasi Aktif":      avgPart("partisipasi")
  };

  const breakdownHTML = Object.entries(parts).map(([label, val]) => `
    <div class="ikm-comp">
      <span class="ikm-comp-label">${label}</span>
      <span class="ikm-comp-bar">
        <span class="ikm-comp-fill" style="width:${val}%"></span>
      </span>
      <span class="ikm-comp-val">${val}</span>
    </div>`).join("");

  const problemTop    = rankCheckbox(17, 5);
  const constraintTop = rankCheckbox(18, 5);
  const solutionTop   = rankCheckbox(19, 5);
  const dreamTop      = rankCheckbox(20, 5);

  container.innerHTML = `
    <div class="analysis-section">

      <h2 style="margin:0 0 8px;padding-left:12px;font-size:21px;border-left:5px solid #2563eb">
        Ringkasan Analisis
      </h2>
      <p class="section-desc" style="margin-left:17px">
        Dihitung otomatis dari ${responses.length} responden berdasarkan formula
        Indeks Kemakmuran Masjid (IKM) berbobot 5 dimensi.
      </p>

      <div class="analysis-hero">

        <div class="ikm-card">
          <h3>Indeks Kemakmuran Masjid</h3>

          ${buildGaugeSVG(ikm, 210)}

          <div class="ikm-score" style="margin-top:-30px">${ikm}</div>
          <div class="ikm-score-label">dari 100</div>

          <div class="ikm-category" style="background:${kat.color}">
            ${kat.label}
          </div>

          <div class="ikm-breakdown">${breakdownHTML}</div>
        </div>

        <div class="insight-grid">
          ${buildRankCard("Masalah Terbesar Masyarakat", "🔴", problemTop,    "problem")}
          ${buildRankCard("Kendala Terbesar Takmir",     "🟠", constraintTop, "constraint")}
          ${buildRankCard("Solusi Prioritas",            "🟢", solutionTop,   "solution")}
          ${buildRankCard("Impian Utama Jamaah & Takmir","🟣", dreamTop,      "dream")}
        </div>

      </div>

      ${buildMethodologyHTML()}
    </div>
  `;
}

/* ---- Panggil renderAnalysis dari renderCharts ---- */
const _originalRenderCharts = renderCharts;
renderCharts = function () {
  _originalRenderCharts();
  renderAnalysis();
};