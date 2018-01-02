function begin() {
  console.log(localStorage.labCode);

  $('#phone').text($('#phone').text() + ' ' + localStorage.telephone);

  $('#btn-resend').on('click', function() {
    localStorage.labCode = 'LAB-' + parseInt(Math.random() * 1000);
    console.log(localStorage.labCode);
  });
}

$(document).ready(begin);