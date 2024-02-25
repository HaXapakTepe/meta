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

  Fancybox.bind('[data-fancybox]', {})

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} (000) 000-00-00',
    }
    const mask = IMask(element, maskOptions)
  }

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

  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')

  // function tabs(target, info) {
  //   target?.forEach((tab, idx) => {
  //     tab.addEventListener('click', () => {
  //       target.forEach((tab) => tab.classList.remove('tab__target--active'))
  //       info.forEach((page) => {
  //         page.classList.remove('tab__info--active')
  //         setTimeout(() => {
  //           page.classList.remove('tab__info--opacity')
  //         }, 380)
  //       })

  //       tab.classList.add('tab__target--active')
  //       info[idx].classList.add('tab__info--active')

  //       setTimeout(() => {
  //         info[idx].classList.add('tab__info--opacity')
  //       }, 380)
  //     })
  //   })
  // }
  // tabs(tab, pages)

  tabs?.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => tab.classList.remove('tab__target--active'))
      pages.forEach((page) => {
        page.classList.remove('tab__info--active')
        setTimeout(() => {
          page.classList.remove('tab__info--opacity')
        }, 380)
      })

      tab.classList.add('tab__target--active')
      pages[idx].classList.add('tab__info--active')

      setTimeout(() => {
        pages[idx].classList.add('tab__info--opacity')
      }, 380)
    })
  })

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

  var points = [[]]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

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
            balloonLayout: 'default#imageWithContent',
          }
        )
        // myCollection.add(myPlacemark)
        // myMapBig.geoObjects.add(myPlacemark)

        // myMapBig.events.add('click', function (e) {
        //   myMapBig.balloon.close()
        // })
      }

      myMapBig.geoObjects.add(myCollection)

      myPlacemark.events.add('click', function (event) {
        event.preventDefault()
      })
    })
  }
})
// $(document).ready(function () {})
