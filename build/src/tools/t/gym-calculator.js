(function(){
  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
  $$('.gym-tab').forEach(b=>b.addEventListener('click',()=>{
    $$('.gym-tab').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    ['bmi','bmr','macros','bf','rm','hr','water'].forEach(t=>{$('#tab-'+t).style.display = t===b.dataset.tab?'grid':'none';});
  }));
  function cnt(el,v){ let s=0,st=performance.now(),d=600; function a(n){ let p=Math.min((n-st)/d,1); el.textContent=Math.round(s+(v-s)*(1-Math.pow(1-p,3))); if(p<1)requestAnimationFrame(a);} el.textContent='0'; s=Number(el.textContent)||0; requestAnimationFrame(a);}
  $('#gobmi').onclick=()=>{ const w=+$('#bw').value,h=+$('#bh').value/100; if(!w||!h)return; const bmi=w/(h*h); const r=$('#rbmi'); r.style.display='block'; const b=r.querySelector('b'); cnt(b,bmi.toFixed(1)); $('#rbmit').textContent = bmi<18.5?'Underweight':bmi<25?'Normal':bmi<30?'Overweight':'Obese'; };
  $('#gobmr').onclick=()=>{ const age=+$('#bage').value,g=$('#bg').value,w=+$('#bw2').value,h=+$('#bh2').value,a=+$('#bact').value,goal=$('#bgoal').value; if(!age||!w||!h)return; let bmr = g==='m'?(10*w+6.25*h-5*age+5):(10*w+6.25*h-5*age-161); const tdee=bmr*a; let tgt=tdee; if(goal==='cut')tgt=tdee-400; if(goal==='bulk')tgt=tdee+300; if(tgt<1200){ tgt=1200; $('#rbmr').insertAdjacentHTML('beforeend','<p class="disc">Target below recommended minimum — consult a professional.</p>'); } const r=$('#rbmr'); r.style.display='block'; $('#rbmr1').textContent=Math.round(bmr); $('#rtdee').textContent=Math.round(tdee); $('#rtgt').textContent=Math.round(tgt); };
  $('#gomac').onclick=()=>{ const c=+$('#mcal').value,sp=$('#msplit').value; let p,c1,f; if(sp==='balanced'){p=.3;c1=.4;f=.3;}else if(sp==='highp'){p=.4;c1=.3;f=.3;}else{p=.4;c1=.25;f=.35;} $('#rmac').style.display='block'; $('#mp').textContent=Math.round(c*p/4)+'g'; $('#mc').textContent=Math.round(c*c1/4)+'g'; $('#mf').textContent=Math.round(c*f/9)+'g'; };
  $('#gobf').onclick=()=>{ const g=$('#bfg').value,h=+$('#bfh').value,w=+$('#bfw').value,n=+$('#bfn').value,hp=+$('#bfhp').value; let bf; if(g==='m'){ bf = 495/(1.0324-0.19077*Math.log10(w-n)+0.15456*Math.log10(h))-450; } else { bf = 495/(1.29579-0.35004*Math.log10(w+hp-n)+0.221*Math.log10(h))-450; } const r=$('#rbf'); r.style.display='block'; const b=r.querySelector('b'); cnt(b,bf>0&&bf<60?bf.toFixed(1):0); };
  $('#gorm').onclick=()=>{ const w=+$('#rmw').value,rp=+$('#rmr').value; if(!w||!rp)return; const e1=w*(1+rp/30), e2=w*36/(37-rp); $('#rrm').style.display='block'; $('#re1').textContent=Math.round(e1*10)/10; $('#re2').textContent=Math.round(e2*10)/10; };
  $('#gohr').onclick=()=>{ const a=+$('#hra').value; if(!a)return; $('#rhr').style.display='block'; $('#rhrm').textContent=220-a; };
  $('#gow').onclick=()=>{ const w=+$('#ww').value; if(!w)return; const r=$('#rw'); r.style.display='block'; const b=r.querySelector('b'); cnt(b,(w*0.035).toFixed(2)); };
})();
