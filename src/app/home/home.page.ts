import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("aprender") aprender:ElementRef;
  @ViewChild("juegos") juegos:ElementRef;
  temp1:any;
  temp2:any;

  constructor(private render:Renderer2) {}

  ionViewWillEnter(){
    this.temp1 = setInterval(()=> this.addMoment(this.aprender,"temblor"), 5000);
    this.temp2 = setInterval(()=> this.addMoment(this.juegos,"temblor"), 5000);
  }

  ionViewWillLeave(){
    clearInterval(this.temp1);
    clearInterval(this.temp2); 
  }

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
