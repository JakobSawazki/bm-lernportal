# Quellen und Fundstellen

Diese Datei protokolliert, woher Projektinhalte stammen. Sie verhindert, dass
spaeter unklar ist, welche Fassung massgeblich war oder ob Dateien vollstaendig
uebernommen wurden.

## Gepruefte Quellen

### ChatGPT-Projekt

- Bezeichnung: `BM`
- URL:
  <https://chatgpt.com/g/g-p-688cd1dcfcb08191a08c77f1a3374e2a-bm/project>
- Pruefdatum: 10. Juni 2026
- Ergebnis: Nach Anmeldung wurden die fachlich relevanten Unterhaltungen
  ausgewertet
- Projektquellen: `L 2024-2025.pdf`, `2024-2025.pdf` und `Anlagen.zip`
- Verwendete Themen:
  - Eigen- und Fremdlagerung
  - kritische Lagerfläche
  - durchschnittlicher Lagerbestand
  - optimale Bestellmenge
  - Verkaufskalkulation mit Skonto und Rabatt

### GitHub

- Konto: `JakobSawazki`
- Pruefdatum: 10. Juni 2026
- Ergebnis: Repository `JakobSawazki/bm-lernportal` ist vorhanden und
  GitHub Pages wurde erfolgreich veröffentlicht
- Produktive URL: `https://jakobsawazki.github.io/bm-lernportal/`

### Bildungsplan Kaufmann/Kauffrau für Büromanagement

- Datei: `assets/Bildungsplan.pdf`
- Prüfdatum: 17. Juni 2026
- Ergebnis: Lernfelder 1 bis 13 und fachliche Kompetenzschwerpunkte wurden
  ausgewertet
- Verwendung: Grundlage für das Glossar in `website/content.js`
- Veröffentlichungsregel: Die PDF wird nicht über `website/` ausgeliefert; im
  Portal stehen eigenständig formulierte Kurztexte, Beispiele und Quizfragen.

### Lokaler Ausgangsordner

- Pfad: `C:\Users\Jakob\Documents\BM`
- Pruefdatum: 9. Juni 2026
- Ergebnis: Leeres Git-Repository auf `main`, ohne Commit, Dateien oder Remote

### Zielablage

- Pfad: `G:\Meine Ablage\Lehramt\Lernfelder\BM`
- Bestaetigt: 10. Juni 2026
- Rolle: Zentrale Arbeits- und Dokumentationsablage

### OneNote und SharePoint

- Unterrichtsnotizbuch:
  `https://ksnagold.sharepoint.com/:o:/s/25-26-W1BMDVSZ/...`
- Prüfungsbereich:
  `https://ksnagold-my.sharepoint.com/personal/jakob_sawazki_ks-nagold_de/...`
- Prüfdatum: 10. Juni 2026
- Ergebnis: Nach Microsoft-Anmeldung wurde die BM-Ergebnissicherung mit
  Verweisen auf Prüfungen und Anlagen für 2024, 2024-2025 und 2025
  eingesehen.
- Abgrenzung: Die Originaldateien wurden nicht in das Repository übernommen.
- Veröffentlichungsregel: Keine Originalprüfungen, privaten Notizen oder
  personenbezogenen Inhalte in das öffentliche Repository übernehmen.
- Erste Fassung: Verwendet eigenständig formulierte Aufgaben auf Basis der
  bestätigten Themenfelder.

### KI-generierte Bildassets

- Erstellungsdatum: 10. Juni 2026
- Werkzeug: integrierte OpenAI-Bildgenerierung
- Dateien:
  - `website/assets/lernen-im-team.webp`
  - `website/assets/lagerlogistik.webp`
  - `website/assets/tabellenkalkulation.webp`
- Verwendung: ausschließlich als lokale Praxisbilder auf der Startseite
- Nachbearbeitung: auf 1200 × 800 Pixel verkleinert und als WebP komprimiert

### Lokales Archiv

- Pfad: `Archiv/`
- Prüfdatum: 17. Juni 2026
- Inhalt: ältere statische `Lager-Quest`-App inklusive ZIP und
  Lagerwirtschafts-AGENTS-Datei
- Ergebnis: Enthält brauchbare Lagerwirtschaftsfragen und Kompetenznotizen,
  ist aber kein Teil der produktiven Website
- Entscheidung: Nicht gelöscht, weil die Inhalte als lokale Referenz für
  spätere Aufgabenvarianten nutzbar sind; nicht ins öffentliche Deployment
  übernommen

## Importprotokoll

Sobald Quelldateien gefunden werden, ist fuer jeden Import festzuhalten:

| Datum | Quelle | Ausgangsversion | Ziel | Pruefsumme/Commit | Bemerkung |
| --- | --- | --- | --- | --- | --- |
| 2026-06-09 | ChatGPT-Projekt BM | Projektstand Juni 2026 | `website/content.js` | Release 1.0.0 | Fachthemen in eigene Übungen überführt |
| 2026-06-17 | Bildungsplan Kaufmann/Kauffrau für Büromanagement | KMK-Beschluss 27.09.2013, BW-Fassung | `website/content.js` | Release 1.2.0 | Glossarbegriffe und Quizfragen eigenständig formuliert |

## Regeln fuer Quellen

- Originaldateien zunaechst unveraendert sichern.
- Herkunft, Datum und Commit oder Dateiversion notieren.
- Keine Zugangsdaten oder privaten Exporte in Git einchecken.
- Dubletten erst nach einem Vergleich entfernen.
- Bei widerspruechlichen Fassungen die Entscheidung in
  `ENTSCHEIDUNGEN.md` dokumentieren.
