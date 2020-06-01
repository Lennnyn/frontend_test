$(document).ready(function () {
  
  var slides = $('.slide')
  var slideWidth = slides.width()
  var slideCount = slides.length
  var sliderUlWidth = slideCount * slideWidth
  $('.slider').css({
    width: slideWidth
  })
  
  $('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth })
  
  $(window).resize(function () {
    location.reload()
  })
 
$('.slider ul li:last-child').prependTo('.slider ul')
  
  function moveLeft() {
    $('.slider ul').animate({
      left: +slideWidth
    }, 500, function () {
      $('.slider ul li:last-child').prependTo('.slider ul')
      $('.slider ul').css('left', '')
    })
  }
  
  function moveRight() {
    $('.slider ul').animate({
      left: -slideWidth
    }, 500, function () {
      $('.slider ul li:first-child').appendTo('.slider ul')
      $('.slider ul').css('left', '')
    })
  }

  var interval = setInterval(function () {
    moveRight()
  }, 5000)

  $('.slider').on('mouseover', function() {
    clearInterval(interval)
   })
   
  $('.slider').on('mouseout', function() {
    interval = setInterval(function () {
      moveRight()
    }, 5000)
  })

  $('.control_prev').click(function () {
    moveLeft()
  })
  
  $('.control_next').click(function () {
    moveRight()
  })
})
