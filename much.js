/*
        ░░░░░░░░░▄░░░░░░░░░░░░░░▄
        ░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌ 
        ░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐
        ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
        ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
        ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌
        ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌ so source
        ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
        ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌
        ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌
        ▌▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐ much code
        ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
        ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐
        ░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌
        ░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐ how do you accessed ? wow
        ░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌
        ░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀
        ░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀
        ░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀ 
    */
    var mqrs = document.getElementById("minqrs");
  mqrs.addEventListener("click", function() {
    scanner.stop();
  });
  var qhm = document.getElementById('shmm');
  var shm = document.getElementById('more');
  var shmm = document.getElementById('mmc');
  qhm.addEventListener("click", function() {
    shm.style.bottom = "0%";
    shmm.style.bottom = "0%";
  });

var mm = document.getElementById("more");
  var mcsb = document.getElementById("clsmm");
  mm.addEventListener("click", function() {
    mm.style.bottom = "-100%";
    shmm.style.bottom = "-100%";
  });

$(document).ready(function() {
  $.getJSON('https://chain.so/api/v2/get_price/DOGE/USD', function(price) {
                  $('#price').html('$' + price.data.prices[0].price);
  });
  $('#refp').click(function() {
    $.getJSON('https://chain.so/api/v2/get_price/DOGE/USD', function(price) {
                  $('#price').html('$' + price.data.prices[0].price);
  });
  });
               
           $('#add').on('keyup', function() {
            function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  function wot(ae) {
    fnum = parseFloat(ae).toFixed(2);
    return fnum;
  }

               $.getJSON('https://chain.so/api/v2/get_address_balance/DOGE/' + $('#add').val(), function(data) {
                $.blnc = data.data.confirmed_balance;
                  $('#oneb').html('<div id="addData"><div style="margin: 0;padding: 0;display: flex;justify-content: space-between;border:none;border-bottom:1px solid #ccc;"><div style="display:block;margin:auto;padding:15px;"><center><span style="color:#525b54;">Total Balance :</span><br/><span style="color: #000;font-size: 25px;"><b>Ð' + thousands_separators(wot($.blnc)) + '</b></span><br/><span id="val" style="color: rgba(0,0,0,0.8);"></span></center></div><div style="padding:15px;" id="qrcode"><img id="qrimg" height="50" width="50" /><center><a id="qdn"><ion-icon name="arrow-down-circle" style="color:#000;"></ion-icon></a></center></div></div><div style="display: block;margin: auto;padding: 25px;"><span>Received Amount : </span><br/><span id="rv" style="color: rgb(26,145,70);"></span><br/><br/><span>Sent Amount : </span><br/><span id="sv" style="color: rgb(255,69,94);"></span><br/><br/><center style="display:flex;justify-content:space-around;"><a id="vosc" href="" target="_blank"><i class="fa fa-eye"></i> View on DogeChain</a> <a id="senddg" href="">Ð Send Dogecoin</a></center></div></div>');
                  var GenerateQRCode, htmlEncode;
    htmlEncode = function(value) {
    return $('<div/>').text(value).html();
  };
  
    
    $('#qrimg').empty();
    // Generate and Output QR Code
    $('#qrimg').attr('src', 'https://chart.googleapis.com/chart?cht=qr&chl=' + htmlEncode('dogecoin:'+$('#add').val()) + '&chs=500x500&chld=L|0');
$("#qdn").prop("download", $('#add').val());
$("#qdn").prop("href", $('#qrimg').attr("src")+'.jpg');
                  $.getJSON('https://chain.so/api/v2/get_price/DOGE/USD', function(price) {
                  $('#val').html('$' + thousands_separators(wot($.blnc*price.data.prices[0].price)));
                   
          });
                  $.getJSON('https://chain.so/api/v2/get_address_received/DOGE/' + $('#add').val(), function(data) {
                  $('#rv').html('<b>Ð' + thousands_separators(wot(data.data.confirmed_received_value)) + '</b>');
               });
               $.getJSON('https://chain.so/api/v2/get_address_spent/DOGE/' + $('#add').val(), function(data) {
                  $('#sv').html('<b> Ð' + thousands_separators(wot(data.data.confirmed_sent_value)) + '</b>');
               });
               $.vosc = "http://www.dogechain.info/address/" + $('#add').val();
               $("#vosc").attr("href", $.vosc);
               $.senddg = "dogecoin:"+$("#add").val();
               $("#senddg").attr("href", $.senddg);
               });


    

    });
      
});
  $('form').on('click','.form-text + .clear-text', function(e) {
  e.preventDefault();
  console.log('clear text.');
  $(this).prev('input').val('');
  $("#oneb").html('');
  return false;
});

