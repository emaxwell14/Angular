import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  // Makes exported declarations of other modules available
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // So component selector tags are recognised by Angular
  // i.e. Directives in module are available to other directives
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent,
    DashboardComponent],
  // For injected services. Can be at any level but in module it is a singleton
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
