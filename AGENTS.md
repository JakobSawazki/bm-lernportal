# AGENTS.md

## Projekt

Dieses Repository enthält das BM Lernportal für Schülerinnen und Schüler im
Büromanagement. Die produktive statische Web-App liegt in `website/`.

## Technische Leitlinien

- Kein Framework und kein Build-Schritt
- Keine externen Laufzeitabhängigkeiten
- Keine Tracker, Cookies oder Cloud-Datenbanken
- Lernstände ausschließlich in `localStorage`
- GitHub Pages veröffentlicht exakt den Inhalt von `website/`
- Deutsche Oberfläche und deutsche Zahlenformate unterstützen
- Responsive und tastaturbedienbar bleiben

## Wichtige Dateien

- `website/content.js`: Lernfelder, Fragen, Lösungen und Abzeichen
- `website/app.js`: Navigation, Punktesystem, Lernstand und Quizlogik
- `website/styles.css`: Gestaltung und responsive Breakpoints
- `website/index.html`: statische Grundstruktur
- `website/service-worker.js`: Offline-Cache
- `website/assets/`: lokal optimierte Bildassets für die Homepage

## Lokale Aufgabenwarteschlange

- Zu Beginn jeder Arbeitssitzung die lokale Datei `tasks.txt` im Projektstamm
  prüfen.
- Aufgaben sind durch mindestens eine Leerzeile voneinander getrennt.
- Vorhandene Aufgaben strikt von oben nach unten bearbeiten.
- Nur vollständig erledigte Aufgabenblöcke aus `tasks.txt` entfernen.
- Nicht erledigte oder nur teilweise erledigte Aufgaben unverändert stehen
  lassen.
- `tasks.txt` ist lokal, wird von Git ignoriert und darf nicht veröffentlicht
  werden.

## Inhaltsregeln

- Aufgaben fachlich prüfen und nachvollziehbare Lösungen angeben.
- Keine personenbezogenen Daten von Lernenden veröffentlichen.
- Keine Originalprüfungen oder geschützten Unterrichtsdateien ungeprüft
  übernehmen.
- Feedback wird nur über das E-Mail-Programm der Lernenden vorbereitet; die
  Website selbst speichert oder überträgt keine Feedbacktexte.
- Neue Fragen benötigen eine eindeutige ID, ein gültiges Lernfeld und eine
  Erklärung.
- Bei Rechenaufgaben Einheit, Rundung und Toleranz bewusst festlegen.

## Prüfung vor einem Commit

```powershell
node --check website/content.js
node --check website/app.js
node --check website/service-worker.js
git diff --check
```

Zusätzlich müssen Onboarding, ein vollständiger Quizablauf, Fehlertraining,
XP-Speicherung sowie Desktop- und Mobilansicht im Browser geprüft werden.
