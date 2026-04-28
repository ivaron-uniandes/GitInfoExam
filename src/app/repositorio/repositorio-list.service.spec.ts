import { TestBed } from '@angular/core/testing';

import { RepositorioListService } from './repositorio-list.service';

describe('RepositoioListService', () => {
  let service: RepositorioListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositorioListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
