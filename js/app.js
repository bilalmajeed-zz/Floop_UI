$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();

    $('.save_goal').click(function(){
		var input = document.getElementById("goal_input").value;
		var date = document.getElementById("date").value;
		var table = document.getElementById("goal-table");
		var row = table.insertRow(table.rows.length);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);

		// Add some text to the new cells:
		cell1.innerHTML = "<p><input type='checkbox' id='goal3'/><label for='goal3'>"+input+"</label></p>"
		cell2.innerHTML = "<p><label class='red-text text-darken-1'>Complete by: "+date+"</label></p>";

	});

  });

$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 15 // Creates a dropdown of 15 years to control year
});


