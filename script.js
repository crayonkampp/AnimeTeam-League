// Sidebar collapse toggle and keyboard accessibility
(function(){
  const sidebar = document.getElementById('sidebar');
  const collapseBtn = document.getElementById('collapseBtn');
  const content = document.getElementById('content');

  // Restore state if available
  const collapsedKey = 'atl_sidebar_collapsed';
  if (localStorage.getItem(collapsedKey) === 'true') {
    sidebar.classList.add('collapsed');
  }

  collapseBtn.addEventListener('click', () => {
    const collapsed = sidebar.classList.toggle('collapsed');
    localStorage.setItem(collapsedKey, collapsed ? 'true' : 'false');
    // Keep focus on content for screen readers when collapsed
    if (collapsed) content.focus();
  });

  // Keyboard: press 'b' to toggle sidebar (convenience)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'b' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      collapseBtn.click();
    }
  });

  // Add aria for nav links (optional)
  const links = sidebar.querySelectorAll('.nav-btn');
  links.forEach(link => {
    link.setAttribute('role','link');
  });
})();
