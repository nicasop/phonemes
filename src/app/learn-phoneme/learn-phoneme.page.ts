import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from "./../../interfaces";

@Component({
  selector: 'app-learn-phoneme',
  templateUrl: './learn-phoneme.page.html',
  styleUrls: ['./learn-phoneme.page.scss'],
})
export class LearnPhonemePage{

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


  palabra:string;
  imagen:string;
  pos_ele:number;
  iteration:number = 0;
  temp:any;
  audio: any = new Audio();

  constructor(private router: Router) { }

  ionViewWillEnter(){
    this.cargarInformacion();
    this.temp = setInterval(()=> this.reproducirPalabra(), 5000);
  }

  ionViewWillLeave(){
    clearInterval(this.temp);
  }

  cargarInformacion(){
    this.pos_ele = Math.floor(Math.random() * this.data.length);
    this.palabra = this.data[this.pos_ele].word;
    this.imagen = this.data[this.pos_ele].image;
    this.iteration = 0;
    this.audio.src = this.data[this.pos_ele].audio;
    this.audio.load();
  }

  reproducirPalabra(){
    this.audio.play();
    this.iteration ++;
    setTimeout(()=>{
      if(this.iteration == 2){
        this.iteration = 0;
        this.router.navigateByUrl('/home/practice-phoneme/'+this.pos_ele);
      }
    },4800);
    
  }

}
