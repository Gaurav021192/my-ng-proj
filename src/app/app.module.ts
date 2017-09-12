import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: EditorComponent},
  { path: 'custom', component: CustomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    EditorComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    DropdownModule,
    CalendarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
