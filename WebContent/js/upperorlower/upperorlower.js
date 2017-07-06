$("#uol0").change(function() {
  var thisDom = $(this);
  toLocalUpperCase(thisDom);
  toLocalLowerCase(thisDom);
});

function toLocalUpperCase(thisDom) {
  var tamp = thisDom.val();
  var result = tamp.toUpperCase();
  $("#uolu").val(result);
}

function toLocalLowerCase(thisDom) {
  var tamp = thisDom.val();
  var result = tamp.toLowerCase();
  $("#uoll").val(result);
}