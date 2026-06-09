# Projektstatus

## Zusammenfassung

Das BM Lernportal liegt als erste produktive Fassung vor. Die Anwendung ist
statisch, responsiv, ohne externe Laufzeitabhängigkeiten und für GitHub Pages
vorbereitet.

## Aktueller Versionsstand

- Version: `1.0.0`
- Datum: 9. Juni 2026
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
- Responsive Gestaltung für Desktop und Smartphone erstellt
- Offline-Cache und Web-App-Manifest ergänzt
- Automatisierte und manuelle Tests durchgeführt
- GitHub-Pages-Workflow vorbereitet

## Naechster pruefbarer Meilenstein

**M2 - Inhaltserweiterung**

Abnahmekriterien:

- Rückmeldungen aus dem Unterricht sind priorisiert.
- Neue fachlich geprüfte Aufgabensätze sind ergänzt.
- Bestehende Lernstände bleiben kompatibel.
- Release `1.1.0` ist getestet und dokumentiert.

## Risiken

| Risiko | Auswirkung | Gegenmassnahme |
| --- | --- | --- |
| Ungeprüfte Originalprüfungen | Rechte- oder Veröffentlichungsrisiko | Nur eigenständig formulierte Aufgaben öffentlich verwenden |
| Browserdaten werden gelöscht | Lokaler Lernstand geht verloren | Exportfunktion verwenden |
| Fachliche Inhalte ändern sich | Aufgaben können veralten | Regelmäßige fachliche Review |
| Offline-Cache zeigt alte Fassung | Aktualisierung verzögert | Cache-Version im Service Worker erhöhen |

## Statuspflege

Diese Datei wird bei jedem Meilenstein und vor jeder Freigabe aktualisiert.
