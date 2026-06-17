# Projektstatus

## Zusammenfassung

Das BM Lernportal liegt als produktive statische Web-App vor. Die aktuelle
Fassung ergänzt ein ausbildungsbezogenes Glossar und robustere Möglichkeiten,
den lokalen Lernstand als Datei oder JSON-Text zu sichern.

## Aktueller Versionsstand

- Version: `1.2.0`
- Release-Datum: 17. Juni 2026
- Branch: `main`
- Remote: `https://github.com/JakobSawazki/bm-lernportal.git`
- Deployment: GitHub Actions und GitHub Pages
- Produktiver Quellcode: `website/`
- Produktive URL: `https://jakobsawazki.github.io/bm-lernportal/`

## Erledigt

- ChatGPT-Projekt und vorhandene fachliche Unterhaltungen ausgewertet
- Neues Lernkonzept und Informationsarchitektur entwickelt
- 40 Aufgaben in fünf Lernfeldern erstellt
- Gamification und lokale Lernstandsspeicherung umgesetzt
- Versionierten Datei-Export und -Import mit Desktop-Vorauswahl umgesetzt
- JSON-Kopie als Notlösung für verwaltete Schüler-PCs ergänzt
- Glossar mit 25 Begriffen, Detailseiten und Mini-Quiz auf Basis des
  Bildungsplans ergänzt
- Responsive Praxisbildstrecke mit drei lokalen WebP-Assets ergänzt
- Datensparsame Feedback-Funktion über das E-Mail-Programm umgesetzt
- Verlinkung auf der Sawazki-Electronics-Hauptseite vorbereitet
- Responsive Gestaltung für Desktop und Smartphone erstellt
- Offline-Cache und Web-App-Manifest ergänzt
- Automatisierte und manuelle Tests durchgeführt
- Lokalen Archiv-Ordner geprüft; ältere Lager-Quest-App als brauchbare
  Referenz behalten und nicht veröffentlicht
- GitHub-Pages-Workflow vorbereitet

## Naechster pruefbarer Meilenstein

**M4 - Fachliche Vertiefung**

Abnahmekriterien:

- Rückmeldungen aus dem Unterricht sind priorisiert.
- Neue fachlich geprüfte Aufgabensätze sind ergänzt.
- Glossarbegriffe werden bei neuen Themen erweitert oder verlinkt.
- Bestehende Lernstände bleiben kompatibel.
- Release `1.3.0` ist getestet und dokumentiert.

## Risiken

| Risiko | Auswirkung | Gegenmassnahme |
| --- | --- | --- |
| Ungeprüfte Originalprüfungen | Rechte- oder Veröffentlichungsrisiko | Nur eigenständig formulierte Aufgaben öffentlich verwenden |
| Browserdaten werden gelöscht | Lokaler Lernstand geht verloren | Exportfunktion und JSON-Kopie verwenden |
| Fachliche Inhalte ändern sich | Aufgaben können veralten | Regelmäßige fachliche Review |
| Offline-Cache zeigt alte Fassung | Aktualisierung verzögert | Cache-Version im Service Worker erhöhen |

## Statuspflege

Diese Datei wird bei jedem Meilenstein und vor jeder Freigabe aktualisiert.
