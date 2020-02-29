import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  whiteHeader = false;
  constructor( public router: Router) { }

  ngOnInit() {
    this.toggleHeader();
    let header = document.querySelector('.site-navbar');
    window.addEventListener("scroll", ToggleFix);
    function ToggleFix (){
      if(window.scrollY >= 80){
        header.classList.add('fixed-header');
      }
      else{
        header.classList.remove('fixed-header');
      }
    }
  }

  toggleHeader() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event['url'] == '/blog' || event['url'] == '/blogpost')
           {
         this.whiteHeader = true;
        }
        else {
          this.whiteHeader = false;
        }
      }
    });
  }
}
