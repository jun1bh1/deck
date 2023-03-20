//비주얼 오브젝트 배열 생성
var visualLinkArr = ['#1', '#2', '#3', '#4']
var visualImgSrcArr = ['images/visual01.png', 'images/visual02.png', 'images/c2-2-1.png', 'images/c2-3-1.png']
var visualDetailArr = ['알루미늄 보강판 / 자체 매크로 기능 / 넌LED / 체리 정방향 스위치&스테빌라이져', '서브타이틀2', '서브타이틀3', '서브타이틀4']
var visualTitleArr = ['덱 거북선', '덱 화이트 LED', '덱 만텔라', '덱 프로']
var visualObjArr = new Array()
var visualObj = new Object()
for (i = 0; i < visualLinkArr.length; i++) {
  visualObjArr.push(
    visualObj = {
      link: visualLinkArr[i],
      imgSrc: visualImgSrcArr[i],
      detail: visualDetailArr[i],
      title: visualTitleArr[i]
    });
}
console.log(visualObjArr)

//콘텐츠1 오브젝트 배열 생성
var content1LinkArr = ['#1', '#2', '#3', '#4', '#5', '#6', '#1', '#2', '#3', '#4', '#5', '#6']
var content1Tag = ['limited 10key cherry', 'limited 10keyless cherry', 'limited 10key other', 'limited 10keyless other', 'limited 10key other', 'limited 10keyless other', 'limited 10key cherry', 'limited 10keyless cherry', 'limited 10key other', 'limited 10keyless other', 'limited 10key other', 'limited 10keyless other']
var content1ImgSrcArr = ['images/content01_h.png', 'images/content01_p.png', 'images/content01_h.png', 'images/content01_p.png', 'images/content01_h.png', 'images/content01_p.png', 'images/content01_h.png', 'images/content01_p.png', 'images/content01_h.png', 'images/content01_p.png', 'images/content01_h.png', 'images/content01_p.png']
var content1SubImgSrcArr = ['images/logo_cherry.png', 'images/logo_cherry.png', 'images/logo_owlab.png', 'images/logo_owlab.png', 'images/logo_ttc.png', 'images/logo_ttc.png', 'images/logo_cherry.png', 'images/logo_cherry.png', 'images/logo_owlab.png', 'images/logo_owlab.png', 'images/logo_ttc.png', 'images/logo_ttc.png']
var content1DetailArr = ['체리축', '체리축', 'SWK 네온', 'SWK 네온', '저소음 월백 / 홀리 판다 퍼플', '저소음 월백 / 홀리 판다 퍼플', '체리축', '체리축', 'SWK 네온', 'SWK 네온', '저소음 월백 / 홀리 판다 퍼플', '저소음 월백 / 홀리 판다 퍼플']
var content1TitleArr = ['덱 헤슘 거북선', '덱 프랑슘 거북선', '덱 헤슘 거북선', '덱 프랑슘 거북선', '덱 헤슘 거북선', '덱 프랑슘 거북선', '덱 헤슘 거북선', '덱 프랑슘 거북선', '덱 헤슘 거북선', '덱 프랑슘 거북선', '덱 헤슘 거북선', '덱 프랑슘 거북선']
var content1PriceArr = ['17,500', '17,900', '17,500', '17,900', '17,500', '17,900', '17,500', '17,900', '17,500', '17,900', '17,500', '17,900']
var content1ObjArr = new Array()
var content1lObj = new Object()
for (i = 0; i < content1LinkArr.length; i++) {
  content1ObjArr.push(
    content1lObj = {
      link: content1LinkArr[i],
      tag: content1Tag[i],
      imgSrc: content1ImgSrcArr[i],
      subImgSrc: content1SubImgSrcArr[i],
      detail: content1DetailArr[i],
      title: content1TitleArr[i],
      price: content1PriceArr[i]
    });
}
console.log(content1ObjArr)

//콘텐츠2-1 오브젝트 배열 생성
var content2_1LinkArr = ['#1', '#2']
var content2_1ImgSrcArr = ['images/c2-1-1.png', 'images/c2-1-2.png']
var content2_1SubImgSrcArr = ['images/c2-1-1-sub.png', 'images/c2-1-2-sub.png']
var content2_1TitleArr = ['덱헤슘 거북선 108XN', '덱프랑슘 거북선 87XN']
var content2_1DetailArr = ['대한민국 유저들을 위해 이온크루가</br>참여하고 개발하였습니다!', '덱키보드의 넘볼수 없는 압도적인 기능은</br>거북선에서도 이어집니다']
var content2_1ObjArr = new Array()
var content2_1Obj = new Object()
for (i = 0; i < content2_1LinkArr.length; i++) {
  content2_1ObjArr.push(
    content2_1Obj = {
      link: content2_1LinkArr[i],
      imgSrc: content2_1ImgSrcArr[i],
      subImgSrc: content2_1SubImgSrcArr[i],
      detail: content2_1DetailArr[i],
      title: content2_1TitleArr[i],
    });
}
console.log(content2_1ObjArr)

