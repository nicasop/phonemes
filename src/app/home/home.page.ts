import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("aprender") aprender:ElementRef;
  @ViewChild("juegos") juegos:ElementRef; 

  constructor(private render:Renderer2) {}
  
  ngOnInit(){
    setInterval(()=> this.addMoment(this.aprender,"temblor"), 5000);
    setInterval(()=> this.addMoment(this.juegos,"temblor"), 5000);
}

  // ngAfterContentInit(){
  //     setInterval(()=> this.addMoment(this.aprender,"temblor"), 5000);
  //     setInterval(()=> this.addMoment(this.juegos,"temblor"), 5000);
  // }

  aprenderF(){
    console.log("aprender");
    console.log(this.aprender.nativeElement);
  }

  juegosF(){
    console.log("juegos");
    console.log(this.juegos.nativeElement.class);
  }

  addMoment(element:ElementRef,styleClass:string){
    this.render.addClass(element.nativeElement,styleClass);
    setTimeout(()=>{
      this.render.removeClass(element.nativeElement,styleClass);
    }, 1000);
  }

}
