import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPhonemePage } from './learn-phoneme.page';

const routes: Routes = [
  {
    path: '',
    component: LearnPhonemePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnPhonemePageRoutingModule {}
