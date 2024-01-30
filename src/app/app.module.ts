import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FoodsComponent } from './foods/foods.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
// import { RangeFilterPipe } from './range-filter.pipe';
// import { FoodFilterPipe } from './food-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // RangeFilterPipe,
    // FoodFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
