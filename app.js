// menu mobilne
const burger=document.querySelector('.burger'),nav=document.getElementById('nav');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
document.getElementById('rok').textContent=new Date().getFullYear();

// przełącznik języków (w podglądzie tłumaczone menu, nagłówki i pierwszy ekran)
const T={
en:{n1:'About us',n2:'Services',n3:'Track record',n4:'Polish market',n5:'Contact',
note:'Preview: the menu, headings and first screen are translated. The full English version will be prepared after approval.',
h1:'Industrial property in Poland for Korean investors',
lead:'We help you find, buy or lease a factory, warehouse or land for your plant, and we handle the whole process: from the first meeting to the handover of the keys.',
cta:'Ask about a property',
loc:'Our office is on LG Street in Biskupice Podgórne near Wrocław, right next to the LG plants, in one of the largest clusters of Korean companies in Poland.',
h_about:'About us',h_quote:'A word from the President',h_miles:'Milestones',h_offer:'Our services',
o1:'Leasing warehouses and factories',o2:'Buying and selling industrial property',o3:'Land for a new plant',o4:'Legal support and contracts',o5:'Company formation in Poland',o6:'Full service: from contract to handover',
h_real:'Our track record',h_market:'Polish market insights',h_contact:'Contact',
l_addr:'Address',l_tel:'Phone',map:'Show the map',f_name:'Full name',f_comp:'Company',f_tel:'Phone',f_type:'What are you looking for?',f_msg:'Message',f_send:'Send inquiry'},
ko:{n1:'회사 소개',n2:'서비스',n3:'성공 사례',n4:'폴란드 시장',n5:'문의하기',
note:'미리보기: 메뉴, 제목, 첫 화면만 번역되어 있습니다. 전체 한국어 버전은 승인 후 준비됩니다.',
h1:'한국 투자자를 위한 폴란드 산업용 부동산',
lead:'공장, 물류창고, 공장 부지를 찾고 매입하거나 임차할 수 있도록 돕고, 첫 상담부터 열쇠 인도까지 모든 과정을 맡아 진행합니다.',
cta:'부동산 문의하기',
loc:'저희 사무실은 브로츠와프 인근 비스쿠피체 포드구르네의 LG 거리, LG 공장 바로 옆에 있으며, 이곳은 폴란드에서 한국 기업이 가장 많이 모여 있는 지역 중 하나입니다.',
h_about:'회사 소개',h_quote:'대표이사 인사말',h_miles:'주요 연혁',h_offer:'서비스 안내',
o1:'물류창고·공장 임대차 중개',o2:'산업용 부동산 매매 중개',o3:'공장 건설용 부지',o4:'법률 지원 및 계약 체결',o5:'폴란드 법인 설립',o6:'원스톱 서비스: 계약부터 인도까지',
h_real:'성공 사례',h_market:'폴란드 부동산 시장 정보',h_contact:'문의하기',
l_addr:'주소',l_tel:'전화',map:'지도 보기',f_name:'성함',f_comp:'회사명',f_tel:'전화번호',f_type:'찾으시는 부동산 유형',f_msg:'문의 내용',f_send:'문의 보내기'}};
const els=[...document.querySelectorAll('[data-t]')];
els.forEach(e=>e.dataset.pl=e.textContent);
function setLang(l){
  document.documentElement.lang=l;
  els.forEach(e=>{const v=l==='pl'?e.dataset.pl:(T[l][e.dataset.t]||e.dataset.pl);e.textContent=v});
  document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.l)));
try{const s=localStorage.getItem('lang');if(s&&s!=='pl'&&T[s])setLang(s)}catch(e){}

// realizacje: przewijanie strzałkami i przeciąganiem myszą
const rail=document.getElementById('rail');
document.querySelectorAll('.arrows button').forEach(b=>b.addEventListener('click',()=>{rail.scrollBy({left:rail.clientWidth*.66*b.dataset.d,behavior:'smooth'})}));
let down=false,sx=0,sl=0,moved=false;
rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=rail.scrollLeft});
window.addEventListener('pointermove',e=>{if(!down)return;const d=e.clientX-sx;if(Math.abs(d)>4){moved=true;rail.classList.add('drag')}rail.scrollLeft=sl-d});
window.addEventListener('pointerup',()=>{if(!down)return;down=false;rail.classList.remove('drag')});

// mapa Google dopiero po kliknięciu
document.querySelector('#map button').addEventListener('click',function(){
  const f=document.createElement('iframe');
  f.src='https://maps.google.com/maps?q='+encodeURIComponent('ul. LG 2A, 55-040 Biskupice Podgórne')+'&z=14&output=embed';
  f.title='Mapa dojazdu';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';
  this.replaceWith(f);
});
