const menu=document.getElementById('menu');const nav=document.getElementById('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
// Robust same-origin resume download with a direct-link fallback.
document.querySelectorAll('a[download="Swethaa_K_Data_Analyst_Resume.pdf"]').forEach(link=>{
  link.addEventListener('click', async event=>{
    event.preventDefault();
    const url = new URL(link.getAttribute('href'), document.baseURI);
    try {
      const response = await fetch(url.href);
      if (!response.ok) throw new Error('Resume file could not be fetched');
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const trigger = document.createElement('a');
      trigger.href = objectUrl;
      trigger.download = 'Swethaa_K_Data_Analyst_Resume.pdf';
      document.body.appendChild(trigger);
      trigger.click();
      trigger.remove();
      setTimeout(()=>URL.revokeObjectURL(objectUrl), 1500);
    } catch (error) {
      // Fallback to the actual PDF URL if fetch/blob download is unavailable.
      window.location.href = url.href;
    }
  });
});
