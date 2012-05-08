/* @author lifesinger@gmail.com */

define("#base/0.9.0/base", ["class","events","./options"], function(require) {
    var Class = require('class');
    var Events = require('events');
    var Options = require('./options');

    return Class.create({
        Implements: [Events, Options]
    });
});
