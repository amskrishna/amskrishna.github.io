(() => {
'use strict';
let C=window.ACADEMIC_CONTENT;
const main=document.getElementById('main');
const E=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe=u=>{const x=String(u||'').trim();if(x.startsWith('/assets/'))return x.slice(1);return /^(https?:\/\/|mailto:|tel:)/i.test(x)||(!/^[a-z][a-z0-9+.-]*:/i.test(x)&&!x.startsWith('//'))?x:'#'};
const link=(u,t,cls='')=>`<a class="${E(cls)}" href="${E(safe(u))}"${/^https?:/i.test(u)?' target="_blank" rel="noopener noreferrer"':''}>${E(t)}</a>`;
const paragraphs=t=>String(t||'').split(/\n\s*\n/).filter(Boolean).map(p=>`<p class="prose">${E(p)}</p>`).join('');
const list=items=>`<ul class="simple-list">${(items||[]).map(x=>`<li><strong>${E(x.name||x.title||x.text)}</strong>${x.meta?`<span class="meta">${E(x.meta)}</span>`:''}</li>`).join('')}</ul>`;
const nav=["home", "education", "experience", "research", "publications", "teaching", "leadership", "awards", "service", "workshops", "opportunities", "contact"];
const title={home:'About',research:'Research interests',publications:'Publications',teaching:'Teaching',experience:'Experience',education:'Education',awards:'Achievements & awards',service:'Professional service',workshops:'Workshops & faculty development',leadership:'Administrative responsibilities',opportunities:'Opportunities',contact:'Contact'};
let current='home',pubCategory='journals',query='';
function header(){const p=C.profile;for(const [id,val] of Object.entries({'faculty-name':p.name,'faculty-role':p.title,'faculty-department':p.dept,'faculty-institute':p.org,'footer-label':p.footer,'footer-name':p.name})){document.getElementById(id).textContent=val||''}document.getElementById('institute-logo').src=safe(p.logo);document.getElementById('header-cv').href=safe(p.cv);document.getElementById('year').textContent=new Date().getFullYear()}
function contact(){const p=C.profile;return `<div class="table-wrap"><table class="contact-table"><tbody><tr><th>Institution</th><td>${E(p.org)}</td></tr><tr><th>Department</th><td>${E(p.dept)}</td></tr><tr><th>Email</th><td>${link('mailto:'+p.email,p.email)}</td></tr><tr><th>Personal email</th><td>${link('mailto:'+p.personalEmail,p.personalEmail)}</td></tr><tr><th>Phone</th><td>${link('tel:'+String(p.phone).replace(/[^+\d]/g,''),p.phone)}</td></tr></tbody></table></div><h3>Academic profiles</h3><div class="page-links">${link(p.scholar,'Google Scholar')}${link('https://orcid.org/'+p.orcid,'ORCID')}${link(p.linkedin,'LinkedIn')}${link(p.github,'GitHub')}</div>`}
function home(){const p=C.profile;return `<div class="home-grid"><div>${announcements()}<h2>About</h2>${paragraphs(p.bio)}<h3>Research interests</h3><ul class="research-list">${C.research.areas.map(x=>`<li>${E(x.title)}</li>`).join('')}</ul></div><aside class="aside"><img class="profile-photo" src="${E(safe(p.photo))}" alt="${E(p.name)}"><h3>Contact</h3>${link('mailto:'+p.email,p.email)}<p>${E(p.dept)}<br>${E(p.org)}</p><h3>Academic profiles</h3>${link(p.scholar,'Google Scholar')}${link('https://orcid.org/'+p.orcid,'ORCID')}${link(p.linkedin,'LinkedIn')}${link(p.github,'GitHub')}<h3>Document</h3>${link(p.cv,'Download curriculum vitae')}</aside></div>`}
let stopAnnouncements = () => {};
function dateKey(value) {
  const parts = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
  return parts ? [parts[3], parts[2], parts[1]].join('-') : String(value || '');
}
function announcements() {
  const items = (C.news.items || []).filter(item => item.visible !== false)
    .sort((a,b) => dateKey(b.date).localeCompare(dateKey(a.date)));
  if (!items.length) return '';
  const controls = items.length > 1 ? '<div class="announcement-controls"><button id="ann-prev" aria-label="Previous announcement">Previous</button><button id="ann-play">Pause</button><button id="ann-next" aria-label="Next announcement">Next</button></div>' : '';
  return `<section class="announcement-frame"><div class="announcement-header"><h2>${E(C.news.heading || 'Announcements')}</h2>${controls}</div>
    <div class="notice-track" tabindex="0" aria-label="Announcements">${items.map(item => `<article class="notice"><time datetime="${E(dateKey(item.date))}">${E(item.date)}</time><h3>${item.url ? link(item.url,item.title) : E(item.title)}</h3>${paragraphs(item.body)}</article>`).join('')}</div></section>`;
}
function bindAnnouncements() {
  const track = document.querySelector('.notice-track');
  if (!track || track.children.length < 2) return;
  const frame = track.closest('section');
  const toggle = frame.querySelector('#ann-play');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let playing = !reduced;
  function displayState() { toggle.textContent = playing ? 'Pause' : 'Play'; }
  function advance(step) {
    const width = track.clientWidth;
    const index = Math.round(track.scrollLeft / width);
    const next = (index + step + track.children.length) % track.children.length;
    track.scrollTo({left: next * width, behavior: reduced ? 'instant' : 'smooth'});
  }
  function manual(step) { playing = false; displayState(); advance(step); }
  frame.querySelector('#ann-prev').onclick = () => manual(-1);
  frame.querySelector('#ann-next').onclick = () => manual(1);
  toggle.onclick = () => { playing = !playing; displayState(); };
  for (const event of ['touchstart','wheel','keydown']) {
    track.addEventListener(event, () => { playing = false; displayState(); }, {passive:true});
  }
  displayState();
  const timer = setInterval(() => {
    if (playing && !document.hidden && !track.matches(':hover') && !track.contains(document.activeElement)) advance(1);
  }, 9000);
  stopAnnouncements = () => clearInterval(timer);
}
function publicationList(){const arr=C.publications[pubCategory]||[];const filtered=arr.filter(x=>[x.title,x.venue,x.meta,x.doi].join(' ').toLowerCase().includes(query.toLowerCase()));document.getElementById('publication-records').innerHTML=filtered.length?`<ol class="pub-list">${filtered.map(x=>`<li><span class="pub-title">${x.doi?link('https://doi.org/'+x.doi,x.title):E(x.title)}</span><span class="pub-venue">${E(x.venue)}</span><span class="pub-details ${pubCategory==='conferences'?'status':''}">${E(x.meta)}</span>${x.doi?link('https://doi.org/'+x.doi,'DOI: '+x.doi,'doi'):''}</li>`).join('')}</ol>`:'<p class="empty">No matching publications.</p>';document.getElementById('pub-count').textContent=`${filtered.length} ${filtered.length===1?'record':'records'}`;document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===pubCategory)))}
function opportunities() {
  const section = C.opportunities;
  const today = new Date().toLocaleDateString('sv-SE', {timeZone:'Asia/Kolkata'});
  const roles = (section.roles || []).filter(role => role.visible !== false && role.title &&
    (!role.deadline || dateKey(role.deadline) >= today));
  if (!roles.length) return `<p>No opportunities are currently advertised.</p><p>${link('mailto:'+(section.applicationEmail || C.profile.email),'Email for research enquiries')}</p>`;
  return roles.map(role => {
    const url = role.applicationUrl || 'mailto:'+(role.applicationEmail || section.applicationEmail || C.profile.email);
    return `<article class="role"><h3>${E(role.title)}</h3><p class="meta">${[role.type,role.duration].filter(Boolean).map(E).join(' · ')}</p>
    ${paragraphs(role.description)}${role.eligibility ? '<p><strong>Eligibility</strong> '+E(role.eligibility)+'</p>' : ''}
    ${role.deadline ? '<p><strong>Apply by</strong> '+E(role.deadline)+'</p>' : ''}<p>${link(url,'Apply or enquire')}</p></article>`;
  }).join('');
}
function body(page){if(page==='home')return home();let html=`<h2>${title[page]}</h2>`;
if(page==='research')html+=`<div class="research-grid">`+C.research.areas.map((x,i)=>`<section class="research-area"><h3>${E(x.title)}</h3>${paragraphs(x.description)}${x.notes?`<details class="research-notes"><summary>Research questions</summary><ul>${String(x.notes).split('\n').filter(Boolean).map(q=>`<li>${E(q)}</li>`).join('')}</ul></details>`:''}</section>`).join('')+`</div>`;
if(page==='publications')html+=`<div class="toolbar"><button type="button" data-category="journals" aria-pressed="true">Journal articles</button><button type="button" data-category="conferences" aria-pressed="false">Conference papers</button><label for="pub-search">Search</label><input id="pub-search" type="search" placeholder="Title, venue, year or status" value="${E(query)}"><span id="pub-count" role="status" aria-live="polite"></span></div><div id="publication-records"></div>`;
if(page==='teaching')html+=`<h3>Teaching approach</h3><ul class="simple-list">${C.teaching.principles.map(x=>`<li><strong>${E(x.title)}.</strong> ${E(x.description)}</li>`).join('')}</ul><h3>Courses & resources</h3>`+C.teaching.courses.map(x=>`<article class="course"><h3>${E(x.name)}</h3><span class="meta">${E(x.term)}</span>${paragraphs(x.note)}<div class="material-links">${(x.materials||[]).map(m=>link(m.url,m.label)).join('')}</div></article>`).join('');
if(page==='experience')html+=C.experience.appointments.map(x=>`<article class="appointment"><span class="date">${E(x.when)}</span><h4>${E(x.role)}</h4><p>${E(x.org)}</p><p class="prose">${E(x.detail)}</p></article>`).join('');
if(page==='education')html+=`<div class="table-wrap"><table><thead><tr><th>Qualification</th><th>Institution</th><th>CGPA / %</th><th>Year</th></tr></thead><tbody>${C.education.qualifications.map(x=>`<tr><td>${E(x.deg)}</td><td>${E(x.inst)}</td><td>${E(x.score)}</td><td>${E(x.year)}</td></tr>`).join('')}</tbody></table></div>`;
if(page==='service')html+=`<h3>Journal reviewing</h3>`+list(C.service.journals)+`<h3>Conference service</h3>`+list(C.service.conferences)+`<h3>Professional memberships</h3>`+list(C.service.memberships);
if(page==='awards')html+=list(C.awards.items);
if(page==='leadership')html+=list(C.leadership.items);
if(page==='workshops')html+=`<h3>Academic outreach & resource-person activities</h3>`+list(C.workshops.delivered)+`<h3>Faculty development & certifications</h3>`+list(C.workshops.attended);
if(page==='contact') html += contact();
if(page==='opportunities') html += opportunities();
return html}
function render(page,focus=false){stopAnnouncements();current=nav.includes(page)?page:'home';header();document.querySelector('.masthead').classList.toggle('section-masthead',current!=='home');main.innerHTML=body(current);if(current==='home')bindAnnouncements();document.title=`${title[current]} | ${C.profile.name} | NITK Surathkal`;document.querySelectorAll('#nav-links a').forEach(a=>{const active=new URL(a.href).searchParams.get('page')===current;if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});if(current==='publications'){publicationList();document.getElementById('pub-search').addEventListener('input',e=>{query=e.target.value;publicationList()});document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>{pubCategory=b.dataset.category;publicationList()}))}if(focus){main.focus();window.scrollTo(0,0)}}
document.getElementById('nav-links').addEventListener('click',e=>{const a=e.target.closest('a');if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();const p=new URL(a.href).searchParams.get('page');history.pushState({},'',a.href);render(p,true)});window.addEventListener('popstate',()=>render(new URLSearchParams(location.search).get('page')||'home'));
render(new URLSearchParams(location.search).get('page')||'home');
// Read CMS-managed files on every visit. Bundled content keeps local/offline previews usable.
if (location.protocol !== 'file:') {
  Promise.allSettled(Object.keys(C).map(async key => {
    const response = await fetch(`content/${key}.json`, {cache:'no-store'});
    if (!response.ok) throw new Error('Content unavailable');
    return [key, await response.json()];
  })).then(results => {
    const updates = results.filter(result => result.status === 'fulfilled').map(result => result.value);
    C = {...C, ...Object.fromEntries(updates)};
    render(current);
  });
}
})();
