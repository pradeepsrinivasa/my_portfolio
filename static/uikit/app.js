// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function () {
  hljs.highlightAll();

  // Select alert elements only after the DOM is fully loaded
  let alertwrapper = document.querySelector('.alert');
  let alertclose = document.querySelector('.alert__close');

  // Check if the alert wrapper and close button exist
  if (alertwrapper && alertclose) {
    console.log('Alert wrapper found');
    alertclose.addEventListener('click', () => {
      alertwrapper.style.display = 'none';
    });
  }
});
