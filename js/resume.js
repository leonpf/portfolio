(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var $contactForm = $('#contact_form');
  $contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://formspree.io/xrgayqzz',
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      beforeSend: function() {
        $contactForm.append('<div class="alert alert--loading">Enviando Mensagem...</div>');
      },
      success: function(data) {
        $contactForm.find('.alert--loading').remove();
        $contactForm.append('<div id="alert" class="alert alert--success">Obrigado pelo contato, responderei assim que possível.</div>');
        setTimeout(function() {
          $('#alert').remove();
          $("#contact_form")[0].reset();
        }, 5000);
      },
      error: function(err) {
        $contactForm.find('.alert--loading').remove();
        $contactForm.append('<div class="alert alert--error">Ocorreu um problema no envio. Por favor entre em contato pelo email: pabloleonrodrigues@gmail.com</div>');
      }
    });
  });  
})(jQuery); // End of use strict
