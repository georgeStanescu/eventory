import { Component, OnInit } from '@angular/core';
import { EventsService } from '../core/events.service';

@Component({
  selector: 'evt-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

    events: Car[];
    
    selectedCar: Car;
    
    displayDialog: boolean;

    constructor(private eventsService: EventsService) { }

    ngOnInit() {
        this.eventsService.getCarsLarge().then(events => this.events = events);
    }
    
    selectCar(car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
    }
    
    onDialogHide() {
        this.selectedCar = null;
    }

}

export class Car {

}
