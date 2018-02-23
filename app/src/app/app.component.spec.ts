///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>
import {async, TestBed} from '@angular/core/testing';
import {IonicModule, Platform} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {MyAppComponent} from './app.component';
import {PlatformMock, SplashScreenMock, StatusBarMock} from "../../test-config/mocks-ionic";

describe('MyApp Component', () => {
  let fixture;
  let component: MyAppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppComponent],
      imports: [
        IonicModule.forRoot(MyAppComponent)
      ],
      providers: [
        {provide: StatusBar, useClass: StatusBarMock},
        {provide: SplashScreen, useClass: SplashScreenMock},
        {provide: Platform, useClass: PlatformMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyAppComponent).toBe(true);
  });

});
