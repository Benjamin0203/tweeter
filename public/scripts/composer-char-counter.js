$(document).ready(function() {
  // --- our code goes here ---
  $('#tweet-text').on('input', function() {
    const max = 140;
    let length = $(this).val().length;
    let textCounter = max - length;

    let $counterElement = $(this).parent().find('.counter');
    $counterElement.text(textCounter);
    
    if (textCounter < 0) {
      $counterElement.addClass('errorMsg');
    } else {
      $counterElement.removeClass('errorMsg');
    }
  });
});

