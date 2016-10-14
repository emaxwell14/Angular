import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';


@NgModule({
  // Makes exported declarations of other modules available
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
          path: 'dashboard',
          component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
    ])
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
