// menu mobilne
const burger=document.querySelector('.burger'),nav=document.getElementById('nav');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
document.getElementById('rok').textContent=new Date().getFullYear();

// zapamiętanie wybranego języka
document.querySelectorAll('.lang a').forEach(a=>a.addEventListener('click',()=>{try{localStorage.setItem('lang',a.getAttribute('hreflang'))}catch(e){}}));

// baner cookies
const ck=document.getElementById('ck');
if(ck)ck.querySelectorAll('[data-ck]').forEach(b=>b.addEventListener('click',()=>{try{localStorage.setItem('ck',b.dataset.ck)}catch(e){}ck.hidden=true}));

// formularz w podglądzie nie wysyła
const form=document.getElementById('form');
if(form)form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.info').textContent=form.dataset.ok});

// realizacje: strzałki i przeciąganie myszą
const rail=document.getElementById('rail');
if(rail){
  document.querySelectorAll('.arrows button').forEach(b=>b.addEventListener('click',()=>{rail.scrollBy({left:rail.clientWidth*.66*b.dataset.d,behavior:'smooth'})}));
  let down=false,sx=0,sl=0;
  rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;sx=e.clientX;sl=rail.scrollLeft});
  window.addEventListener('pointermove',e=>{if(!down)return;const d=e.clientX-sx;if(Math.abs(d)>4)rail.classList.add('drag');rail.scrollLeft=sl-d});
  window.addEventListener('pointerup',()=>{if(!down)return;down=false;rail.classList.remove('drag')});
}

// mapa Google ładowana przy przewinięciu do kontaktu
const map=document.getElementById('map');
if(map)new IntersectionObserver((en,o)=>{if(!en[0].isIntersecting)return;o.disconnect();
  const f=document.createElement('iframe');
  f.src='https://maps.google.com/maps?q='+encodeURIComponent('ul. LG 2A, 55-040 Biskupice Podgórne')+'&z=13&output=embed&hl='+document.documentElement.lang;
  f.title=map.dataset.title;f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';map.appendChild(f);
},{rootMargin:'300px'}).observe(map);
