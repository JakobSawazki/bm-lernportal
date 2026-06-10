# BM Lernportal

Statische Lern-Web-App für Schülerinnen und Schüler im Büromanagement.

## Start

Die Website benötigt keinen Build-Schritt. Lokal genügt ein einfacher Webserver:

```powershell
python -m http.server 4173 --directory website
```

Anschließend ist die App unter `http://localhost:4173` erreichbar.

## Technik

- Semantisches HTML
- Eigenes responsives CSS
- Vanilla JavaScript ohne externe Bibliotheken
- `localStorage` für Name, XP, Lernfortschritt und Fehlerliste
- Service Worker für eine einfache Offline-Nutzung
- GitHub Pages als Hostingziel

## Dateien

```text
website/
|-- app.js
|-- content.js
|-- icon.svg
|-- index.html
|-- manifest.webmanifest
|-- service-worker.js
`-- styles.css
```

## Datenschutz

Die App besitzt kein Backend, kein Tracking und keine Anmeldung. Lernstände
werden ausschließlich im verwendeten Browser gespeichert. Über die
Einstellungen können sie als versionierte JSON-Datei gespeichert, wieder
geladen oder gelöscht werden. Unterstützte Browser öffnen dafür einen
Dateidialog mit dem Desktop als vorgeschlagenem Speicherort; ältere Browser
verwenden den normalen Download-Ordner.

Die Startseite verwendet drei lokal gespeicherte und für das Web optimierte
Praxisfotos. Über den Feedback-Dialog können Lernende Bewertung, Thema und
Freitext in eine vorbereitete E-Mail an die Lehrkraft übernehmen. Die Website
selbst speichert oder versendet diese Angaben nicht.
