// Make an object that contains functions such that
// when we need to make a new gallery or slideshow
// instantiating an instance of this object will 
// create the gallery and style without having to recode 
// an entire slideshow.
// Configure gallery options by passing in an options object
//
// Example

var options = {
      "transition": "crossfade",
      "autoplay": true,
      "primary_nav": true,
      "secondary_nav": true
    };

// basic contstructor function
var gallery = function(gallery_name, options){
  this.name = gallery_name,
  this.transition = options.transition || "crossfade",
  this.autoplay = options.autoplay || true,
  this.primary_nav = options.primary_nav || false,
  this.secondary_nav = options.secondary_nav || false;
};

gallery.prototype = {

  autoPlay: function(){
    // if true set up auto play
  },

  setTransitionType: function(){
    // if crossfade do this
    // else if slide do this
  },

  setPrimaryNav: function(){
    // display a primayr next/prev navigation is required
  },

  setSecondaryNav: function(){
    // display a secondary navigation if require
  },

  galleryInit: function(){
    // puts it all together and kicks off the gallery
  }
}


