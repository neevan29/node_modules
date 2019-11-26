import { TestBed } from '@angular/core/testing';

import { ScenaiApiService } from './scenai-api.service';

describe('ScenaiApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScenaiApiService = TestBed.get(ScenaiApiService);
    expect(service).toBeTruthy();
  });
});
