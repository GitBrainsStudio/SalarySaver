import { TestBed } from '@angular/core/testing';
import { SalaryService } from './salary.service';
import { of } from 'rxjs'; // Add import

describe('SalaryService', () => {
  let service: SalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryService);
  });

  it('сервис должен создаться блять', () => {
    expect(service).toBeTruthy();
  });

  describe('getCosts', () => 
  {
    it('метод должен вернуть коллекцию всех расходов', () => {
      const costResponse = [
        {
          Name : "Хлеб",
          Sum : 31,
/*           Date : new Date(2020, 09, 30) */
        },
        {
          Name : "Молоко",
          Sum : 39,
/*           Date : new Date(2020, 09, 30) */
        },
        {
          Name : "Яйцо куриное",
          Sum : 55,
/*           Date : new Date(2020, 09, 30) */
        }
      ];

      let response;
      spyOn(service, 'getCosts').and.returnValue(of(costResponse));

      service.getCosts().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(costResponse);
  })
  });
});
