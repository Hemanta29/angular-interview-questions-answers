import { Inject, Injectable } from '@angular/core';
import { FooConfig } from './foo.interface';

@Injectable()
export class FooService {
  fooConfig!: FooConfig;
  constructor(@Inject('config') private config: FooConfig) {
    console.log(config);
    this.fooConfig = config;
  }
}
