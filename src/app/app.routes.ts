import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MeProfileComponent } from './pages/me-profile/me-profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'me-profile',
        component:MeProfileComponent
    },
    {
        path:'chat',
        component:ChatComponent
    },
    {
        path:'search',
        component:SearchComponent
    },
    {
        path:'**',
        component:NotFoundComponent
    },
];
