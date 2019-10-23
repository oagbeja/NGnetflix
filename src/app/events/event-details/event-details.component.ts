import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from '../shared/event.model';

@Component({
    templateUrl: './event-details.component.html',
    styles: [' .container { padding-top: 50px } ']
})

export class EventDetailsComponent implements OnInit {
    movie: IMovies;
    constructor( private eventService: EventService, private route:ActivatedRoute) {

    }

    ngOnInit(){
        this.movie = this.eventService.getMovie(+this.route.snapshot.params['id']);
    }
}
