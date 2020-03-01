import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  currentPage: number = 1;
  nextPageAvailable: boolean = false;
  previousPageAvailable: boolean = false;


  handlePage(value: number) {
    this.currentPage = value;
    this.currentPage <= 1 
      ? this.previousPageAvailable = false 
      : this.previousPageAvailable = true;
  }
}
