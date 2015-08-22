var SweetSelector = (function(){
});

SweetSelector.prototype.select = function(selector){
  return document.querySelectorAll(selector);
};

var select = new SweetSelector();
console.log(select.select('div'));

var DOM = function() {
};


DOM.prototype.hide = function(selector) {
  return document.querySelector(selector).style.visibility = "hidden";
}
DOM.prototype.show = function(selector) {
  return document.querySelector(selector).style.visibility = "visible";
}

DOM.prototype.addClass = function(baseClass, addClass){
  var newBaseClass = baseClass.slice(1, baseClass.length);
  return document.querySelector(baseClass).className = newBaseClass + " " + addClass;
}

DOM.prototype.removeClass = function(baseClass, removeClass) {
  var allClasses = document.querySelector(baseClass).className;
  var newBaseClassArr = allClasses.split(" ");
  newBaseClassArr[0] = baseClass.slice(1, baseClass.length)

  newBaseClassArr.forEach(function(element, index) {
    if (element === removeClass) {
      newBaseClassArr.splice(index, 1);
      return document.querySelector(baseClass).className =
        newBaseClassArr.join(" ");
    }
  })

}

var dom = new DOM();
dom.hide(".teresa")
dom.show(".teresa")
dom.addClass(".teresa", "nesteby anotherClass")
dom.removeClass(".teresa", "anotherClass")

var EventDispatcher = (function() {
  var on = function(selector, event, callback){
    // works but does not conform to the requirement
    // need to convert the SweetSelector into a module
    // need use it to select the selector here
    return document.querySelector(selector).addEventListener(event, callback);
  }

  var trigger = function(selector, event){
    return on(selector, event);
  }

 return {
  on: on,
  trigger: trigger
 }
})();

EventDispatcher.on('.teresa', 'click', function() { console.log('awesome') });
EventDispatcher.trigger('.teresa', 'click');




















