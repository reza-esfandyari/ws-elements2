import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ElTestComponent } from './el-test/el-test.component';
import { WsElementsRoutingModule } from './app-routing.module';
import { ElHomeComponent } from './el-home/el-home.component';
import { ElTestPageComponent } from './el-test/el-test-page/el-test-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ElTestComponent,
    ElHomeComponent,
    ElTestPageComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    WsElementsRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
