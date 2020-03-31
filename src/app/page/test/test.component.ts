import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'smd-test',
  templateUrl: './test.html'
})
export class TestComponent implements OnDestroy, OnInit {
  /**
   * @constructor
   */
  public constructor() {}

  /**
   * Initializes the controller
   */
  public ngOnInit() {}

  /**
   * Clean up
   */
  public ngOnDestroy() {}
}
