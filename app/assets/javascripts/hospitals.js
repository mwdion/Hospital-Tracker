$(document).ready(function() {
  $('#hospital_name').hover( function(){
    console.log("click the button")
    if($('#hospital_name').val()==""){
      $('.notice').show()
      $('.notice').html("Name is not filled out properly!")
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
  $('#hospital_description').hover( function(){
    console.log("click the button")
    if($('#hospital_description').val()==""){
      $('.notice').show()
      $('.notice').html("The description needs to be filled out!")
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
$(".search_patients").click( function() {
    console.log("hola");
    console.log($('.patient_search').val())
    $.ajax({
      url: "/patients",
      dataType: "script",
      type: "GET",
      data: {q: $('.patient_search').val()}
    })
  })
  })
$(document).ready(function() {
  $(".new_page").click(function () {
    console.log("sup bro")
    var new_page = $(this).html()
    $(".hospital_list").addClass("hidden")
    $(".group_" + new_page).removeClass("hidden")
   })
  })
