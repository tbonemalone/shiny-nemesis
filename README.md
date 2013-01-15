## Set up of this slide show object/plugin to be?

### Sass Thoughts
- create classes that are applied to #gallery to set up the gallery for specific slideshow
  - .crossfade
        - will position all the slides on top of each other DONE
        - will handle opacity and opacity transition DONE
  - .slide-horizontal
        - floats slides left DONE
        - sets up translates for each slide
        - need to set the width of the .slide-container to the width of number_slides * width_of_slide
        - set width with js or in the sass? js would be more dynamic

  - .slide-vertical
      - stack slides one above the other
      - set up translates to move the slides appropriately.
      - Set width of .slide-container to the width of a slide

  -.active
      - this is the class that will be added to slide that's showing

###  JS Thoughts
- primaryNav should work for every type of transition
- secondaryNav should work for every type of transition
- autoPlay should work for every type of transition
- developer shouldn't have to say how many slides there are.
- will need a function for nextSlide and prevSlide that works with
  different transition types.
- will need a function to go to specific slide for the secondary nav.
  This will need to work with all transition types.
