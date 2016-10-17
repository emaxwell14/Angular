import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

//Better practive to import these only in the files where they are required.
import './rxjs-extensions';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  // Makes exported declarations of other modules available
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  // So component selector tags are recognised by Angular
  // i.e. Directives in module are available to other directives
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent,
    DashboardComponent, HeroSearchComponent],
  // For injected services. Can be at any level but in module it is a singleton
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
