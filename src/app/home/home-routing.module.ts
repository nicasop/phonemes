import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'learn-phoneme',
    loadChildren: () => import('../learn-phoneme/learn-phoneme.module').then( m => m.LearnPhonemePageModule)
  },
  {
    path: 'play-games',
    loadChildren: () => import('../play-games/play-games.module').then( m => m.PlayGamesPageModule)
  },
  {
    path: 'practice-phoneme/:pos',
    loadChildren: () => import('../practice-phoneme/practice-phoneme.module').then( m => m.PracticePhonemePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
