const buttons = document.querySelectorAll(".faq-toggle"); // Tüm butonları seç
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const faq = button.closest(".faq"); // Butonun bağlı olduğu en yakın .faq elemanını bul
        faq.classList.toggle("active"); // Sadece bu elemanda active sınıfını değiştir
    });
});
