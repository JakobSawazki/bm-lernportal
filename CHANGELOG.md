# Aenderungsprotokoll

Alle wesentlichen Projektänderungen werden in dieser Datei dokumentiert.
Das Format orientiert sich an Keep a Changelog, die Versionierung an Semantic
Versioning.

## [Unreleased]

### Geplant

- Weitere Unterrichtsthemen und Aufgaben ergänzen
- Rückmeldungen der Schülerinnen und Schüler auswerten

## [1.2.0] - 2026-06-17

### Hinzugefügt

- Neuen Navigationsbereich `Glossar` für Desktop- und Mobilnavigation ergänzt
- 25 zentrale Begriffe aus der Ausbildung Kaufmann/Kauffrau für
  Büromanagement mit Kurztext, Detailerklärung, Praxisbeispiel und Mini-Quiz
- Zusätzliche Lernstand-Option `Lernstand-JSON kopieren` für Schüler-PCs, auf
  denen Dateidialog oder Download blockiert sein können
- Manuelle JSON-Notlösung mit markierbarem Textfeld und Hinweis zum Speichern
  als `bm-lernstand.json` auf dem Desktop

### Geändert

- Hinweise im Lernstand-Dialog präzisiert: Desktop wird vorgeschlagen, kann vom
  Browser aber nicht ohne Dateidialog erzwungen werden
- Offline-Cache auf Version 4 erhöht

### Geprüft

- JavaScript-Syntax und Glossar-Datenvalidierung
- Lokaler Browserlauf mit Microsoft Edge gegen `localhost:4173`
- Glossarübersicht, Begriff-Detailseite, Mini-Quiz, Desktop- und Mobilnavigation
- Lernstand-JSON-Fallback bei simuliert blockierter Zwischenablage

## [1.1.0] - 2026-06-10

### Hinzugefügt

- Versionierte Lernstand-Dateien mit Speicherdatum und stabilem JSON-Format
- Desktop als vorgeschlagener Speicherort in unterstützten Browsern
- Verständlicher Fallback auf den Download-Ordner in älteren Browsern
- Drei KI-generierte, lokal optimierte Praxisfotos für Lernen, Lagerlogistik
  und Tabellenkalkulation
- Responsive Bildstrecke mit Alternativtexten und Offline-Verfügbarkeit
- Feedback-Dialog mit Bewertung, Themenauswahl und vorbereiteter E-Mail an die
  Lehrkraft

### Geändert

- Import prüft Lernstand-Dateien strenger und bleibt mit bisherigen Exporten kompatibel
- Unbekannte oder doppelte Fortschrittsdaten werden beim Laden bereinigt
- Lokale `tasks.txt` wird nicht in Git aufgenommen; der Abarbeitungsprozess ist
  in `AGENTS.md` festgehalten
- Offline-Cache auf Version 3 erhöht
- BM Lernportal auf der Sawazki-Electronics-Hauptseite als Projekt verlinkt

## [1.0.1] - 2026-06-09

### Geändert

- GitHub-Actions auf die aktuellen offiziellen Hauptversionen aktualisiert
- Bevorstehende Node-20-Abkündigung in der Deployment-Pipeline behoben

## [1.0.0] - 2026-06-09

### Hinzugefügt

- Vollständige responsive Lern-Web-App
- Fünf Lernfelder mit 40 interaktiven Aufgaben
- XP-, Level-, Lernserien- und Abzeichensystem
- Prüfungs-Sprint mit zufälligen Aufgaben
- Automatisches Fehlertraining
- Lokaler Export und Import des Lernstands
- Installierbare Web-App mit Service Worker
- Automatisierte GitHub-Pages-Veröffentlichung
- Umfangreiche Projekt-, Quellen- und Übergabedokumentation

### Geprüft

- JavaScript-Syntax und Inhaltskonsistenz
- Lokale Asset-Verfügbarkeit
- Onboarding und Navigation
- Multiple-Choice- und Rechenaufgaben
- Deutsche Zahlenformate
- XP- und Fortschrittsspeicherung
- Desktop- und Mobildarstellung

## [0.1.0] - 2026-06-09

### Hinzugefügt

- Neuen Projektordner unter `D:\Google Drive\Lehramt\Lernfelder\BM` angelegt
- Lokales Git-Repository mit Hauptbranch `main` initialisiert
- Ausfuehrliche README mit Versionsstand, Zielen und Qualitaetskriterien erstellt
- Dokumentation fuer Quellen, Status, Roadmap, Entscheidungen, Übergabe und
  spaeteres Deployment angelegt
- Separaten Arbeitsbereich `website/` fuer den wiederherzustellenden Webcode
  vorbereitet

### Bekannte Einschränkungen

- Bisheriger Webcode ist noch nicht vorhanden
- ChatGPT-Projekt konnte ohne Anmeldung noch nicht gelesen werden
- Frueheres GitHub-Repository ist noch nicht identifiziert
