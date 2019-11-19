import { Component, OnInit } from '@angular/core';
import { ThemoviedbService } from '../../themoviedb.service';
import { RootObjectResponse } from '../../entities/RootObjectResponse';
import { Result } from '../../entities/Result';
import { NgForm } from '@angular/forms';
import { MoviesSelected } from '../../entities/MoviesSelected';
import { DataService } from '../../data.service';



@Component({
  selector: 'app-comedy',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  tmdbHostImageURL: string = 'http://image.tmdb.org/t/p/original';
  getMovieListResponse: RootObjectResponse;
  getMovieListResponseResult: Result[];
  movieList: MoviesSelected[];

  
  constructor(private themoviedbService: ThemoviedbService, private dataService: DataService) { }
  // constructor(private themoviedbService: ThemoviedbService) { }

  ngOnInit() {

    this.dataService.currentMessage.subscribe(message => this.movieList = message);

    //calling GET
    this.themoviedbService.getPopularMovieList().subscribe(response => {
      this.getMovieListResponse = response;
    });
  }

  addToCartMethod(event:string) {
    console.log('add');
    console.log(this.movieList);
    console.log(event);
    this.movieList.push({
      movieTitle: event
    });
    console.log(this.movieList);
    this.dataService.changeMessage(this.movieList);
  };

  removeFromCartMethod(event) {
    console.log('remove');
    console.log(event.value);
    let index = this.movieList.findIndex(record => record.movieTitle === event.value);

    console.log(index);
    this.movieList.splice(index, 1)
    console.log(this.movieList);
  }
}


