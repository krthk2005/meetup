import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './modules/vendor/material/material.module';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { NewMeetingComponent } from './shared/components/new-meeting/new-meeting.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ControlMessagesComponent } from './shared/templates/control-messages.component';
import { MeetingListComponent } from './components/meeting-list/meeting-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewMeetingComponent,
    MainNavComponent,
    PageNotFoundComponent,
    ControlMessagesComponent,
    MeetingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