//콘텐츠2-2 오브젝트 배열 생성
var content2_2LinkArr = ['#1', '#2', '#3']
var content2_2ImgSrcArr = ['images/c2-2-1.png', 'images/c2-2-2.png', 'images/c2-2-3.png']
var content2_2TitleArr = ['덱 만텔라 108S RGB', '덱 만텔라 108S RGB', '덱 만텔라 108S RGB']
var content2_2DetailArr = ['덱 키보드의 진화는 계속됩니다</br>하드웨어 RGB 기계식 키보드', '진정한 기계식의 가치!</br>전통 하드웨어방식 RGB 기계식 키보드', '눈부시게 아름답다</br>이것은 마치 밤하늘의 오로라처럼!']
var content2_2ObjArr = new Array()
$.each(content2_2LinkArr, function (i) {
  content2_2ObjArr.push({
    link: content2_2LinkArr[i],
    imgSrc: content2_2ImgSrcArr[i],
    detail: content2_2DetailArr[i],
    title: content2_2TitleArr[i],
  })
})
console.log(content2_2ObjArr)

//콘텐츠2-3 오브젝트 배열 생성
var content2_3LinkArr = ['#1', '#2', '#1', '#2', '#1', '#2']
var content2_3ImgSrcArr = ['images/c2-3-1.png', 'images/c2-3-2.png', 'images/c2-3-1.png', 'images/c2-3-2.png', 'images/c2-3-1.png', 'images/c2-3-2.png']
var content2_3TitleArr = ['덱헤슘 프로 화이트 LED', '덱프랑슘 프로 화이트 LED', '덱헤슘 프로 화이트 LED', '덱프랑슘 프로 화이트 LED', '덱헤슘 프로 화이트 LED', '덱프랑슘 프로 화이트 LED']
var content2_3DetailArr = ['프로페셔널을 위한 극강 스펙의</br>화이트LED 기계식 키보드 탄생!', '극강의 스펙! 名品 덱 프로 탄생!</br>기계식 키보드의 전설이되다!!', '프로페셔널을 위한 극강 스펙의</br>화이트LED 기계식 키보드 탄생!', '극강의 스펙! 名品 덱 프로 탄생!</br>기계식 키보드의 전설이되다!!', '프로페셔널을 위한 극강 스펙의</br>화이트LED 기계식 키보드 탄생!', '극강의 스펙! 名品 덱 프로 탄생!</br>기계식 키보드의 전설이되다!!']
var content2_3ObjArr = new Array()
$.each(content2_3LinkArr, function (i) {
  content2_3ObjArr.push({
    link: content2_3LinkArr[i],
    imgSrc: content2_3ImgSrcArr[i],
    detail: content2_3DetailArr[i],
    title: content2_3TitleArr[i],
  })
})
console.log(content2_3ObjArr)

var content2_3LinkArr = ['#1', '#2', '#1', '#2', '#1', '#2']
var content2_3ImgSrcArr = ['images/c2-3-1.png', 'images/c2-3-2.png', 'images/c2-3-1.png', 'images/c2-3-2.png', 'images/c2-3-1.png', 'images/c2-3-2.png']
var content2_3TitleArr = ['덱헤슘 프로 화이트 LED', '덱프랑슘 프로 화이트 LED', '덱헤슘 프로 화이트 LED', '덱프랑슘 프로 화이트 LED', '덱헤슘 프로 화이트 LED', '덱프랑슘 프로 화이트 LED']
var content2_3DetailArr = ['프로페셔널을 위한 극강 스펙의</br>화이트LED 기계식 키보드 탄생!', '극강의 스펙! 名品 덱 프로 탄생!</br>기계식 키보드의 전설이되다!!', '프로페셔널을 위한 극강 스펙의</br>화이트LED 기계식 키보드 탄생!', '극강의 스펙! 名品 덱 프로 탄생!</br>기계식 키보드의 전설이되다!!', '프로페셔널을 위한 극강 스펙의</br>화이트LED 기계식 키보드 탄생!', '극강의 스펙! 名品 덱 프로 탄생!</br>기계식 키보드의 전설이되다!!']
var content2_3ObjArr = new Array()
$.each(content2_3LinkArr, function (i) {
  content2_3ObjArr.push({
    link: content2_3LinkArr[i],
    imgSrc: content2_3ImgSrcArr[i],
    detail: content2_3DetailArr[i],
    title: content2_3TitleArr[i],
  })
})
console.log(content2_3ObjArr)

