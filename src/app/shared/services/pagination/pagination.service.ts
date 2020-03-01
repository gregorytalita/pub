import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private page: BehaviorSubject<number> = new BehaviorSubject(1);
  nextPageAvailable: boolean = false;
  previousPageAvailable: boolean = false;
  currentPage = this.page.asObservable();

  getCurrentPage() {
    return this.page
  }

  updatePage(page: number) {
    this.page.next(page)
  }
}
