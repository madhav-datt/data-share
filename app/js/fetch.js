if (jQuery) {
	jQuery(document).ready(function($) {
		/*
		given 'url' of page, fetches raw html
		asynchronous
		*/
		function fetchPage(url) {
			// if url doesn't begin with http/https append http
			if (!url.match(/^https?:\/\//mg)) {
				url = "http://" + url;
			}
			$.get(url, function(resp) {
			// in process of fetching			
			})
			.done(function(resp) {
				console.log(resp);
			});
		}
		fetchPage("google.com")
	});
}
else {
	// something went wrong, jQuery isn't being loaded
}