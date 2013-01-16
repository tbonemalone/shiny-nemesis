// this is for jshint
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

  // maybe create a state object to track current slide, next slide and prev slide

  autoPlay: {
    // start and stop autoplaying
    // will need to build in ability to work with various transition types
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
    $(".slide-container").addClass("crossfade");
  },

  transitionCrossfade: function(){
    // transitions slides via opacity transition
    var cur_index = self.slides.index($(".active"));
        next_index = cur_index + 1;

    // I pull this out of here. it doesn't belong
    self.stackSlides();

    if(next_index < self.number_slides){
      // change the class
      self.navigateToNext(cur_index);
    }
      else {
        cur_index = self.slides.length - 1;
        self.navigateToNext(cur_index);
      }
  },

  addPrimaryNav: function(){
    // display a primary next/prev navigation is required
    var $prev = $(document.createElement("p")).addClass("prev"),
        $next = $(document.createElement("p")).addClass("next");

    $($prev).addClass("primary-nav");
    $($next).addClass("primary-nav");

    $($prev).hide().appendTo($("#gallery")).fadeIn()
    $($next).hide().appendTo($("#gallery")).fadeIn()
  },

  navigateToNext: function(cur_index){
    $(".active").removeClass("active");
    self.slides.eq(cur_index + 1).addClass("active");
  },

  navigateToPrev: function(cur_index){
    $(".active").removeClass("active");
    self.slides.eq(cur_index - 1).addClass("active");
  },

  setSecondaryNav: function(){
    // display a secondary navigation if require
    // create an element for the secondary nav
    var secondary_nav = $(document.createElement("div"));
        secondary_nav.addClass("simple-nav-container");

    for(var i=0; i < this.slides.length; i++){
      console.log("add nav button " + i);
      secondary_nav.append("<span class=\"simple-nav\"></span>");
    }
    console.log(secondary_nav);
    $("#gallery").append(secondary_nav);

  },

  galleryInit: function(){
    // puts it all together and kicks off the gallery
  }
};

$(document).ready(function(){
  var hpGallery = new Gallery("hp_gallery", test_options);
  hpGallery.setSecondaryNav();

  var t = hpGallery.autoPlay.startAutoPlay();
  $(document).one("click", function(){
    hpGallery.autoPlay.stopAutoPlay(t);
    hpGallery.stackSlides();
    hpGallery.addPrimaryNav();
  });

  // using .on() instead of .live() to get up to date
  $(document).on("click", ".primary-nav", function(){
    var cur_index = $(".active").index(),
        $this = $(this);

    // it feels like there is a better way to do this.
    if($this.hasClass("next")){
     if(cur_index < hpGallery.slides.length - 1){
        var cur_index = cur_index;
      }
      else {
        var cur_index = -1;
      }
      hpGallery.navigateToNext(cur_index);
    }

    if($this.hasClass("prev")){
      cur_index = cur_index;
     if(cur_index === 0){
        var cur_index = hpGallery.slides.length;
      }
      else {
        var cur_index = cur_index;
      }
      hpGallery.navigateToPrev(cur_index);
    }
  });

});
