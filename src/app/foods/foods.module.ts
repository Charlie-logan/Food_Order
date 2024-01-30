import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodsRoutingModule } from './foods-routing.module';
import { FoodsComponent } from './foods.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FoodFilterPipe } from '../food-filter.pipe';
import { RangeFilterPipe } from '../range-filter.pipe';

@NgModule({
  declarations: [
    FoodsComponent,
    FoodFilterPipe,
    RangeFilterPipe,
  ],
  imports: [
    CommonModule,
    FoodsRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,

  ]
})
export class FoodsModule { }
