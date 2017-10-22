import {Component, OnInit} from '@angular/core';
import {GifService} from '../../service/gif.service';
import {Http, Response} from '@angular/http';
import {Gif} from '../../model/gif';

const moods:string[]=[
        "Happy",
        "Sad",
        "Silly",
        "Stressed",
        "Frustrated",
        "Peaceful",
        "Angry",
        "Hungry",
        "Sleepy",
        "Good"
]

@Component({
    selector: 'mood-dashboard',
    templateUrl: '../../../template/mood-dashboard.template.html',
})
export class MoodDashboardComponent{
    private array_moods:string[]=moods;
    constructor(private http:Http){}
}
