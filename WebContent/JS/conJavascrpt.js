var ecc = $('input');


ecc.keyup(function () {
  var watt = $('input[id="watt"]').val();
  var dauer = $('input[id="dauer"]').val();
  var spreis = $('input[id="spreis"]').val();
  var ldauer = $('input[id="ldauer"]').val();
  
  var gwatt = $('input[id="gwatt"]').val();
  var gdauer = $('input[id="gdauer"]').val();
  var gspreis = $('input[id="gspreis"]').val();
  var gldauer = $('input[id="gldauer"]').val();
 
    var kwhpd = (watt * dauer).toFixed(2);
    var kwhpde = (kwhpd / 1000).toFixed(3);
    var epd = (kwhpde * spreis).toFixed(3);
    var epy = (epd * 365).toFixed(2);
    var ldpy = (ldauer / dauer).toFixed(2);
    var ldpye = (ldpy / 365).toFixed(2);
  
    var gkwhpd = (gwatt * gdauer).toFixed(2);
    var gkwhpde = (gkwhpd / 1000).toFixed(3);
    var gepd = (gkwhpde * gspreis).toFixed(3);
    var gepy = (gepd * 365).toFixed(2);
    var gldpy = (gldauer / gdauer).toFixed(2);
    var gldpye = (gldpy / 365).toFixed(2);
  
    var eepy = (gepy - epy).toFixed(2);
    var epld = (eepy * ldpye).toFixed(2);

    $("#kwattpd").html(kwhpde);
    $("#europd").html(epd);
    $("#europy").html(epy);
    $("#ldauerpy").html(ldpye);
  
    $("#eepy").html(eepy);
    $("#epld").html(epld);
  
  
    if($('.input1').val() == "") {
      $('.erg').css({"display":"none"});
    } else {
      $('.erg').css({"display":"block"});
    }
  
    if($('.input2').val() == "") {
        $('.contenterg .erg').css({"display":"none"});
      } else {
        $('.contenterg .erg').css({"display":"block"});
      }
  
});