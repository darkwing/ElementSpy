Class: ElementSpy {#ElementSpy}
=====================================

ElementSpy allows you to assign periodical checks on element attributes or other aspects of elements.

### Implements:

Options, Events

ElementSpy Method: constructor {#ElementSpy:constructor}
---------------------------------------------------------------


### Syntax:

	var myElementSpy = new ElementSpy(element,attribute,options);

### Arguments:

1. observeElement - (*string or Element*)  The element to spy on.
2. attribute - (*string or Function*)  A string representing the element attribute to check or a function which returns the value to compare each cycle.
3. options - (*object*)  An object containing the ElementSpy instance's options.

### Options:

* interval - (*number*, defaults to 100)  The interval at which the Element should be checked.

### Returns:

A ElementSpy instance.


### Events:

### start

* (*function*) Function to execute to start the listener.

### Signature

	onStart()

### stop

* (*function*) Function to execute to star the listener.

### Signature

	onStop()