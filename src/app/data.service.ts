import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MoviesSelected } from './entities/MoviesSelected';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  viewCart:MoviesSelected[] =[];
  private messageSource = new BehaviorSubject<MoviesSelected[]>(this.viewCart);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: MoviesSelected[]){
    this.messageSource.next(message)
  }
}
