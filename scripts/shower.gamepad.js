(function () {
    'use strict';

    Gamepad.on('joystick.left', function (evt) {
        var dirs = evt.direction;

        if (dirs.left) {
            shower.prev();
        } else if (dirs.right) {
            shower.next();
        }
    });

    Gamepad.on('joystick.right', function (evt) {
        var dirs = evt.direction;

        if (dirs.left) {
            shower.prev();
        } else if (dirs.right) {
            shower.next();
        }
    });
}());
