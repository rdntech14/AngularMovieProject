import { Component, OnInit } from '@angular/core';
import { ViewCart } from 'src/app/entities/viewcart';
import { MoviesSelected } from '../../entities/MoviesSelected';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  movieList : MoviesSelected[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.movieList = message);
    console.log('aa');
    console.log(this.movieList);
  }

  newMessage(){
    this.dataService.changeMessage(this.movieList);
  }

  transactions: ViewCart[] = [
    { item: 'Beach ball', cost: 4 },
    { item: 'Towel', cost: 5 },
    { item: 'Frisbee', cost: 2 },
    { item: 'Sunscreen', cost: 4 },
    { item: 'Cooler', cost: 25 },
    { item: 'Swim suit', cost: 15 }
  ];

  displayedColumns: string[] = ['Movie Name', 'cost'];

  // getTotalCost() {
  //   return this.movieList.map(t => t.movieTitle).reduce((acc, value) => acc + value, 0);
  // }

  // getAddToCart() {
  //   this.transactions.push({ item: 'cricket', cost: 10 })
  // }

}
