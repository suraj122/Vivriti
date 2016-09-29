$(document).ready(function() {
	$('.gallery a').click(function() {
		var d = parseInt($(this).attr("data-id"));
		console.log(d);
		$('.item').removeClass('active');
		$('.item:eq('+d+')').addClass('active');
	});
	$('.secondary-nav a').click(function() {
		$('.secondary-nav a').removeClass('active');
		$(this).addClass('active');
	});
});
