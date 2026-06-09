# Veröffentlichung und Deployment

Die produktive Website wird über GitHub Pages bereitgestellt.

## Bevorzugte Ausgangsoption

Repository: `JakobSawazki/bm-lernportal`

Produktive URL: <https://jakobsawazki.github.io/bm-lernportal/>

Vorteile:

- Direkte Verbindung zum GitHub-Repository
- HTTPS ohne eigene Serververwaltung
- Nachvollziehbare Veröffentlichungen aus Git
- Fuer kleine statische Lern- und Informationsseiten meist ausreichend

## Voraussetzungen

- Vollstaendiger und lokal getesteter Webstand
- Geklaertes GitHub-Repository
- Geklaerte Sichtbarkeit: oeffentlich oder privat
- Geklaerte Domain beziehungsweise Ziel-URL
- Fachliche Freigabe
- Datenschutz- und Rechtepruefung
- Keine Geheimnisse oder internen Dokumente im Veröffentlichungsumfang

## Ablauf

1. Änderungen nach `main` pushen.
2. Workflow `.github/workflows/deploy-pages.yml` starten lassen.
3. JavaScript-Syntax und Pflichtdateien werden geprüft.
4. `website/` wird als Pages-Artefakt hochgeladen.
5. GitHub Pages veröffentlicht das Artefakt.
6. Workflow und Produktivseite prüfen.

## Release-Checkliste

- [ ] Arbeitsbaum sauber
- [ ] Versionsnummer aktualisiert
- [ ] `CHANGELOG.md` aktualisiert
- [ ] Build erfolgreich
- [ ] Automatisierte Tests erfolgreich
- [ ] Manuelle Darstellungstests erfolgreich
- [ ] Alle Links funktionieren
- [ ] Bilder und Downloads vorhanden
- [ ] Keine lokalen Pfade in HTML oder CSS
- [ ] Keine Geheimnisse oder personenbezogenen Daten
- [ ] Datenschutz und Rechte geprueft
- [ ] Freigabe dokumentiert
- [ ] Rollback-Moeglichkeit vorhanden

## Rollback

Jede produktive Veröffentlichung soll einem Git-Tag zugeordnet werden. Bei
einem Fehler wird auf den letzten freigegebenen Tag zurueckgestellt und erst
danach eine korrigierte Patch-Version erstellt.

## Technische Eckdaten

- Plattform: GitHub Pages
- Veröffentlichungsbranch: `main`
- Build-Schritt: keiner
- Ausgabeverzeichnis: `website/`
- Veröffentlichung: GitHub Actions
- HTTPS: durch GitHub Pages
