import { TestBed } from '@angular/core/testing';

import { AppelServiceService } from './appel-service.service';

describe('AppelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppelServiceService = TestBed.get(AppelServiceService);
    expect(service).toBeTruthy();
  });
});
