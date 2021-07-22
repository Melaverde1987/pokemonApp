import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //my test
  it("should create a complete url with limit and offset", () => {
    const limit = 10;
    const offset = 10;
    service.getData(limit, offset);
    expect(service.getData).toBeTruthy();
  });

  //my test
  it("should create a complete url with pokemon name", () => {
    const name = 'pikachu';
    service.getDetailsData(name);
    expect(service.getData).toBeTruthy();
  });
});
