$(document).on('click', '.pass-view', function (event) {
	var $open = $(this).children('.fa-eye');
	var $close = $(this).children('.fa-eye-slash');
	var $pass = $(this).siblings('.pass');
	if ($open.is(':visible')) {
		$close.show();
		$open.hide();
		$pass.attr('type', 'text');
	} else {
		$close.hide();
		$open.show();
		$pass.attr('type', 'password');
	}
});