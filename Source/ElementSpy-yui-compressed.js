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
var ElementSpy=new Class({Implements:[Options,Events],options:{interval:100},initialize:function(b,c,a){this.setOptions(a);this.element=document.id(b);this.val=this.getter(c);this.interval;this.worker=function(){var d=this.getter(c);this.fireEvent("check",[this.val,d]);if(d!=this.val){this.fireEvent("change",[this.val,d]);this.val=d;}else{this.fireEvent("stagnate",[d]);}}.bind(this);},start:function(){this.interval=this.worker.periodical(this.options.interval);this.fireEvent("start");return this;},stop:function(){$clear(this.interval);this.fireEvent("stop");return this;},getter:function(a){return $type(a)=="function"?(a.bind(this.element))():this.element.get(a);}});