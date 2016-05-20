'use strict';

// Required modules.
var standardType = require( './standard-type' );

/**
 * @param {HTMLNode} element - DOM element.
 * @param {string} value
 *   Value to add to the element's JS data-* hook.
 * @returns {string} The value that was added.
 * @throws {Error} If supplied value contains a space,
 *   meaning it would be two values, which is likely a typo.
 */
function add( element, value ) {
  if ( value.indexOf( ' ' ) !== -1 ) {
    var msg = standardType.JS_HOOK + ' values cannot contain spaces!';
    throw new Error( msg );
  }

  var values = element.getAttribute( standardType.JS_HOOK );
  if ( values !== null ) {
    value = values + ' ' + value;
  }
  element.setAttribute( standardType.JS_HOOK, value );

  return value;
}

/**
 * @param {HTMLNode} element - DOM element.
 * @param {string} value
 *   Value to remove from the JS data-* hook value.
 * @returns {boolean} True if value was removed, false otherwise.
 */
function remove( element, value ) {
  var values = element.getAttribute( standardType.JS_HOOK );
  var index = values.indexOf( value );
  var valuesList = values.split( ' ' );
  if ( index > -1 ) {
    valuesList.splice( index, 1 );
    element.setAttribute( standardType.JS_HOOK, valuesList.join( ' ' ) );
    return true;
  }

  return false;
}

/**
 * @param {HTMLNode} element - DOM element.
 * @param {string} value
 *   Value to check as existing as a JS data-* hook value.
 * @returns {boolean} True if the data-* hook value exists, false otherwise.
 */
function contains( element, value ) {
  var values = element.getAttribute( standardType.JS_HOOK );
  // If JS data-* hook is not set return immediately.
  if ( !values ) { return false; }
  values = values.split( ' ' );

  return values.indexOf( value ) > -1 ? true : false;
}

/**
 * @param {string} behavior
 *  Behavior type used to find the element within the dom.
 * @returns {HTMLNode} if it exists in the dom, null otherwise.
 */
function get( behavior ) {
  var behaviorSelector =
  standardType.JS_HOOK + '*=' + standardType.BEHAVIOR_PREFIX + behavior;
  var behaviorElement = document.querySelector( '[' + behaviorSelector + ']' );

  return behaviorElement;
}

module.exports = {
  add:      add,
  contains: contains,
  get:      get,
  remove:   remove
};
