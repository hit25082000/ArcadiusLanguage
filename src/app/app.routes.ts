import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { LanguageComponent } from './pages/language/language.component';
import { MainComponent } from './shared/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { PromoComponent } from './pages/promo/promo.component';
import { GamesComponent } from './pages/games/games.component';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {path: '',
    component: MainComponent},
    {path: 'index',
      component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {path: 'login',
      component: LoginComponent},
      {path: 'register',
      component: RegisterComponent},
      {path: 'about',
      component: AboutComponent},
      {path: 'promo',
      component: PromoComponent,
      canActivate: [AuthGuard],
    },
      {path: 'language',
      component: LanguageComponent},
      {path: 'games',
      component: GamesComponent},
    ]},
    {path: 'login',
      component: LoginComponent},
    {path: 'register',
      component: RegisterComponent},
  //{path: 'unauthorized', component: UnauthorizedComponent},
  //{path: '**', component: NotFoundComponent},
];
