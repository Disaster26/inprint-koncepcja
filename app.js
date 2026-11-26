// menu mobilne
const burger=document.querySelector('.burger'),nav=document.getElementById('nav');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
document.getElementById('rok').textContent=new Date().getFullYear();

// tłumaczenia strony głównej (docelowo osobne adresy /en/ i /ko/)
const T={
en:{
n1:'About us',n2:'Services',n6:'How we work',n3:'Track record',n4:'Polish market',n5:'Contact',
h1:'Industrial property in Poland for Korean investors',
lead:'We help you find, buy or lease a factory, warehouse or land for your plant, and we handle the whole process: from the first meeting to the handover of the keys.',
cta:'Ask about a property',
loc:'Our office is on LG Street in Biskupice Podgórne near Wrocław, right next to the LG plants, in one of the largest clusters of Korean companies in Poland.',
h_about:'About us',
a1:'InPrint Sp. z o.o. has operated for years in Biskupice Podgórne, in the industrial zone next to the LG plants. We are now expanding into a new field: brokering the purchase and lease of industrial property for Korean companies entering the Polish market.',
a2:'We search for factories, warehouses and land for new plants, check them, negotiate the terms and take care of the formalities. We speak Korean with investors and Polish with owners, authorities and lawyers, so nothing gets lost in translation.',
a3:'Every investor has one contact person with us, from the first conversation until the day the plant starts operating.',
h_quote:'A word from the President',
quote:'“Korean companies are choosing Poland more and more often. We want finding the right place for a factory or warehouse to be simple and safe for them, from the first conversation to the day the plant starts running.”',
sig1:'President of the Management Board, InPrint Sp. z o.o.',sig2:'Sample text, to be replaced with the President’s own words',
f1:'investor support in three languages',f2b:'1 contact person',f2:'for the whole investment, from choosing the site to the keys',f3b:'LG Street 2A',f3:'office in the industrial zone next to the LG plants',f4:'property, company, contracts and formalities in one place',
h_miles:'Milestones',m1b:'The beginning',m1:'InPrint Sp. z o.o. starts operating in Biskupice Podgórne near Wrocław.',m2b:'Growth',m2:'InPrint’s business in the Wrocław region to date.',m3:'A new field: industrial property for Korean investors.',m_add:'Years and events will be completed based on your materials.',
h_offer:'Our services',offer_p:'We guide your investment from choosing the location to the day we hand over the keys. Everything in one place, with one contact person.',
o1:'Leasing warehouses, halls and factories',o1p:'We find buildings that match your requirements: floor area, clear height, loading docks, power supply and access. We negotiate the lease terms.',
o2:'Buying and selling industrial property',o2p:'We broker the purchase of existing plants and warehouses. Before the transaction we check the legal and technical condition.',
o3:'Land for a new plant',o3p:'We look for plots with the right zoning, utilities and good access to motorways.',
o4:'Legal support and contracts',o4p:'We work with lawyers on lease and sale agreements and permits, including property purchases by companies with capital from outside the European Union.',
o5:'Company formation in Poland',o5p:'We help you set up a company, open a bank account and complete the first formalities before the plant starts operating.',
o6:'Full service: from contract to handover',o6p:'We keep track of deadlines, inspections, utility connections and documents until the final handover of the property.',
h_proc:'How we run your investment',proc_p:'Five stages we go through together with a Korean investor. At every stage you know what is happening and what comes next.',
k1:'Step 1',k2:'Step 2',k3:'Step 3',k4:'Step 4',k5:'Step 5',
s1:'Meeting and requirements',s1p:'We define your needs: type of building, floor area, budget, schedule and region. Meetings can also be held online and in Korean.',
s2:'Choosing the location',s2p:'We prepare a shortlist of buildings and plots, organise site visits and compare costs.',
s3:'Due diligence and negotiations',s3p:'We verify the legal and technical status and negotiate the price and the terms of the lease or purchase.',
s4:'Company, permits and contract',s4p:'We set up your company in Poland, prepare a permit application if one is required, and take the deal through to signing.',
s5:'Handover and start',s5p:'Acceptance of the building, utility connections and documents. We hand over the keys and your plant can start operating.',
h_where:'Location and regions',where_p:'We work from Lower Silesia, next to the LG plants near Wrocław, and search for property in Poland’s main industrial and logistics regions.',
r1:'<b>Biskupice Podgórne / Wrocław</b>: our office, the LG plant zone, A4 motorway and S8 expressway',r2:'<b>Poznań</b>: logistics centres along the A2 motorway',r3:'<b>Łódź</b>: the centre of the country, where the A1 and A2 meet',r4:'<b>Warsaw</b>: the capital and headquarters of many companies',r5:'<b>Upper Silesia</b>: the largest industrial region, A1 and A4',r6:'<b>Tricity</b>: seaports in Gdańsk and Gdynia',
kr:'Korean plants in Poland include LG Energy Solution near Wrocław, LG Electronics in Mława and SK ie technology in Dąbrowa Górnicza.',
mp_poz:'Poznań',mp_lodz:'Łódź',mp_waw:'Warsaw',mp_sl:'Upper Silesia',mp_gd:'Tricity',mp_lg:'InPrint · LG, Biskupice Podgórne',
h_real:'Our track record',real_p:'Companies that launched their investments with our help and now operate in Poland. Sample photos in this preview; the final site will show photos and logos of about 6 of your clients.',
logo:'company logo',c1n:'Client company 1',c1:'Warehouse, lease',c2n:'Client company 2',c2:'Logistics centre, purchase',c3n:'Client company 3',c3:'Production plant, lease',c4n:'Client company 4',c4:'Production hall, purchase',c5n:'Client company 5',c5:'Plot for a plant by the motorway',c6n:'Client company 6',c6:'Company and warehouse, full service',
h_market:'Polish market insights',market_p:'Advice for investors, the current situation on the industrial property market and basic information about investing in Poland.',
p1c:'Advice for investors',p1:'Lease or buy a hall: what to choose when starting in Poland',p1p:'When it pays to lease a ready warehouse, and when to buy or build your own plant.',
p2c:'Law and formalities',p2:'Property purchase by a Korean company: the Interior Ministry permit',p2p:'Who needs a permit to acquire property, how long it takes and how to prepare.',
p3c:'Investment information',p3:'Polish Investment Zone: support for new plants',p3p:'How tax exemptions for new investments work and who can use them.',
h_contact:'Contact',contact_p:'Tell us what you are looking for. We will reply in Polish, English or Korean.',
l_addr:'Address',l_tel:'Phone',f_name:'Full name',f_comp:'Company',f_tel:'Phone',f_type:'What are you looking for?',f_msg:'Message',f_send:'Send inquiry',
opt1:'Warehouse or hall for lease',opt2:'Factory or warehouse for sale',opt3:'Land for a new plant',opt4:'Company formation in Poland',opt5:'Other',
f_info:'The form in this preview does not send messages. On the final website your inquiry will go straight to our mailbox.',
f_ok:'This is a preview: the form will send inquiries on the final website.',
src:'Sample photos: Wikimedia Commons, CC BY-SA 2.0 and 4.0 licences (geograph.org.uk; Jasień Brzesko Logistics Park; IC Wroclaw-Polnoc aerial view 2020; 2019-07-02 Aerial photograph of Wrocław). Map outline: Natural Earth.'},
ko:{
n1:'회사 소개',n2:'서비스',n6:'진행 방식',n3:'성공 사례',n4:'폴란드 시장',n5:'문의하기',
h1:'한국 투자자를 위한 폴란드 산업용 부동산',
lead:'공장, 물류창고, 공장 부지를 찾고 매입하거나 임차할 수 있도록 돕고, 첫 상담부터 열쇠 인도까지 전 과정을 책임지고 진행합니다.',
cta:'부동산 문의하기',
loc:'저희 사무실은 브로츠와프 인근 비스쿠피체 포드구르네의 LG 거리, LG 공장 바로 옆에 있습니다. 이곳은 폴란드에서 한국 기업이 가장 많이 모여 있는 지역 중 하나입니다.',
h_about:'회사 소개',
a1:'InPrint Sp. z o.o.는 LG 공장 인근 산업단지인 비스쿠피체 포드구르네에서 오랫동안 사업을 해 왔습니다. 이제 폴란드 시장에 진출하는 한국 기업을 위해 산업용 부동산 매매 및 임대차 중개라는 새로운 분야로 사업을 확장합니다.',
a2:'공장, 물류창고, 공장 건설용 부지를 찾아 검토하고, 조건을 협상하며 각종 행정 절차를 처리합니다. 투자자와는 한국어로, 소유주·관공서·변호사와는 폴란드어로 소통하기 때문에 통역 과정에서 놓치는 부분이 없습니다.',
a3:'첫 상담부터 공장이 가동되는 날까지 한 명의 담당자가 투자자를 전담합니다.',
h_quote:'대표이사 인사말',
quote:'“폴란드를 선택하는 한국 기업이 점점 늘고 있습니다. 첫 상담부터 공장이 가동되는 날까지, 공장이나 물류창고에 맞는 자리를 찾는 일이 쉽고 안전하도록 돕겠습니다.”',
sig1:'InPrint Sp. z o.o. 대표이사',sig2:'예시 문구이며, 대표이사님의 인사말로 교체됩니다',
f1:'3개 언어로 투자자 지원',f2b:'전담 담당자 1명',f2:'부지 선정부터 열쇠 인도까지 투자 전 과정',f3b:'LG 거리 2A',f3:'LG 공장 옆 산업단지에 위치한 사무실',f4:'부동산, 법인, 계약, 행정 절차를 한곳에서',
h_miles:'주요 연혁',m1b:'설립',m1:'InPrint Sp. z o.o., 브로츠와프 인근 비스쿠피체 포드구르네에서 사업 시작',m2b:'성장',m2:'브로츠와프 지역에서의 InPrint 사업 활동',m3:'신규 사업: 한국 투자자를 위한 산업용 부동산',m_add:'연도와 내용은 귀사의 자료를 바탕으로 보완할 예정입니다.',
h_offer:'서비스 안내',offer_p:'입지 선정부터 열쇠를 인도하는 날까지 투자 전 과정을 함께합니다. 한 명의 담당자가 모든 업무를 한곳에서 처리합니다.',
o1:'물류창고·공장 임대차 중개',o1p:'면적, 층고, 도크, 전력, 진입로 등 귀사의 요구 조건에 맞는 건물을 찾고 임대 조건을 협상합니다.',
o2:'산업용 부동산 매매 중개',o2p:'기존 공장과 물류창고의 매입을 중개하며, 거래 전에 권리 관계와 건물 상태를 점검합니다.',
o3:'공장 건설용 부지',o3p:'용도 지역, 기반 시설, 고속도로 접근성이 적합한 부지를 찾아 드립니다.',
o4:'법률 지원 및 계약 체결',o4p:'변호사와 협력하여 임대차·매매 계약과 각종 허가를 지원하며, EU 역외 자본 기업의 부동산 매입도 함께 진행합니다.',
o5:'폴란드 법인 설립',o5p:'공장 가동 전에 법인 설립, 은행 계좌 개설 등 초기 행정 절차를 지원합니다.',
o6:'원스톱 서비스: 계약부터 인도까지',o6p:'부동산을 최종 인도할 때까지 일정, 준공 검사, 인입 공사, 서류를 꼼꼼히 관리합니다.',
h_proc:'투자 진행 방식',proc_p:'한국 투자자와 함께 진행하는 다섯 단계입니다. 각 단계마다 현재 상황과 다음 일정을 명확히 알려 드립니다.',
k1:'1단계',k2:'2단계',k3:'3단계',k4:'4단계',k5:'5단계',
s1:'상담 및 요구 사항 정리',s1p:'건물 유형, 면적, 예산, 일정, 희망 지역을 함께 정합니다. 온라인 및 한국어 상담도 가능합니다.',
s2:'입지 선정',s2p:'후보 건물과 부지 목록을 준비하고 현장 답사를 진행하며 비용을 비교합니다.',
s3:'실사 및 협상',s3p:'권리 관계와 건물 상태를 확인하고 가격 및 임대·매매 조건을 협상합니다.',
s4:'법인, 허가, 계약',s4p:'폴란드 법인을 설립하고, 필요한 경우 허가 신청서를 준비하여 계약 체결까지 진행합니다.',
s5:'인도 및 가동',s5p:'건물 인수, 인입 시설, 서류를 마무리하고 열쇠를 인도하면 공장 가동을 시작할 수 있습니다.',
h_where:'입지 및 주요 지역',where_p:'브로츠와프 인근 LG 공장 옆, 돌니실롱스크(하부 슐레지엔) 지역을 거점으로 폴란드의 주요 산업·물류 지역에서 부동산을 찾습니다.',
r1:'<b>비스쿠피체 포드구르네 / 브로츠와프</b>: 당사 사무실, LG 공장 단지, A4 고속도로 및 S8 고속화도로',r2:'<b>포즈난</b>: A2 고속도로 인근 물류센터',r3:'<b>우치</b>: 폴란드 중심부, A1과 A2 고속도로 교차 지점',r4:'<b>바르샤바</b>: 수도이자 여러 기업의 본사 소재지',r5:'<b>실롱스크(슐레지엔) 지역</b>: 폴란드 최대 산업 지역, A1 및 A4 고속도로',r6:'<b>트루이미아스토</b>: 그단스크와 그디니아 항만',
kr:'폴란드의 대표적인 한국 기업 공장으로는 브로츠와프 인근 LG에너지솔루션, 므와바의 LG전자, 동브로바구르니차의 SK아이이테크놀로지 등이 있습니다.',
mp_poz:'포즈난',mp_lodz:'우치',mp_waw:'바르샤바',mp_sl:'실롱스크 지역',mp_gd:'트루이미아스토',mp_lg:'InPrint · LG, 비스쿠피체 포드구르네',
h_real:'성공 사례',real_p:'당사의 지원으로 투자를 완료하고 현재 폴란드에서 사업을 운영 중인 기업들입니다. 미리보기에는 예시 사진이 들어가 있으며, 실제 사이트에는 약 6개 고객사의 사진과 로고가 게시됩니다.',
logo:'기업 로고',c1n:'고객사 1',c1:'물류창고, 임차',c2n:'고객사 2',c2:'물류센터, 매입',c3n:'고객사 3',c3:'생산 공장, 임차',c4n:'고객사 4',c4:'생산 시설, 매입',c5n:'고객사 5',c5:'고속도로 인근 공장 부지',c6n:'고객사 6',c6:'법인 설립 및 물류창고, 원스톱 서비스',
h_market:'폴란드 부동산 시장 정보',market_p:'투자자를 위한 조언, 산업용 부동산 시장 동향, 폴란드 투자 기본 정보를 전해 드립니다.',
p1c:'투자자 가이드',p1:'공장 임차와 매입, 폴란드 진출 초기에는 무엇이 유리할까',p1p:'기존 물류창고를 임차하는 것이 유리한 경우와 공장을 매입하거나 직접 짓는 것이 나은 경우를 정리했습니다.',
p2c:'법률 및 행정',p2:'한국 기업의 폴란드 부동산 매입: 내무부 허가',p2p:'부동산 취득 허가가 필요한 경우, 소요 기간, 준비 방법을 안내합니다.',
p3c:'투자 정보',p3:'폴란드 투자 구역(PSI): 신규 공장 지원 제도',p3p:'신규 투자에 대한 세금 감면 제도의 내용과 지원 대상을 알아봅니다.',
h_contact:'문의하기',contact_p:'찾으시는 부동산에 대해 알려 주세요. 폴란드어, 영어, 한국어로 답변해 드립니다.',
l_addr:'주소',l_tel:'전화',f_name:'성함',f_comp:'회사명',f_tel:'전화번호',f_type:'찾으시는 부동산 유형',f_msg:'문의 내용',f_send:'문의 보내기',
opt1:'물류창고·공장 임차',opt2:'공장·물류창고 매입',opt3:'공장 건설용 부지',opt4:'폴란드 법인 설립',opt5:'기타',
f_info:'미리보기의 문의 양식은 실제로 발송되지 않습니다. 실제 사이트에서는 문의가 당사 메일함으로 바로 전달됩니다.',
f_ok:'미리보기입니다. 실제 사이트에서 문의가 발송됩니다.',
src:'예시 사진: Wikimedia Commons, CC BY-SA 2.0 및 4.0 라이선스 (geograph.org.uk; Jasień Brzesko Logistics Park; IC Wroclaw-Polnoc aerial view 2020; 2019-07-02 Aerial photograph of Wrocław). 지도 윤곽: Natural Earth.'}};
T.pl={f_ok:'To podgląd: formularz zacznie wysyłać zapytania na docelowej stronie.'};
const TITLE={pl:document.title,en:'InPrint - industrial property in Poland for Korean investors',ko:'InPrint - 한국 투자자를 위한 폴란드 산업용 부동산'};
const els=[...document.querySelectorAll('[data-t]')];
els.forEach(e=>e.dataset.pl=e.innerHTML);
let fontKR=false;
function loadKR(){if(fontKR)return;fontKR=true;const l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap';document.head.appendChild(l)}
let cur='pl';
function setLang(l){
  cur=l;
  if(l==='ko')loadKR();
  document.documentElement.lang=l;
  els.forEach(e=>{e.innerHTML=l==='pl'?e.dataset.pl:(T[l][e.dataset.t]??e.dataset.pl)});
  document.title=TITLE[l];
  document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.l)));
