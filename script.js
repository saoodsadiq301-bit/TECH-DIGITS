const glow=document.querySelector('.cursor-glow');document.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');menu?.addEventListener('click',()=>{links.classList.toggle('open')});
const filters=document.querySelectorAll('.filters button'),cards=document.querySelectorAll('.portfolio-card[data-cat]');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(c=>c.classList.toggle('hide',f!=='all'&&c.dataset.cat!==f))}));
// Subtle globe motion
const globe=document.querySelector('.globe-shell');let t=0;function animate(){t+=.003;if(globe)globe.style.transform=`rotateY(${Math.sin(t)*3}deg) rotateX(${Math.cos(t*.7)*1.5}deg)`;requestAnimationFrame(animate)}animate();
