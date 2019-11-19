import { Component, OnInit } from '@angular/core';
import { RootObjectResponse } from '../../entities/RootObjectResponse';
import { Result } from '../../entities/Result';
import { ThemoviedbService } from '../../themoviedb.service';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.css']
})
export class DocumentaryComponent implements OnInit {

  tmdbHostImageURL:string = 'http://image.tmdb.org/t/p/original';
  getMovieListResponse: RootObjectResponse;
  getMovieListResponseResult: Result[];
  constructor(private themoviedbService: ThemoviedbService) { }

  ngOnInit() {

    //calling GET
    this.themoviedbService.getDocumentaryMovieList().subscribe(response => {
      this.getMovieListResponse = response;
    });
  }

}
