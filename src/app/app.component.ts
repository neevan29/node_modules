import { Component } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd} from '@angular/router';    



declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScenaiApp';
  pathname:string;
  constructor( private router: Router, private activatedRoute:ActivatedRoute) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.pathname=this.router.url
        }
      }
    );   }
  

}
