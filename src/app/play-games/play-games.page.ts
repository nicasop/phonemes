import { Component, OnInit, ViewChild,ElementRef,Renderer2 } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Data } from "./../../interfaces";

@Component({
  selector: 'app-play-games',
  templateUrl: './play-games.page.html',
  styleUrls: ['./play-games.page.scss'],
})
export class PlayGamesPage{

  data: Data[] = [
    {
      word: "GATO",
      audio: "/assets/audio/gato1.ogg",
      image: "/assets/images/gato.png",
    },
    {
      word: "CASA",
      audio: "/assets/audio/casa1.ogg",
      image: "/assets/images/casa.png",
    },
    {
      word: "PUERTA",
      audio: "/assets/audio/puerta1.ogg",
      image: "/assets/images/puerta.png",
    },
    {
      word: "MESA",
      audio: "/assets/audio/mesa1.ogg",
      image: "/assets/images/mesa.png",
    },
    {
      word: "PIANO",
      audio: "/assets/audio/piano1.ogg",
      image: "/assets/images/piano.png",
    },
    {
      word: "VENTANA",
      audio: "/assets/audio/ventana1.ogg",
      image: "/assets/images/ventana.png",
    },
    {
      word: "JIRAFA",
      audio: "/assets/audio/jirafa1.ogg",
      image: "/assets/images/jirafa.png",
    },
    {
      word: "PALOMA",
      audio: "/assets/audio/paloma1.ogg",
      image: "/assets/images/paloma.png",
    },
    {
      word: "BICICLETA",
      audio: "/assets/audio/bicicleta1.ogg",
      image: "/assets/images/bicicleta.png",
    },
    {
      word: "PELOTA",
      audio: "/assets/audio/pelota1.ogg",
      image: "/assets/images/pelota.png",
    }
  ]

  @ViewChild("opc1") opc1:ElementRef;
  @ViewChild("opc2") opc2:ElementRef;
  @ViewChild("opc3") opc3:ElementRef;
  selected_word:string;
  respuesta:string;
  pos_ele:number;
  image:string;
  temp:any;
  temp1:any;
  temp2:any;
  temp3:any;
  audio: any = new Audio();


  constructor(private render: Renderer2, private toastController: ToastController) { }

  ionViewWillEnter(){
    this.initValues()
    this.temp1 = setInterval(()=> this.addMoment(this.opc1,"temblor"), 5000);
    this.temp2 = setInterval(()=> this.addMoment(this.opc2,"temblor"), 5000);
    this.temp3 = setInterval(()=> this.addMoment(this.opc3,"temblor"), 5000);
    this.temp = setInterval(()=> this.reproducirPalabra(), 5000);
  }

  ionViewWillLeave(){
    clearInterval(this.temp1);
    clearInterval(this.temp2);
    clearInterval(this.temp3);
    clearInterval(this.temp);
  }

  ionViewDidLeave(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  addMoment(element:ElementRef,styleClass:string){
    this.render.addClass(element.nativeElement,styleClass);
    setTimeout(()=>{
      this.render.removeClass(element.nativeElement,styleClass);
    }, 1000);
  }

  setValue(element:any){
    this.selected_word = element.srcElement.textContent;
    setTimeout(()=>{
      this.verificarRespuesta(element.srcElement.textContent);
    }, 200);
  }

  verificarRespuesta(res_elegida:string){
    if(res_elegida == this.respuesta){
      this.presentToast("ÉXITO","checkmark-circle-sharp")
      setTimeout(()=>{
        this.initValues();
      }, 500);
    }
    else{
      this.presentToast("ERROR","alert-circle-sharp")
      this.selected_word="";
    }
  }

  initValues(){
    this.selected_word="";
    let posiciones = [];
    for (let i=0; i<3;i++){
      posiciones.push(Math.floor(Math.random() * this.data.length));
    }
    let pos_evaluar = Math.floor(Math.random() * posiciones.length)
    this.pos_ele = posiciones[pos_evaluar];
    this.cargarInformacion();
    this.opc1.nativeElement.textContent = this.data[posiciones[0]].word;
    this.opc2.nativeElement.textContent = this.data[posiciones[1]].word;
    this.opc3.nativeElement.textContent = this.data[posiciones[2]].word;
  }

  cargarInformacion(){
    this.respuesta = this.data[this.pos_ele].word;
    this.image = this.data[this.pos_ele].image;
    this.audio.src = this.data[this.pos_ele].audio;
    this.audio.load();
  }

  reproducirPalabra(){
    this.audio.play();
  }

  async presentToast(message: string, icon:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      icon: icon
    });

    await toast.present();
  }

}
