/* ==========================================================================
   Get Breakpoint State
   ========================================================================== */

'use strict';

var Behavior = {};

/**
 * @param {string} selector Used to query dom for elements.
 * @param {string} event Event type to add to element.
 * @param {function} eventHandler Callback for event.
 */
Behavior.create = function create( selector, event, eventHandler ) {
  var behaviorElements = document.querySelectorAll( selector );
  if( behaviorElements === null ) {
    return;
  }
  for( var i = 0, len = behaviorElements.length; i < len; i++ ) {
    behaviorElements[i].addEventListener( event, eventHandler, false );
  }
};

/**
 * @param {HTMLNode} behaviorElement Elment in which to remove the event.
 * @param {string} event Event type to remove from the element.
 * @param {function} eventHandler Callback for event.
 */
Behavior.destroy = function destroy( behaviorElement, event, eventHandler ) {
  behaviorElement.removeEventListener( event, eventHandler );
};

// Expose public methods.
module.exports = Behavior;
