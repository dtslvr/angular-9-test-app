import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestComponent } from './test.component';
import { SmdTestRoutingModule } from './test-routing.module';

@NgModule({
  declarations: [TestComponent],
  exports: [],
  imports: [CommonModule, SmdTestRoutingModule],
  providers: []
})
export class SmdTestModule {}
