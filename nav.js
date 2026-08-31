// קובץ ניווט מרכזי - יוצר אוטומטית את אזור המדיה החברתית וכפתורי החזרה בדפים
document.addEventListener("DOMContentLoaded", function() {
    // 1. הוספת כפתורי סושיאל בצורה אנכית ואסתטית
    const socialContainer = document.querySelector(".social-buttons-container");
    if (socialContainer) {
        socialContainer.innerHTML = `
            <a href="https://open.spotify.com/artist/5GxEhBJJmhGECHQvsh9LRz?si=5T_ZVxBCQxKdX3BoawZUxA" target="_blank" class="cta-button" style="background-color: #1DB954;">
                <span style="margin-left: 10px; font-size: 1.2em;">🎧</span> ספוטיפיי
            </a>
            <a href="https://www.facebook.com/elkabetska" target="_blank" class="cta-button" style="background-color: #3b5998;">
                <img src="images/facebooklogo.png" alt="Facebook"> פייסבוק
            </a>
            <a href="https://instagram.com/elkabetska" target="_blank" class="cta-button" style="background-color: #E1306C;">
                <img src="images/instagramlogo.png" alt="Instagram"> אינסטגרם
            </a>
            <a href="https://www.tiktok.com/@shirielkabets" target="_blank" class="cta-button" style="background-color: #000000;">
                <img src="images/tiktoklogo.png" alt="TikTok"> טיקטוק
            </a>
        `;
    }

    // 2. הוספת כפתור חזרה לדף הבית (עבור עמודים שהם לא דף הבית)
    const backButtonContainer = document.querySelector(".back-button-container");
    if (backButtonContainer && !window.location.pathname.endsWith("index.html") && window.location.pathname !== "/") {
        backButtonContainer.innerHTML = `
            <a href="index.html" class="cta-button" style="background-color: var(--color-accent-soft); color: var(--color-text-dark);">
                ← חזרה לדף הבית
            </a>
        `;
    }
});