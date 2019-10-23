import { TestBed } from '@angular/core/testing';

import { MoviesDbService } from './movies-db.service';

describe('MoviesDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesDbService = TestBed.get(MoviesDbService);
    expect(service).toBeTruthy();
  });
});
