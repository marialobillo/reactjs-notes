describe("Investment", function(){
  it("should be of a stock", function(){
    var investment = new Investment();
    expect(investment.stock).toBe(stock);
  });
});
