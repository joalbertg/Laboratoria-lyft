function begin() {
  function nameValid() {
    return $('#first_name').val().length >= 3;
  }

  function lastNameValid() {
    return $('#last_name').val().length >= 3;
  }

  function emailValid() {
    return !$('#email').hasClass('invalid') && ($('#email').val().trim().length !== 0);
  }

  function checkboxValid() {
    return $('#filled-in-box').prop('checked');
  }

  function allOk() {
    return nameValid() && lastNameValid() && emailValid();
  }

  $('#filled-in-box').on('change', function() {
    if (allOk()) {
      $('#btn-next a').removeClass('disabled');
    } else {
      $(this).prop('checked', false);
    }
  });

  $('#btn-next a').on('click', function() {
    $(location).attr('href', 'home.html');
  });
}

$(document).ready(begin);