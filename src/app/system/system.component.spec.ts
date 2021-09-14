import {HttpClientModule} from "@angular/common/http"
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {Observable} from "rxjs"
import {MoviesTypes} from "../common/models/moviesTypes"

import {MovieService} from "./services/movie.service"
import {SystemComponent} from "./system.component"

describe('SystemComponent', () => {
  let component: SystemComponent
  let fixture: ComponentFixture<SystemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        SystemComponent
      ],
      providers: [
        MovieService
      ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the SystemComponent', () => {
    expect(component).toBeTruthy()
  })

  it(`should have isLoaded = false`, () => {
    expect(component.isLoaded).toBeFalse()
  })

  it('should have isOpenedSideNav = false', () => {
    expect(component.isOpenedSideNav).toBeFalse()
  })

  it('should have toggle navbar flag', () => {
    component.isOpenedSideNav = false
    component.onToggleDrawer()
    expect(component.isOpenedSideNav).toBeTrue()
  })

  it('should showMovies() return Observable', () => {
    let moviesType = MoviesTypes
    const result: boolean = Object.values(moviesType)
      .reduce((acc: boolean, type: string) => {
        return acc ? component.showMovies(type) instanceof Observable : false
      }, true)
    expect(result).toBeTrue()
  })

})
