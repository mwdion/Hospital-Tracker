$(document).ready(function() {
  $('#medication_name').hover( function(){
    console.log("click the button")
    if($('#medication_name').val()==""){
      $('.notice').show()
      $('.notice').html("Medication name needs to be entered!")
      $('.notice').fadeOut(1000)
      console.log("somestuff")
      $('input[type=submit]').attr('disabled', 'disabled');
    }
    else {
      $('input[type=submit]').removeAttr('disabled', 'disabled');
    }
  })
})
$(document).ready(function() {
  $('#medication_description').hover( function(){
    console.log("click the button")
    if($('#medication_description').val()==""){
      $('.notice').show()
      $('.notice').html("Medication description needs to entered!")
      $('.notice').fadeOut(1000)
      console.log("somestuff")
      $('input[type=submit]').attr('disabled', 'disabled');
    }
    else {
      $('input[type=submit]').removeAttr('disabled', 'disabled');
    }
  })
})

$(document).ready(function() {
  $(".new_page").click(function () {
    console.log("sup bro")
    var new_page = $(this).html()
    $(".medication_list").addClass("hidden")
    $(".group_" + new_page).removeClass("hidden")
   })
  })
