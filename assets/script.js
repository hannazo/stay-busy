$(function () {
  // Save to local storage
  $('.saveBtn').click(function () {
    
    var key = $(this).parents('.time-block').attr('id');
    console.log(key);
    var value = $(this).siblings('.description').val();
    console.log(value);

    localStorage.setItem(key, value);
  });

  // Add color-code
  var currentHour = dayjs().format('HH');
  console.log('Current hour: ' + currentHour);

  $('.time-block').each(function () {
  var hourId = $(this).attr('id').split('hour-')[1];
  console.log('Hour ID: ' + hourId);
  
  if (hourId < currentHour) {
    $(this).addClass('past');
  }
  else if (hourId == currentHour) {
    $(this).addClass('present');
  }
  else {
    $(this).addClass('future');
  }
  });

  // Display saved items fron local storage
  $('.description').each(function () {
    var keyId = $(this).parents('.time-block').attr('id');

    $(this).val(localStorage.getItem(keyId));
    });
  
  // Display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'));
});
