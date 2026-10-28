(function(){
  const $=s=>document.querySelector(s);
  const hadj=$('#hadj'), hadjv=$('#hadjv');
  hadj.oninput=()=>{hadjv.textContent=hadj.value};
  $('#goage').onclick=()=>{
    const d=+$('#ad').value,m=+$('#am').value,y=+$('#ay').value;
    if(!d||!m||!y)return;
    const dob=new Date(y,m-1,d);
    const asof=$('#aof').value?new Date($('#aof').value+'T00:00:00'):new Date();
    // gregorian
    let years=asof.getFullYear()-dob.getFullYear(), months=asof.getMonth()-dob.getMonth(), days=asof.getDate()-dob.getDate();
    if(days<0){months--; days+=new Date(asof.getFullYear(),asof.getMonth(),0).getDate();}
    if(months<0){years--; months+=12;}
    $('#rage1').style.display='block';
    $('#ageg').textContent=years+'y '+months+'m '+days+'d';
    const diff=asof-dob;
    const totalDays=Math.floor(diff/86400000);
    $('#ageg2').textContent = `Total months ~${Math.round(totalDays/30.44)} • Weeks ${Math.floor(totalDays/7)} • Days ${totalDays} • Hours ${Math.floor(diff/3600000)}`;
    $('#ageg3').textContent = dob.toLocaleDateString('en-US',{weekday:'long'});
    let nb = new Date(asof.getFullYear(),dob.getMonth(),dob.getDate());
    if(nb < new Date(asof.toDateString())) nb.setFullYear(asof.getFullYear()+1);
    $('#agenb').textContent = Math.ceil((nb - new Date(asof.toDateString()))/86400000);
    // hijri
    try {
      const adj = parseInt(hadj.value||'0');
      const fmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn',{day:'numeric',month:'long',year:'numeric'});
      $('#hijriDob').textContent = fmt.format(new Date(dob.getTime()+adj*86400000));
      const fmt2 = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn',{year:'numeric',month:'numeric'});
      $('#hijriAge').textContent = years+' Hijri years (approx relative)';
      $('#rage2').style.display='block';
    }catch(e){}
    // desi approx
    $('#desiDob').textContent = 'Chet/Vaisakh approx (config based)';
    $('#desiAge').textContent = years+' Desi years (approx)';
    $('#rage3').style.display='block';
  };
})();
