define("#class/0.9.0/class",[],function(){function a(b){if(!(this instanceof a)&&i(b))return c(b)}function b(b){var c,d;for(c in b)d=b[c],a.Mutators.hasOwnProperty(c)?a.Mutators[c].call(this,d):this.prototype[c]=d}function c(c){return c.extend=a.extend,c.implement=b,c}function d(){}function f(a,b){for(var c in b)a[c]=b[c]}a.create=function(d,e){function g(){d.apply(this,arguments),this.constructor===g&&this.initialize&&this.initialize.apply(this,arguments)}return i(d)||(e=d,d=null),e||(e={}),d||(d=e.Extends||a),e.Extends=d,d!==a&&f(g,d),b.call(g,e),c(g)},a.extend=function(b){return b||(b={}),b.Extends=this,a.create(b)},a.Mutators={Extends:function(a){var b=this.prototype,c=e(a.prototype);f(c,b),c.constructor=this,this.prototype=c,this.superclass=a.prototype},Implements:function(a){h(a)||(a=[a]);var b=this.prototype,c;while(c=a.shift())f(b,c.prototype||c)},Statics:function(a){f(this,a)}};var e=Object.__proto__?function(a){return{__proto__:a}}:function(a){return d.prototype=a,new d},g=Object.prototype.toString,h=Array.isArray;h||(h=function(a){return g.call(a)==="[object Array]"});var i=function(a){return g.call(a)==="[object Function]"};return a});