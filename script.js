$(document).ready(function () {
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 90);
    };
  })(jQuery);

  $("#holder").writeText("</> FRONT-END + BACK-END DEVELOPER </>");

});