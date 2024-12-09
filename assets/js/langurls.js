<script>
    document.querySelectorAll('.language-switcher').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Hole die aktuelle URL
        let currentUrl = window.location.pathname;
  
        // Erhalte die neue Sprache aus dem "data-lang"-Attribut des angeklickten Links
        const newLang = this.getAttribute('data-lang');
  
        // Ersetze die Sprache in der URL (nehme an, dass "de" und "en" die ersten Segmente in der URL sind)
        if (currentUrl.startsWith("/de/")) {
          currentUrl = currentUrl.replace("/de/", "/" + newLang + "/");
        } else if (currentUrl.startsWith("/en/")) {
          currentUrl = currentUrl.replace("/en/", "/" + newLang + "/");
        } else {
          // Wenn es keine Sprachangabe gibt, füge sie hinzu
          currentUrl = "/" + newLang + currentUrl;
        }
  
        // Navigiere zu der neuen URL
        window.location.href = currentUrl;
      });
    });
  </script>
  