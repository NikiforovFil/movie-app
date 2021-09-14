import {ComponentFixture, TestBed} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'

import {AppComponent} from './app.component'
import {initializeApp} from "firebase/app"

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy()
  })

  it(`should have firebaseConfig`, () => {
    expect(component.firebaseConfig).toBeDefined();
  });

  it('should init firebase', () => {
    // const compiled = fixture.nativeElement as HTMLElement;
    expect(component.app).toEqual(initializeApp(component.firebaseConfig));
  });
})
