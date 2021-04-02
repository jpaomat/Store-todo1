import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentPipe } from './current/current.pipe';



@NgModule({
  declarations: [CurrentPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CurrentPipe
  ]
})
export class PipesModule { }
