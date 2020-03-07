import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-universities',
  templateUrl: './s-universities.component.html',
  styleUrls: ['./s-universities.component.scss']
})
export class SUniversitiesComponent implements OnInit {


  universities = [
    {
      img:'https://storage.googleapis.com/fa-web-assets/logos/northeastern_university_logo.jpg',
      name: 'Harvard University',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem ex officiis ipsa facere natus, quo doloribus architecto in et incidunt laborum esse possimus ducimus laboriosam blanditiis, nulla necessitatibus, explicabo iure exercitationem? Suscipit culpa nam deleniti aliquid nobis eveniet dignissimos voluptatibus illum?'
    },
    {
      img:'https://storage.googleapis.com/fa-web-assets/logos/tamu_logo.jpg',
      name: 'Texas University',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem ex officiis'
    },
    {
      img:'https://storage.googleapis.com/fa-web-assets/logos/georgia_tech_logo.jpg',
      name: 'Georgia University',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem'
    },
    {
      img:'https://storage.googleapis.com/fa-web-assets/logos/uta_logo.jpg',
      name: 'Texas University',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem ex officiis'
    },
    {
      img:'https://storage.googleapis.com/fa-web-assets/logos/nyu_logo.jpg',
      name: 'NYU University',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem ex officiis ipsa facere natus, quo doloribus architecto in et incidunt laborum esse possimus ducimus laboriosam blanditiis, nulla'
    },
    {
      img:'https://storage.googleapis.com/fa-web-assets/logos/university_of_florida_logo.jpg',
      name: 'Florida University',
      desc: ' Lorem ipsum dolor sit amet,'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
