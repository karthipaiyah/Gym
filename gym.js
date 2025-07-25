    const monthlyBtn = document.getElementById("monthlyBtn");
    const annuallyBtn = document.getElementById("annuallyBtn");
    const monthlyPlans = document.getElementById("monthlyPlans");
    const annualPlans = document.getElementById("annualPlans");

    function showMonthly() {
      monthlyPlans.style.display = "flex";
      annualPlans.style.display = "none";
      monthlyBtn.classList.add("active");
      annuallyBtn.classList.remove("active");
    }

    function showAnnually() {
      monthlyPlans.style.display = "none";
      annualPlans.style.display = "flex";
      annuallyBtn.classList.add("active");
      monthlyBtn.classList.remove("active");
    }

    monthlyBtn.addEventListener("click", showMonthly);
    annuallyBtn.addEventListener("click", showAnnually);

    // Show monthly by default
    showMonthly();
    
    
