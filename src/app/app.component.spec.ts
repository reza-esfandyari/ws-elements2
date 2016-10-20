/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { ElTestComponent } from './el-test/el-test.component';
import { WsElementsRoutingModule } from './app-routing.module';
import { ElHomeComponent } from './el-home/el-home.component';
import { ElTestPageComponent } from './el-test/el-test-page/el-test-page.component';

describe('App: WsElements', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ElHomeComponent,
        ElTestPageComponent,
        ElTestComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        WsElementsRoutingModule,
        RouterTestingModule
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a title as 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Steps to add a new element to this project');
  }));
});
