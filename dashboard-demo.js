const tabs=[...document.querySelectorAll('.tab')];
function showView(name){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));tabs.forEach(t=>t.classList.toggle('active',t.dataset.view===name));window.scrollTo({top:0,behavior:'smooth'});}
tabs.forEach(t=>t.addEventListener('click',()=>showView(t.dataset.view)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.go)));
let currentZone='Patio';const toggle=document.getElementById('light-toggle');const brightness=document.getElementById('brightness');
function renderLight(){const on=toggle.checked;document.getElementById('light-state').textContent=on?'On':'Off';document.getElementById('brightness-value').textContent=`${brightness.value}%`;document.querySelectorAll('[data-brightness]').forEach(b=>b.classList.toggle('chosen',Number(b.dataset.brightness)===Number(brightness.value)));['Patio','Path','Pergola','Feature'].forEach(z=>{const el=document.getElementById(`zone-status-${z}`);if(el)el.textContent=z===currentZone?(on?`On · ${brightness.value}%`:'Off'):'Off';});}
toggle.addEventListener('change',renderLight);brightness.addEventListener('input',renderLight);document.querySelectorAll('[data-brightness]').forEach(b=>b.addEventListener('click',()=>{brightness.value=b.dataset.brightness;renderLight()}));
function setZone(zone){currentZone=zone;document.querySelectorAll('.zone').forEach(b=>b.classList.toggle('selected',b.dataset.zone===zone));document.getElementById('zone-current').textContent=`${zone} zone`;toggle.checked=false;renderLight();}
document.querySelectorAll('[data-zone]').forEach(b=>b.addEventListener('click',()=>{setZone(b.dataset.zone);if(b.classList.contains('zone-card'))showView('lights')}));
const auto1=document.getElementById('auto-toggle'),auto2=document.getElementById('auto-toggle-page');auto1.addEventListener('change',()=>{auto2.checked=auto1.checked});auto2.addEventListener('change',()=>{auto1.checked=auto2.checked});
const autoBrightness=document.getElementById('auto-brightness');autoBrightness.addEventListener('input',()=>document.getElementById('auto-brightness-value').textContent=`${autoBrightness.value}%`);
document.getElementById('automation-form').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('auto-name').value.trim()||'New demo automation';document.querySelector('.automation-row b').textContent=name;document.getElementById('form-message').textContent=`“${name}” saved in this demo only. No real automation was created.`;});renderLight();

// Allow the promotional site to open the relevant demo section inside its preview frames.
const requestedView=new URLSearchParams(window.location.search).get('view');
if(['home','lights','garden','automations'].includes(requestedView)){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${requestedView}`));tabs.forEach(t=>t.classList.toggle('active',t.dataset.view===requestedView));}
