import {Component, OnInit} from '@angular/core';
import {GifService} from '../../service/gif.service';

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
export class MoodDashboardComponent implements OnInit{
    private array_moods:string[]=moods;

    constructor(private gifservice:GifService){}
    ngOnInit():void{
        console.log(this.gifservice.getGifsByMood("mood"));
    }

}
