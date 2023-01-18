import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GalleriesComponent } from './components/galleries/galleries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    AboutComponent,
    BlogComponent,
    ContactsComponent,
    GalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
