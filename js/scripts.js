// Business Logic



// UI logic
$(document).ready(function() {
  $("survey").submit(function(event) {
    event.preventDefault();
    const firstName=$('#name1').val();
    const lastName=$('#name2').val();
    const dob=$('#born').val());
    const favoriteColor=$('#faveColor').val();


    $("#output").text(result);
  });
});

