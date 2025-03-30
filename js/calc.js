document.addEventListener("DOMContentLoaded", function () {
    const pageRange = document.querySelector(".range1");
    const rangeElements = document.querySelectorAll(".range1");
    const designRange = rangeElements.length > 1 ? rangeElements[1] : null;
    const costDisplay = document.querySelector(".hesabla1");
    
    if (!pageRange || !designRange || !costDisplay) {
        console.error("One or more required elements are missing.");
        return;
    }

    const baseCostPerPage = 100;
    const designMultiplier = [1, 2, 3];
    
    function calculateCost() {
        const pageCount = parseInt(pageRange.value) || 0;
        const designComplexity = parseInt(designRange.value) || 1;
        
        if (designComplexity < 1 || designComplexity > designMultiplier.length) {
            console.error("Invalid design complexity value.");
            return;
        }

        const totalCost = pageCount * baseCostPerPage * designMultiplier[designComplexity - 1];
        costDisplay.textContent = `${pageCount} səhifə / ₼ ${totalCost}`;
    }

    pageRange.addEventListener("input", calculateCost);
    designRange.addEventListener("input", calculateCost);
    
    calculateCost();
});


document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".toggle1");
    const costDisplay = document.querySelector(".hesabla2");
    
    if (!costDisplay) {
        console.error("Cost display for addons is missing.");
        return;
    }

    const addonPrices = {
        "Bloq": 200,
        "Üzv girişi /‍‍‍ Profillər": 400,
        "Responsive": 100,
        "Forum": 400,
        "Mesajlaşma": 50,
        "Canlı Söhbət": 50,
        "Qalereya": 100,
        "Əlaqə Forması": 100,
        "Saytda Axtarış": 100,
        "Xəritə Məlumatı / Geolocation": 100,
        "Rezervasyon": 400,
        "Sosial Media inteqrasiyası": 50,
        "Analitika / İzləmə": 50,
        "Admin Panel": 300
    };

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += addonPrices[checkbox.name] || 0;
            }
        });
        costDisplay.textContent = `₼ ${total}`;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", calculateTotal);
    });

    calculateTotal();
});


document.addEventListener("DOMContentLoaded", function () {
    const servicePrices = {
        "Başlıqlar & Meta": 200,
        "Açar söz": 300,
        "+20 Qabaqcıl Texnika": 300,
        "Başlıq Teqləri": 100,
        "Sitemap": 100
    };
    
    const checkboxes = document.querySelectorAll(".check1");
    const totalPriceElement = document.querySelector(".hesabla3");
    
    if (!totalPriceElement) {
        console.error("Total price element for services is missing.");
        return;
    }

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += servicePrices[checkbox.name] || 0;
            }
        });
        totalPriceElement.textContent = `₼ ${total}`;
    }
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", calculateTotal);
    });
    
    calculateTotal();
});


document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".toggle2");
    const costDisplay = document.querySelector(".hesabla4");
    
    if (!costDisplay) {
        console.error("Cost display for e-commerce options is missing.");
        return;
    }

    const prices = {
        "Ödəniş": 200,
        "Səbət": 500,
        "Məhsullar": 300,
        "Bəyəndiklərim": 300,
        "Filtr": 300,
        "Məhsul Haqqında": 200
    };

    function calculateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += prices[checkbox.name] || 0;
            }
        });
        costDisplay.textContent = `₼ ${total}`;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", calculateTotal);
    });

    calculateTotal();
});


document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.querySelector(".range2");
    const costDisplay = document.querySelector(".hesabla5");
    
    if (!rangeInput || !costDisplay) {
        console.error("Range input or cost display is missing.");
        return;
    }

    const prices = {
        1: 0,
        2: 100,
        3: 200
    };

    function updateCost() {
        const value = rangeInput.value;
        costDisplay.textContent = `₼ ${prices[value] || 0}`;
    }

    rangeInput.addEventListener("input", updateCost);
    updateCost();
});