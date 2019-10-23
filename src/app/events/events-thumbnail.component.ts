import { Component, Input,  AfterViewInit } from '@angular/core';
import { IMovies } from './shared/event.model';
declare var $: any;


@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="col">
          <div class="card"  style="cursor: pointer" >
              <div class="card-header">
                  <span (click)="fav()"  ><i  class="fa fa-heart float-right" #favo   title="Click to Favorite Movie"    id="fav{{movie.id}}" ></i></span>

                  <h5 [routerLink]="['/events',movie.id]" >{{movie.title | uppercase}}</h5>
                  <em class="float-right">{{movie.year}}</em>
              </div>
              <div class="card-body" [routerLink]="['/events',movie.id]"   (mouseover)="sho()" (mouseout)="hi()"  >
                <div [ngSwitch]="movie.image" >
                    <span *ngSwitchCase="''">
                        <img src="/assets/images/s-img.jpg" alt="NO Video or Image">
                    </span>
                    <span *ngSwitchDefault>
                      <img class="img-thumbnail" [src]="movie?.large_cover_image" style="max-height:300px" />
                    </span>
                </div>

              </div>
              <div  id="hid{{movie.id}}" class="card-footer" style="display: none;color: pink; opacity:0.8; width=:100%; top:85%;left:0%; background-color: black; position: absolute" >
                  <span class="float-right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Released: &nbsp; {{movie.released}}
                  </span>
                  <span class=""><i class="fa fa-heart " ></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; </span>
              </div>

          </div>
      </div>

    `
})

export class EventThumbnailComponent  implements AfterViewInit   {
   @Input() movie:IMovies;
   favo: any ;
    //@ViewChild("video") myvid: ElementRef;
    @Input() filterBy : string;
    //visibleMovies: any;

    ngAfterViewInit(){
      //alert(sessionStorage.getItem('#fav'+this.movie.id))
      //this.favo ='style= "color: pink"'
      console.log(this)
      if(sessionStorage.getItem('#fav'+this.movie.id)==='1') {
        let favname = this.movie.id;
        $('#fav'+favname).attr('style',"color:pink");
        console.log(favname)
      }
    }


   sho = ()=>{
     //console.log(this.movie.id);

      $('#hid'+this.movie.id).show();
    }
    hi = ()=>{
      //console.log(this.movie.id);

       $('#hid'+this.movie.id).hide();
    }
    playVid = ()=>{
      //  console.log('#vid'+this.movie.id);
        $('#vid'+this.movie.id).trigger('play');
        }
    playNoVid = ()=>{
    //  console.log('#vid'+this.movie.id);
      $('#vid'+this.movie.id).trigger('pause');
      }


    fav=()=>{
      console.log(this.movie.title + 'Clicked!!')
      if(sessionStorage.getItem('#fav'+this.movie.id)==='1') {
        $('#fav'+this.movie.id).removeAttr('style');
        $('#fav'+this.movie.id).removeAttr('title');
        $('#fav'+this.movie.id).attr('title',"Click to  Favorite Movie");//not working
        //$('#hide'+this.movie.id).val('') ;
        sessionStorage.setItem('#fav'+this.movie.id," ");

      } else {
        $('#fav'+this.movie.id).attr('style',"color:pink");
        $('#fav'+this.movie.id).removeAttr('title');
        $('#fav'+this.movie.id).attr('title',"Click to Remove Favorite Movie");
        sessionStorage.setItem('#fav'+this.movie.id,"1");
      }

    }



}
