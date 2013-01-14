describe("my first spec", function(){
  it("says it worked", function(){
    expect(test()).toEqual("it worked");
  });

  it("does not say", function(){
    expect(test()).not.toEqual("its worked");
  });
});

describe("another spec", function(){

});