# BM Lernportal

Spielerische Lern-Web-App für Schülerinnen und Schüler im Büromanagement. Das
Portal verbindet kurze Erklärungen, interaktive Aufgaben, Prüfungstraining und
ein lokales Punktesystem.

**Online:** <https://jakobsawazki.github.io/bm-lernportal/>

**Repository:** <https://github.com/JakobSawazki/bm-lernportal>

## Projektstatus

| Merkmal | Stand |
| --- | --- |
| Release | `1.2.0` |
| Stichtag | 17. Juni 2026 |
| Projektphase | Glossar- und Sicherungsupdate |
| Website-Quellcode | Vollständig in `website/` |
| Git-Repository | `JakobSawazki/bm-lernportal` |
| Hosting | GitHub Pages |
| Datenspeicherung | Ausschließlich lokal im Browser |
| Letzte technische Prüfung | 17. Juni 2026 |

## Ziele

1. Fachliche Grundlagen verständlich und prüfungsnah vermitteln.
2. Durch XP, Level, Lernserien und Abzeichen zum Üben motivieren.
3. Fehler automatisch sammeln und gezielt wiederholbar machen.
4. Auf Smartphone, Tablet und Desktop ohne Installation funktionieren.
5. Ohne Anmeldung, Tracking oder Übertragung von Lerndaten auskommen.

## Quellenlage

Am 9. Juni 2026 wurden folgende Quellen geprueft:

- ChatGPT-Projekt:
  <https://chatgpt.com/g/g-p-688cd1dcfcb08191a08c77f1a3374e2a-bm/project>
- GitHub-Konto: `JakobSawazki`
- Historischer Ausgangsordner: `C:\Users\Jakob\Documents\BM`
- Aktuelle Arbeitsablage: `G:\Meine Ablage\Lehramt\Lernfelder\BM`

Verwendete fachliche Themen:

- Eigen- und Fremdlagerung
- Fixe und variable Lagerkosten
- Kritische Lagerfläche
- Optimale Bestellmenge und durchschnittlicher Lagerbestand
- Verkaufskalkulation mit Skonto- und Rabattrückrechnung
- Excel-Grundlagen, Zellbezüge und Plausibilitätsprüfung
- Gemischte Prüfungsvorbereitung

Originalprüfungen, private OneNote-Dateien und personenbezogene Inhalte werden
nicht öffentlich ausgeliefert. Die Aufgaben im Portal sind eigenständig
formuliert.

Details und spaetere Fundstellen werden in
[`docs/QUELLEN.md`](docs/QUELLEN.md) fortgeschrieben.

## Verzeichnisstruktur

```text
BM/
|-- .github/
|   `-- workflows/
|       `-- deploy-pages.yml
|-- .gitignore
|-- AGENTS.md
|-- CHANGELOG.md
|-- README.md
|-- docs/
|   |-- DEPLOYMENT.md
|   |-- ENTSCHEIDUNGEN.md
|   |-- PROJEKTSTATUS.md
|   |-- QUELLEN.md
|   |-- ROADMAP.md
|   `-- UEBERGABE.md
`-- website/
    |-- .nojekyll
    |-- README.md
    |-- app.js
    |-- content.js
    |-- icon.svg
    |-- index.html
    |-- manifest.webmanifest
    |-- service-worker.js
    `-- styles.css
```

## Funktionen

- 5 Lernfelder mit kompakten Erklärungen
- 40 interaktive Multiple-Choice- und Rechenaufgaben
- 25 XP für jede erstmals richtig gelöste Aufgabe
- Levelsystem mit 200 XP je Level
- tägliche Lernserie
- 7 freischaltbare Abzeichen
- zufälliger Prüfungs-Sprint mit 10 Aufgaben
- automatische Fehlerliste
- Glossar mit 25 Begriffen, kurzen Erklärungen, Detailseiten und Mini-Quiz
- Versionierter Datei-Export und -Import des lokalen Lernstands
- Desktop als vorgeschlagener Speicherort, mit Download-Fallback
- JSON-Kopie als Notlösung, wenn Schüler-PCs Speichern oder Download blockieren
- Responsive Praxisfotos zu Teamarbeit, Lagerlogistik und Tabellenkalkulation
- Feedback per vorbereitetem E-Mail-Entwurf an die Lehrkraft
- installierbare Web-App mit einfachem Offline-Cache

## Versionierung

Das Projekt verwendet semantische Versionsnummern:

- `0.x.y`: Wiederherstellung und Entwicklung vor der ersten stabilen Freigabe
- `1.0.0`: Erste vollstaendig gepruefte und online veroeffentlichte Fassung
- Patch-Version: Fehlerkorrekturen ohne neue Funktion
- Minor-Version: Rueckwaertskompatible neue Inhalte oder Funktionen
- Major-Version: Grundlegende, nicht kompatible Neuausrichtung

Aktueller Stand: `1.2.0`

## Lokal starten

Die Website hat keinen Build-Schritt:

```powershell
python -m http.server 4173 --directory website
```

Danach: <http://localhost:4173>

Das direkte Öffnen von `index.html` ist nicht empfohlen, weil der Service
Worker einen lokalen Webserver benötigt.

## Qualitaetskriterien

Vor einer Veröffentlichung sollen mindestens folgende Punkte erfuellt sein:

- JavaScript-Syntaxprüfung erfolgreich
- Inhaltsdaten auf doppelte IDs und ungültige Modulzuordnungen geprüft
- Alle lokalen Assets per HTTP mit Status `200` geprüft
- Onboarding, Navigation, Quiz und XP-Speicherung automatisiert getestet
- Deutsche Zahleneingabe mit Punkt oder Komma getestet
- Desktopdarstellung bei 1440 Pixel Breite geprüft
- Mobildarstellung bei 390 Pixel Breite geprüft
- Keine JavaScript- oder Konsolenfehler im End-to-End-Test

## Veröffentlichung

Ein GitHub-Actions-Workflow prüft bei jedem Push die JavaScript-Dateien und
veröffentlicht anschließend den Ordner `website/` über GitHub Pages. Details
stehen in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Offene Punkte

- Weitere Unterrichtsinhalte nach fachlicher Prüfung ergänzen
- Glossar bei neuen Unterrichtsthemen fortlaufend ergänzen
- Konkrete Prüfungstermine oder Klasseninformationen nur bei Bedarf und ohne
  personenbezogene Daten ergänzen
- Optional einen Lehrerbereich für eigene Aufgabensätze entwickeln
- Barrierefreiheit regelmäßig mit echten Nutzenden prüfen

## Pflege

Nach jeder relevanten Aenderung sind mindestens diese Stellen zu aktualisieren:

- `CHANGELOG.md` für abgeschlossene Änderungen
- `docs/PROJEKTSTATUS.md` für den aktuellen Zustand
- `docs/ROADMAP.md` für Planung und Prioritäten
- `docs/ENTSCHEIDUNGEN.md` für langfristig wichtige Entscheidungen
- `website/content.js` für neue Lernfelder und Aufgaben