try{const s=localStorage.getItem('lang');if(s==='en'||s==='ko')setLang(s)}catch(e){}

document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();e.target.querySelector('.info').textContent=T[cur].f_ok});

// realizacje: strzałki i przeciąganie myszą
const rail=document.getElementById('rail');
document.querySelectorAll('.arrows button').forEach(b=>b.addEventListener('click',()=>{rail.scrollBy({left:rail.clientWidth*.66*b.dataset.d,behavior:'smooth'})}));
let down=false,sx=0,sl=0;
rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;sx=e.clientX;sl=rail.scrollLeft});
window.addEventListener('pointermove',e=>{if(!down)return;const d=e.clientX-sx;if(Math.abs(d)>4)rail.classList.add('drag');rail.scrollLeft=sl-d});
window.addEventListener('pointerup',()=>{if(!down)return;down=false;rail.classList.remove('drag')});

// mapa Google ładowana przy przewinięciu do kontaktu
const map=document.getElementById('map');
new IntersectionObserver((en,o)=>{if(!en[0].isIntersecting)return;o.disconnect();
  const f=document.createElement('iframe');
  f.src='https://maps.google.com/maps?q='+encodeURIComponent('ul. LG 2A, 55-040 Biskupice Podgórne')+'&z=13&output=embed';
  f.title='Mapa dojazdu';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';map.appendChild(f);
},{rootMargin:'300px'}).observe(map);
