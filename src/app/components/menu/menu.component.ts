import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  constructor(private _router: Router) {
  }
}
