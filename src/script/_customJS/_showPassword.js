$(document).ready(function () {
	var $showPasswordItems = $('.icon-view-item');

	/**show password on eye clicked **/
	$showPasswordItems.click(function () {
		var $this = $(this);
		var $input = $this.prevAll('div.input-password > input:first');

		let shown = !$this.hasClass("unshow");
		if (shown) {
			$input.attr('type', 'text');
			$this.toggleClass('unshow');
		} else {
			$input.attr('type', 'password');
			$this.toggleClass('unshow');
		}
	});

	$showPasswordItems.parents("form:first").submit(function () {
		var $inputs = $showPasswordItems.prevAll('div.input-password > input');

		$inputs.attr('type', 'password');
		$showPasswordItems.removeClass("unshow");
	});
});