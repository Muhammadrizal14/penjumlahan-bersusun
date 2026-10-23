/* =====================================================
   Misi Penjumlahan Kelas 2 SD
   SCRIPT.JS LENGKAP
===================================================== */


/* =====================================================
   DATA GAME
===================================================== */

let level = 1;
let nomor = 0;
let skor = 0;

let musikAktif = true;

let soal = [];


/* =====================================================
   DATA SOAL
===================================================== */

const dataSoal = {

    /* -------------------------------------
       MISI 1
       Tanpa menyimpan
    ------------------------------------- */

    1: [

        { a: 23, b: 14 },
        { a: 31, b: 26 },
        { a: 42, b: 15 },
        { a: 53, b: 24 },

    ],


    /* -------------------------------------
       MISI 2
       Dengan menyimpan
    ------------------------------------- */

    2: [

        { a: 27, b: 18 },
        { a: 36, b: 25 },
        { a: 68, b: 77 },
        { a: 89, b: 64 },
        { a: 77, b: 98 },

    ],


    /* -------------------------------------
       MISI 3
       Tantangan
    ------------------------------------- */

    3: [

        { a: 123, b: 231 },
        { a: 345, b: 456 },
        { a: 234, b: 11 },
        { a: 100, b: 26 },

    ]

};


/* =====================================================
   AUDIO
===================================================== */

const backgroundMusic =
    document.getElementById(
        "backgroundMusic"
    );


const suaraBenarAudio =
    document.getElementById(
        "suaraBenar"
    );


const suaraSalahAudio =
    document.getElementById(
        "suaraSalah"
    );


/* Volume background */

if (backgroundMusic) {

    backgroundMusic.volume = 0.25;

}


/* =====================================================
   MULAI BACKGROUND MUSIC
===================================================== */

function mulaiMusik() {

    if (!musikAktif) return;

    if (!backgroundMusic) return;


    backgroundMusic.volume = 0.25;


    backgroundMusic.play()
        .catch(function() {

            console.log(
                "Musik menunggu interaksi pengguna."
            );

        });

}


/* =====================================================
   SUARA JAWABAN BENAR
===================================================== */

function mainkanSuaraBenar() {

    if (!musikAktif) return;

    if (!suaraBenarAudio) return;


    suaraBenarAudio.currentTime = 0;

    suaraBenarAudio.volume = 0.8;


    suaraBenarAudio.play()
        .catch(function() {

            console.log(
                "Suara benar tidak dapat dimainkan."
            );

        });

}


/* =====================================================
   SUARA JAWABAN SALAH
===================================================== */

function mainkanSuaraSalah() {

    if (!musikAktif) return;

    if (!suaraSalahAudio) return;


    suaraSalahAudio.currentTime = 0;

    suaraSalahAudio.volume = 0.8;


    suaraSalahAudio.play()
        .catch(function() {

            console.log(
                "Suara salah tidak dapat dimainkan."
            );

        });

}


/* =====================================================
   TOGGLE MUSIK
===================================================== */

function toggleMusic() {

    if (!backgroundMusic) return;


    const tombol =
        document.querySelector(
            ".music-btn"
        );


    if (musikAktif) {

        backgroundMusic.pause();

        musikAktif = false;


        if (tombol) {

            tombol.innerText = "🔇";

        }

    }

    else {

        musikAktif = true;


        backgroundMusic.volume =
            0.25;


        backgroundMusic.play()
            .catch(function() {});


        if (tombol) {

            tombol.innerText = "🔊";

        }

    }

}


/* =====================================================
   MEMULAI MUSIK SETELAH KLIK PERTAMA
===================================================== */

document.addEventListener(
    "click",
    function mulaiMusikPertama() {

        mulaiMusik();

    },
    {
        once: true
    }
);


/* =====================================================
   NAVIGASI
===================================================== */

function sembunyikanSemua() {

    document
        .querySelectorAll(
            "main, section"
        )
        .forEach(function(element) {

            element.classList.add(
                "hidden"
            );

        });

}


