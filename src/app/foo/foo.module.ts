import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FooConfig } from './foo.interface';
import { FooService } from './foo.service';

@NgModule({
  imports: [CommonModule],
})
export class FooModule {
  static forRoot(config: FooConfig): ModuleWithProviders<FooModule> {
    return {
      ngModule: FooModule,
      providers: [FooService, { provide: 'config', useValue: config }],
    };
  }
}
