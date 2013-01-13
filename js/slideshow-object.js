// Make an object that contains functions such that
// when we need to make a new gallery or slideshow
// instantiating an instance of this object will
// create the gallery and style without having to recode
// an entire slideshow.
// Configure gallery options by passing in an options object
//
// Example

var test_options = {
      "transition": "slide",
      "autoplay": true,
      "primary_nav": true,
      "secondary_nav": true,
    };

// basic contstructor function
var Gallery = function(gallery_name, options){
  this.name = gallery_name,
  this.transition = options.transition || "crossfade",
  this.autoplay = options.autoplay || true,
  this.primary_nav = options.primary_nav || false,
  this.secondary_nav = options.secondary_nav || false,
  this.number_slides = $(".slide").length || 0;
};

Gallery.prototype = {

  autoPlay: function(){
    // if true set up auto play
  },

  setTransitionType: function(){
    // if crossfade do this
    // else if slide do this
  },

  transitionOpacity: function(){
    console.log("opacity");
    var self = this;
    // hide all slides but first
    // on click
      // opacity 0 on current slide
      // opacity 1 on the next slide
    var slides = $(".slide");

    $(".slide").on("click", function(){
      var cur_index = slides.index($(".active")),
          next_index = cur_index + 1;

      if(next_index < self.number_slides){
        // change the class
        slides.eq(next_index).addClass("active");
        slides.eq(cur_index).removeClass("active");
      }
        else {
          $(".active").removeClass();
          slides.eq(0).addClass("active");
        }
    });
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
  console.log(hpGallery.number_slides);
  hpGallery.transitionOpacity();
});
