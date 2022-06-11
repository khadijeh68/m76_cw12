let accardion = document.querySelectorAll('.accordion_item');

for(i = 0 ; i < accardion.length ; i++){
    accardion[i].addEventListener("click", function(e){
      
        if(this.classList.contains("active")){
            this.classList.remove("active");
            return;
        } else {
            let actives = document.querySelectorAll('.active');
            if(actives[0]){
                actives[0].classList.remove("active");
            }
            this.classList.add("active");
        }
    })
}