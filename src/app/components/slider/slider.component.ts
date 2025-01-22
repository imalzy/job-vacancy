import { JsonPipe, NgClass, NgFor, NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { map, Subject, takeUntil } from 'rxjs';

import { JobService } from '../../services/job.service';
import { IUPAPIResponse } from '../../models/job';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor, JsonPipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit, OnChanges, OnDestroy {
  @Input() label: string = '';
  @Input() jobs: IUPAPIResponse[] = [];
  items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`); // Example data with 10 items
  currentIndex = 0;
  itemWidth = 160; // Width of each item + gap

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('Init');
  }

  ngOnDestroy(): void {
  }

  prevSlide(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 1); // Prevent going left beyond the start
  }

  nextSlide(): void {
    const maxIndex = this.items.length - 5; // Total items - visible items
    this.currentIndex = Math.min(maxIndex, this.currentIndex + 1); // Prevent going right beyond the last item
  }
}
