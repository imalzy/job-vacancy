import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUPAPIResponse } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private urlApi = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getJobs(): Observable<IUPAPIResponse[]> {
    return this.httpClient.get<IUPAPIResponse[]>(`${this.urlApi}/jobs`);
  }
}
