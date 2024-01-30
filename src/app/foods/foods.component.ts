import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewAService } from '../new-a.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

    public foodList:any=[];
    public totalRows:number=0;
    public startLink:number=1;
    public searchedData:any=[];
    public startRange:number=50;
    public endRange:number=50;

    constructor(private cdRef: ChangeDetectorRef,private aserv:NewAService) {}

    ngOnInit(): void {
        let data = this.aserv.getAll();
        console.log(data);
        data.subscribe((abc:any)=>{
          console.log(abc);
          console.log(abc.length);
          this.foodList=abc;
          this.totalRows=abc.length;

        });
    }

    onReset(){
      this.startRange=50;
      this.endRange=51;
      this.cdRef.detectChanges();
      this.searchedData='';
    }
}