/* =====================================================
   MENU UTAMA
===================================================== */

function kembaliMenu() {

    sembunyikanSemua();


    document
        .getElementById("menu")
        .classList.remove(
            "hidden"
        );

}


function mulaiBelajar() {

    sembunyikanSemua();


    document
        .getElementById("belajar")
        .classList.remove(
            "hidden"
        );

}


function pilihLevel() {

    sembunyikanSemua();


    document
        .getElementById("level")
        .classList.remove(
            "hidden"
        );

}


function petunjuk() {

    sembunyikanSemua();


    document
        .getElementById("petunjuk")
        .classList.remove(
            "hidden"
        );

}


/* =====================================================
   MEMULAI LEVEL
===================================================== */

function mulaiLevel(lvl) {

    level = lvl;

    nomor = 0;

    skor = 0;

    soal = dataSoal[level];


    sembunyikanSemua();


    document
        .getElementById("permainan")
        .classList.remove(
            "hidden"
        );


    tampilkanSoal();

}


/* =====================================================
   MENAMPILKAN SOAL
===================================================== */

function tampilkanSoal() {

    const data =
        soal[nomor];


    /* -------------------------------------
       Puluhan dan satuan
    ------------------------------------- */

    const puluhan1 =
        Math.floor(
            data.a / 10
        );


    const satuan1 =
        data.a % 10;


    const puluhan2 =
        Math.floor(
            data.b / 10
        );


    const satuan2 =
        data.b % 10;


    /* -------------------------------------
       Level
    ------------------------------------- */

    const levelText =
        document.getElementById(
            "levelText"
        );


    if (levelText) {

        levelText.innerText =
            "Misi " + level;

    }


    /* -------------------------------------
       Nomor soal
    ------------------------------------- */

    const nomorSoal =
        document.getElementById(
            "nomorSoal"
        );


    if (nomorSoal) {

        nomorSoal.innerText =
            "Soal " +
            (nomor + 1) +
            " dari " +
            soal.length;

    }


    /* -------------------------------------
       Skor
    ------------------------------------- */

    const skorElement =
        document.getElementById(
            "skor"
        );


    if (skorElement) {

        skorElement.innerText =
            skor;

    }


    const bintang =
        document.getElementById(
            "bintangGlobal"
        );


    if (bintang) {

        bintang.innerText =
            skor;

    }


    /* -------------------------------------
       ANGKA SOAL
    ------------------------------------- */

    setText(
        "puluhan1",
        puluhan1
    );


    setText(
        "satuan1",
        satuan1
    );


    setText(
        "puluhan2",
        puluhan2
    );


    setText(
        "satuan2",
        satuan2
    );


    /* -------------------------------------
       Angka simpan
    ------------------------------------- */

    setText(
        "angkaSimpan",
        ""
    );


    /* -------------------------------------
       Input jawaban
    ------------------------------------- */

    const input =
        document.getElementById(
            "jawaban"
        );


    if (input) {

        input.value = "";

        input.focus();

    }


    /* -------------------------------------
       Feedback
    ------------------------------------- */

    tampilkanFeedback(

        "💡",

        "Ayo Berhitung!",

        "Hitung mulai dari angka satuan.",

        "petunjuk"

    );


    /* -------------------------------------
       Karakter
    ------------------------------------- */

    setText(
        "pesanKarakter",
        "Yuk, hitung mulai dari satuan! 😊"
    );


    animasiSoal();

}


/* =====================================================
   FUNGSI SET TEXT
===================================================== */

function setText(
    id,
    text
) {

    const element =
        document.getElementById(id);


    if (element) {

        element.innerText =
            text;

    }

}


/* =====================================================
   ANIMASI SOAL
===================================================== */

function animasiSoal() {

    const soalBox =
        document.querySelector(
            ".kertas-soal"
        );


    if (!soalBox) return;


    soalBox.style.animation =
        "none";


    void soalBox.offsetWidth;


    soalBox.style.animation =
        "masuk 0.5s ease";

}


