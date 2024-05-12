document.addEventListener('scroll', function(e) {
  var scrollAmount = window.pageYOffset || document.documentElement.scrollTop;
  var documentHeight = document.documentElement.scrollHeight;
  var windowHeight = window.innerHeight;
  var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
  // var scrollAm = Math.round(scrollPercent);

  // For scrollbar 
  var scrollball = document.querySelector('.scrollball');
  if (scrollball) {
    scrollball.style.top = 'calc(' + scrollPercent + '% - 5px)';
    var number = scrollPercent.toFixed(0);
    var span = scrollball.querySelector('span');
    if (span) {
      span.textContent = number;
    }
  }
});