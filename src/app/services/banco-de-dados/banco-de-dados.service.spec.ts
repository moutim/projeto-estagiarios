import { TestBed } from '@angular/core/testing';

import { BancoDeDadosService } from './banco-de-dados.service';

describe('BancoDeDadosService', () => {
  let service: BancoDeDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoDeDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
