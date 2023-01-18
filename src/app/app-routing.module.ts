import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {AboutComponent} from "./components/about/about.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {GalleriesComponent} from "./components/galleries/galleries.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'galleries', component: GalleriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