//콘텐츠3 오브젝트 배열 생성 json
// const content3Arr = Array.from(Array(3), () => new Array(3))
const content3Json = [
  [
    {
      "no": 1,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_1.png",
      "linkUrl": "#311",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    },
    {
      "no": 2,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_2.png",
      "linkUrl": "#312",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    },
    {
      "no": 3,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_3.png",
      "linkUrl": "#313",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    },
  ],
  [
    {
      "no": 4,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_4.png",
      "linkUrl": "#321",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    },
    {
      "no": 5,
      "wrapClass": "content3-text-wrap",
      "detailText": "커스텀</br>&</br>악세서리",
      "linkUrl": "#323",
      "detailTextClass": [
        "gray-f10",
        "font-base4"
      ],
      "buttonClass": [
        "more-text",
        "font-base1"
      ]
    },
    {
      "no": 6,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_6.png",
      "linkUrl": "#322",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    },
  ],
  [
    {
      "no": 7,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_7.png",
      "linkUrl": "#331",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    },
    {
      "no": 8,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_8.png",
      "linkUrl": "#332",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    },
    {
      "no": 9,
      "wrapClass": "content3-img-wrap",
      "imgSrc": "images/main3_9.png",
      "linkUrl": "#333",
      "buttonClass": [
        "more-text",
        "gray-f10",
        "font-base1"
      ]
    }
  ]
]
const content3Data = JSON.parse(JSON.stringify(content3Json));

