import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'rangeFilter'
})
export class RangeFilterPipe implements PipeTransform {

  transform(entireData:any, arg1:any,arg2:any): any {
    let val;
    if(arg2>arg1 && arg2>=60){
      val=entireData.filter((fObj:any)=>{
        if(fObj.food_price>=arg1 && fObj.food_price<=arg2){
          return fObj;
        }
      });
    }
    else{
      return entireData;
    }
    return val;
  }

}
