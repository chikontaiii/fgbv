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
    mercedes: ["Выбрать модель", "C-Class", "E-Class", "S-Class"],
    audi: ["Выбрать модель", "A4", "A6", "A8"],
    porsche: ["Выбрать модель", "Cayenne", "Panamera", "Macan"],
    lexus: ["Выбрать модель", "IS", "ES", "RX"],
    nissan: ["Выбрать модель", "Qashqai", "X-Trail", "GTR"],
    toyota: ["Выбрать модель", "Camry", "Corolla", "RAV4"],
    landrover: ["Выбрать модель", "Range Rover", "Discovery", "Defender"]
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