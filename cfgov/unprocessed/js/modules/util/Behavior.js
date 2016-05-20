/* ==========================================================================
   Get Breakpoint State
   ========================================================================== */

'use strict';

var Behavior = {};

Behavior.create = function create( selector, event, eventHandler ) {
  var behaviorElements = document.querySelectorAll( selector );
  if( behaviorElements === null ) {
    return;
  }

  for( var i = 0, len = behaviorElements.length; i < len; i++ ) {
    console.log( behaviorElements );
    behaviorElements[i].addEventListener( event, eventHandler, false );
  }
};

Behavior.destroy = function destroy( behaviorElement, event, eventHandler ) {
  behaviorElement.removeEventListener( event, eventHandler );
};

// Expose public methods.
module.exports = Behavior;