/* input without required attribute */
$('form').on('focus blur keyup','.form-text:not([required])', function(e) {
  e.preventDefault();
  if($(this).val().length) {
    $(this).addClass('valid-text');
  } else {
    $(this).removeClass('valid-text');
  }
});
$('form').on('click','.form-text:not([required]) + .clear-text', function(e) {
  e.preventDefault();
  console.log('remove valid-text.');
  $(this).prev('input').removeClass('valid-text');
  return false;
});


document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'P'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
return false;
}
}

$(document).keydown(function(e){
    if(e.ctrlKey && (e.which === 83)){
       e.preventDefault();
       return false;
    }
});

document.addEventListener("keyup", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 44) {
                stopPrntScr();
            }
        });
var scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5, mirror: false });

  scanner.addListener('scan',function(content){
    $("#add").val(content);
    var timer = 0;
    var sensor_word = ['dogecoin:', 'dogecoin: ', 'dogecoin', ':','DOGECOIN:','DOGECOIN'];
    var sensor_replace = ['', '', '','','',''];

    

        clearTimeout(timer);
        var new_value = this.value;
        var new_sensor = $('#add').val();

        $.each(sensor_word, function (idx, word) {
            new_sensor = new_sensor.replace(word, '');
        });

        timer = setTimeout(function () {
             $('#add').val(new_sensor);
             $("#add").keyup();
        }, 0);
        $("#mhqr").css("display","none");
        scanner.stop();
    //window.location.href=content;
  });
  var a = document.getElementById("anim");
      a.addEventListener("click", function() {
        var b = document.getElementById("mhqr");
        b.style.display = "block";
        Instascan.Camera.getCameras().then(function (cameras){
    if(cameras.length>0){
      scanner.start(cameras[1]);
      $('[name="options"]').on('change',function(){
        if($(this).val()==1){
          if(cameras[0]!=""){
            scanner.start(cameras[0]);
          }else{
            alert('No Front camera found!');
          }
        }else if($(this).val()==2){
          if(cameras[1]!=""){
            scanner.start(cameras[1]);
          }else{
            alert('No Back camera found!');
          }
        }
      });
    }else{
      console.error('No cameras found.');
      alert('No cameras found.');
    }

  }).catch(function(e){
    console.error(e);
    alert(e);
  });
      });
      const uqrw = document.querySelector(".uqrw"),
form = document.querySelector("#uqrf"),
fileInp = form.querySelector("#Inp"),
infoText = form.querySelector("#pop");

function fetchRequest(file, formData) {
    infoText.innerText = "Scanning QR Code...";
    fetch("https://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        infoText.innerText = result ? "Upload QR Code to Scan" : "Couldn't scan QR Code";
        if(!result) return;
        document.getElementById("add").value = result+'';
        
        var timer = 0;
    var sensor_word = ['dogecoin:', 'dogecoin: ', 'dogecoin', ':','DOGECOIN:','DOGECOIN'];
    var sensor_replace = ['', '', '','','',''];

    

        clearTimeout(timer);
        var new_value = this.value;
        var new_sensor = $('#add').val();

        $.each(sensor_word, function (idx, word) {
            new_sensor = new_sensor.replace(word, '');
        });

        timer = setTimeout(function () {
             $('#add').val(new_sensor);
             $("#add").keyup();
        }, 0);
        $("#mhqr").css("display", "none");
        scanner.stop();
        
    }).catch(() => {
        infoText.innerText = "Couldn't scan QR Code";
    });
            var element = document.getElementById('add');  
element.addEventListener('input', () => console.log('input'))  
var event = new Event('input');  
element.dispatchEvent(event);
}



fileInp.addEventListener("change", async e => {
    let file = e.target.files[0];
    if(!file) return;
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(file, formData);
});

form.addEventListener("click", () => fileInp.click());
