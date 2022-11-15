import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticePhonemePageRoutingModule } from './practice-phoneme-routing.module';

import { PracticePhonemePage } from './practice-phoneme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticePhonemePageRoutingModule
  ],
  declarations: [PracticePhonemePage]
})
export class PracticePhonemePageModule {}
