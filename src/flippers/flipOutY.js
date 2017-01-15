/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.flipOutY = function (selector, options) {
        var keyframeset = [
            {
                transform: 'perspective(400px)',
                opacity: 1,
                offset: 0
            },
            {
                transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
                opacity: 1,
                offset: 0.3
            },
            {
                transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
                opacity: 0,
                offset: 1
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
