import { Routes } from "@angular/router";
import { HomeView } from "../views/home/home.component";


export const routes : Routes = [
    {
        path: "home",
        component: HomeView
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];