import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-mentors',
  templateUrl: './s-mentors.component.html',
  styleUrls: ['./s-mentors.component.scss']
})
export class SMentorsComponent implements OnInit {

  mentors = [
    {
      img:'https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Sanjay Bansal',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem ex officiis ipsa facere natus, quo doloribus architecto in et incidunt laborum esse possimus ducimus laboriosam blanditiis, nulla necessitatibus, explicabo iure exercitationem? Suscipit culpa nam deleniti aliquid nobis eveniet dignissimos voluptatibus illum?',
      uni: 'Harvard University',
      spec: 'Data Science'
    },
    {
      img:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Anil Patidar',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem ex officiis',
      uni: 'Harvard University',
      spec: 'Machine Learning'
    },
    {
      img:'https://us.123rf.com/450wm/lopolo/lopolo1511/lopolo151101403/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg?ver=6',
      name: 'Amit Khare',
      desc: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolorum, reprehenderit cumque praesentium exercitationem provident esse. Numquam quidem ex officiis',
      uni: 'Harvard University',
      spec: 'Computer Vision'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
