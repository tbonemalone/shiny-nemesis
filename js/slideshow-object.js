/*global $:false*/
// Make an object that contains functions such that
// when we need to make a new gallery or slideshow
// instantiating an instance of this object will
// create the gallery and style without having to recode
// an entire slideshow.
// Configure gallery options by passing in an options object

// Example

var test_options = {
      "transition": "slide",
      "autoplay": true,
      "primary_nav": true,
      "secondary_nav": true,
    };

// basic constructor function
var Gallery = function(gallery_name, options){
  this.name = gallery_name,
  this.transition = options.transition || "crossfade",
  this.autoplay = options.autoplay || true,
  this.primary_nav = options.primary_nav || false,
  this.secondary_nav = options.secondary_nav || false,
  this.slides = $(".slide") || "undefined",
  this.number_slides = $(".slide").length || 0;
  self = this; // set object reference to this as self.
};

Gallery.prototype = {

  autoPlay: {
    startAutoPlay: function(){
      // if true set up auto play
      console.log("start");
      var t = setInterval(self.transitionCrossfade, 2000);
      return t;
    },
    stopAutoPlay: function(t){
      console.log("stop");
      clearInterval(t);
    }
  },

  setTransitionType: function(){
    // if crossfade do this
    // else if slide do this
  },

  stackSlides: function(){
    // positions slides on top of each other in preparation for crossfade
    $(".slide-container").css("position", "relative");
    $(".slide").css({
      position: "absolute",
      top: 0,
      left: 0
    });
  },

  transitionCrossfade: function(){
    // transitions slides via opacity transition

    var cur_index = self.slides.index($(".active")),
        next_index = cur_index + 1;

    //
    self.stackSlides();

    if(next_index < self.number_slides){
      // change the class
      self.slides.eq(next_index).addClass("active");
      self.slides.eq(cur_index).removeClass("active");
    }
      else {
        $(".active").removeClass("active");
        self.slides.eq(0).addClass("active");
      }
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
};

$(document).ready(function(){
  var hpGallery = new Gallery("hp_gallery", test_options);

  $(document).on("click", function(){
    hpGallery.transitionCrossfade();
  });

  hpGallery.autoPlay()

});
