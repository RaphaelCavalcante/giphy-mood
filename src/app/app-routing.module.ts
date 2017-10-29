import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoodDashboardComponent} from './component/mood-dashboard/mood-dashboard.component';
import {MoodSearchComponent} from './component/mood-search/mood-search.component';
import {MoodFilterComponent} from './component/mood-filter/mood-filter.component';



const routes: Routes = [
    {path: '', redirectTo: '/mood-dashboard', pathMatch: 'full'},
    {path: 'mood-dashboard', component: MoodDashboardComponent},
    {path: 'mood/:mood', component: MoodSearchComponent},
    {path: 'mood/:mood/:filter', component: MoodFilterComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
