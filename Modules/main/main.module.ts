import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './Components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes = [
  {path: '',
    component: MainComponent
  }
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    NgbNavModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
