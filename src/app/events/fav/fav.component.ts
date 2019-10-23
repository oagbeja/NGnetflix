import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
   movies:any[];
  visibleMovies :any[];
  constructor( private eventService: EventService ,private route:ActivatedRoute ) { }

  ngOnInit() {
    //this.movies = this.eventService.getMovies().filter(movies =>{
   //   return sessionStorage.getItem('#fav'+movies.id)==='1' ;//.includes($('#srch'))
    //})
    this.eventService.getMovies()
    .subscribe((data: any[])=>{
      this.movies=data.filter(movies =>{
        return sessionStorage.getItem('#fav'+movies.id)==='1' ;//.includes($('#srch'))
      })

    });

  }

  filt=()=>{
    this.eventService.getMovies()
    .subscribe((data: any[])=>{
      this.movies=data.filter(movies =>{
        return movies.title.toLowerCase().includes($('#srch').val().toLowerCase())  && sessionStorage.getItem('#fav'+movies.id)==='1' ;//.includes($('#srch')) ;//.includes($('#srch'))
      })

    });

  }

 /* filt(){
    this.movies = this.eventService.getMovies().filter(movies =>{
      return movies.title.toLowerCase().includes($('#srch').val().toLowerCase()) && sessionStorage.getItem('#fav'+movies.id)==='1' ;//.includes($('#srch'))
    })
  }*/
  sho = ()=>{
    //console.log(this.movie.id);

    // $('#hid'+this.movies).show();
   }
   hi = ()=>{
     //console.log(this.movie.id);

    //  $('#hid'+this.movies).hide();
   }

}
