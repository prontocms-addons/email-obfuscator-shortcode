<?php

use Pronto\ShortcodeContainer;

ShortcodeContainer::add('obfuscate', function($attributes) {
	$address = array_shift($attributes);
	$obfuscated = str_replace(array('@', '.'), array(' AT ', ' DOT '), $address);
	$defaults = array(
		'text' => $obfuscated
	);
	$options = array_merge($defaults, $attributes);
	return '<span class="obfuscated" data-content="'.get_html($options['text']).'">'.get_html($obfuscated).'</span>';
});

?>
