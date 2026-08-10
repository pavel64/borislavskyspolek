/* Mobilní menu — jediný kus JS na webu. */
(function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobilni-menu');
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Zavřít' : 'Menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(menu.hidden);
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Po přechodu na desktop menu zavřít, ať se po zmenšení okna neotevře samo.
  var wide = window.matchMedia('(min-width: 761px)');
  wide.addEventListener('change', function () {
    if (wide.matches) setOpen(false);
  });
})();
