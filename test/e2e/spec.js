class AppPage {
  baseUrl = 'http://localhost:4200'

  navigateTo(url = '') {
    return browser.get(`http://localhost:4200/${url}`)
  }

  getTitle() {
    return browser.getTitle()
  }
}

describe('app main test', () => {
  let page
  let navigateBtns

  beforeEach(async () => {
    page = new AppPage()
    page.navigateTo()
    navigateBtns = $$('.navbar-component__movie-types button')
  })

  describe('init tests', () => {
    it('should title to be equal "MovieFinder"', async () => {
      let title = await page.getTitle()
      expect(title).toEqual('MovieFinder')
    })

    it('should default url to be equal "/system/POPULAR" ', async () => {
        expect(await browser.getCurrentUrl()).toEqual(`${page.baseUrl}/system/POPULAR`)
      }
    )

    it('should popular button is to be active by default', async () => {
      let popularBtn = await navigateBtns.first()
      let classes = await popularBtn.getAttribute('class')
      expect(await classes.indexOf('active')).not.toEqual(-1)
    })
  })

  describe('navbar navigation test', () => {
    it('should navigate on click', async () => {
      let countBtn = await navigateBtns.count() - 1
      let result = {}
      let currentUrl = await browser.getCurrentUrl()

      while (countBtn >= 0) {
        let btn = await navigateBtns.get(countBtn)
        await btn.click()
        let newUrl = await browser.getCurrentUrl()

        let isNavigate = newUrl !== currentUrl
        if (isNavigate) currentUrl = newUrl

        let classes = await btn.getAttribute('class')
        let isActiveBtn = await classes.indexOf('active') !== -1

        result[await btn.getText()] = {isNavigate, isActiveBtn}

        countBtn--
      }

      let mockData = {
        'Upcoming': {isNavigate: true, isActiveBtn: true},
        'Now playing': {isNavigate: true, isActiveBtn: true},
        'Top rated': {isNavigate: true, isActiveBtn: true},
        'Popular': {isNavigate: true, isActiveBtn: true}
      }
      expect(result).toEqual(mockData)
    })
  })

})
