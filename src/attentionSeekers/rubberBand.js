/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
  'use strict';
  animatelo.rubberBand = function (selector, options) {
    var keyframeset = [
      {
        transform: 'scale3d(1, 1, 1)',
        offset: 0
      },
      {
        transform: 'scale3d(1.25, 0.75, 1)',
        offset: 0.3
      },
      {
        transform: 'scale3d(0.75, 1.25, 1)',
        offset: 0.4
      },
      {
        transform: 'scale3d(1.15, 0.85, 1)',
        offset: 0.5
      },
      {
        transform: 'scale3d(.95, 1.05, 1)',
        offset: 0.65
      },
      {
        transform: 'scale3d(1.05, .95, 1)',
        offset: 0.75
      },
      {
        transform: 'scale3d(1, 1, 1)',
        offset: 1
      }
    ];
    return animatelo._animate(selector, keyframeset, options);
  }
})(window.animatelo = window.animatelo || {});
