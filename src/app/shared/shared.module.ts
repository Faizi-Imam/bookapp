import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorsComponent } from './components/authors/authors.component';
@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent,
    FooterComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule, MaterialModule,
  ],
  exports:[ToolbarComponent,FooterComponent,MaterialModule, AuthorsComponent]
})
export class SharedModule { }
