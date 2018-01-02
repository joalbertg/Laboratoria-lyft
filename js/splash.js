function begin() {
  setTimeout(redirect, 3000);
}

function redirect() {
  $(location).attr('href', 'html/primary.html');
}

$(document).ready(begin);
