// بيانات خطط السفر (يمكن استبدالها ببيانات من واجهة برمجية API)
const travelPlans = [
    { id: 1, destination: "تركيا", cost: 3000, duration: "5 أيام", description: "رحلة اقتصادية إلى إسطنبول مع إقامة في فندق 3 نجوم." },
    { id: 2, destination: "دبي", cost: 5000, duration: "4 أيام", description: "رحلة متوسطة إلى دبي مع إقامة في فندق 4 نجوم." },
    { id: 3, destination: "ماليزيا", cost: 7000, duration: "7 أيام", description: "رحلة فاخرة إلى كوالالمبور مع إقامة في فندق 5 نجوم." },
  ];
  
  function searchPlans() {
    const budget = parseInt(document.getElementById("budget").value);
    const plansList = document.getElementById("plans-list");
  
    // مسح الخطط السابقة
    plansList.innerHTML = "";
  
    // تصفية الخطط بناءً على الميزانية
    const filteredPlans = travelPlans.filter((plan) => plan.cost <= budget);
  
    if (filteredPlans.length > 0) {
      filteredPlans.forEach((plan) => {
        const planCard = document.createElement("div");
        planCard.className = "plan-card";
        planCard.innerHTML = `
          <h2>${plan.destination}</h2>
          <p><strong>التكلفة:</strong> ${plan.cost} ريال</p>
          <p><strong>المدة:</strong> ${plan.duration}</p>
          <p><strong>الوصف:</strong> ${plan.description}</p>
        `;
        plansList.appendChild(planCard);
      });
    } else {
      plansList.innerHTML = "<p>لا توجد خطط تناسب ميزانيتك.</p>";
    }
  }