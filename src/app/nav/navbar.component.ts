import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
    nav { max-height:12px; color:black;  background-image : linear-gradient(180deg , red, pink,magenta); }
    navbar-brand{
      color:black;
    }

    `]


})

export class NavBarComponent {

}
