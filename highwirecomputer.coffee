if Meteor.isClient
  Template.layout.rendered = ->
    new WOW().init
      mobile: false

  Template.layout.events
    'click a[data-scroll]': (e) ->
      e.preventDefault()
      $('html, body').animate
        scrollTop: $($(e.currentTarget).attr('href')).offset().top - 60
      , 1000

  Template.nav.rendered = ->
    $(".button-collapse").sideNav
      closeOnClick: true

  Template.contact.events
    'submit #form-contact': (e, doc) ->
      e.preventDefault()
      name = doc.find('#contact-name').value
      subject = "Website Contact: from #{name}"
      from = doc.find('#contact-email').value
      message = doc.find('#contact-message').value
      Meteor.call 'sendEmail', undefined, from, subject, message, (error, result) ->
        unless error
          $(doc.find('.input-row')).fadeOut 'fast', ->
            @.remove()
            $(doc.find('.feedback-text')).fadeIn()


if Meteor.isServer
  Meteor.methods sendEmail: (to, from, subject, text) ->
    unless to then to = "james@highwirecomputer.com"
    check [ to, from, subject, text ], [ String ]
    @unblock()
    Email.send
      to: to
      from: from
      subject: subject
      text: text