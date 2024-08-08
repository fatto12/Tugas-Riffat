function showInfo() {
    const topic = document.getElementById('topic').value.trim().toLowerCase();
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output

    if (topic === 'iq') {
        output.innerHTML = `
            <p class="blue">1. Faktor-faktor yang mempengaruhi tingkatan IQ:</p>
            <p>- Genetik</p>
            <p>- Lingkungan</p>
            <p>- Kesehatan</p>
            <p>- Pengalaman Sosial</p>
            <p>- Faktor Ekonomi</p>
            <hr>
            <p class="blue">2. Cara meningkatkan IQ:</p>
            <p>- Pendidikan</p>
            <p>- Stimulasi Kognitif</p>
            <p>- Gaya Hidup Sehat</p>
            <p>- Sosialisasi</p>
            <p>- Mengembangkan Hobi</p>
        `;
    } else if (topic === 'sq') {
        output.innerHTML = `
            <p class="green">1. Keterampilan emosional yang harus dikuasai:</p>
            <p>- Kesadaran Diri</p>
            <p>- Pengaturan Diri</p>
            <p>- Empati</p>
            <p>- Keterampilan Sosial</p>
            <p>- Motivasi Diri</p>
            <hr>
            <p class="green">2. Cara meregulasi keterampilan emosional:</p>
            <p>- Mindfulness</p>
            <p>- Refleksi Diri</p>
            <p>- Mengelola Stres</p>
            <p>- Komunikasi Efektif</p>
            <p>- Pengendalian Impuls</p>
            <hr>
            <p class="red">3. Hal yang tidak boleh dilakukan (berkaitan dengan emosi orang lain):</p>
            <p>- Mengabaikan Perasaan Orang Lain</p>
            <p>- Menghakimi</p>
            <p>- Manipulasi Emosional</p>
            <p>- Kurang Empati</p>
            <p>- Menyepelekan Perasaan</p>
        `;
    } else {
        output.innerHTML = `<p>Topik yang Anda masukkan tidak dikenal.</p>`;
    }
}