/* =====================================================
   MEMERIKSA JAWABAN
===================================================== */

function periksaJawaban() {

    const input =
        document.getElementById(
            "jawaban"
        );


    if (!input) return;


    const nilaiInput =
        input.value.trim();


    /* -------------------------------------
       Belum mengisi
    ------------------------------------- */

    if (nilaiInput === "") {

        tampilkanFeedback(

            "💡",

            "Belum diisi",

            "Ayo tuliskan jawabanmu terlebih dahulu!",

            "petunjuk"

        );


        setText(
            "pesanKarakter",
            "Ayo, isi jawabannya dulu 😊"
        );


        return;

    }


    const jawaban =
        Number(
            nilaiInput
        );


    const data =
        soal[nomor];


    const hasil =
        data.a + data.b;


    /* =====================================
       JAWABAN BENAR
    ===================================== */

    if (jawaban === hasil) {

        mainkanSuaraBenar();


        skor++;


        setText(
            "skor",
            skor
        );


        setText(
            "bintangGlobal",
            skor
        );


        tampilkanFeedback(

            "🎉",

            "Hebat! Jawabanmu benar!",

            feedbackBenar(data),

            "benar"

        );


        setText(

            "pesanKarakter",

            "Yeay! Kamu berhasil! ⭐"

        );


        animasiBenar();


        buatConfetti();


        /*
           Mengunci input sementara
        */

        input.disabled = true;


        setTimeout(function() {

            input.disabled = false;

            nomor++;


            if (
                nomor <
                soal.length
            ) {

                tampilkanSoal();

            }

            else {

                selesaiLevel();

            }

        }, 2200);

    }


    /* =====================================
       JAWABAN SALAH
    ===================================== */

    else {

        mainkanSuaraSalah();


        tampilkanFeedback(

            "🤔",

            "Belum tepat",

            feedbackSalah(data),

            "salah"

        );


        setText(

            "pesanKarakter",

            "Tidak apa-apa! Coba lagi 😊"

        );


        animasiSalah();

    }

}


/* =====================================================
   FEEDBACK BENAR
===================================================== */

function feedbackBenar(data) {

    const satuan1 =
        data.a % 10;


    const satuan2 =
        data.b % 10;


    const hasilSatuan =
        satuan1 + satuan2;


    /* -------------------------------------
       Teknik menyimpan
    ------------------------------------- */

    if (
        hasilSatuan >= 10
    ) {

        const angkaSatuan =
            hasilSatuan % 10;


        return (

            satuan1 +
            " + " +
            satuan2 +
            " = " +
            hasilSatuan +
            ". " +

            "Kamu menulis " +
            angkaSatuan +
            " di satuan dan menyimpan 1 ke puluhan. ⭐"

        );

    }


    /* -------------------------------------
       Tanpa menyimpan
    ------------------------------------- */

    return (

        data.a +
        " + " +
        data.b +
        " = " +
        (data.a + data.b) +
        ". Hebat, kamu menghitungnya dengan tepat! 🌟"

    );

}


/* =====================================================
   FEEDBACK SALAH
===================================================== */

function feedbackSalah(data) {

    const satuan1 =
        data.a % 10;


    const satuan2 =
        data.b % 10;


    const hasilSatuan =
        satuan1 + satuan2;


    /* -------------------------------------
       Jika membutuhkan menyimpan
    ------------------------------------- */

    if (
        hasilSatuan >= 10
    ) {

        const angkaSatuan =
            hasilSatuan % 10;


        return (

            "Coba periksa bagian satuan. " +

            satuan1 +
            " + " +
            satuan2 +
            " = " +
            hasilSatuan +
            ". " +

            "Tulis " +
            angkaSatuan +
            " di satuan dan jangan lupa menyimpan 1 ke puluhan. 💡"

        );

    }


    /* -------------------------------------
       Tanpa menyimpan
    ------------------------------------- */

    return (

        "Coba hitung lagi mulai dari satuan. " +

        satuan1 +
        " + " +
        satuan2 +
        " = ? " +

        "Perhatikan posisi puluhan dan satuan. 😊"

    );

}


