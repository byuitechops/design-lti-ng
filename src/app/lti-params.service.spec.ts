import { TestBed, inject } from '@angular/core/testing';

import { LtiParamsService } from './lti-params.service';

describe('LtiParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LtiParamsService]
    });
  });

  it('should be created', inject([LtiParamsService], (service: LtiParamsService) => {
    expect(service).toBeTruthy();
  }));
});
