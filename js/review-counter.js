$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
    },
    options
  );

  var thisElement = $(this);

  $({ count: settings.start }).animate(
    { count: settings.end },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete,
    }
  );
};
var i = 0;
var waypoint = new Waypoint({
  element: document.getElementById("reviews"),
  handler: function (direction) {
    if (i == 0) {
      console.log("Reviews are shown");
      var numItems = $(".swiper-slide").length;
      $("#revNumber").jQuerySimpleCounter({ end: numItems, duration: 3000 });
      console.log(numItems + " Reviews are shown");
      i++;
    }
  },
});
