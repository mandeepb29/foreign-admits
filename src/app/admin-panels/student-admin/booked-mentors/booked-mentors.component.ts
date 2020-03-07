import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booked-mentors',
  templateUrl: './booked-mentors.component.html',
  styleUrls: ['./booked-mentors.component.scss']
})
export class BookedMentorsComponent implements OnInit {

  bookings = [
    {
      img: 'https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Sam Smith',
      uni: 'Harvard University',
      spec: 'Data Science',
      date: '4 March 2020',
      time: '12:00 PM'
    },
    {
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'John Doe',
      uni: 'Harvard University',
      spec: 'Data Science',
      date: '4 March 2020',
      time: '12:00 PM'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
