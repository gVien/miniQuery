var SweetSelector = (function(){
});

SweetSelector.prototype.select = function(selector){
  return document.querySelectorAll(selector);
};

var select = new SweetSelector();
console.log(select.select('div'));
