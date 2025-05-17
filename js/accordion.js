const acc = document.getElementsByClassName("accordion");
// const dropDownButton = document.getElementsByClassName("drop_Down_Button_Accordion")

const toggleHide = (element) => {

  element.children[1].classList.toggle("hidden")

}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
    

    let childrenClicked = Array.from(this.children[0].children).includes(e.target);

    if(e.target === this || e.target === this.children[0] || childrenClicked) {
      if(!this.classList.contains("active") && !this.classList.contains("disactive"))
        {
          this.classList.toggle("active");
          
        }
        else if (this.classList.contains("active") && !this.classList.contains("disactive")) {
    
          this.classList.toggle("active");
          this.classList.toggle("disactive");
        }
        else if (!this.classList.contains("active") && this.classList.contains("disactive")) {
    
          this.classList.toggle("disactive");
          this.classList.toggle("active");
          
        }
        
        toggleHide(this);
    }
    
    

  });
}