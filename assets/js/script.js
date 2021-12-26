var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

var currentTime = moment().hour();

$('.saveBtn').on('click', function() {
	var activity = $(this).siblings('.description').val()
	var hour = $(this).parent().data('value')
	localStorage.setItem(hour, activity)
})


$('.row').each(function() {
	var rowHour = parseInt($(this).attr('data-value'))

	if (currentTime < rowHour) {
		$(this).children('.description').addClass('future')
	}
	else if (currentTime === rowHour) {
		$(this).children('.description').addClass('present')
	}
	else {
		$(this).children('.description').addClass('past')
	}
})

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
for (var i = 0; i < hours.length; i++) {
	$(`#${hours[i]} .description`).val(localStorage.getItem(hours[i]))
}

