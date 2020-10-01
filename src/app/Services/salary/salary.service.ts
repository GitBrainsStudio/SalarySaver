import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Cost } from 'src/app/Models/Cost';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor() { }

  get costsFromCache() : Observable<Cost[]>
  {
    let cacheCosts = JSON.parse(localStorage.getItem('costs'));
    
    if (!cacheCosts) cacheCosts = [];

    return of(cacheCosts);
  }

  updateCostsInCache(cost:Cost)
  {
    let updatedArrayCosts;
    this.costsFromCache.subscribe(data => updatedArrayCosts = data);
    updatedArrayCosts.push(cost);
    localStorage.setItem('costs', JSON.stringify(updatedArrayCosts)); 
  }

}
