import {Component} from '@angular/core';

/** @title Basic drawer */
@Component({
  selector: 'sidenav-drawer-overview-example',
  templateUrl: 'sidenav-drawer-overview-example.html',
  styleUrls: ['sidenav-drawer-overview-example.css'],
})
export class SidenavDrawerOverviewExample {
  nav_position: string = 'start';

  onTogglePosition(position: string) {
    this.nav_position = position === 'start' ? 'end' : 'start';
    
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */