## Set up of this slide show object/plugin to be?

### Sass Thoughts
- create classes that are applied to #gallery to set up the gallery for specific slideshow
  - .crossfade
        - will position all the slides on top of each other
        - will handle opacity and opacity transition
  - .slide-horizontal
        - floats slides left
        - sets up translates for each slide

  - .slide-vertical
      - stack slides one above the other
      - set up translates to move the slides appropriately.

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
