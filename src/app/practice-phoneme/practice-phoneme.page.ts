import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Data } from "./../../interfaces";

@Component({
  selector: 'app-practice-phoneme',
  templateUrl: './practice-phoneme.page.html',
  styleUrls: ['./practice-phoneme.page.scss'],
})
export class PracticePhonemePage{
  data: Data[] = [
    {
      word: "GA-TO",
      audio: "/assets/audio/gato.ogg",
      image: "/assets/images/gato.png",
    },
    {
      word: "CA-SA",
      audio: "/assets/audio/casa.ogg",
      image: "/assets/images/casa.png",
    },
    {
      word: "PUER-TA",
      audio: "/assets/audio/puerta.ogg",
      image: "/assets/images/puerta.png",
    },
    {
      word: "ME-SA",
      audio: "/assets/audio/mesa.ogg",
      image: "/assets/images/mesa.png",
    },
    {
      word: "PIA-NO",
      audio: "/assets/audio/piano.ogg",
      image: "/assets/images/piano.png",
    },
    {
      word: "VEN-TA-NA",
      audio: "/assets/audio/ventana.ogg",
      image: "/assets/images/ventana.png",
    },
    {
      word: "JI-RA-FA",
      audio: "/assets/audio/jirafa.ogg",
      image: "/assets/images/jirafa.png",
    },
    {
      word: "PA-LO-MA",
      audio: "/assets/audio/paloma.ogg",
      image: "/assets/images/paloma.png",
    },
    {
      word: "BI-CI-CLE-TA",
      audio: "/assets/audio/bicicleta.ogg",
      image: "/assets/images/bicicleta.png",
    },
    {
      word: "PE-LO-TA",
      audio: "/assets/audio/pelota.ogg",
      image: "/assets/images/pelota.png",
    }
  ]
  

  @ViewChild("opciones") opciones:ElementRef;
  pos_ejercicio:number = 1;
  respuesta:string = "";
  num_click:number;
  respuesta_correcta:string;
  audio: any = new Audio();
  duration: number;
  temp:any;
  imagen:string;

  constructor(private render: Renderer2, private route: ActivatedRoute, private router: Router, private toastController: ToastController) {
  }

  ionViewWillEnter(){
    this.pos_ejercicio = parseInt(this.route.snapshot.paramMap.get('pos'),10);
    this.initValues();
    this.temp = setInterval(() => this.reproducirPalabra(),5000);
  }

  ionViewWillLeave(){
    clearInterval(this.temp);
  }

  ionViewDidLeave(){
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  initValues(){
    this.respuesta="";
    this.opciones.nativeElement.textContent='';
    for (let i=0; i<2;i++){
      let pos_obt = Math.floor(Math.random() * this.data.length);
      this.cargarOpciones(pos_obt,false);
    }
    this.cargarOpciones(this.pos_ejercicio,true);
  }

  cargarOpciones(pos_ele:number,pos_eje:boolean){
    let selected = this.data[pos_ele];
    let word = selected.word.split("-");
    if (pos_eje){
      this.num_click = word.length;
      this.imagen = selected.image;
      this.respuesta_correcta = word.join('');
      this.audio.src = selected.audio;
      this.audio.load();
    }
    for(let i = 0; i < word.length;i++ ){
      let div = this.render.createElement("div");
      let text = this.render.createText(word[i]);
      this.render.appendChild(div, text);
      this.render.addClass(div,"option");
      this.render.addClass(div,"fuente");

      this.render.listen(div,"click", (event) => {
        this.obtenerValor(event)
      });
      this.render.appendChild(this.opciones.nativeElement, div);
    }
  }

  obtenerValor(event:any){
    console.log(event.srcElement.textContent);
    
    if (this.num_click != 0){
      if (this.num_click < this.data[this.pos_ejercicio].word.split('-').length){
        this.respuesta += '-';  
      }
      this.respuesta += event.srcElement.textContent;
      this.num_click --;
      if (this.num_click == 0){
        setTimeout(()=>{
        this.verificarRespuesta();
        }, 200);
      }
    }
  }

  verificarRespuesta(){
    if(this.data[this.pos_ejercicio].word == this.respuesta){
      this.presentToast("ÉXITO","checkmark-circle-sharp");
      setTimeout(()=>{
        this.router.navigateByUrl('/home/learn-phoneme');
      }, 500);
    }
    else{
      this.presentToast("ERROR","alert-circle-sharp")
      this.respuesta="";
      this.num_click = this.data[this.pos_ejercicio].word.split('-').length;
    }
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
