import {Component} from '@angular/core';

const moods: string[] = [
        'Happy',
        'Sad',
        'Silly',
        'Stressed',
        'Frustrated',
        'Peaceful',
        'Angry',
        'Hungry',
        'Sleepy',
        'Good'
]

@Component({
    selector: 'mood-dashboard',
    templateUrl: '../../../template/mood-dashboard.template.html',
})
export class MoodDashboardComponent {
    array_moods: string[] = moods;
}
