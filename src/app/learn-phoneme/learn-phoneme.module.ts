import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnPhonemePageRoutingModule } from './learn-phoneme-routing.module';

import { LearnPhonemePage } from './learn-phoneme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnPhonemePageRoutingModule
  ],
  declarations: [LearnPhonemePage]
})
export class LearnPhonemePageModule {}
