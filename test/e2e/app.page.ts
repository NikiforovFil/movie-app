import {browser, by, element} from 'protractor'

export class AppPage {
  navigateTo(url: string = '') {
    return browser.get(`http://localhost:4200/${url}`)
  }

  getButtonClassList() {
    return element(by.css('.app button'))
    // return element(by.css('app navbar-component__movie-types button')).getAttribute('class')
  }
}
