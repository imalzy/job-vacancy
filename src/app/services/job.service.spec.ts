import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

import { JobService } from './job.service';
import { IUPAPIResponse } from '../models/job';
import { environment } from '../../environments/environment';

describe('JobService', () => {
  let service: JobService;
  let httpMock: HttpTestingController;
  const urlApi = environment.baseUrl;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobService]
    });
    service = TestBed.inject(JobService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return an observable', () => {
    const observable = service.getJobs();
    expect(observable).toBeInstanceOf(Observable);
  });

  it('should make a GET request to the correct URL', () => {
    service.getJobs().subscribe();
    const req = httpMock.expectOne(`${urlApi}/jobs`);
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });

  it('should return an array of IUPAPIResponse objects', () => {
    const mockResponse: IUPAPIResponse[] = [
      { id: '1', jobid: '1', title: 'Test Job' }
    ];
    service.getJobs().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(`${urlApi}/jobs`);
    req.flush(mockResponse);
    httpMock.verify();
  });
});