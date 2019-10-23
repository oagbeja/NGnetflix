import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { IMovies } from './shared/event.model';
declare var $: any;

@Component({

    template: `
            <div class="container">
                <h1>Movies On Display</h1>
                <hr>
                <div class="">
                   <input type="text" class="" (keyup)="filt()"   id="srch" placeholder="Search" >
                  <button type="button" id="srchbtn" class="btn btn-sm" (click)="filt()" ><i class="fa fa-search"></i></button>
                </div>
                  <br>
                <div class="row"   >
                    <event-thumbnail  *ngFor="let movie of movies"   [movie]="movie"  ></event-thumbnail>
                </div>

            </div>
    `,
    styles: [' .container { padding-top: 50px } #srchbtn{ display: inline;background: black;color: white;margin-bottom:.2em}']
})

export class EventsListComponent implements OnInit {
//later change to movies
    movies:IMovies[];
    filterBy: string ='all';

    constructor( private eventService: EventService) {

    }

    ngOnInit() {
      //this.movies=[]; let j=0;
      this.eventService.getMovies()
      .subscribe((data: any[])=>{
        this.movies=data;

      });
      //this.eventService.getMovies().subscribe(movies => (this.movies = movies));
     // heroes => (this.heroes = heroes)
     // console.log(this.movies+'sooo')
    }

    filt=()=>{
      this.eventService.getMovies()
      .subscribe((data: any[])=>{
        this.movies=data.filter(movies =>{
          return movies.title.toLowerCase().includes($('#srch').val().toLowerCase()) ;//.includes($('#srch'))
        })

      });

    }


}
