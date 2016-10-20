import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Introduce worksignal components here
import { ElTestPageComponent } from './el-test/el-test-page/el-test-page.component';
import {ElHomeComponent} from './el-home/el-home.component';


const routes: Routes = [
  { path: 'test', component: ElTestPageComponent },
  { path: '', component: ElHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class WsElementsRoutingModule { }
