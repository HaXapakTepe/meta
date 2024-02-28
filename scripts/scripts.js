$(document).ready(function () {
  $('.metro__select').select2({
    dropdownParent: $('.metro__item-select'),
    placeholder: 'Выберите из списка',
  })

  $('.favorites__sorting').select2({
    dropdownParent: $('.favorites__item-select--sorting'),
    placeholder: 'Выберите из списка',
  })

  $('.favorites__searchByMetroStation').select2({
    dropdownParent: $('.favorites__item-select--searchByMetroStation'),
    placeholder: 'Выберите из списка',
  })

  $('.history__sorting').select2({
    dropdownParent: $('.history__item-select--sorting'),
    placeholder: 'Выберите из списка',
  })

  $('.history__searchByMetroStation').select2({
    dropdownParent: $('.history__item-select--searchByMetroStation'),
    placeholder: 'Выберите из списка',
  })

  $('.form__questions').select2({
    dropdownParent: $('.form__select'),
    placeholder: 'Проблема с доступом',
  })

  $('.office__edit-activity').select2({
    dropdownParent: $('.office__edit-select'),
    placeholder: 'Выберите из списка',
  })

  $('.office__businessCardHolder-sorting').select2({
    dropdownParent: $('.office__businessCardHolder-select'),
    placeholder: 'Выберите из списка',
  })

  $('.office__presentations-sorting').select2({
    dropdownParent: $('.office__presentations-select'),
    placeholder: 'Выберите из списка',
  })

  Fancybox.bind('[data-fancybox]', {})

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} (000) 000-00-00',
    }
    const mask = IMask(element, maskOptions)
  }

  const eye = document.querySelectorAll('.office__edit-eye')
  eye?.forEach((elem) => {
    elem.addEventListener('click', function () {
      const entryInputEl = elem?.previousElementSibling
      if (entryInputEl.type === 'password') {
        entryInputEl.type = 'text'
      } else {
        entryInputEl.type = 'password'
      }
    })
  })

  const formIcon = document.querySelectorAll('.form__icon')

  formIcon?.forEach((elem) => {
    elem.addEventListener('click', function () {
      const contentFormInput = elem?.previousElementSibling
      if (contentFormInput.type === 'password') {
        contentFormInput.type = 'text'
        elem.classList.add('form__icon--visible')
      } else {
        contentFormInput.type = 'password'
        elem.classList.remove('form__icon--visible')
      }
    })
  })

  function handleTabClick(tabs, pages, activeTabClass, activePageClass, opacityPageClass) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove(activeTabClass))
        pages.forEach((page) => {
          page.classList.remove(activePageClass)
          page.classList.remove(opacityPageClass)
        })

        tab.classList.add(activeTabClass)
        pages[idx].classList.add(activePageClass)

        setTimeout(() => {
          pages[idx].classList.add(opacityPageClass)
        }, 380)
      })
    })
  }

  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')
  const tabsAlt = document.querySelectorAll('.tab__targetAlt')
  const pagesAlt = document.querySelectorAll('.tab__infoAlt')

  handleTabClick(tabs, pages, 'tab__target--active', 'tab__info--active', 'tab__info--opacity')
  handleTabClick(tabsAlt, pagesAlt, 'tab__targetAlt--active', 'tab__infoAlt--active', 'tab__infoAlt--opacity')

  // const tabs = document.querySelectorAll('.tab__target')
  // const pages = document.querySelectorAll('.tab__info')
  // const tabsAlt = document.querySelectorAll('.tab__targetAlt')
  // const pagesAlt = document.querySelectorAll('.tab__infoAlt')

  // tabs?.forEach((tab, idx) => {
  //   tab.addEventListener('click', () => {
  //     tabs.forEach((tab) => tab.classList.remove('tab__target--active'))
  //     pages.forEach((page) => {
  //       page.classList.remove('tab__info--active')
  //       setTimeout(() => {
  //         page.classList.remove('tab__info--opacity')
  //       }, 380)
  //     })

  //     tab.classList.add('tab__target--active')
  //     pages[idx].classList.add('tab__info--active')

  //     setTimeout(() => {
  //       pages[idx].classList.add('tab__info--opacity')
  //     }, 380)
  //   })
  // })

  // tabsAlt?.forEach((tab, idx) => {
  //   tab.addEventListener('click', () => {
  //     tabsAlt.forEach((tab) => tab.classList.remove('tab__targetAlt--active'))
  //     pagesAlt.forEach((page) => {
  //       page.classList.remove('tab__infoAlt--active')
  //       setTimeout(() => {
  //         page.classList.remove('tab__infoAlt--opacity')
  //       }, 380)
  //     })

  //     tab.classList.add('tab__targetAlt--active')
  //     pagesAlt[idx].classList.add('tab__infoAlt--active')

  //     setTimeout(() => {
  //       pagesAlt[idx].classList.add('tab__infoAlt--opacity')
  //     }, 380)
  //   })
  // })

  const linkEdit = document.querySelector('.office__user--linkEdit')
  const officeItemTab = document.querySelector('.office__item--tab')
  const officeEditBack = document.querySelectorAll('.office__edit-back')
  const officeEditElem = document.querySelectorAll('.office__edit-elem')

  const filteredElements = Array.from(officeEditElem).filter((item) => item.querySelector('.office__edit-info'))

  filteredElements.forEach((item) => {
    const info = item.querySelector('.office__edit-info')

    if (info.textContent == '') {
      info.nextElementSibling.style.display = 'none'
    } else {
      info.nextElementSibling.style.display = 'block'
    }
  })

  linkEdit?.addEventListener('click', () => {
    tabs[0].classList.add('tab__target--active')
  })
  officeEditBack[0]?.addEventListener('click', () => {
    tabs[0].click()
  })
  officeItemTab?.addEventListener('click', () => {
    tabs[5].classList.add('tab__target--active')
  })
  officeEditBack[1]?.addEventListener('click', () => {
    tabs[5].click()
  })

  const officeItems = document.querySelectorAll('.office__item--localStorage')

  officeItems?.forEach(function (item, index) {
    item.addEventListener('click', function () {
      localStorage.setItem('selectedOfficeItem', index)
    })
  })

  const targetItems = document.querySelectorAll('.office__target-item')
  const selectedOfficeItem = localStorage?.getItem('selectedOfficeItem')

  if (targetItems) {
    targetItems[selectedOfficeItem]?.click()
    localStorage.removeItem('selectedOfficeItem')
  }

  const card = document.querySelectorAll('.news__card')
  const newsItem = document.querySelectorAll('.newsItem')
  card?.forEach((el, i) => {
    el.href = `#newsItem-${i + 1}`
    newsItem.forEach((el, i) => {
      el.id = `newsItem-${i + 1}`
    })

    el.addEventListener('click', () => {
      Fancybox.close()
    })
  })

  const calendar = document.querySelectorAll('.calendar__card')
  const calendarItem = document.querySelectorAll('.calendarItem')
  calendar?.forEach((el, i) => {
    el.href = `#calendarItem-${i + 1}`
    calendarItem.forEach((el, i) => {
      el.id = `calendarItem-${i + 1}`
    })

    el.addEventListener('click', () => {
      Fancybox.close()
    })
  })

  const officeModalLink = document.querySelectorAll('.office__modal-link')
  officeModalLink?.forEach((el) => {
    el.addEventListener('click', () => {
      Fancybox.close()
    })
  })

  const back = document.querySelectorAll('.back')

  back?.forEach((item) => {
    item.addEventListener('click', () => {
      Fancybox.close()
    })
  })

  function bottomGratient(item) {
    item.forEach((elem) => {
      elem.addEventListener('scroll', function () {
        const scrollHeight = elem.scrollHeight
        const scrollTop = elem.scrollTop
        const clientHeight = elem.clientHeight

        if (scrollTop + clientHeight === scrollHeight) {
          elem.parentNode.parentNode.classList.add('shadow--unset')
        } else {
          elem.parentNode.parentNode.classList.remove('shadow--unset')
        }
      })
    })
  }

  bottomGratient(document.querySelectorAll('.newsItem__info'))
  bottomGratient(document.querySelectorAll('.calendarItem__info'))

  function playVideo(item) {
    item?.forEach((elem) => {
      const img = elem.querySelector('[class$="-img"]')
      const hidden = elem.querySelector('[class$="-hidden"]')?.firstElementChild
      img.addEventListener('click', () => {
        hidden.click()
      })
    })
  }

  const newsItemVideo = document.querySelectorAll('.newsItem__elem-item--video')
  const calendarItemVideo = document.querySelectorAll('.calendarItem__elem-item--video')
  const supportVideo = document.querySelectorAll('.support__video-item')

  playVideo(newsItemVideo)
  playVideo(calendarItemVideo)
  playVideo(supportVideo)

  const accordions = document.querySelectorAll('.accordion')
  const contents = document.querySelectorAll('.accordion-content')

  accordions?.forEach((acc, index) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()

      const content = contents[index]

      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  const accordionBot = document.querySelectorAll('.accordionBot')
  const contentsBot = document.querySelectorAll('.accordionBot-content')
  const footerRight = document.querySelector('.footer__right ')

  accordionBot?.forEach((acc, index) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()

      const content = contentsBot[index]

      if (acc.classList.contains('accordionBot--active')) {
        acc.classList.remove('accordionBot--active')
        content.style.maxHeight = '0'
        footerRight.style.transition = 'padding 1s ease-in-out'
        setTimeout(() => {
          footerRight.style.paddingTop = '0'
        }, 230)
      } else {
        acc.classList.add('accordionBot--active')
        content.style.maxHeight = content.scrollHeight + 'px'
        footerRight.style.transition = 'unset'
        footerRight.style.paddingTop = '45px'
      }
    })
  })

  const allSwipers = []
  const businessCardHolderSwiper = document.querySelectorAll('.office__businessCardHolder-swiper')
  businessCardHolderSwiper.forEach((swiper, index) => {
    allSwipers.push(setSwiper(index + 1))
  })

  function setSwiper(index) {
    return new Swiper(`.office__businessCardHolder-swiper--${index}`, {
      pagination: {
        el: `.office__businessCardHolder-pagination--${index}`,
        clickable: true,
      },
    })
  }

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      if (document.querySelector('#mapYandex')) {
        var points = [[]]
        myMap = new ymaps.Map('mapYandex', {
          center: [39.7801686722157, -89.64920503007116],
          zoom: 11,
          // controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
          controls: [],
        })

        if (window.innerWidth < 1024) {
          myMap.behaviors.disable('scrollZoom')
          myMap.behaviors.disable('drag')
        }

        for (i = 0; i < points.length; i++) {
          var myPlacemark = new ymaps.Placemark(
            [points[i][1], points[i][2]],
            {
              balloonContent: points[i][0],
            },
            {
              iconLayout: 'default#image',
              balloonLayout: 'default#imageWithContent',
            }
          )
          // myCollection.add(myPlacemark)
          // myMap.geoObjects.add(myPlacemark)

          // myMap.events.add('click', function (e) {
          //   myMap.balloon.close()
          // })
        }

        myMap.geoObjects.add(myCollection)

        myPlacemark.events.add('click', function (event) {
          event.preventDefault()
        })
      }

      if (document.querySelector('#mapYandexBig')) {
        var points = [
          ['<div class="map-baloon"><p></p></div>', '38.999513', '-77.036536'],
          ['<div class="map-baloon"><p></p></div>', '38.899513', '-77.136536'],
          ['<div class="map-baloon"><p></p></div>', '38.799513', '-77.236536'],
          ['<div class="map-baloon"><p></p></div>', '38.699513', '-77.336536'],
          ['<div class="map-baloon"><p></p></div>', '38.999513', '-76.636536'],
          ['<div class="map-baloon"><p></p></div>', '38.899513', '-76.736536'],
          ['<div class="map-baloon"><p></p></div>', '38.799513', '-76.836536'],
          ['<div class="map-baloon"><p></p></div>', '38.699513', '-76.936536'],
        ]
        myMapBig = new ymaps.Map('mapYandexBig', {
          center: [38.899513, -77.036536],
          zoom: 13,
          // controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
          controls: [],
        })

        if (window.innerWidth < 1024) {
          myMapBig.behaviors.disable('scrollZoom')
          myMapBig.behaviors.disable('drag')
        }

        for (i = 0; i < points.length; i++) {
          var myPlacemark = new ymaps.Placemark(
            [points[i][1], points[i][2]],
            {
              balloonContent: points[i][0],
            },
            {
              iconLayout: 'default#image',
              iconImageHref: '../assets/images/icons/location.svg',
              balloonLayout: '../assets/images/icons/location.svg',
            }
          )
          myCollection.add(myPlacemark)
          // myMapBig.geoObjects.add(myPlacemark)

          // myMapBig.events.add('click', function (e) {
          //   myMapBig.balloon.close()
          // })
        }

        myMapBig.geoObjects.add(myCollection)

        myPlacemark.events.add('click', function (event) {
          event.preventDefault()
        })
      }

      if (document.querySelector('#mapYandexOffice')) {
        var points = [['<div class="map-baloon"><p>Москва, улица Строителей</p></div>', '38.899513', '-77.036536']]

        myMapBig = new ymaps.Map('mapYandexOffice', {
          center: [38.899513, -77.036536],
          zoom: 13,
          // controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
          controls: [],
        })

        if (window.innerWidth < 1024) {
          myMapBig.behaviors.disable('scrollZoom')
          myMapBig.behaviors.disable('drag')
        }

        for (i = 0; i < points.length; i++) {
          var myPlacemark = new ymaps.Placemark(
            [points[i][1], points[i][2]],
            {
              balloonContent: points[i][0],
            },
            {
              iconLayout: 'default#image',
              iconImageHref: '../assets/images/icons/location.svg',
              balloonLayout: '../assets/images/icons/location.svg',
            }
          )
          myCollection.add(myPlacemark)
          myMapBig.geoObjects.add(myPlacemark)

          myMapBig.events.add('click', function (e) {
            myMapBig.balloon.close()
          })
        }

        myMapBig.geoObjects.add(myCollection)

        myPlacemark.events.add('click', function (event) {
          event.preventDefault()
        })
      }
    })
  }
})
// $(document).ready(function () {})
