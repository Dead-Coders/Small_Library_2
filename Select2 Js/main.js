// In your Javascript (external .js resource or <script> tag)
$(document).ready(function () {
  $(".js-example-basic-single").select2();
});

$(".js-example-basic-single").on(
  "select2:opening select2:closing",
  function (event) {
    var $searchfield = $(this).parent().find(".select2-search__field");
    $searchfield.prop("disabled", true);
  }
);
