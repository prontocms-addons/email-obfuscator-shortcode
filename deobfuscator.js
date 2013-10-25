var elems = document.getElementsByTagName('*');
for (var i = 0; i < elems.length; i++) {
	var node = elems[i];
	var classes = node.className || '';
	if((' '+classes+' ').indexOf(' obfuscated ') > -1) {
		var address = (node.innerText || node.textContent);
		var content = node.getAttribute('data-content') || address;
		node.innerHTML = '<a href="mailto:'+address.replace(/ AT /g, '@').replace(/ DOT /g, '.')+'">'+content.replace(/ AT /g, '@').replace(/ DOT /g, '.')+'</a>';
	}
}