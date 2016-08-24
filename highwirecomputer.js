
if (Meteor.isClient) {
  require("meteor/udondan:slick");
  Template.layout.rendered = function() {
    return new WOW().init({
      mobile: false
    });
  };
  Template.layout.events({
    'click [data-scroll]': function(e) {
      e.preventDefault();
      return $('html, body').animate({
        scrollTop: $($(e.currentTarget).attr('href')).offset().top - 60
      }, 300);
    }
  });
  Template.nav.rendered = function() {
    return $(".button-collapse").sideNav({
      closeOnClick: true
    });
  };
  Template.contact.events({
    'submit #form-contact': function(e, doc) {
      var from, message, name, subject;
      e.preventDefault();
      name = doc.find('#contact-name').value;
      subject = "Website Contact: from " + name;
      from = doc.find('#contact-email').value;
      message = doc.find('#contact-message').value;
      return Meteor.call('sendEmail', void 0, from, subject, message, function(error, result) {
        if (!error) {
          return $(doc.find('.input-row')).fadeOut('fast', function() {
            this.remove();
            return $(doc.find('.feedback-text')).fadeIn();
          });
        }
      });
    }
  });
  Template.hero.rendered = function() {
    return $("#hero .container").slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 7500
    });
  };
}

if (Meteor.isServer) {
  Meteor.methods({
    sendEmail: function(to, from, subject, text) {
      if (!to) {
        to = "james@highwirecomputer.com";
      }
      check([to, from, subject, text], [String]);
      this.unblock();
      return Email.send({
        to: to,
        from: from,
        subject: subject,
        text: text
      });
    }
  });
}
