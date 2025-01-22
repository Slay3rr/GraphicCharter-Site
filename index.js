document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.besoin-step');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.2, 
    });

    steps.forEach((step) => observer.observe(step));
});

document.querySelectorAll('.voice-tone-item').forEach(item => {
    item.addEventListener('click', () => {

        document.querySelectorAll('.voice-tone-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });

    item.addEventListener('mouseenter', () => {
        item.style.transform = "scale(1.08)";
    });

    item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('active')) {
            item.style.transform = "scale(1)";
        }
    });
});

document.querySelectorAll('.queue-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Vous avez sélectionné : ${item.dataset.feature}`);
    });

    item.addEventListener('mouseenter', () => {
        item.style.transform = "translateX(15px)";
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = "translateX(0)";
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.target-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 300); 
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const logoItems = document.querySelectorAll('.logo-item');
    logoItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'rotate(2deg) scale(1.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'rotate(0deg) scale(1)';
        });
    });
});


document.querySelectorAll(".word").forEach((word) => {
    word.addEventListener("click", () => {
        const keyword = word.dataset.keyword;

        const descriptions = {
            Dynamique: "Quicksand est vive, s'adaptant parfaitement à l'énergie des soirées.",
            Moderne: "Son design épuré reflète les tendances contemporaines.",
            Convivial: "Arrondie et chaleureuse, elle inspire la confiance.",
            Lisible: "Une typographie claire et lisible sur tous les supports.",
            Audacieux: "Elle capte l'attention avec élégance.",
            Impactant: "Idéale pour laisser une impression durable."
        };

        const descriptionBox = document.querySelector(".explosion-description");
        descriptionBox.textContent = descriptions[keyword];
    });
});

