document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const hash = a.getAttribute('href');
            if (hash.length > 1) {
                e.preventDefault();
                const target = document.querySelector(hash);
                if (target) {
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    function onScrollHeader() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    onScrollHeader();
    window.addEventListener('scroll', onScrollHeader);


    function heroParallax() {
        if (!hero) return;
        const scrolled = window.pageYOffset;

        hero.style.backgroundPosition = `center ${Math.max(0, -scrolled * 0.2 + 20)}px`;
    }
    heroParallax();
    window.addEventListener('scroll', heroParallax);


    const revealElems = document.querySelectorAll('.feature-card, .testimonial, .about-image, .contact-form');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });



        container.innerHTML = '';
        container.appendChild(track);

        let idx = 0;

        function show(index) {
            const width = container.clientWidth;
            track.style.transform = `translateX(-${index * width}px)`;
        }

        let autoplay = setInterval(() => {
            idx = (idx + 1) % items.length;
            show(idx);
        }, 4500);


        container.addEventListener('mouseenter', () => clearInterval(autoplay));
        container.addEventListener('mouseleave', () => {
            autoplay = setInterval(() => {
                idx = (idx + 1) % items.length;
                show(idx);
            }, 4500);
        });


        window.addEventListener('resize', () => show(idx));
    })();


    document.querySelectorAll('.btn, .submit-btn').forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const circle = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            circle.style.width = circle.style.height = size + 'px';
            circle.style.position = 'absolute';
            circle.style.left = e.clientX - rect.left - size / 2 + 'px';
            circle.style.top = e.clientY - rect.top - size / 2 + 'px';
            circle.style.borderRadius = '50%';
            circle.style.transform = 'scale(0)';
            circle.style.opacity = '0.25';
            circle.style.background = 'rgba(255,255,255,0.6)';
            circle.style.pointerEvents = 'none';
            circle.style.transition = 'transform 600ms ease, opacity 600ms ease';
            this.appendChild(circle);
            requestAnimationFrame(() => circle.style.transform = 'scale(1)');
            setTimeout(() => {
                circle.style.opacity = '0';
            }, 400);
            setTimeout(() => circle.remove(), 900);
        });
    });


    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.querySelector('#name');
            const phone = form.querySelector('#phone');
            const email = form.querySelector('#email');
            let ok = true;
            [name, phone, email].forEach(f => {
                if (!f.value.trim()) {
                    f.style.outline = '2px solid #e63946';
                    ok = false;
                    setTimeout(() => f.style.outline = '', 2000);
                }
            });
            if (!ok) return;

            const submit = form.querySelector('.submit-btn');
            submit.disabled = true;
            submit.textContent = 'Отправлено — спасибо!';
            setTimeout(() => {
                submit.disabled = false;
                submit.textContent = 'Отправить заявку';
                form.reset();
            }, 2000);

        });
    }

});



