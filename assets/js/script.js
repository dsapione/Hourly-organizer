var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

var currentTime = moment().hour();

var nine = $("#9").data('value');
var ten = $("#10").data('value');
var eleven = $("#11").data('value');
var twelve = $("#12").data('value');
var thirteen = $("#13").data('value');
var fourteen = $("#14").data('value');
var fithteen = $("#15").data('value');
var sixteen = $("#16").data('value');
var seventeen = $("#17").data('value');


if (nine === currentTime) {
	$('.9').addClass("present");
	$('.9').removeClass("past");
	$('.10, .11, .12, .13, .14, .15, .16, .17').addClass("future");
	$('.10, .11, .12, .13, .14, .15, .16, .17').removeClass("past");
}
if (ten === currentTime) {
	$('.10').addClass("present");
	$('.10').removeClass("past");
	$('.9').addClass("past");
	$('.11, .12, .13, .14, .15, .16, .17').addClass("future");
	$('.11, .12, .13, .14, .15, .16, .17').removeClass("past");
}
if (eleven === currentTime) {
	$('.11').addClass("present");
	$('.11').removeClass("past");
	$('.9, .10').addClass("past");
	$('.12, .13, .14, .15, .16, .17').addClass("future");
	$('.12, .13, .14, .15, .16, .17').removeClass("past");
}
if (twelve === currentTime) {
	$('.12').addClass("present");
	$('.12').removeClass("past");
	$('.9, .10, .11').addClass("past");
	$('.13, .14, .15, .16, .17').addClass("future");
	$('.13, .14, .15, .16, .17').removeClass("past");
}
if (thirteen === currentTime) {
	$('.13').addClass("present");
	$('.13').removeClass("past");
	$('.9, .10, .11, .12').addClass("past");
	$('.14, .15, .16, .17').addClass("future");
	$('.14, .15, .16, .17').removeClass("past");
}
if (fourteen === currentTime) {
	$('.14').addClass("present");
	$('.14').removeClass("past");
	$('.9, .10, .11, .12, .13').addClass("past");
	$('.15, .16, .17').addClass("future");
	$('.15, .16, .17').removeClass("past");
}
if (fithteen === currentTime) {
	$('.15').addClass("present");
	$('.15').removeClass("past");
	$('.9, .10, .11, .12, .13, .14').addClass("past");
	$('.16, .17').addClass("future");
	$('.16, .17').removeClass("past");
}
if (sixteen === currentTime) {
	$('.16').addClass("present");
	$('.16').removeClass("past");
	$('.9, .10, .11, .12, .13, .14, .15').addClass("past");
	$('.17').addClass("future");
	$('.17').removeClass("past");
}
if (seventeen === currentTime) {
	$('.17').addClass("present");
	$('.17').removeClass("past");
	$('.9, .10, .11, .12, .13, .14, .15, .16').addClass("past");
}


$('.9am').on('click', function () {
	var nineInput= $('.9').val();
	localStorage.setItem('nine', JSON.stringify(nineInput));
});
	
$('.10am').on('click', function () {
	var tenInput= $('.10').val();
	localStorage.setItem('ten', JSON.stringify(tenInput));
});

$('.11am').on('click', function () {
	var elevenInput= $('.11').val();
	localStorage.setItem('eleven', JSON.stringify(elevenInput));
});

$('.12pm').on('click', function () {
	var twelveInput= $('.12').val();
	localStorage.setItem('twelve', JSON.stringify(twelveInput));
});

$('.1pm').on('click', function () {
	var thirteenInput= $('.13').val();
	localStorage.setItem('thirteen', JSON.stringify(thirteenInput));
});

$('.2pm').on('click', function () {
	var fourteenInput= $('.14').val();
	localStorage.setItem('fourteen', JSON.stringify(fourteenInput));
});

$('.3pm').on('click', function () {
	var fithteenInput= $('.15').val();
	localStorage.setItem('fithteen', JSON.stringify(fithteenInput));
});

$('.4pm').on('click', function () {
	var sixteenInput= $('.16').val();
	localStorage.setItem('sixteen', JSON.stringify(sixteenInput));
});

$('.5pm').on('click', function () {
	var seventeenInput= $('.17').val();
	localStorage.setItem('seventeen', JSON.stringify(seventeenInput));
	JSON.parse(localStorage.getItem(seventeenInput));
});





