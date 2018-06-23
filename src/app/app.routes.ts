import { RouterModule } from '@angular/router';

const routes = [
  {path: '', loadChildren: 'components/main-view/main-view.module#MainViewModule'}
];

export const Routing = RouterModule.forRoot(routes, { useHash: true });
