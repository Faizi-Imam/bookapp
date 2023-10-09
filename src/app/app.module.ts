import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public-components/home/home.component';

@NgModule({
  declarations: [AppComponent, HowItWorksComponent, AboutUsComponent,HomeComponent ],
  imports: [
    BrowserModule,
    SharedModule,
    
    BrowserAnimationsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
