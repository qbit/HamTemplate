function loadTestPage(page) {
	page = 'test_' + page;
	loadPage(page);
}

function loadPage(page) {
	if (window.location.hash.match(/#/) && !page) {
		page = window.location.hash.replace('#','') + '.md';
	} else {
		if (page) {
			page = page.replace('#','') + '.md';
		} else {
			page = default_page;
		}
	}

	$.get('texts/' + page, function(d) {
		$('#main').html(marked(d));
		$('#main a').each(function() {
			if ($(this).prop('href').match(/#/)) {
				$(this).click(function() {
					var a = $(this).prop('href').split('/');
					a = a[a.length -1];
					loadPage(a);
				});
			}
		});
		$('table').addClass('table table-condensed table-hover table-striped table-bordered');
		$('.callsign').click(function() {
			var self = this;
			function toggle() {
				$(self).popover('toggle');
			}

			callmgr.get($(this).text(), function(d) {
				var title = d.callsign;

				$(self).prop('data-toggle', 'popover');
				$(self).prop('title', title);
				$(self).prop('data-content', callmgr.pretty(d));
				$(self).prop('data-original-title', title);

				$(self).popover({
					title: title,
					content: callmgr.pretty(d),
					selector: 'popover',
					html: true
				});

				$(self).popover('show');

				$('body').click(function() {
					$('body').unbind('click');
					toggle();
				});
			});
		});
	});

}
