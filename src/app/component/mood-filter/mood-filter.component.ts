import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Location} from '@angular/common';


import {Gif} from '../../model/gif';
import {GifService} from '../../service/gif.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector:'filter-mood',
    template:'../../../template/home.template.html'
})
export class MoodFilterComponent implements OnInit{
    gifs:Gif[];
    constructor(
         private gifService:GifService,
        private route:ActivatedRoute,
        private location:Location,
        private router:Router){}
    
    ngOnInit():void{
        let filter:string;
        this.route.queryParams.subscribe(params=>{
            filter=params.filter;
        });
        this.route.paramMap.switchMap((param:ParamMap)=>
            this.gifService.addFilter(param.get("mood"), filter)).subscribe(gifs=>this.gifs=gifs);
    }
}