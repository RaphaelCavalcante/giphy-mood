import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap,Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';

import {forbiddenCharValidator} from '../../validator/forbidden-chars.directive';
import {Gif} from '../../model/gif';
import {GifService} from '../../service/gif.service';

@Component({
    selector:'mood-filter',
    templateUrl:'../../../template/mood-search.template.html'
})
export class MoodFilterComponent implements OnInit{
    constructor (private location:Location, private router:Router, private route:ActivatedRoute,private gifService:GifService){}
    
    filter_field = {filter_txt:''};

    form;
    gifs:Gif[];
    goBack():void{
        this.location.back();
    }
    addFilter(filter:string):void{
        let para=this.route.paramMap["source"]["_value"];
        this.router.navigate(['/mood/'+para["mood"]+"/"+filter]);
    }
    filterForm: FormGroup;
    ngOnInit():void{
        this.filterForm = new FormGroup({
            'filter_field': new FormControl(this.filter_field,[
                forbiddenCharValidator(/teste/i)
            ])
        });
        this.route.paramMap.switchMap((param:ParamMap)=>this.gifService.addFilter(param.get("mood"), param.get("filter")))
            .subscribe(gifs=>{this.gifs=gifs;})
    }
}