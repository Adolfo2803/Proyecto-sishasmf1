import { TestBed } from '@angular/core/testing';

import { TablaCirugiasService } from './tabla-cirugias.service';

describe('TablaCirugiasService', () => {
  let service: TablaCirugiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaCirugiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
