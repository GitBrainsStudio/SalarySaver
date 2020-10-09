import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cost } from 'src/app/Models/Cost';
import { SalaryService } from 'src/app/Services/salary/salary.service';

@Component({
  selector: 'app-consumption-list',
  templateUrl: './consumption-list.component.html',
  styleUrls: ['./consumption-list.component.css']
})
export class ConsumptionListComponent implements OnInit {

  constructor(private service : SalaryService) { }

  ngOnInit(): void {
    this.$data = this.service.costsFromCache;
  }

  $data : Observable<Cost[]>;

}