//레디
$(document).ready(function () {
  // 반복되는 요소를 스크립트로 추가
  var visualList = $('#visualList')
  var visualIndicatorList = $('#visualIndicatorList')
  for (var i = 0; i < visualObjArr.length; i++) {
    visualList.append('<li><a href="' + visualObjArr[i].link + '" class="visual-link" title = "비주얼 제품 이동" ><img class="visual-img" src="' + visualObjArr[i].imgSrc + '" title="비주얼 이미지"><div class="visual-text-wrap"><span class="text-detail white font-base2 slide-text">' + visualObjArr[i].detail + '</span><span class="text-title white font-large2 slide-text">' + visualObjArr[i].title + '</span></div></a></li>')
    visualIndicatorList.append('<li><button class="indicator-btn" title="비주얼 인디케이터 ' + (i + 1) + '"><i></i></button></li>')
  }

  var content1List = $('#content1List')
  for (var i = 0; i < content1ObjArr.length; i++) {
    content1List.append('<li class="' + content1ObjArr[i].tag + '"><a href="' + content1ObjArr[i].link + '" class="content1-link" title = "컨텐츠1-' + i + ' 제품  이동" ><div class="content1-img-wrap"><img class="content1-img" src="' + content1ObjArr[i].imgSrc + '" title="컨텐츠1-' + i + ' 아이템 이미지"><img class="content1-logo" src="' + content1ObjArr[i].subImgSrc + '" title="컨텐츠1-' + i + ' 로고 이미지"></div><div class="content1-text-wrap"><span class="text-title gray-f1 font-base1">' + content1ObjArr[i].title + '</span><span class="text-detail gray-f10 font-base1">' + content1ObjArr[i].detail + '</span><span class="text-won gray-f10 font-base1"><span class="text-price gray-f10 font-base2">' + content1ObjArr[i].price + '</span>원~</span></div></a></li>')
  }

  var content2_1ImgList = $('#content2_1ImgList')
  var content2_1SubImgList = $('#content2_1SubImgList')
  var content2_1IndicatorList = $('#content2_1IndicatorList')
  var content2_1TextList = $('#content2_1TextList')
  for (var i = 0; i < content2_1ObjArr.length; i++) {
    content2_1ImgList.append('<li><img src="' + content2_1ObjArr[i].imgSrc + '" alt="거북선 이미지-' + (i + 1) + '" class="content2-img"></li>')
    content2_1SubImgList.append('<li><img src="' + content2_1ObjArr[i].subImgSrc + '" alt="거북선 서브이미지-' + (i + 1) + '" class="content2-sub-img"></li>')
    content2_1IndicatorList.append('<li><button class="indicator-btn" title="컨텐트2-1 인디케이터 ' + (i + 1) + '"><i></i></button></li>')
    content2_1TextList.append('<li></li>')
    content2_1TextList.children('li').eq(i).append('<span class="content2-text text-title font-base3">' + content2_1ObjArr[i].title + '</span>')
    content2_1TextList.children('li').eq(i).append('<span class="content2-text text-detail font-large1">' + content2_1ObjArr[i].detail + '</span>')
    content2_1TextList.children('li').eq(i).append('<a class="more-box" href="' + content2_1ObjArr[i].link + '" title="컨텐츠1 링크이동"><span class="more-text font-base1">자세히보기</span></a>')
  }

  var content2_2ImgList = $('#content2_2ImgList')
  var content2_2IndicatorList = $('#content2_2IndicatorList')
  var content2_2TextList = $('#content2_2TextList')
  for (var i = 0; i < content2_2ObjArr.length; i++) {
    content2_2ImgList.append('<li><img src="' + content2_2ObjArr[i].imgSrc + '" alt="거북선 이미지-' + (i + 1) + '" class="content2-img"></li>')
    content2_2IndicatorList.append('<li><button class="indicator-btn" title="컨텐트2-1 인디케이터 ' + (i + 1) + '"><i></i></button></li>')
    content2_2TextList.append('<li><span class="content2-text text-title grayf10 font-base3">' + content2_2ObjArr[i].title + '</span><span class="content2-text text-detail grayf10 font-large1">' + content2_2ObjArr[i].detail + '</span><a class="more-box" href="' + content2_2ObjArr[i].link + '" title="컨텐츠1 링크이동"><span class="more-text font-base1">자세히보기</span></a></li>')
  }

  var content2_3ImgList = $('#content2_3ImgList')
  var content2_3IndicatorList = $('#content2_3IndicatorList')
  var content2_3TextList = $('#content2_3TextList')
  for (var i = 0; i < content2_3ObjArr.length; i++) {
    content2_3ImgList.append('<li><img src="' + content2_3ObjArr[i].imgSrc + '" alt="거북선 이미지-' + (i + 1) + '" class="content2-img"></li>')
    content2_3IndicatorList.append('<li><button class="indicator-btn" title="컨텐트2-1 인디케이터 ' + (i + 1) + '"><i></i></button></li>')
    content2_3TextList.append('<li><span class="content2-text text-title grayf10 font-base3">' + content2_3ObjArr[i].title + '</span><span class="content2-text text-detail grayf10 font-large1">' + content2_3ObjArr[i].detail + '</span><a class="more-box" href="' + content2_3ObjArr[i].link + '" title="컨텐츠1 링크이동"><span class="more-text font-base1">자세히보기</span></a></li>')
  }

  var content3OuterWrap = $('#content3OuterWrap')
  for (let i = 0; i < content3Data.length; i++) {
    content3OuterWrap.append('<div class="content3-inner-wrap"></div>')
    for (let j = 0; j < content3Data[i].length; j++) {
      content3OuterWrap.children().eq(i).append(`<div class="${content3Data[i][j].wrapClass}"><a class="more-box" href="${content3Data[i][j].linkUrl}" title="컨텐츠3 링크이동"><span class="${content3Data[i][j].buttonClass.toString().replace(/,/g, ' ')}">자세히보기</span></a></div>`)
      const wrapType = content3OuterWrap.children().eq(i).children().eq(j)
      if (wrapType.hasClass('content3-img-wrap')) {
        wrapType.prepend(`<img src="${content3Data[i][j].imgSrc}" alt="">`)
      } else {
        wrapType.prepend(`<span class="${content3Data[i][j].detailTextClass.toString().replace(/,/g, ' ')}">커스텀</br>&</br>악세서리</span>`)
      }
    }
  }
})

