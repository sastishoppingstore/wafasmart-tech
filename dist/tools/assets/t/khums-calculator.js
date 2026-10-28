(function(){
  const $=s=>document.querySelector(s);
  $('#gok').onclick=()=>{
    const inc=(+$('#ki1').value)+(+$('#ki2').value)+(+$('#ki3').value);
    const exp=(+$('#ke1').value)+(+$('#ke2').value);
    const sur = Math.max(0, inc-exp);
    const kh = sur*0.2;
    $('#rk').style.display='block';
    $('#ksur').textContent = Math.round(sur).toLocaleString();
    $('#kk').textContent = Math.round(kh).toLocaleString();
    $('#ksi').textContent = Math.round(kh/2).toLocaleString();
    $('#kss').textContent = Math.round(kh/2).toLocaleString();
  };
})();
