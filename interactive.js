(() => {
  const S=window.SITE;
  const map=document.querySelector('.researchMap');
  const controls=map.querySelector('.constellation');
  const cards=[...document.querySelectorAll('.researchCard')];
  map.querySelector('h3').textContent='Explore my research';
  map.querySelector('p').textContent='Select a research direction to explore its focus and related work.';
  controls.replaceChildren();controls.className='researchControls';controls.setAttribute('role','tablist');controls.setAttribute('aria-label','Research directions');controls.setAttribute('aria-orientation','vertical');
  const related=[S.journals.slice(0,2),[],S.journals.slice(0,1),[],S.journals.slice(2,4),S.conferences.filter(p=>/quantum/i.test(p.title))];
  const buttons=cards.map((card,i)=>{
    card.id='research-panel-'+i;card.setAttribute('role','tabpanel');card.setAttribute('aria-labelledby','research-control-'+i);card.tabIndex=0;
    const button=document.createElement('button');button.id='research-control-'+i;button.type='button';button.setAttribute('role','tab');button.setAttribute('aria-controls',card.id);button.textContent=String(i+1).padStart(2,'0')+'  '+card.querySelector('h3').textContent;controls.append(button);
    const note=document.createElement('div');note.className='relatedResearch';
    if(related[i].length){const label=document.createElement('h4');label.textContent='Related work';note.append(label);for(const pub of related[i]){const item=document.createElement(pub.doi?'a':'p');if(pub.doi){item.href='https://doi.org/'+pub.doi;item.target='_blank';item.rel='noopener'}item.textContent=pub.title;note.append(item)}}
    card.append(note);button.addEventListener('click',()=>select(i));button.addEventListener('keydown',event=>{let next=i;if(event.key==='ArrowDown')next=(i+1)%cards.length;else if(event.key==='ArrowUp')next=(i+cards.length-1)%cards.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=cards.length-1;else return;event.preventDefault();buttons[next].focus();select(next)});return button;
  });
  function select(index){cards.forEach((card,i)=>{card.hidden=i!==index;buttons[i].setAttribute('aria-selected',String(i===index));buttons[i].tabIndex=i===index?0:-1})}select(0);
  // A data-derived overview distinguishes listed journals from conference records.
  const metrics=document.querySelector('.pubMetrics');const chart=document.createElement('div');chart.className='publicationChart panel';const journalCount=S.journals.length,conferenceCount=S.conferences.length,total=journalCount+conferenceCount,portion=journalCount/total*100;
  chart.innerHTML=`<svg viewBox="0 0 120 120" role="img" aria-label="${journalCount} journal articles and ${conferenceCount} conference records"><circle cx="60" cy="60" r="44" fill="none" stroke="#cbd9ed" stroke-width="12"/><circle cx="60" cy="60" r="44" fill="none" stroke="var(--primary-dark)" stroke-width="12" pathLength="100" stroke-dasharray="${portion} ${100-portion}" transform="rotate(-90 60 60)"/><text x="60" y="60" dominant-baseline="middle" text-anchor="middle" fill="#000" font-size="27" font-family="Georgia">${total}</text><text x="60" y="79" text-anchor="middle" fill="#000" font-size="10">records</text></svg><div><h3>Research output</h3><p><strong>${journalCount}</strong> journal articles<br><strong>${conferenceCount}</strong> conference records</p><span>Includes accepted conference work; status is shown in each record.</span></div>`;
  metrics.prepend(chart);
  const pubList=document.getElementById('pubList');const search=document.createElement('div');search.className='publicationSearch';const label=document.createElement('label');label.htmlFor='publication-search';label.textContent='Search publications';const input=document.createElement('input');input.id='publication-search';input.type='search';input.placeholder='Title, venue, year or status';input.setAttribute('aria-controls','pubList');const count=document.createElement('span');count.setAttribute('role','status');count.setAttribute('aria-live','polite');search.append(label,input,count);pubList.before(search);
  function filter(){const query=input.value.toLowerCase().trim();let visible=0;pubList.querySelectorAll('.pubItem').forEach(item=>{const match=item.textContent.toLowerCase().includes(query);item.hidden=!match;if(match)visible++});count.textContent=visible?`${visible} matching ${visible===1?'record':'records'}`:'No matching records. Try another term or publication category.'}
  input.addEventListener('input',filter);document.querySelectorAll('.tab').forEach(button=>{button.setAttribute('aria-pressed',String(button.classList.contains('on')));button.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(b=>b.setAttribute('aria-pressed',String(b.classList.contains('on'))));filter()})});filter();
})();
