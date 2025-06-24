//function toggleLearnMore(button){

//    const container = button.closest(".section-content") || button.closest(".content-section");
    
//    container.classList.toggle("expanded");
   
//    button.textContent = container.classList.contains("expanded") ? "Show Less" : "Learn More";
//} 

document.querySelectorAll(".toggle-btn").forEach(button => {
    
    button.addEventListener("click", () => {
        
        const container = button.closest(".section-content") || button.closest(".content-section");

        if(!container) return;

        container.classList.toggle("expanded");
        
        button.textContent = container.classList.contains("expanded") ? "Show Less" : "Learn More";
    });

});  