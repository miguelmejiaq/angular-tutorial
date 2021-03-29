import { Routes } from "@angular/router";
import { HomeView } from "../views/home/home.component";
import { NotFoundComponent } from "../views/notFound/notFound.component";


export const routes : Routes = [
    {
        path: "home",
        component: HomeView
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];