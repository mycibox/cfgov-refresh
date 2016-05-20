/* ==========================================================================
   Footer Button: Scroll to Top

   Code copied from the following with minimal modifications :

   - http://stackoverflow.com/questions/21474678/
     scrolltop-animation-without-jquery
   ========================================================================== */

'use strict';

// Required modules.
var dataHook = require( './util/data-hook' );

/**
 * Set up event handler for button to scroll to top of page.
 */
function init() {
  var scrollDuration = 300;
  var behaviorElement = dataHook.get( 'return-to-top' );

  if ( behaviorElement === null ||
       'requestAnimationFrame' in window === false ) {
    return;
  }

  // Disable Google Tag Manager tracking on this link.
  behaviorElement.setAttribute( 'data-gtm_ignore', 'true' );
  behaviorElement.addEventListener( 'click', function( event ) {
    event.preventDefault();
    _scrollToTop( scrollDuration );
  } );
}

/**
 * @param {integer} scrollDuration
 *  Duration of the scroll to top of the page.
 */
function _scrollToTop( scrollDuration ) {
  var scrollHeight = window.scrollY;
  var scrollStep = Math.PI / ( scrollDuration / 15 );
  var cosParameter = scrollHeight / 2;
  var scrollCount = 0;
  var scrollMargin;
  requestAnimationFrame( _step );

  /**
   * Decrement scroll Y position.
   */
  function _step() {
    setTimeout( function() {
      if ( window.scrollY !== 0 ) {
        requestAnimationFrame( _step );
        scrollCount += 1;
        scrollMargin = cosParameter - cosParameter *
                       Math.cos( scrollCount * scrollStep );
        window.scrollTo( 0, scrollHeight - scrollMargin );
      }
    }, 15 );
  }

}

module.exports = { init: init };