const models = {
    bmw: ["Выбрать модель", "1 Series",
        "2 Series",
        "2 Series Active Tourer",
        "2 Series Gran Tourer",
        "3 Series",
        "3 Series Touring",
        "4 Series",
        "4 Series Gran Coupe",
        "4 Series Cabrio",
        "5 Series",
        "i5",
        "6 Series GT",
        "7 Series",
        "i7",
        "8 Series",
        "8 Series Gran Coupe",
        "8 Series Cabrio",

        "X1",
        "X2",
        "X3",
        "X4",
        "X5",
        "X6",
        "X7",

        "Z4",

        "i4",
        "iX",
        "iX3",

        "M135i xDrive",
        "M235i xDrive Gran Coupe",
        "M2",
        "M3",
        "M3 Touring",
        "M4",
        "M4 Cabrio",
        "M5",
        "M8",
        "M8 Gran Coupe",
        "M850i xDrive",
        "i4 M50",
        "i5 M60",
        "i7 M70",
        "M760e",
        "X2 M35i",
        "X3 M",
        "X4 M",
        "X5 M",
        "X6 M",
        "X7 M",
        "Z4 M40i"
    ],
    mercedes: ["Выбрать модель", "A‑Class",
"B‑Class",
"C‑Class",
"CLA",
"CLE",
"E‑Class",
"EQB",
"EQE",
"EQE SUV",
"EQS",
"EQS SUV",
"S‑Class",
"GLA‑Class",
"GLB‑Class",
"GLC‑Class",
"GLE‑Class",
"GLS‑Class",
"G‑Class",
"V‑Class",

"Mercedes‑AMG A 35",
"Mercedes‑AMG A 45",
"Mercedes‑AMG CLA 35",
"Mercedes‑AMG CLA 45",
"Mercedes‑AMG C 43",
"Mercedes‑AMG C 63 E Performance",
"Mercedes‑AMG E 53",
"Mercedes‑AMG S 63",
"Mercedes‑AMG GT",
"Mercedes‑AMG GT 4‑Door",
"Mercedes‑AMG ONE",
"Mercedes‑AMG CLE 53",
"Mercedes‑AMG GLA 35",
"Mercedes‑AMG GLC 43",
"Mercedes‑AMG GLC 63",
"Mercedes‑AMG GLE 53",
"Mercedes‑AMG GLE 63",
"Mercedes‑AMG GLS 63",
"Mercedes‑AMG G 63",
"Mercedes‑AMG EQE SUV",
"Mercedes‑AMG SL 63",
"Mercedes‑AMG SL 65"],
    audi: ["Выбрать модель", "A1",
"A3",
"Allroad (A4 Allroad)",
"A4",
"A5",
"A6",
"A7",
"A8",
"e‑tron GT",
"A6 e‑tron",
"e‑tron",
"Q2",
"Q3",
"Q3 Sportback",
"Q4 e‑tron",
"Q4 Sportback e‑tron",
"Q5",
"Q5 e‑tron",
"Q5 Sportback",
"Q6 e‑tron",
"Q7",
"Q8",
"Q8 e‑tron",
"Q8 Sportback e‑tron",

"S1",
"S2",
"S3",
"S4",
"S5",
"S6",
"S7",
"S8",
"SQ2",
"SQ5",
"SQ5 Sportback",
"SQ6 e‑tron",
"SQ7",
"SQ8",
"SQ8 e‑tron",

"RS 2 Avant",
"RS 3",
"RS 3 Sportback",
"RS 4",
"RS 5",
"RS 5 Sportback",
"RS 6 Avant",
"RS 7 Sportback",
"RS Q3",
"RS Q8"],
    porsche: ["Выбрать модель", "911 Carrera",
"911 Carrera T",
"911 Carrera S",
"911 Carrera 4S",
"911 Carrera 4 GTS",
"911 Turbo S",
"911 Turbo S Cabriolet",
"911 GT3",
"911 GT3 Touring",
"911 Targa 4S",
"911 Targa 4 GTS",
"Taycan 4S",
"Taycan 4S Black Edition",
"Taycan Turbo Sport Turismo",
"Taycan Turbo Cross Turismo",
"Taycan Turbo S Cross Turismo",
"Taycan Sport Turismo",
"Taycan GTS Sport Turismo",
"Taycan Turbo GT",
"Panamera",
"Panamera GTS",
"Panamera 4S E‑Hybrid",
"Panamera Turbo E‑Hybrid",
"Panamera Turbo S E‑Hybrid",
"Macan",
"Macan T",
"Macan GTS",
"Macan Turbo",
"Macan EV",
"Cayenne",
"Cayenne S",
"Cayenne E‑Hybrid",
"Cayenne E‑Hybrid Black Edition",
"Cayenne S E‑Hybrid",
"Cayenne GTS Coupé",
"Cayenne Turbo Electric"],
    lexus: ["Выбрать модель", "LBX",
"UX",
"NX",
"RX",
"RZ",
"TX",
"GX",
"LX",
"ES",
"IS",
"LC",
"LS"],
    subaru: ["Выбрать модель", "R-2",
"Leone",
"Rex",
"BRAT",
"Sumo",
"Libero",
"Domingo",
"Justy",
"Vivio",
"Sambar Truck",
"Sambar Van",
"Alcyone/SVX",
"XT",
"Pleo",
"R2",
"R1",
"Dex",
"Tribeca",
"Baja",
"Exiga",
"Lucra",
"Trezia",
"Pleo Plus",
"BRZ",
"Impreza",
"Outback",
"Forester",
"Ascent",
"Crosstrek",
"Solterra",
"Uncharted",
"Trailseeker",
"WRX",
"Legacy",
"Levorg",
"Levorg Layback",
"Rex Crossover",
"Chiffon"],
    toyota: ["Выбрать модель", "Corona",
"Carina",
"Carina II",
"Carina E",
"Caldina",
"Century",
"Celica",
"Corona Mark II",
"Corolla",
"Corolla Sedan",
"Corolla Touring",
"Corolla Sprinter",
"Corolla Fielder",
"Corolla Cross",
"Corona Mark II",
"Cressida",
"Creta",  
"Cresta",
"FJ40",
"Hilux",
"Hilux Surf",
"Innova",
"Land Cruiser 300",
"Land Cruiser 70",
"Land Cruiser II",
"LiteAce",
"Mach",
"Mark II",
"Masterline",
"Massy Dyna",
"MiniAce",
"Paseo",
"Pleo",
"Pleo Plus",
"Publica",
"RH",
"RK",
"Rex",
"RR",
"SA",
"SB",
"SG",
"SF",
"Sports 800",
"Stout",
"Tiara",
"ToyoAce",
"1000",
"2000GT",
"4Runner",
"Aqua",
"Aygo",
"Aygo X",
"Avanza",
"Auris",
"Avalon",
"Belta",
"Brevis",
"Camry",
"Camry Solara",
"Cami",
"Century SUV",
"C-HR",
"GR Corolla",
"GR Supra",
"GR 86",
"Hiace",
"Highlander",
"Land Cruiser Prado",
"Lexus‑branded models excluded",
"Mirai",
"Prius",
"Previa",
"Quantum",
"RAV4",
"Sequoia",
"Sienna",
"Spectra",
"Starlet",
"T100/T100X",
"Supra",
"Tacoma",
"Tundra",
"Urban Cruiser",
"Vellfire",
"Voxy",
"Yaris",
"Yaris Cross",
"Yaris Verso",
"iQ"],
    landrover: ["Выбрать модель", "Series I",
"Series II",
"Series IIA",
"Series III",
"Land Rover 80",
"Land Rover 86",
"Land Rover 88",
"Land Rover 109",
"Land Rover 107",
"Land Rover 101",
"Land Rover Lightweight",
"Defender",
"Defender 90",
"Defender 110",
"Defender 130",
"Defender Octa",
"Discovery",
"Discovery Series I",
"Discovery Series II",
"Discovery 3",
"Discovery 4",
"Discovery 5",
"Discovery Sport",
"Freelander",
"Freelander 2",
"Range Rover",
"Range Rover Classic",
"Range Rover P38A",
"Range Rover (L322)",
"Range Rover (L405)",
"Range Rover Evoque",
"Range Rover Sport",
"Range Rover Velar"]
};

document.getElementById("car").addEventListener("change", function() {
    const brand = this.value;
    const modelBlock = document.getElementById("model-block");
    const modelSelect = document.getElementById("model");

    if (!brand) {
        modelBlock.style.display = "none";
        modelSelect.innerHTML = "";
        return;
    }

    modelBlock.style.display = "block";
    modelSelect.innerHTML = "";

    models[brand].forEach((m) => {
        const opt = document.createElement("option");
        opt.value = m.toLowerCase();
        opt.textContent = m;
        modelSelect.appendChild(opt);
    });
});
document.getElementById("model").addEventListener("change", function() {
    const gen = document.getElementById("generation-block");
    gen.style.display = this.value ? "block" : "none";
});
const burger = document.querySelector('.burger');
  const menu = document.querySelector('nav ul');

  burger.onclick = () => {
    menu.classList.toggle('active');
  };
