import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {Gif} from '../../model/gif';
import {GifService} from '../../service/gif.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector:'search-mood',
    templateUrl:'../../../template/mood-search.template.html'
})
export class MoodSearchComponent implements OnInit{
    constructor (
        private gifService:GifService,
        private route:ActivatedRoute,
        private location:Location,
    ){}
    gifs:Gif[];
    mood:string;
    filter: string;
    status:string;
    goBack():void{
        this.location.back();
    }
    addFilter(filter:string):void{
        let para=this.route.paramMap["source"]["_value"];
        this.route.paramMap.switchMap((param:ParamMap)=>this.gifService.addFilter(para["mood"], filter))
            .subscribe(gifs=>{this.gifs=gifs;});
    }
    ngOnInit():void{
        let para=this.route.paramMap["source"]["_value"];
        if(para["filter"]){
            this.route.paramMap.switchMap((param:ParamMap)=>this.gifService.addFilter(param.get("mood"), param.get("filter")))
            .subscribe(gifs=>{this.gifs=gifs; this.mood=para["mood"]; this.filter=para["filter"]});
        }else{
            this.route.paramMap.switchMap((param:ParamMap)=>this.gifService.getByMood(param.get("mood")))
            .subscribe(gifs=>this.gifs=gifs );
        }
    }
}