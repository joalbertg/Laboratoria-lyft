function begin() {
  $('#btn-login').on('click', function() {
    $(location).attr('href', 'signIn.html');
  });

  $('#btn-signup').on('click', function() {
    $(location).attr('href', 'signUp.html');
  });

  $('select').material_select();

  $('#countries').on('change', function() {
    switch (true) {
    case ($(this).val() === 'peru'):
      $('#telephone').val('+51');
      break;
    case ($(this).val() === 'ecuador'):
      $('#telephone').val('+593');
      break;
    default:
      $('#telephone').val('+1');
    }
  });

  $('#btn-next').on('click', function() {
    localStorage.labCode = 'LAB-' + parseInt(Math.random() * 1000);
    localStorage.telephone = $('#telephone').val();

    $(location).attr('href', 'verify.html');
  });
}

$(document).ready(begin);