/* =====================================================
   TAMPILKAN FEEDBACK
===================================================== */

function tampilkanFeedback(
    icon,
    judul,
    pesan,
    tipe
) {

    setText(
        "feedbackIcon",
        icon
    );


    setText(
        "feedbackTitle",
        judul
    );


    setText(
        "feedback",
        pesan
    );


    const box =
        document.getElementById(
            "feedbackBox"
        );


    if (!box) return;


    box.classList.remove(

        "feedback-benar",

        "feedback-salah",

        "feedback-petunjuk"

    );


    box.classList.add(

        "feedback-" +
        tipe

    );

}


/* =====================================================
   ANIMASI BENAR
===================================================== */

function animasiBenar() {

    const karakter =
        document.querySelector(
            ".karakter-game"
        );


    if (!karakter) return;


    karakter.style.animation =
        "none";


    void karakter.offsetWidth;


    karakter.style.animation =
        "lompat 0.5s ease 3";

}


/* =====================================================
   ANIMASI SALAH
===================================================== */

function animasiSalah() {

    const input =
        document.getElementById(
            "jawaban"
        );


    if (!input) return;


    input.animate(

        [

            {
                transform:
                    "translateX(0)"
            },

            {
                transform:
                    "translateX(-10px)"
            },

            {
                transform:
                    "translateX(10px)"
            },

            {
                transform:
                    "translateX(-10px)"
            },

            {
                transform:
                    "translateX(0)"
            }

        ],

        {

            duration: 400

        }

    );

}


/* =====================================================
   KONFETI
===================================================== */

function buatConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );


    if (!container) return;


    container.innerHTML = "";


    const warna = [

        "#ff595e",
        "#ffca3a",
        "#8ac926",
        "#1982c4",
        "#6a4c93"

    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.classList.add(
            "confetti-piece"
        );


        piece.style.left =
            Math.random() *
            100 +
            "%";


        piece.style.background =
            warna[
                Math.floor(
                    Math.random() *
                    warna.length
                )
            ];


        piece.style.animationDelay =
            Math.random() *
            0.5 +
            "s";


        container.appendChild(
            piece
        );

    }


    setTimeout(function() {

        container.innerHTML = "";

    }, 2500);

}


/* =====================================================
   SELESAI LEVEL
===================================================== */

function selesaiLevel() {

    sembunyikanSemua();


    const halaman =
        document.getElementById(
            "skorHalaman"
        );


    if (halaman) {

        halaman.classList.remove(
            "hidden"
        );

    }


    setText(
        "totalBintang",
        skor
    );


    let bintang = "";


    for (
        let i = 0;
        i < skor;
        i++
    ) {

        bintang += "⭐";

    }


    setText(
        "bintangHasil",
        bintang
    );


    /* -------------------------------------
       Pesan hasil
    ------------------------------------- */

    if (skor === soal.length) {

        setText(

            "pesanSkor",

            "🏆 Sempurna! Kamu adalah Master Penjumlahan!"

        );


        buatConfetti();

    }

    else if (
        skor >= Math.ceil(
            soal.length * 0.8
        )
    ) {

        setText(

            "pesanSkor",

            "🌟 Hebat sekali! Hasil belajarmu sangat bagus!"

        );

    }

    else if (
        skor >= Math.ceil(
            soal.length * 0.6
        )
    ) {

        setText(

            "pesanSkor",

            "👏 Bagus! Terus berlatih agar semakin hebat!"

        );

    }

    else {

        setText(

            "pesanSkor",

            "💪 Jangan menyerah! Ayo berlatih lagi!"

        );

    }

}


/* =====================================================
   LIHAT SKOR
===================================================== */

