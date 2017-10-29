import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

import {Gif} from '../../model/gif';
import {GifService} from '../../service/gif.service';
import {forbiddenCharValidator} from '../../validator/forbidden-chars.directive';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'search-mood',
    templateUrl: '../../../template/mood-search.template.html'
})
export class MoodSearchComponent implements OnInit {
    constructor (
        private gifService: GifService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}
    gifs: Gif[];
    filterForm: FormGroup;
    filterStr: string;
    filter= {name: ''};
    goBack(): void {
        this.location.back();
    }
    addFilter(filterStr: string): void {
        let para = this.route.paramMap['source']['_value'];
        this.router.navigate(['/mood/' + para['mood'] + '/' + filterStr]);
    }
    ngOnInit(): void {
        this.filterForm = new FormGroup({
                'filterControl': new FormControl(this.filter.name, [
                    forbiddenCharValidator(/^[\\\/!@#\$%\^\&*\)\(+=._-]/i)
                ])
            });
        this.route.paramMap.switchMap((param: ParamMap) => this.gifService.getByMood(param.get('mood')))
        .subscribe(gifs => this.gifs = gifs );
    }
    get filterControl(){
        return this.filterForm.get('filterControl');
    }
}
