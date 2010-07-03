/*
---
description:     ElementSpy

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - ElementSpy
...
*/
var ElementSpy = new Class({
	Implements: [Options,Events],
	options: {
		interval: 100
	},
	initialize: function(element,attribute,options) {
		this.setOptions(options);
		this.element = document.id(element);
		this.val = this.getter(attribute);
		this.interval;
		this.worker = function() {
			var value = this.getter(attribute);
			this.fireEvent('check',[this.val,value]);
			if(value != this.val) {
				this.fireEvent('change',[this.val,value]); //old,new
				this.val = value;
			}
			else {
				this.fireEvent('stagnate',[value]); //current
			}
		}.bind(this);
	},
	start: function() {
		this.interval = this.worker.periodical(this.options.interval);
		this.fireEvent('start');
		return this;
	},
	stop: function() {
		$clear(this.interval);
		this.fireEvent('stop');
		return this;
	},
	getter: function(attribute) {
		return $type(attribute) == 'function' ? (attribute.bind(this.element))() : this.element.get(attribute);
	}
});