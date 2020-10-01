import { TestBed } from '@angular/core/testing';
import { SalaryService } from './salary.service';
import { of } from 'rxjs'; // Add import
import { Cost } from 'src/app/Models/Cost';

describe('SalaryService', () => {
  let service: SalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryService);
  });

  it('сервис должен создаться', () => {
    expect(service).toBeTruthy();
  });

/*   describe('getCosts', () => 
  {
    it('метод должен вернуть коллекцию всех расходов', () => {
      const costResponse = [
        {
          Name : "Хлеб",
          Sum : 31,
        },
        {
          Name : "Молоко",
          Sum : 39,
        },
        {
          Name : "Яйцо куриное",
          Sum : 55,
        }
      ];

      let response;
     spyOn(service, 'getCosts').and.returnValue(of(costResponse));

       service.getCosts().subscribe(res => {
        console.log(res)
        response = res;
      }); 

      expect(response).toEqual(costResponse);
  })
  });
 */


  describe('getCostsFromCache', () => 
  {
    it('метод должен вернуть коллекцию расходов из кэша (не нулевую null)', () =>  
    {
      let response; 

      service.costsFromCache.subscribe(res => {
        response = res;
      });

      expect(response).not.toBeNull();
    });
  })


  describe('updateCostsInCache', () => 
  {
    it('метод должен добавить новый объект в коллекцию в кэше (local-storage)', () =>
    {
      let costsBeforeAddingObject = Array<Cost>();
      let costsAfterAddingObject = Array<Cost>();
      let newCost = new Cost();
      
      newCost.Name = "Новый объект";
      newCost.Sum = 331;


      service.costsFromCache.subscribe(result => costsBeforeAddingObject = result);

      service.updateCostsInCache(newCost);

      service.costsFromCache.subscribe(result => costsAfterAddingObject = result);

      expect(costsAfterAddingObject.length).toBe(costsBeforeAddingObject.length+1);

    });
  })


});



