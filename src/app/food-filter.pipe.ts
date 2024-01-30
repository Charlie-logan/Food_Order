import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  public res:any=[];
  transform(entireData:any, search:any): any {
    if(search.length>=3){
      this.res=entireData.filter((xyz:any)=>{
        if(xyz.food_name.toLowerCase().trim().includes(search.toLowerCase().trim())){
          return xyz;
        }
      });
    }
    else{
      return entireData;
    }
    return this.res;
  }

}
