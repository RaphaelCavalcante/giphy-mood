import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
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
        private router:Router
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
        this.router.navigate(['/mood/'+para["mood"]],{queryParams:{filter:filter}});
    }
    ngOnInit():void{
        this.route.queryParams.subscribe(params=>{
            if(params.filter){
                this.route.paramMap.switchMap((param:ParamMap)=>this.gifService.addFilter(param.get("mood"), params.filter))
            .subscribe(gifs=>{this.gifs=gifs;});
            }else{
                this.route.paramMap.switchMap((param:ParamMap)=>this.gifService.getByMood(param.get("mood")))
            .subscribe(gifs=>this.gifs=gifs );
            }
        });
    }
}