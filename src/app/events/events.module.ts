import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { EventsListComponent } from './events-list.component';
import { DataListModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DataListModule,
    EventsRoutingModule,
  ],
  declarations: [EventsListComponent]
})
export class EventsModule { }
