var submitButton = $("#submitButton");
$('.check').change(function(event){
    var arr = $(".check:checked").map(function() {
      return $(this).val();
    }).get(); 
    var sorted_arr = arr.sort(); 
    var results = [];
    for (var i = 0; i < arr.length - 1; i++) {
       if (sorted_arr[i + 1] == sorted_arr[i]) {
           results.push(sorted_arr[i]);
       }
    }
    for (var i = arr.length - 1; i > 0; i--) {
      if (sorted_arr[i] == sorted_arr[i - 1]) {
          results.push(sorted_arr[i]);
      }
  }
    if(results.length > 0){
        this.checked = false
        submitButton.prop("disabled", true);
        $('.check').attr('checked',false);
     alert('value is already checked')
    }
    else{
      submitButton.prop("disabled", false);
    }
   });