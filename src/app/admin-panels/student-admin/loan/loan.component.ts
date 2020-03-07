import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

  
  loans = [
    {
      img:'https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      name: 'Tester 1',
     location: 'Miami',
     rating: 4,
     students: 24,
     desc:'  Lorem, ipsum dolor Sit perspiciatis totam quis exercitationem? Veritatis provident quae quaerat omnis expedita, dolore iste.'
    },
    {
      img:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Tester 2',
      location: 'Miami',
      rating: 4,
      students: 24,
      desc:'  Lorem, quos. Sit perspiciatis totam quis exercitationem? Veritatis provident quae quaerat omnis expedita, dolore iste.'
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
