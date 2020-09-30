import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Cost } from 'src/app/Models/Cost';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor() { }

  getCosts(): Observable<Array<Cost>> {
    return of(this.costs);
  }

  costs: Array<Cost> = [  // Add employee object

  ];
}