function lihatSkor() {

    sembunyikanSemua();


    const halaman =
        document.getElementById(
            "skorHalaman"
        );


    if (halaman) {

        halaman.classList.remove(
            "hidden"
        );

    }


    setText(
        "totalBintang",
        skor
    );


    let bintang = "";


    for (
        let i = 0;
        i < skor;
        i++
    ) {

        bintang += "⭐";

    }


    setText(
        "bintangHasil",
        bintang
    );

}


/* =====================================================
   TOMBOL ENTER
===================================================== */

function tekanEnter(event) {

    if (
        event.key === "Enter"
    ) {

        periksaJawaban();

    }

}


/* =====================================================
   AKTIFKAN ENTER PADA INPUT
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById(
                "jawaban"
            );


        if (input) {

            input.addEventListener(
                "keydown",
                tekanEnter
            );

        }

    }
);


/* =====================================================
   SELESAI
===================================================== */

/* =====================================================
   GAME TAMBAHAN: TANGKAP ANGKA
===================================================== */
(() => {
    const soalTangkap=[
        {a:23,b:14},{a:27,b:18},{a:36,b:25},{a:46,b:27},{a:58,b:16}
    ];
    let nomor=0,skor=0,nyawa=3,posisi=50,aktif=false,raf=null,timeout=null,sudah=false;
    const el=id=>document.getElementById(id);

    window.bukaTangkapAngka=function(){
        document.querySelectorAll(".halaman").forEach(x=>x.classList.add("hidden"));
        el("gameTangkapAngka").classList.remove("hidden");
        resetTangkap();
    };

    window.kembaliDariTangkap=function(){
        stopTangkap();
        if(typeof kembaliMenu==="function") kembaliMenu();
        else{
            document.querySelectorAll(".halaman").forEach(x=>x.classList.add("hidden"));
            if(el("menu")) el("menu").classList.remove("hidden");
        }
    };

    function resetTangkap(){
        stopTangkap();nomor=0;skor=0;nyawa=3;posisi=50;aktif=false;
        el("skorTangkap").textContent=0;el("nyawaTangkap").textContent=3;el("nomorTangkap").textContent=1;
        el("soalTangkap").textContent="23 + 14 = ?";
        el("feedbackTangkap").textContent="Tekan Mulai Game untuk bermain!";
        el("mulaiTangkapBtn").classList.remove("hidden");el("ulangTangkapBtn").classList.add("hidden");
        gerakBasket();resetBola();
    }

    window.mulaiTangkapAngka=function(){
        stopTangkap();nomor=0;skor=0;nyawa=3;posisi=50;aktif=true;
        el("skorTangkap").textContent=0;el("nyawaTangkap").textContent=3;
        el("mulaiTangkapBtn").classList.add("hidden");el("ulangTangkapBtn").classList.add("hidden");
        if(typeof mulaiMusik==="function") mulaiMusik();
        tampilSoal();
    };

    function nilaiSalah(benar){
        let n;
        do{n=benar+Math.floor(Math.random()*15)-7}while(n===benar||n<0);
        return n;
    }

    function tampilSoal(){
        if(!aktif)return;
        if(nomor>=soalTangkap.length){selesaiTangkap(true);return;}
        const s=soalTangkap[nomor],benar=s.a+s.b;
        el("nomorTangkap").textContent=nomor+1;
        el("soalTangkap").textContent=`${s.a} + ${s.b} = ?`;
        el("feedbackTangkap").textContent="Gerakkan keranjang dan tangkap jawaban yang benar!";
        jatuhkanAngka(benar);
    }

    function jatuhkanAngka(benar){
        resetBola();sudah=false;
        const nilai=[benar,nilaiSalah(benar),nilaiSalah(benar)].sort(()=>Math.random()-.5);
        const bola=[el("angkaJatuh1"),el("angkaJatuh2"),el("angkaJatuh3")];
        bola.forEach((b,i)=>{
            b.textContent=nilai[i];b.dataset.nilai=nilai[i];b.style.display="flex";
            b.style.left=(16+i*32)+"%";b.style.top="-60px";b.classList.remove("jatuh-aktif");
        });
        requestAnimationFrame(()=>bola.forEach(b=>b.classList.add("jatuh-aktif")));
        timeout=setTimeout(()=>{
            if(!aktif||sudah)return;
            nyawa--;el("nyawaTangkap").textContent=nyawa;
            if(nyawa<=0)selesaiTangkap(false);
            else{nomor++;el("feedbackTangkap").textContent="💨 Belum tertangkap. Coba lagi!";setTimeout(tampilSoal,650);}
        },4200);
        cekTabrakan(benar);
    }

    function cekTabrakan(benar){
        cancelAnimationFrame(raf);
        const loop=()=>{
            if(!aktif||sudah)return;
            const k=el("keranjangTangkap").getBoundingClientRect();
            [el("angkaJatuh1"),el("angkaJatuh2"),el("angkaJatuh3")].forEach(b=>{
                if(b.style.display==="none")return;
                const r=b.getBoundingClientRect();
                if(r.bottom>=k.top&&r.top<=k.bottom&&r.right>=k.left&&r.left<=k.right){
                    Number(b.dataset.nilai)===benar?benarTangkap(b):salahTangkap(b);
                }
            });
            raf=requestAnimationFrame(loop);
        };
        raf=requestAnimationFrame(loop);
    }

    function benarTangkap(b){
        sudah=true;aktif=false;cancelAnimationFrame(raf);clearTimeout(timeout);
        if(typeof mainkanSuaraBenar==="function")mainkanSuaraBenar();
        skor++;el("skorTangkap").textContent=skor;el("feedbackTangkap").textContent="🎉 Benar! Hebat!";
        b.style.display="none";el("keranjangTangkap").classList.add("keranjang-menang");
        if(typeof buatConfetti==="function")buatConfetti();
        setTimeout(()=>{
            el("keranjangTangkap").classList.remove("keranjang-menang");nomor++;
            if(nomor>=soalTangkap.length)selesaiTangkap(true);else{aktif=true;tampilSoal();}
        },1100);
    }

    function salahTangkap(b){
        if(sudah)return;sudah=true;aktif=false;cancelAnimationFrame(raf);clearTimeout(timeout);
        if(typeof mainkanSuaraSalah==="function")mainkanSuaraSalah();
        nyawa--;el("nyawaTangkap").textContent=nyawa;b.style.display="none";
        el("feedbackTangkap").textContent="❌ Bukan itu. Hitung lagi!";
        setTimeout(()=>{if(nyawa<=0)selesaiTangkap(false);else{nomor++;aktif=true;tampilSoal();}},850);
    }

    function selesaiTangkap(menang){
        stopTangkap();
        el("soalTangkap").textContent=menang?"🏆 Permainan Selesai!":"💪 Coba Lagi!";
        el("feedbackTangkap").textContent=menang?`Hebat! Kamu mendapatkan ${skor} ⭐ dari 5 soal.`:`Kamu mendapatkan ${skor} ⭐. Ayo coba lagi!`;
        el("ulangTangkapBtn").classList.remove("hidden");
        if(menang&&typeof buatConfetti==="function")buatConfetti();
    }

    function stopTangkap(){aktif=false;cancelAnimationFrame(raf);clearTimeout(timeout);raf=null;}

    function resetBola(){
        [1,2,3].forEach(i=>{const b=el("angkaJatuh"+i);if(b){b.style.display="none";b.classList.remove("jatuh-aktif");}});
    }

    function gerakBasket(){const b=el("keranjangTangkap");if(b)b.style.left=posisi+"%";}

    window.gerakKeranjangTangkap=function(arah){
        if(!aktif)return;
        posisi+=arah==="kiri"?-8:8;
        posisi=Math.max(7,Math.min(93,posisi));
        gerakBasket();
    };

    document.addEventListener("keydown",e=>{
        if(!aktif)return;
        if(e.key==="ArrowLeft"){e.preventDefault();gerakKeranjangTangkap("kiri");}
        if(e.key==="ArrowRight"){e.preventDefault();gerakKeranjangTangkap("kanan");}
    });
})();
