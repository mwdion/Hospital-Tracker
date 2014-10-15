$(document).ready(function() {
  $('#patient_first_name').hover( function(){
    console.log("click the button")
    if($('#patient_first_name').val()==""){
      $('.notice').show()
      $('.notice').html("First name needs to be entered!")
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
  $('#patient_last_name').hover( function(){
    console.log("click the button")
    if($('#patient_last_name').val()==""){
      $('.notice').show()
      $('.notice').html("Last name needs to be entered!")
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
    $(".patient_list").addClass("hidden")
    $(".group_" + new_page).removeClass("hidden")
   })
  })
$(document).on("click", '.put_status', function() {
    var hospital_id = $(".hospital_id").val()
    var patient_id = $(".patient_id").val()
    console.log("hi")
    var workflow_state = $(this).attr("workflow_state")
    $.ajax({
      url: "/hospitals/"+ hospital_id +"/patients/"+ patient_id + "/" +workflow_state,
      type: "put",
      dataType: "script",
    })
  })
