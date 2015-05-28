describe("romanize", function(){
  it('will convert the number 1 into roman numerals', function(){
      expect(romanize(1)).to.equal("I");
  });

  it('will convert the number 4 into roman numerals', function(){
      expect(romanize(4)).to.equal("IIII");
  });

  it('will convert the number 5 into roman numerals', function(){
      expect(romanize(5)).to.equal("V");
  });

  it('will convert a number to the long form up to 9', function() {
    expect(romanize(9)).to.equal("VIIII");
  });

  it('will convert a number to the long form up to 10', function() {
    expect(romanize(10)).to.equal("X");
  });

  it('will convert a number to the long form up to 49', function() {
    expect(romanize(49)).to.equal("XXXXVIIII");
  });

  it('will convert a number to the long form up to 999', function() {
    expect(romanize(999)).to.equal("DCCCCLXXXXVIIII");
  });

  it('will convert a number to the long form up to 3999', function() {
    expect(romanize(3999)).to.equal("MMMDCCCCLXXXXVIIII");
  });

  it('will convert a number to the long form up to 400', function() {
    expect(romanize(400)).to.equal("CCCC");
  });

});

describe("refactor", function(){
  it('will convert a number to the short form', function(){
    expect(refactor(4)).to.equal('IV');
  });

  it('will convert a number to the short form', function(){
    expect(refactor(7)).to.equal('VII');
  });

  it('will convert a number to the short form', function(){
    expect(refactor(9)).to.equal('IX');
  });

  it('will convert a number to the short form', function(){
    expect(refactor(19)).to.equal('XIX');
  });

  it('will convert a number to the short form', function(){
    expect(refactor(39)).to.equal('XXXIX');
  });

  it('will convert a number to the short form', function(){
    expect(refactor(99)).to.equal('XCIX');
  });

  it('will convert a number to the short form', function(){
    expect(refactor(299)).to.equal('CCXCIX');
  });
  
  it('will convert a number to the short form', function(){
    expect(refactor(400)).to.equal('CD');
  });

});
