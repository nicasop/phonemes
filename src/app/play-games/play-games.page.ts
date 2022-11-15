import { Component, OnInit, ViewChild,ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-play-games',
  templateUrl: './play-games.page.html',
  styleUrls: ['./play-games.page.scss'],
})
export class PlayGamesPage implements OnInit {

  @ViewChild("opc1") opc1:ElementRef;
  @ViewChild("opc2") opc2:ElementRef;
  @ViewChild("opc3") opc3:ElementRef;
  selected_word:string;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    setInterval(()=> this.addMoment(this.opc1,"temblor"), 5000);
    setInterval(()=> this.addMoment(this.opc2,"temblor"), 5000);
    setInterval(()=> this.addMoment(this.opc3,"temblor"), 5000);
  }

  ngAfterViewInit() {
    // console.log(this.opc1);
    this.opc1.nativeElement.textContent="opcion1";
  }

  addMoment(element:ElementRef,styleClass:string){
    this.render.addClass(element.nativeElement,styleClass);
    setTimeout(()=>{
      this.render.removeClass(element.nativeElement,styleClass);
    }, 1000);
  }

  setValue(element:any){
    this.selected_word = element.srcElement.textContent;
  }

}
