import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TempComponentComponent } from './temp-component/temp-component.component';
import { ContentComponent } from './content/content.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child/child.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { TailwindComponent } from './tailwind/tailwind.component';
import { RegisterComponent } from './forms/register/register.component';
import { SigninComponent } from './signin/signin.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { StandaloneComponent } from './standalone/standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    TempComponentComponent,
    ContentComponent,
    DirectivesComponent,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    NgcontentComponent,
    LifecycleComponent,
    PipesComponent,
    TailwindComponent,
    RegisterComponent,
    SigninComponent,
    StandaloneComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
