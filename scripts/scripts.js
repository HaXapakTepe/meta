document.addEventListener('DOMContentLoaded', () => {
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
        footerRight.style.paddingTop = '65px'
      }
    })
  })

  var points = [
    ['<div class="map-baloon"<p>Московская область, Балашиха, парк Пехорка</p></div>', '55.801289', '37.945873'],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [38.899513, -77.036536],
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
    })
  }
})

if (document.querySelector('[name="phone"]')) {
  const element = document.querySelector('[name="phone"]')
  const maskOptions = {
    mask: '+{7} 000 000 00 00',
  }
  const mask = IMask(element, maskOptions)
}
// $(document).ready(function () {})
