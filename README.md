# hstiemer.github.io

visit: https://haimo-stiemer.org

### Allgemein

- allgemeine Einstellungen: hugo.yaml

### Inhalte ändern

- In den Ordner "content" navigieren
    - about.md = Inhalt der Startseite
    - vita.md = Werdegang
    - publikationen.md = Publikationen
        - Um ein Werk mit Bild hinzuzufügen, Shortcode in ({{< das ist ein shortcode>}}) kopieren und Bildbeschreibung sowie Bildpfad anpassen
        - Bilder müssen im ordner static/images abgelegt werden
    - projekte.md  = Projektübersicht
    - netzwerk.md = Netzwerk
    - kontakt.md  = Kontaktinformationen
    - archiv/....md
        - Hier können alte Beiträge, die nicht mehr auf der Startseite angezeigt werden sollen, abegelegt werden. Die Dateien müssen als markdown-Dateien abgelegt werden und mit einem YAML-Teil (markiert durch --- am Anfang und am Ende) beginnen, damit sie auf der Archivseite angezeigt werden

### Bilder hizufügen

- Bilder müssen im Ordner "images" unter static/images abegelegt werden


### Bilder formatieren
- in der Datei foo.css sind einige Bildformattierungen abgelegt. Beim Markdownaufruf eines Bildes können bspw. Attribute wie "#floatrightintext", "><" für Blockdarstellung, "<" = float left, ">" float right, '#floatright' float right, oder '#floatleft' = float left für verschiedene Formattierungen aufgerufen werden
    - "Beispiel![ASB_wien](/images/ASB-Wien.png#floatrightintext)"

- Für neue Publikationen mit Bildern sollte der Shortcode im publikationen.md kopiert und bearbeitet werden


### Stile

- alle Stile und Formattierungen können in assets/css/foo.css überschrieben werden