<script>
  const showButtons = document.querySelectorAll('.show');
  const interestsDivs = document.querySelectorAll('.hide');

  showButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      interestsDivs[index].classList.toggle('hidden');
      if (interestsDivs[index].classList.contains('hidden')) {
        button.textContent = 'Show Responsibilites';
      } else {
        button.textContent = 'Hide Responsibities';
      }
    });
  });
</script>
