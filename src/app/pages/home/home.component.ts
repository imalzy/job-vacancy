import { Component, OnDestroy, OnInit } from '@angular/core';
import { KeyValuePipe, NgFor, NgIf } from '@angular/common';

import { map, Subject, takeUntil } from 'rxjs';

import { SliderComponent } from '../../components/slider/slider.component';
import { JobService } from '../../services/job.service';
import { IUPAPIResponse } from '../../models/job';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, NgIf, NgFor, KeyValuePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  destroyed = new Subject();
  jobList: { [key: string]: IUPAPIResponse[] } = {};
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
   this.fetchData();
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  fetchData(): void {
    console.log('Fetching data...');
    this.jobService
      .getJobs()
      .pipe(
        map((items: IUPAPIResponse[]) =>
          items.reduce((acc, item) => {
            const categoryKey = item.cat_title ?? ('uncategorized' as string);
            if (!acc[categoryKey]) {
              acc[categoryKey] = [];
            }
            acc[categoryKey].push(item);
            return acc;
          }, {} as { [key: string]: IUPAPIResponse[] })
        ),
        takeUntil(this.destroyed)
      )
      .subscribe((response) => {
        this.jobList = response;
      });
  }
}
