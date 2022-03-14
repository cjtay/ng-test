import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StandaloneComponent } from './standalone/standalone.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'standalone', component: StandaloneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
