document.addEventListener("DOMContentLoaded", () => {

//beastClaw modal

    const beastClawModal = document.getElementsByClassName("beastClawModalWr")[0];
    const beastClawImage = document.getElementsByClassName("beastClawImg")[0];

    if (beastClawImage) {
        beastClawImage.addEventListener("click", () => {
            beastClawModal.style.display = "block";
        });
    }

    window.addEventListener("click", (evt) => {
        if (evt.target === beastClawModal) {
            beastClawModal.style.display = "none";
        }
    });

//bestiaSling modal

    const bestialSlingModal = document.getElementsByClassName("bestialSlingWr")[0];
    const bestialSlingImage = document.getElementsByClassName("bestialSlingImg")[0];

    if (bestialSlingImage) {
        bestialSlingImage.addEventListener("click", () => {
            bestialSlingModal.style.display = "block";
        });
    }

     window.addEventListener("click", (evt) => {
        if (evt.target === bestialSlingModal) {
            bestialSlingModal.style.display = "none";
        }
     });
    
    //Guarranq's Beast Claw

    const guarranqClawModal = document.getElementsByClassName("guarranqClawWr")[0];
    const guarranqClawImage = document.getElementsByClassName("guarranqClawImg")[0];

    if (guarranqClawImage) {        
        guarranqClawImage.addEventListener("click", () => {
            guarranqClawModal.style.display = "block";
       })
    }

     window.addEventListener("click", (evt) => {
        if (evt.target === guarranqClawModal) {
            guarranqClawModal.style.display = "none";
        }
     });
    
    //Stone of Guarranq

    const stoneOfGuaranqModal = document.getElementsByClassName("stoneOfGuaranqWr")[0];
    const stoneOfGuaranqImage = document.getElementsByClassName("stoneOfGuaranqImg")[0];

    if (stoneOfGuaranqImage) {        
        stoneOfGuaranqImage.addEventListener("click", () => {
            stoneOfGuaranqModal.style.display = "block";
       })
    }

     window.addEventListener("click", (evt) => {
        if (evt.target === stoneOfGuaranqModal) {
            stoneOfGuaranqModal.style.display = "none";
        }
     });
    
    //Bestial Vitality

    const bestiaVitalityModal = document.getElementsByClassName("bestialVitalityWr")[0];
    const bestiaVitalityImage = document.getElementsByClassName("bestialVitalityImg")[0];

    if (bestiaVitalityImage) {        
        bestiaVitalityImage.addEventListener("click", () => {
            bestiaVitalityModal.style.display = "block";
       })
    }

     window.addEventListener("click", (evt) => {
        if (evt.target === bestiaVitalityModal) {
            bestiaVitalityModal.style.display = "none";
        }
     });
    
    //Bestial Constitution

    
    const bestialConstitutionModal = document.getElementsByClassName("bestialConstitutionWr")[0];
    const bestialConstitutionImage = document.getElementsByClassName("bestialConstitutionImg")[0];

    if (bestialConstitutionImage) {        
        bestialConstitutionImage.addEventListener("click", () => {
            bestialConstitutionModal.style.display = "block";
       })
    }

     window.addEventListener("click", (evt) => {
        if (evt.target === bestialConstitutionModal) {
            bestialConstitutionModal.style.display = "none";
        }
     });
});
