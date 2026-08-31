// nav.js - ניהול תפריט הלשוניות העליונות של האתר

const tabsData = [
    { name: "בית", url: "index.html", key: "home" },
    { name: "מוזיקה", url: "music.html", key: "music" },
    { name: "קבוצות", url: "groups.html", key: "groups" },
    { name: "אנסמבל מענה קולי", url: "ensemble.html", key: "ensemble", image: "images/ansamble.jpeg" }
];

// פונקציה לייצור סרגל הלשוניות באופן דינמי
function renderTabs(activeKey) {
    const tabsContainer = document.querySelector(".tabs-container");
    if (!tabsContainer) return;

    let html = '<div class="tabs-image-bar">';
    tabsData.forEach(tab => {
        const isActive = tab.key === activeKey ? "active" : "";
        html += `<a href="${tab.url}" class="tab-link ${isActive}">`;
        
        // תמיכה בהצגת תמונה קטנה בלשונית (אם קיימת) ובטקסט מתחתיה
        if (tab.image) {
            html += `<img src="${tab.image}" alt="${tab.name}" class="tab-image">`;
        }
        html += `<span class="tab-label">${tab.name}</span></a>`;
    });
    html += '</div>';
    
    tabsContainer.innerHTML = html;
}

// פונקציה לייצור כפתור חזרה במידת הצורך (רק בעמודים פנימיים ולא בדף הבית)
function renderBackButton() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (currentPage === "index.html" || currentPage === "") return;

    const backContainer = document.querySelector(".back-button-container");
    if (!backContainer) return;
    
    backContainer.innerHTML = `<a href="index.html" class="back-button">← חזרה לדף הבית</a>`;
}

// הרצה אוטומטית בטעינת העמוד
document.addEventListener("DOMContentLoaded", () => {
    // זיהוי העמוד הנוכחי לפי השם של הקובץ
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const currentTab = tabsData.find(tab => tab.url === currentPage);
    
    if (currentTab) {
        renderTabs(currentTab.key);
    }
    renderBackButton();
});