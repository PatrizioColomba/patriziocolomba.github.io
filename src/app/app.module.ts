import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryDataService } from './services/memory/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AngularComponent } from './angular/angular.component';
import { PostComponent } from './post/post.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FirePost } from './services/fire-post.service';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AngularComponent,
    PostComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'patriziocolomba'),
    AngularFireDatabaseModule,
    environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}) : []
  ],
  providers: [
    FirePost
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
