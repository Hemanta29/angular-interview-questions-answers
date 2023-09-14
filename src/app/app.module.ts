import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ChildComponent } from './child.component';
import { MyInterceptorService } from './my-interceptor.service';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { BackgroundChangerDirective } from './backgroundChanger.directive';
import { FullnamePipe } from './fullName.pipe';
import { AuthGuardService } from './authGuard.service';
import { FooModule } from './foo/foo.module';
import { FooService } from './foo/foo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TodosComponent,
    TodoComponent,
    BackgroundChangerDirective,
    FullnamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FooModule.forRoot({ baseUrl: 'http://localhost:3004/' }),
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
  ],
  providers: [
    UsersService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
