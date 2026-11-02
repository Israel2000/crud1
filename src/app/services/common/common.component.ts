import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-common',
  imports: [],
  templateUrl: './common.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './common.component.css'
})
export class CommonComponent {
  $onLogin: Subject<any> = new Subject<any>();
}
