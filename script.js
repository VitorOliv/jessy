const accordionItems = document.querySelectorAll(".accordion");

// Adiciona evento de click na div accordion se existir.
if (accordionItems) {
    accordionItems.forEach((accordion) => {
        accordion.addEventListener("click", (e) => toggleAccorddion(e));
    });
}

// Accordion simples, recebe o elemento pai desce até o paragrafo e da toggle na classe.
const toggleAccorddion = (e) => {
    let target = e.currentTarget;
    let paragraph = target.querySelector("p");
    let button = target.querySelector(".accordionHeader button");    

    if(!paragraph.classList.contains("accordionBodyShowing")) {
        paragraph.classList.remove("accordionBodyHidden");
        paragraph.classList.add("accordionBodyShowing");

        button.innerHTML = "-";
    } else {
        paragraph.classList.remove("accordionBodyShowing");
        paragraph.classList.add("accordionBodyHidden");

        button.innerHTML = "+";
    }
    
    
}