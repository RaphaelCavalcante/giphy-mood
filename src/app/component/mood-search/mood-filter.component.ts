import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {Location} from '@angular/common';


import {Gif} from '../../model/gif';
import {GifService} from '../../service/gif.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector:'filter-mood',
    template:'../../../template/mood-search.template.html'
})
export class MoodFilterComponent implements OnInit{
    constructor(
         private gifService:GifService,
        private route:ActivatedRoute,
        private location:Location,
        private router:Router){}
    
    ngOnInit():void{
        this.route.queryParams.subscribe(params=>{
            console.log(params);
        });
    }
}