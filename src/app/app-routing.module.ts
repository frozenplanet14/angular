import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultViewComponent } from './default-view/default-view.component';

const routes: Routes = [
  { path: 'default', component: DefaultViewComponent },
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./content-projection/content-projection.module').then(
        (m) => m.ContentProjectionModule
      ),
  },
  { path: '', redirectTo: '/default', pathMatch: 'full' }, // redirect to `Default-View`
  { path: '**', component: DefaultViewComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
