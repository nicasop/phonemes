import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticePhonemePage } from './practice-phoneme.page';

const routes: Routes = [
  {
    path: '',
    component: PracticePhonemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticePhonemePageRoutingModule {}
