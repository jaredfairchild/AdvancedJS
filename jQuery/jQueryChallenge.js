$(document).ready(function () {
	var counter = 0;

	$("#clickBtn").click(function () {
		if (counter % 2 == 0) {
			$(this).html("You clicked me!");
		} else {
			$(this).html("Click me!");
		}

		counter++;
	});

	$("ul li:first-child").click(function () {
		$(this).html("<h1>Item the first</h1>");
	});

	$(".li").click(function () {
		$(this).css({ color: "red" });
	});

	$("#reload").click(function () {
		location.reload();
	});
});
