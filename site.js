(() => {
  'use strict';
  const printButton = document.querySelector('[data-print-resume]');
  if (printButton) printButton.addEventListener('click', () => window.print());

  const triggers = document.querySelectorAll('[data-zoom]');
  if (!triggers.length || typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'image-dialog';
  dialog.setAttribute('aria-label', 'Project image');
  dialog.innerHTML = '<div class="dialog-top"><span>PROJECT IMAGE</span><button class="dialog-close" type="button" autofocus>Close ×</button></div><img alt=""><p class="dialog-caption"></p>';
  document.body.append(dialog);
  const picture = dialog.querySelector('img');
  const caption = dialog.querySelector('.dialog-caption');
  let activeTrigger;
  triggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
      event.preventDefault();
      activeTrigger = trigger;
      const source = trigger.querySelector('img');
      picture.src = trigger.href;
      picture.alt = source.alt;
      caption.textContent = trigger.dataset.caption || source.alt;
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (activeTrigger) activeTrigger.focus(); });
})();
