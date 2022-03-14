class MyTab {
    constructor(){
        this.init();
        this.bindingEvent();
    }
  
    init(){
      this.main = document.querySelector('main');
      this.btns = this.main.querySelectorAll('nav ul li');
      this.boxs = this.main.querySelectorAll('section article');
      this.speed = this.convertSpeed(this.boxs[0]);
      this.enableClick = true;
    }
  
    bindingEvent(){
      this.btns.forEach((el, idx)=>{
        el.addEventListener('click', e => {
          e.preventDefault();
    
          const isOn = e.currentTarget.classList.contains('on');
          if(isOn) return;
    
          if(this.enableClick){
            this.enableClick = false;
    
            this.activation(this.btns, idx);
            this.activation(this.boxs, idx);
    
            new Animate(this.main, {
              prop: 'height',
              value: this.matchHT(idx),
              duration: this.speed,
              callback: ()=>{
                this.enableClick  = true;
              }
            })
          }    
        }) 
      })
    }
  
    matchHT(idx){
      let ht = getComputedStyle(this.boxs[idx]).height;
      ht = parseInt(ht);
      return ht;
    }
  
    convertSpeed(el){
      let speed = getComputedStyle(el).transitionDuration;
      speed = parseFloat(speed)*1000;
      return speed;
    }
  
    activation(arr, idx){
      for(const el of arr) el.classList.remove('on');
      arr[idx].classList.add('on');
    }
  }