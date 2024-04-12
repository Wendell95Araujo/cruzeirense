var feliz = $("#switch-shadow__feliz");
var calmo = $("#switch-shadow__calmo");
var cruzeiro = $("#switch-shadow__cruzeiro");

cruzeiro.on("change", function () {
  if (cruzeiro.is(":checked")) {
    calmo.prop("checked", false);
    feliz.prop("checked", false);
  }
});

feliz.on("change", function () {
  if (feliz.is(":checked")) {
    cruzeiro.prop("checked", false);
  }
});

calmo.on("change", function () {
  if (calmo.is(":checked")) {
    cruzeiro.prop("checked", false);
  }
});
