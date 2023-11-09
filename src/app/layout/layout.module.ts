import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{NavbarComponent} from './navBar/navBar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SideBarComponent,
    FooterComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
