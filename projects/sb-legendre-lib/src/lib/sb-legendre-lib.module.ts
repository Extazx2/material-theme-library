import { NgModule } from '@angular/core';
import { SbLegendreLibComponent } from './sb-legendre-lib.component';
import { LgButtonComponent } from './lg-button/lg-button.component';



@NgModule({
  declarations: [
    SbLegendreLibComponent,
    LgButtonComponent
  ],
  imports: [
  ],
  exports: [
    SbLegendreLibComponent
  ]
})
export class SbLegendreLibModule { }
