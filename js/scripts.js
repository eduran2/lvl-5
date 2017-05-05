const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

// toggle background on double click
      function toggleBackground() {
        this.classList.toggle('gosaturn');
    }
      

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    
// listen for double click      
    panels.forEach(panel => panel.addEventListener('dblclick', toggleBackground));
