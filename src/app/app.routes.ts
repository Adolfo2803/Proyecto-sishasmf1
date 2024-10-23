import { Routes } from '@angular/router';
export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'resgistro_archivo',
                loadComponent: () => import('./business/archivo-clinic/archivo-clinic.component')
            },
            {
                path: 'cirugias',
                loadComponent: () => import('./business/cirugias/cirugias.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch:'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo:'dashboard'
    }

   
];