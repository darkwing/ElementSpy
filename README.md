ElementSpy
=========

ElementSpy allows you to assign periodical checks on element attributes or other aspects of elements.

How to Use
----------

ElementFilter may be initialized at any time (usually at DOMReady).

	#JS
	
	var element = document.id('my-image');
	
	/* simple: just watch an attribute */
	var spy = new ElementSpy(element,'src', { 
		duration: 200,
		onChange: function(old,nu) { //alert when the image's SRC has changed!
			alert('Image SRC changed from ' + old + ' to ' + nu);
		}
	});
	
	//start spying on the image SRC!
	spy.start();
	

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/elementspy](http://davidwalsh.name/js/elementspy)