// קובץ ניווט מרכזי - יוצר אוטומטית את הלשוניות העליונות, אזור המדיה החברתית וכפתורי החזרה בדפים
document.addEventListener("DOMContentLoaded", function() {
    // 0. הגדרת מערך הלשוניות (הטאבים) המרכזי - כל שינוי בתמונה או בטקסט יעשה כאן בלבד
    const tabsData = [
        {
            href: "studio.html",
            img: "images/studio.jpg",
            alt: "סטודיו צלילים מחברים",
            label: "סטודיו צלילים מחברים",
            activeKey: "studio.html"
        },
        {
            href: "groups.html",
            img: "images/shiri_keyboard.jpeg",
            alt: "קבוצות",
            label: "קבוצות",
            activeKey: "groups.html"
        },
        {
            href: "bodyvoice.html",
            img: "images/shiri_tree.jpeg",
            alt: "קול הגוף",
            label: "קול הגוף",
            activeKey: "bodyvoice.html"
        },
        {
            href: "music.html",
            img: "images/mymusic.jpg",
            alt: "מוזיקה",
            label: "מוזיקה",
            activeKey: "music.html"
        }
    ];

    // הוספת הטאבים אוטומטית לכל מקום שבו קיים אלמנט .tabs-image-bar
    const tabsBar = document.querySelector(".tabs-image-bar");
    if (tabsBar) {
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        
        tabsBar.innerHTML = tabsData.map(tab => {
            // בדיקה האם הטאב הנוכחי הוא הפעיל
            const isActive = currentPath === tab.activeKey ? "active" : "";
            // תיקון ספציפי לתמונת הסטודיו בעמוד הסטודיו במידת הצורך, או שימוש בתמונה הראשית
            let imgSrc = tab.img;
            if (tab.activeKey === "studio.html" && currentPath === "studio.html") {
                imgSrc = "images/connecting_sounds.jpg";
            }

            return `
                <a href="${tab.href}" class="tab-link ${isActive}">
                    <img src="${imgSrc}" alt="${tab.alt}" class="tab-image">
                    <span class="tab-label">${tab.label}</span>
                </a>
            `;
        }).join("");
    }

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