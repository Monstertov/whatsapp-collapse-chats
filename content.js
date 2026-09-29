(() => {
  const KEY = 'collapsed';
  const root = document.documentElement;

  const ICON_CLOSE = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>
    </svg>`;
  const ICON_OPEN = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m13 9 3 3-3 3"/>
    </svg>`;

  const btn = document.createElement('button');
  btn.id = 'wa-sidebar-toggle-btn';

  // State lives on <html> so it survives WhatsApp re-rendering #side.
  function apply(collapsed) {
    if (collapsed) root.dataset.waSidebar = 'collapsed';
    else delete root.dataset.waSidebar;
    btn.title = collapsed ? 'Show chats' : 'Hide chats';
    btn.innerHTML = collapsed ? ICON_OPEN : ICON_CLOSE;
    window.dispatchEvent(new Event('resize'));
  }

  btn.addEventListener('click', () => {
    const next = root.dataset.waSidebar !== 'collapsed';
    apply(next);
    chrome.storage.local.set({ [KEY]: next });
  });

  // Extension storage, not the page's localStorage, which WhatsApp can clear.
  chrome.storage.local.get({ [KEY]: true }, (res) => apply(res[KEY]));

  const ensureBtn = () => { if (!btn.isConnected) document.body.appendChild(btn); };
  ensureBtn();
  new MutationObserver(ensureBtn).observe(document.body, { childList: true });
})();
