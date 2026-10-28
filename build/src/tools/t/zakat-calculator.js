(function(){
  const $=s=>document.querySelector(s);
  $('#goz').onclick=()=>{
    const goldP=+$('#zg').value, silverP=+$('#zs').value;
    const goldN=goldP*7.5, silverN=silverP*52.5;
    const nisab = $('#znis').value==='gold'?goldN:silverN;
    const g=+$('#za2').value* (goldP/11.664), s2=+$('#za3').value*(silverP/11.664);
    const assets = (+$('#za1').value)+g+s2+(+$('#za4').value)+(+$('#za5').value)+(+$('#za6').value)+(+$('#za7').value);
    const net = assets - (+$('#zd1').value);
    const zakat = net>=nisab ? net*0.025 : 0;
    $('#rz').style.display='block';
    $('#znisv').textContent = Math.round(nisab).toLocaleString();
    $('#znet').textContent = Math.round(net).toLocaleString();
    $('#zz').textContent = Math.round(zakat).toLocaleString();
    $('#zmsg').textContent = net>=nisab ? 'Wealth is above nisab - Zakat due.' : 'Below nisab - no Zakat due (by this calculation).';
  };
})();
