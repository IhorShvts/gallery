import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';


const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app-root'
    },
    {
        path: 'gallery',
        loadChildren: './gallery-module/gallery-module.module#GalleryModuleModule',
        canLoad: [AuthGuard],
    }

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
