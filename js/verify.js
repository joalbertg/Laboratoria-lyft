function begin() {
  console.log(localStorage.labCode);

  $('#phone').text($('#phone').text() + ' ' + localStorage.telephone);

  $('#btn-resend').on('click', function() {
    localStorage.labCode = 'LAB-' + parseInt(Math.random() * 1000);
    console.log(localStorage.labCode);
  });

  $('#btn-next > a').attr('disabled', true).on('click', function() {
    $(location).attr('href', 'signUpUser.html');
  });

  $('#code').on('keyup', function() {
    if ($(this).val() && ($(this).val().length >= 3)) {
      if (('LAB-' + $(this).val()) === localStorage.labCode) {
        $('#btn-next > a').attr('disabled', false);
      }
    }
  });
}

$(document).ready(begin);