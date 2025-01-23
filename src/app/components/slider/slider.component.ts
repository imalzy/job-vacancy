import { NgFor, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { IUPAPIResponse } from '../../models/job';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements OnInit, OnChanges, OnDestroy {
  @Input() label: string = '';
  @Input() jobs: IUPAPIResponse[] = [];
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;
  
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('Init');
  }

  ngOnDestroy(): void {
  }

  scrollLeft() {
    this.slider.nativeElement.scrollBy({
      left: -200, // Scroll left by 200px
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({
      left: 200, // Scroll right by 200px
      behavior: 'smooth',
    });
  }
}
