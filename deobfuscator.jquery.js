/* Requires jQuery or Zepto */
$(function() {
	$('.obfuscated').each(function() {
		var address = $(this).text();
		var content = $(this).data('content') || address;
		$(this).html('<a href="mailto:'+address.replace(/ AT /g, '@').replace(/ DOT /g, '.')+'">'+content.replace(/ AT /g, '@').replace(/ DOT /g, '.')+'</a>');
	});
});
