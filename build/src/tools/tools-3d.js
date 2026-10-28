(function(){
  const D=document,W=window;
  if(W.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const fine = W.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const cards = D.querySelectorAll('.t3d-card');
  cards.forEach((card,i)=>{
    card.classList.add('is-idle'); card.style.animationDelay = (i*70)+'ms';
    if(!fine) return;
    let raf;
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const px=(e.clientX-r.left)/r.width-.5, py=(e.clientY-r.top)/r.height-.5;
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{
        card.style.transform = `rotateY(${px*10}deg) rotateX(${-py*10}deg) translateZ(10px)`;
      });
    });
    card.addEventListener('mouseleave',()=>{
      cancelAnimationFrame(raf);
      card.style.transform='rotateY(0) rotateX(0) translateZ(0)';
    });
  });
  const obs=new IntersectionObserver((ents)=>{
    ents.forEach(ent=>{
      if(ent.isIntersecting){ ent.target.classList.add('t3d-count'); obs.unobserve(ent.target); }
    });
  },{threshold:.4});
  D.querySelectorAll('[data-count]').forEach(el=>obs.observe(el));
})();