$(window).load(function () {
  // 기본 애니메이션 시간
  const baseAnimationTime = 800

  // 비주얼
  var visualIndicator = $('.visual-indicator-list.indicator').children('li')
  var visualSliderList = $('.visual-list.slider-wrap')
  var indexSize = visualIndicator.size()
  // 인디케이터와 양쪽 버튼을 같이 쓰려면 마지막 아이템을 앞에 추가로 붙이고 첫 아이템을 끝에 추가로 붙여줘야함
  var lastItem = visualSliderList.children().last().clone()
  var firstItem = visualSliderList.children().first().clone()
  lastItem.prependTo(visualSliderList)
  firstItem.appendTo(visualSliderList)
  // 아이템 인덱스를 클래스로 붙여줌, 마지막 아이템이 처음에 붙었으므로 1부터 시작
  visualSliderList.children('li').each(function (index) {
    $(this).addClass((index - 1).toString())
  })
  // 첫번째 아이템으로 초기화  
  visualSlideAction(0, 0)
  // 처음 로딩할 때 애니메이션이 들어가는걸 방지하기 위해 트랜지션을 나중에 넣어줌
  $('.text-title').css({
    transition: '500ms 300ms'
  })
  $('.text-detail').css({
    transition: '600ms 300ms'
  })
  visualIndicator.on('click', function () {
    stopVisualInterval()
    visualSlideAction($(this).index(), baseAnimationTime)
  })
  $('.btn-next').on('click', function () {
    stopVisualInterval()
    visualBtnOnClick(+1)
    nextBtnMouseLeave()
  })
  $('.btn-prev').on('click', function () {
    stopVisualInterval()
    visualBtnOnClick(-1)
    prevBtnMouseLeave()
  })
  $('.btn-next').on('mouseenter', nextBtnMouseEnter)
  $('.btn-next').on('mouseleave', nextBtnMouseLeave)
  $('.btn-prev').on('mouseenter', prevBtnMouseEnter)
  $('.btn-prev').on('mouseleave', prevBtnMouseLeave)

  var visualInterval = null
  startVisualInterval()
  $('#visualList').on('mouseenter', stopVisualInterval)
  $('#visualList').on('mouseleave', startVisualInterval)

  function startVisualInterval() {
    visualInterval = setInterval(visualBtnOnClick, 5000, 1)
  }

  function stopVisualInterval() {
    clearInterval(visualInterval)
  }

  function visualBtnOnClick(direction) {
    var nextIndex = $('.visual-indicator-list').find('.selected').parent().index() + direction
    if (nextIndex >= indexSize) {
      visualSlideAction(-1, 0)
      visualSlideAction(0, baseAnimationTime)
    } else if (nextIndex < 0) {
      visualSlideAction(4, 0)
      visualSlideAction(3, baseAnimationTime)
    } else {
      visualSlideAction(nextIndex, baseAnimationTime)
    }
  }
  function nextBtnMouseEnter() {
    visualSliderList.find('.visual-link').addClass("next-btn-mouseover")
  }
  function nextBtnMouseLeave() {
    visualSliderList.find('.visual-link').removeClass("next-btn-mouseover")
  }
  function prevBtnMouseEnter() {
    visualSliderList.find('.visual-link').addClass("prev-btn-mouseover")
  }
  function prevBtnMouseLeave() {
    visualSliderList.find('.visual-link').removeClass("prev-btn-mouseover")
  }
  function visualSlideAction(index, time) {
    var nextItem = visualSliderList.children('.' + index)
    $('.visual-text-wrap').removeClass('active')
    nextItem.find('.visual-text-wrap').addClass('active')
    visualIndicator.parent().find('.indicator-btn').removeClass('selected')
    visualIndicator.eq(index).find('.indicator-btn').addClass('selected')
    visualSliderList.stop().animate({
      left: -100 + -100 * index + '%'
    }, time, 'easeOutQuint')
    // nextItem.find('.text-title').stop().delay(baseAnimationTime * 0.4).animate({
    //   'margin-left': 0,
    //   opacity: 1
    // }, baseAnimationTime * 0.4, 'easeInOutCirc')
    // nextItem.find('.text-detail').stop().delay(baseAnimationTime * 0.4).animate({
    //   'margin-left': 0,
    //   opacity: 1
    // }, baseAnimationTime * 0.4, 'easeInOutCirc')
    // var otherItems = visualSliderList.children().not('.' + index)
    // otherItems.find('.text-title').stop().animate({
    //   'margin-left': -20 + '%',
    //   opacity: 0
    // }, baseAnimationTime, 'easeInOutCirc')
    // otherItems.find('.text-detail').stop().animate({
    //   'margin-left': -40 + '%',
    //   opacity: 0
    // }, baseAnimationTime, 'easeInOutCirc')
    // otherItems.find('.text-detail').stop().animate({
    //   'margin-left': -40 + '%',
    //   opacity: 0
    // }, baseAnimationTime, 'easeInOutCirc')
  }

  // 비주얼 모바일 사이즈 
  $('.icon-menu').on('click', function () {
    $('.header-navigation-container').slideToggle()
  })

  // 컨텐츠1
  // 드래그 시작시 y축 위치
  var posXAtStart = 0
  // 드래그 시작시 시간
  var startTime = 0
  // 드래그할 아이템
  var content1Wrap = $('#content1List')
  // 드래그할 스크롤바
  var content1ScrollBar = $('#content1ScrollBar')
  // 타이틀 li 배열
  var content1TitleArr = $('.content1-title-list > li')
  // 아이템 li 배열
  var content1ItemArr = $('.content1_item_list > li')

  // 컨텐츠1 초기화
  content1TagSelector(content1TitleArr.first(), 0, 300)

  // 태그 클릭시
  content1TitleArr.on('click', function () {
    content1TagSelector($(this), 200, 300)
    return false
  })

  // 태그에 선택시 해당 내용에 맞춰 변경
  function content1TagSelector(selectedItem, fadeOutTime, fadeInTIme) {
    // 선택된 태그만 액티브
    content1TitleArr.removeClass('active')
    selectedItem.addClass('active')
    // 컨텐츠1 메인 아이템 부모를 투명화
    content1ItemArr.parent().stop().animate({
      opacity: 0
    }, fadeOutTime, function () {
      // 부모가 투명화해서 전체가 숨겨진 뒤
      // 해당 태그 이외 아이템 숨기기
      content1ItemArr.each(function (index) {
        if ($(this).hasClass(selectedItem.children('a').attr('class'))) {
          $(this).css({
            display: 'block'
          })
        } else {
          $(this).css({
            display: 'none'
          })
        }
      })
      // 스크롤바 위치 초기화
      content1Wrap.css({
        left: 0
      })
      content1ScrollBar.css({
        left: 0
      })
      // 스크롤바 사이즈 변경, 아이템을 숨긴 뒤 변경해야 적용됨
      content1InitScrollBarSize()
      // 이후 보모를 다시 보이게 함
      content1ItemArr.parent().stop().animate({
        opacity: 1
      }, fadeInTIme)
    })
  }

  //스크롤바 사이즈 변경
  function content1InitScrollBarSize() {
    var content1ListWidth = $('#content1List').innerWidth()
    var scrollBarParentWidth = $('#content1ScrollBar').parent().innerWidth()
    var scrollBar = $('#content1ScrollBar')
    // 스크롤바 넓이는 컨텐츠1 아이템이 스크롤되는 비율로 구해줌
    var scrollBarWidth = scrollBarParentWidth * scrollBarParentWidth / content1ListWidth
    // 만약 아이템 넓이가 부모의 넓이보다 작을때는 스크롤바가 가득차고 스크롤되는걸 없애야함
    if (scrollBarWidth >= scrollBarParentWidth) {
      scrollBarWidth = scrollBarParentWidth
      content1Wrap.draggable({ disabled: true })
      content1ScrollBar.draggable({ disabled: true })
      scrollBar.parent().animate({ opacity: 0.5 })
    } else {
      content1Wrap.draggable({ disabled: false })
      content1ScrollBar.draggable({ disabled: false })
      scrollBar.parent().animate({ opacity: 1 })
    }
    scrollBar.stop().animate({
      'width': scrollBarWidth,
      opacity: 1
    }, 200, afterContent1Init)
  }

  // content1의 넓이나 표시가 초기화 된 후 실행
  function afterContent1Init() {
    // 컨텐츠 1 본체 드래그
    dragAction(content1Wrap, content1ScrollBar, 1)
    // 컨텐츠 1 스크롤 드래그
    dragAction(content1ScrollBar, content1Wrap, -1)
    // 스크롤바 좌우 제한
    scrollBarContainment()
  }

  // 드래그 함수
  // 메인에 따라 서브가 같이 움직이지만 반대로 움직임, 서로 반대라서 방향 변수가 필요함
  function dragAction(mainItem, subItem, direction) {
    mainItem.draggable({
      // x축만 사용
      axis: "x",
      // containment 값은 스크롤에만 쓰이므로 초기화만 해줌, 안해줘도 됨
      containment: "false",
      // 드래그할 동안 서브 아이템도 같이 움직여야함
      drag: function () { fallowScrollAction(mainItem, subItem, direction) },
      // 드래그 시작시 한번 작동
      start: function () {
        // 드래그 시작 시간
        startTime = Date.now()
        // 드래그 시작시 진행되던 애니메이션 정지
        mainItem.stop()
        // 아이템이 최대 왼쪽으로 갈 수 있는 위치를 구함
        posXAtStart = parseInt(mainItem.css('left'))
      },
      // 드래그 끝날때 한번 작동
      stop: function () { scrollActionWhenDrag(mainItem, subItem, direction) }
    })
  }

  // 드래그할때 스크롤 액션 함수
  function scrollActionWhenDrag(mainItem, subItem, direction) {
    // 아이템들의 최대 위치
    var maxPosXOfMain = mainItem.parent().width() - mainItem.innerWidth()
    var maxPosXOfSub = subItem.parent().width() - subItem.width()
    // 드래그 종료 시간
    var endTime = Date.now()
    // 드래그 경과 시간
    var elapsedTime = (endTime - startTime) / 1000
    // 드래그 종료시 x축 위치
    var posXAtEnd = parseInt(mainItem.css('left'))
    // 드래그 종료시 움직인 거리
    var posXMovedDistance = posXAtEnd - posXAtStart
    // 경과시간이 0초일때 0.0625가 나오고 커질수록 14 만큼 더 빠르게 무한해지는 가중치
    var weight = (Math.pow(2, elapsedTime * 14 - 4))
    // 아이템이 관성 이후 왼쪽 위치를 구함, 종료시 위치에서 움직인거리를 가중치로 나눠줌
    // 빠르게 놨을 때 관성이 쎄고 느리게 놨을 때 관성이 줄어듦
    // 길게 움직였을때 관성이 쎄고 짧게 움직였을 때 관성이 줄어듦
    var posXOfInertia = (posXAtEnd + posXMovedDistance / weight)
    // // 아이템 위치 백분율을 구함
    // var itemPosPercent = posXOfInertia / maxPosXOfMain
    // 끝위치는 관성 이후 위치를 기준으로 해야 관성으로 넘어가도 제자리로 돌려줌
    // 관성 이후 위치가 0보다 크면 오른쪽으로 넘어간것이므로 아이템이 왼쪽 끝으로 돌아가게 함
    if (posXOfInertia * direction > 0) {
      mainItem.stop().animate({
        left: 0
      }, 500, 'easeOutBack')
      subItem.stop().animate({
        left: 0
      }, 500, 'easeOutCirc')
    } else if (posXOfInertia * direction < maxPosXOfMain * direction) {
      // 관성 이후 위치가 최대 왼쪽으로 갈 수 있는 위치보다 더 갔을떄는 왼쪽으로 넘어간 것이므로 아이템을 오른쪽 끝으로 돌아가게 함
      mainItem.stop().animate({
        left: maxPosXOfMain
      }, 500, 'easeOutBack')
      subItem.stop().animate({
        left: maxPosXOfSub
      }, 500, 'easeOutCirc')
    } else {
      // 아이템이 내부에서 움직일 때 최대 거리 대비 백분율 위치로 움직여줌, 계산하면 그냥 최종 관성 위치와 같지만
      //스크롤바에도 동시에 적용하기 위해 비율로 계산함
      mainItem.stop().animate({
        left: posXOfInertia
        // left: maxPosXOfMain * itemPosPercent
      }, 800, 'easeOutCirc')
      subItem.stop().animate({
        left: maxPosXOfSub * (posXOfInertia / maxPosXOfMain)
      }, 800, 'easeOutCirc')
    }
  }

  // 서브 아이템을 같이 움직이게 하는 함수
  function fallowScrollAction(mainItem, subItem, direction) {
    // 아이템들의 최대 위치
    var maxPosXOfMain = mainItem.parent().width() - mainItem.innerWidth()
    var maxPosXOfSub = subItem.parent().width() - subItem.width()
    // 메인 아이템 위치
    var posXOfMain = parseInt(mainItem.css('left'))
    if (posXOfMain * direction > 0) {
      // 메인 아이템이 왼쪽 끝을 넘을 때 서브 아이템은 왼쪽 끝에 고정
      subItem.stop().css({
        left: 0
      })
    } else if (posXOfMain * direction < maxPosXOfMain * direction) {
      // 메인 아이템이 자신의 최대 위치를 넘을 때 서브 아이템은 자신의 최대 위치에 고정
      subItem.stop().css({
        left: maxPosXOfSub
      })
      // 스크롤바가 메인일 때는 스크롤바가 끝을 넘어갈 수 없기 때문에 첫번째 두번째 조건 모두 무조건 패스함
    } else {
      // 메인 아이템과 서브 아이템의 최대 위치가 서로 다르기 때문에 절대값으로는 구할 수 없다.
      // 드래그중인 메인 아이템의 최대 위치에 대한 현재 위치를 비율로 환산한 값을 서브 아이템의 최대 위치 값에 곱해줘서 서브 아이템의 현재 위치를 잡아줌
      subItem.stop().css({
        left: maxPosXOfSub * (posXOfMain / maxPosXOfMain)
      })
    }
  }

  // 컨텐츠2-1 슬라이드
  var content2_1Indicator = $('#content2_1IndicatorList').children('li')
  var content2_1Slider = $('#content2_1_wrap .slider-wrap')
  var content2_1Fade = $('#content2_1_wrap .fade-wrap').children()
  // 처음 시작시 첫번째 아이템으로 초기화
  contentSlide(0, content2_1Slider, content2_1Fade, content2_1Indicator, 0)
  content2_1Indicator.on('click', function () {
    contentSlide($(this).index(), content2_1Slider, content2_1Fade, content2_1Indicator, baseAnimationTime)
  })

  // 컨텐츠2-2 슬라이드
  var content2_2Indicator = $('#content2_2IndicatorList').children('li')
  var content2_2Slider = $('#content2_2_wrap .slider-wrap')
  var content2_2Fade = $('#content2_2_wrap .fade-wrap').children()
  // 처음 시작시 첫번째 아이템으로 초기화
  contentSlide(0, content2_2Slider, content2_2Fade, content2_2Indicator, 0)
  content2_2Indicator.on('click', function () {
    contentSlide($(this).index(), content2_2Slider, content2_2Fade, content2_2Indicator, baseAnimationTime)
  })

  // 컨텐츠2-3 슬라이드
  var content2_3Indicator = $('#content2_3IndicatorList').children('li')
  var content2_3Slider = $('#content2_3_wrap .slider-wrap')
  var content2_3Fade = $('#content2_3_wrap .fade-wrap').children()
  // 처음 시작시 첫번째 아이템으로 초기화
  contentSlide(0, content2_3Slider, content2_3Fade, content2_3Indicator, 0)
  content2_3Indicator.on('click', function () {
    contentSlide($(this).index(), content2_3Slider, content2_3Fade, content2_3Indicator, baseAnimationTime)
  })

  //styleSheets[스타일 시트 순서].cssRules[키프레임 순서][해당 키프레임 내 순서]
  //cssRules[][]로 가면 읽기만 가능
  //cssRules[]로 가서 from, to, 100% 등으 통채로 넣어줘야함 기존에것이 삭제되는건 아님, 변경되는것도 아니라서 같은 옵션 추가하면 무시되는듯
  // keyframes.deleteRule("from"); 이걸로 삭제 가능
  let keyframes = document.styleSheets[0].cssRules[0];
  keyframes.appendRule('0% { transform: scale(1.4)}')
  keyframes.appendRule(' 30% { transform: scale(1.8)')
  // 컨텐츠2 공통 슬라이드 애니메이션
  function contentSlide(index, slider, fade, indicator, time) {
    if (!indicator.eq(index).hasClass('selected')) {
      var lastIndex = indicator.size()
      if (index >= lastIndex) index = 0
      else if (index < 0) index = lastIndex - 1
      indicator.parent().find('.indicator-btn').removeClass('selected')
      indicator.eq(index).find('.indicator-btn').addClass('selected')
      if (time > 0) {
        slider.children().removeClass('active')
        slider.children().eq(index).addClass('active')
      }
      slider.stop().animate({ left: -100 * (index) + '%' }, time)
      fade.stop(true).fadeOut(time)
      fade.eq(index).stop().delay(time / 2).fadeIn(time)
      fade.eq(index + lastIndex).stop().delay(time / 2).fadeIn(time)
      // fade.not(index).stop(true).animate({
      //   'opacity': 0
      // }, time, function () {
      //   $(this).css({ 'display': 'none' })
      // })
      // // fade.eq(index).css({
      // //   'display': 'flex'
      // // }).stop().delay(time / 2).animate({ 'opacity': 1}, time)
      // fade.eq(index).stop().delay(time / 2).animate({ 'opacity': 1}, time)
      // // fade.eq(index + lastIndex).stop().delay(time / 2).animate({ 'opacity': 1}, time)
      // // fade.eq(index + lastIndex).delay(time / 2).css({
      // //   'display': 'flex'
      // // }, function () {
      // //   $(this).animate({ 'display': 'flex' })
      // // }, time)
    }
  }
})

// 윈도우 사이즈 변경시 컨텐츠1의 스크롤바가 움직일 수 있는 한도를 조정해야함 
window.addEventListener('resize', function () {
  scrollBarContainment()
})

// 스크롤바 좌우 제한 함수
function scrollBarContainment() {
  var scrollBar = $('#content1ScrollBar')
  var content1List = $('#content1List')
  // 스크롤바 최소 왼쪽 끝
  var containmentX1 = scrollBar.parent().offset().left
  // 스크롤바 최대 왼쪽 끝
  var containmentX2 = scrollBar.parent().outerWidth() + scrollBar.parent().offset().left - scrollBar.outerWidth() + 20
  // 스크롤바 드래그의 containment 값을 넣어줌, 스크롤바는 부모의 넓이를 벗어나지 말아야함 
  scrollBar.draggable("option", "containment", [containmentX1, 0, containmentX2, 0]);
  scrollBar.css({ 'left': 0 })
  content1List.css({ 'left': 0 })
}