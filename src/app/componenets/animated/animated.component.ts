import { Component, OnInit } from '@angular/core';
import { RootObjectResponse } from '../../entities/RootObjectResponse';
import { ThemoviedbService } from '../../themoviedb.service';
import { Result } from '../../entities/Result';

@Component({
  selector: 'app-animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.css']
})
export class AnimatedComponent implements OnInit {

  tmdbHostImageURL: string = 'http://image.tmdb.org/t/p/original';
  getMovieListResponse: RootObjectResponse;
  getMovieListResponseResult: Result[];
  constructor(private themoviedbService: ThemoviedbService) { }

  ngOnInit() {

    //calling GET
    this.themoviedbService.getAnimatedMovieList().subscribe(response => {
      this.getMovieListResponse = response;
    });
  }

}
