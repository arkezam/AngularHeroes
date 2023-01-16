import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
 
import { AppComponent } from './app.component';  
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
  
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { MatrialModule } from './matrial/matrial.module';
 

import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent, 
   
  ],
  imports: [ 
    BrowserModule, 
    BrowserAnimationsModule,
    SharedModule,
    HeroesModule,
    AppRoutingModule,
    MatrialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
