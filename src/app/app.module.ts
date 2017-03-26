import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NavigationModule } from './navigation/navigation.module';
import { PostsModule } from './posts/posts.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NavigationModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
