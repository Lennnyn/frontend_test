$(document).ready(function () {
  setInterval(function () {
    moveRight()
  }, 6000)
  
  var slideWidth = $('.slider ul li').width()
  $('.slider').css({
    width: slideWidth
  })
  
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
  
  $('.control_prev').click(function () {
    moveLeft()
  })
  
  $('.control_next').click(function () {
    moveRight()
  })
})
