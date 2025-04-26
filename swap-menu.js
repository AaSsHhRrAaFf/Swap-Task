
(() => {
    const SWAP_FLAG = 'menuItemsSwapped';
  
    if (sessionStorage.getItem(SWAP_FLAG)) return;
  
    const swap = () => {
      const nav = document.querySelector('nav');
      if (!nav) return;
  
      const links = [...nav.querySelectorAll('a')];
      const ref = links.find(a => a.textContent.trim().toLowerCase() === 'reference')?.parentElement;
      const com = links.find(a => a.textContent.trim().toLowerCase() === 'community')?.parentElement;
  
      if (!ref || !com || ref.parentElement !== com.parentElement) return;
  
      const parent = ref.parentElement;
      parent.insertBefore(com, ref);
      parent.insertBefore(ref, com.nextSibling);
  
      sessionStorage.setItem(SWAP_FLAG, 'true');
      console.log('Menu items swapped.');
    };
  
    document.readyState === 'complete'
      ? swap()
      : window.addEventListener('load', swap);
  })();
  