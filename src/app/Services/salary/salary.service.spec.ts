import { TestBed } from '@angular/core/testing';
import { SalaryService } from './salary.service';
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

  describe('addCostInCache', () => 
  {
    var newCost: Cost;

    beforeEach(() => {
      newCost =  { Guid : service.generateGuid, Name : "Unit Test Object", Sum: 500  }
    })

    it('метод должен добавить новый объект в коллекцию в кэше (local-storage)', () =>
    {     

      let costsBeforeAddingObject = Array<Cost>();

      let costsAfterAddingObject = Array<Cost>();

      service.costsFromCache.subscribe(result => costsBeforeAddingObject = result);

      service.addCostInCache(newCost); 

      service.costsFromCache.subscribe(result => costsAfterAddingObject = result);

      expect(costsAfterAddingObject.length).toBe(costsBeforeAddingObject.length+1);

      expect(costsAfterAddingObject.filter(obj => obj.Guid == newCost.Guid).length).toBe(1);

      expect(() => service.addCostInCache(newCost)).toThrowError("Элемент с данным GUID уже есть в списке");

    });
  })

  describe('clearAllCostsFromCache', () => 
  {
    it('метод должен удалить все расходы из кэша и сделать коллекцию пустой', () => 
    {
      let costsAfterClearCache = Array<Cost>();

      service.clearAllCostsFromCache();

      service.costsFromCache.subscribe(result => costsAfterClearCache = result);

      expect(costsAfterClearCache.length).toBe(0); 
    })
  })

  describe('deleteCostFromCache', () => 
  {
    it('добавляем расход в список, а потом его удаляем', () => 
    {
      let arrayBeforeDeleteObject = Array<Cost>();
      let arrayAfterDeleteObject = Array<Cost>();


      let newCost : Cost = { Guid : service.generateGuid, Name : "Unit Test Object", Sum: 500  }

      service.addCostInCache(newCost);

      service.costsFromCache.subscribe(result => arrayBeforeDeleteObject = result);
      
      service.deleteCostFromCache(newCost.Guid);

      service.costsFromCache.subscribe(result => arrayAfterDeleteObject = result);

      expect(arrayBeforeDeleteObject.filter(obj => obj.Guid == newCost.Guid).length).toBe(1); 
      expect(arrayAfterDeleteObject.filter(obj => obj.Guid == newCost.Guid).length).toBe(0); 
      expect(arrayAfterDeleteObject.length).toBe(arrayBeforeDeleteObject.length-1); 
      expect(() => service.deleteCostFromCache('0000-guid-0000')).toThrowError("Элемент с данными GUID не найден");
    });

  })

  describe('generateGuid', () => 
  {
    it('метод должен сгенерировать гуид', () => 
    {
      let response;

      response = service.generateGuid;

      expect(response).not.toBeNull();
    })
  })
});



