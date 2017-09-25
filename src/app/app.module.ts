import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { CustomComponent } from './custom/custom.component';
import { DataJsonComponent } from './data-json/data-json.component';

const routes: Routes = [
  { path: 'hero', component: HeroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: EditorComponent},
  { path: 'custom', component: CustomComponent},
  { path: 'data', component: DataJsonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    EditorComponent,
    CustomComponent,
    DataJsonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    EditorModule,
    DropdownModule,
    GrowlModule,
    ProgressBarModule,
    CalendarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, DataJsonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
