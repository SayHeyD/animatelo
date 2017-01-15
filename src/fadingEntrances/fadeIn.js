/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.fadeIn = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                offset: 0
            },
            {
                opacity: 1,
                offset: 1
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
