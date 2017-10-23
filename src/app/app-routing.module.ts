import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoodDashboardComponent} from './component/mood-dashboard/mood-dashboard.component';
import {MoodSearchComponent} from './component/mood-search/mood-search.component';

const routes:Routes = [
    {path:'', redirectTo: '/mood-dashboard', pathMatch:'full'},
    {path:'mood-dashboard', component:MoodDashboardComponent},
    {path:'mood/:mood',component:MoodSearchComponent},
    {path:'mood/:mood?q=:filter', component:MoodSearchComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}