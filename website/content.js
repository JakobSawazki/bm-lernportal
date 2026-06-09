window.BM_CONTENT = {
  modules: [
    {
      id: "lagerung",
      code: "LF 01",
      mark: "LA",
      title: "Eigen- & Fremdlagerung",
      short: "Kosten vergleichen, Risiken abwägen und Entscheidungen begründen.",
      color: "mint",
      lessons: [
        {
          title: "Die Grundentscheidung",
          text: "Beim Eigenlager betreibt das Unternehmen Lagerfläche, Personal und Prozesse selbst. Beim Fremdlager übernimmt ein externer Lagerhalter Flächen und häufig weitere Dienstleistungen."
        },
        {
          title: "Kosten richtig einordnen",
          text: "Zum Eigenlager gehören Fixkosten wie kalkulatorische Miete, Abschreibungen, Versicherungen, Energie und Personal. Variable Kosten verändern sich mit Lagermenge und Warenbewegungen."
        },
        {
          title: "Kritische Lagerfläche",
          text: "An der kritischen Lagerfläche sind beide Alternativen gleich teuer. Unterhalb oder oberhalb dieses Werts entscheidet die jeweilige Kostenfunktion."
        }
      ],
      takeaways: [
        "Eigenlagerung bietet Kontrolle, bindet aber Kapital.",
        "Fremdlagerung ist flexibel, schafft aber Abhängigkeit.",
        "Kostenvergleich und qualitative Argumente gehören zusammen."
      ]
    },
    {
      id: "bestellmenge",
      code: "LF 02",
      mark: "BE",
      title: "Bestellmenge & Lagerbestand",
      short: "Bestellhäufigkeit, Durchschnittsbestand und Lagerkosten verstehen.",
      color: "blue",
      lessons: [
        {
          title: "Warum durch zwei?",
          text: "Im klassischen Modell sinkt der Bestand gleichmäßig von der Bestellmenge auf null. Der mittlere Bestand ist deshalb (Bestellmenge + 0) / 2."
        },
        {
          title: "Mehr Bestellungen",
          text: "Wird häufiger bestellt, fällt die einzelne Bestellmenge kleiner aus. Dadurch sinken durchschnittlicher Lagerbestand und Lagerhaltungskosten."
        },
        {
          title: "Der Zielkonflikt",
          text: "Viele kleine Bestellungen senken Lagerkosten, erhöhen aber Bestellkosten. Die optimale Bestellmenge minimiert die Summe beider Kostenarten."
        }
      ],
      takeaways: [
        "Durchschnittsbestand = Bestellmenge / 2, wenn kein Mindestbestand vorliegt.",
        "Bestellkosten steigen mit der Zahl der Bestellungen.",
        "Lagerhaltungskosten steigen mit dem Durchschnittsbestand."
      ]
    },
    {
      id: "verkauf",
      code: "LF 03",
      mark: "VK",
      title: "Verkaufskalkulation",
      short: "Vom Einstandspreis bis zum Listenverkaufspreis sicher rechnen.",
      color: "coral",
      lessons: [
        {
          title: "Vorwärts und rückwärts",
          text: "Zuschläge werden auf eine bekannte Basis gerechnet. Wurde ein Prozentsatz von einem höheren Wert abgezogen, muss rückwärts durch den Restprozentsatz geteilt werden."
        },
        {
          title: "Skonto zurückrechnen",
          text: "Bei 3 % Skonto entsprechen 97 % dem Barverkaufspreis. Deshalb gilt: Zielverkaufspreis = Barverkaufspreis / 0,97."
        },
        {
          title: "Rabatt zurückrechnen",
          text: "Bei 8 % Rabatt entsprechen 92 % dem Zielverkaufspreis. Deshalb gilt: Listenverkaufspreis netto = Zielverkaufspreis / 0,92."
        }
      ],
      takeaways: [
        "Gewinn ist ein Zuschlag auf die Selbstkosten.",
        "Skonto und Rabatt werden bei der Rückwärtsrechnung nicht einfach addiert.",
        "Immer prüfen, von welchem Grundwert ein Prozentsatz berechnet wird."
      ]
    },
    {
      id: "excel",
      code: "LF 04",
      mark: "XL",
      title: "Excel-Fitness",
      short: "Formeln verstehen, Bezüge einsetzen und Ergebnisse plausibilisieren.",
      color: "lime",
      lessons: [
        {
          title: "Relative Bezüge",
          text: "Beim Herunterziehen passt Excel relative Zellbezüge automatisch an. Aus =B11/2 wird in der nächsten Zeile =B12/2."
        },
        {
          title: "Absolute Bezüge",
          text: "Ein Dollarzeichen fixiert Spalte oder Zeile. $B$2 bleibt beim Kopieren unverändert und eignet sich beispielsweise für einen festen Prozentsatz."
        },
        {
          title: "Plausibilitätscheck",
          text: "Eine korrekte Formel kann trotzdem auf falschen Ausgangswerten beruhen. Einheit, Prozentbasis und Größenordnung sollten immer geprüft werden."
        }
      ],
      takeaways: [
        "Formeln beginnen mit einem Gleichheitszeichen.",
        "Relative Bezüge wandern, absolute Bezüge bleiben stehen.",
        "Excel rechnet schnell, die fachliche Kontrolle bleibt deine Aufgabe."
      ]
    },
    {
      id: "pruefung",
      code: "FINAL",
      mark: "PT",
      title: "Prüfungstraining",
      short: "Gemischte Aufgaben, Fachbegriffe und kleine Fälle unter Zeitdruck.",
      color: "violet",
      lessons: [
        {
          title: "Aufgabe lesen",
          text: "Markiere Operatoren wie berechnen, erläutern, beurteilen oder begründen. Sie bestimmen Umfang und Art deiner Antwort."
        },
        {
          title: "Rechenweg zeigen",
          text: "Notiere Formel, eingesetzte Werte, Ergebnis und Einheit. So bleiben auch bei einem Rechenfehler Lösungsansätze nachvollziehbar."
        },
        {
          title: "Entscheidungen begründen",
          text: "Eine gute Entscheidung nennt das Ergebnis, bezieht sich auf den Fall und verwendet passende quantitative sowie qualitative Argumente."
        }
      ],
      takeaways: [
        "Erst verstehen, dann rechnen.",
        "Ergebnisse mit Einheit und Antwortsatz angeben.",
        "Bei Beurteilungen Chancen, Risiken und Falldaten verbinden."
      ]
    }
  ],
  questions: [
    {
      id: "lag-01",
      module: "lagerung",
      type: "choice",
      prompt: "Welche Aussage beschreibt eine Eigenlagerung?",
      options: [
        "Ein Lagerhalter übernimmt die gesamte Lagerung.",
        "Das Unternehmen betreibt Lagerfläche und Prozesse selbst.",
        "Die Ware wird grundsätzlich ohne Lager verkauft.",
        "Die Lagerfläche wird nur für einen Monat gemietet."
      ],
      answer: 1,
      explanation: "Bei der Eigenlagerung organisiert und verantwortet das Unternehmen sein Lager selbst."
    },
    {
      id: "lag-02",
      module: "lagerung",
      type: "choice",
      prompt: "Welcher Punkt ist typischerweise ein Vorteil der Fremdlagerung?",
      options: [
        "Volle Kontrolle über jedes Lagerdetail",
        "Keine Abhängigkeit von Dienstleistern",
        "Flexiblere Anpassung der Lagerfläche",
        "Fixkosten auch bei geringer Auslastung"
      ],
      answer: 2,
      explanation: "Fremdlagerflächen lassen sich häufig flexibler an einen schwankenden Bedarf anpassen."
    },
    {
      id: "lag-03",
      module: "lagerung",
      type: "choice",
      prompt: "Welche Kostenart gehört am ehesten zu den Fixkosten eines Eigenlagers?",
      options: [
        "Verpackung je Auslagerung",
        "Kalkulatorische Miete",
        "Transport je Auftrag",
        "Kommissionierung je Stück"
      ],
      answer: 1,
      explanation: "Die kalkulatorische Miete fällt unabhängig von einzelnen Warenbewegungen an."
    },
    {
      id: "lag-04",
      module: "lagerung",
      type: "number",
      prompt: "Ein Fremdlager kostet 35 € je m² und Jahr. Wie hoch sind die Jahreskosten bei 400 m²?",
      suffix: "€",
      answer: 14000,
      tolerance: 0.01,
      explanation: "400 × 35 € = 14.000 €."
    },
    {
      id: "lag-05",
      module: "lagerung",
      type: "number",
      prompt: "Eigenlager: 6.000 € Fixkosten plus 22,50 € je m². Wie hoch sind die Kosten bei 400 m²?",
      suffix: "€",
      answer: 15000,
      tolerance: 0.01,
      explanation: "6.000 € + 400 × 22,50 € = 15.000 €."
    },
    {
      id: "lag-06",
      module: "lagerung",
      type: "number",
      prompt: "35x = 6.000 + 22,50x. Wie groß ist die kritische Lagerfläche?",
      suffix: "m²",
      answer: 480,
      tolerance: 0.01,
      explanation: "12,50x = 6.000, also x = 480 m²."
    },
    {
      id: "lag-07",
      module: "lagerung",
      type: "choice",
      prompt: "Die kritische Lagerfläche liegt bei 480 m². Welche Aussage stimmt?",
      options: [
        "Bei 480 m² sind beide Varianten gleich teuer.",
        "Unter 480 m² ist das Eigenlager immer günstiger.",
        "Über 480 m² ist das Fremdlager immer günstiger.",
        "Die kritische Lagerfläche sagt nichts über Kosten aus."
      ],
      answer: 0,
      explanation: "Am kritischen Punkt schneiden sich die beiden Kostenfunktionen."
    },
    {
      id: "lag-08",
      module: "lagerung",
      type: "choice",
      prompt: "Ein Start-up braucht saisonal schwankende Lagerfläche und möchte keinen hohen Kredit aufnehmen. Was spricht eher für Fremdlagerung?",
      options: [
        "Langfristig starre Kapazität",
        "Hohe Anfangsinvestition",
        "Flexible Fläche und geringe Kapitalbindung",
        "Mehr eigenes Lagerpersonal"
      ],
      answer: 2,
      explanation: "Bei unsicherem Bedarf sind Flexibilität und eine geringe Anfangsinvestition wichtige Argumente."
    },
    {
      id: "bes-01",
      module: "bestellmenge",
      type: "choice",
      prompt: "Warum wird die Bestellmenge im klassischen Modell durch zwei geteilt?",
      options: [
        "Weil nur die Hälfte geliefert wird.",
        "Weil der Bestand gleichmäßig von der Bestellmenge auf null sinkt.",
        "Weil jede Rechnung halbiert werden muss.",
        "Weil zwei Lieferanten beteiligt sind."
      ],
      answer: 1,
      explanation: "Der Mittelwert aus Anfangsbestand und Endbestand lautet (Bestellmenge + 0) / 2."
    },
    {
      id: "bes-02",
      module: "bestellmenge",
      type: "number",
      prompt: "Die Bestellmenge beträgt 12.000 Stück. Wie hoch ist der durchschnittliche Lagerbestand ohne Mindestbestand?",
      suffix: "Stück",
      answer: 6000,
      tolerance: 0.01,
      explanation: "12.000 / 2 = 6.000 Stück."
    },
    {
      id: "bes-03",
      module: "bestellmenge",
      type: "number",
      prompt: "Bei zwei Bestellungen pro Jahr beträgt die einzelne Bestellmenge 6.000 Stück. Wie hoch ist der Durchschnittsbestand?",
      suffix: "Stück",
      answer: 3000,
      tolerance: 0.01,
      explanation: "6.000 / 2 = 3.000 Stück."
    },
    {
      id: "bes-04",
      module: "bestellmenge",
      type: "choice",
      prompt: "Was passiert in der Regel, wenn häufiger und in kleineren Mengen bestellt wird?",
      options: [
        "Der Durchschnittsbestand sinkt.",
        "Der Durchschnittsbestand steigt immer.",
        "Bestellkosten verschwinden.",
        "Der Jahresbedarf verdoppelt sich."
      ],
      answer: 0,
      explanation: "Kleinere Bestellmengen verringern den durchschnittlichen Lagerbestand."
    },
    {
      id: "bes-05",
      module: "bestellmenge",
      type: "choice",
      prompt: "Welche Kosten steigen typischerweise mit der Anzahl der Bestellungen?",
      options: [
        "Lagerhaltungskosten",
        "Bestellkosten",
        "Kalkulatorische Zinsen auf den Lagerbestand",
        "Schwundkosten je gelagertem Stück"
      ],
      answer: 1,
      explanation: "Jede Bestellung verursacht Bearbeitungsaufwand und damit Bestellkosten."
    },
    {
      id: "bes-06",
      module: "bestellmenge",
      type: "choice",
      prompt: "Was ist das Ziel der optimalen Bestellmenge?",
      options: [
        "Nur die Bestellkosten zu minimieren",
        "Immer genau einmal pro Jahr zu bestellen",
        "Die Summe aus Bestell- und Lagerhaltungskosten zu minimieren",
        "Den höchsten Lagerbestand zu erreichen"
      ],
      answer: 2,
      explanation: "Die optimale Bestellmenge gleicht den Zielkonflikt zwischen beiden Kostenarten aus."
    },
    {
      id: "bes-07",
      module: "bestellmenge",
      type: "number",
      prompt: "Jahresbedarf 12.000 Stück, vier Bestellungen. Wie groß ist eine Bestellmenge?",
      suffix: "Stück",
      answer: 3000,
      tolerance: 0.01,
      explanation: "12.000 / 4 = 3.000 Stück je Bestellung."
    },
    {
      id: "bes-08",
      module: "bestellmenge",
      type: "number",
      prompt: "Eine Bestellmenge beträgt 3.000 Stück. Wie hoch ist der Durchschnittsbestand ohne Mindestbestand?",
      suffix: "Stück",
      answer: 1500,
      tolerance: 0.01,
      explanation: "3.000 / 2 = 1.500 Stück."
    },
    {
      id: "ver-01",
      module: "verkauf",
      type: "number",
      prompt: "Selbstkosten 160 €, Gewinnzuschlag 30 %. Wie hoch ist der Barverkaufspreis?",
      suffix: "€",
      answer: 208,
      tolerance: 0.01,
      explanation: "30 % von 160 € sind 48 €. 160 € + 48 € = 208 €."
    },
    {
      id: "ver-02",
      module: "verkauf",
      type: "choice",
      prompt: "Warum darf man bei der Rückwärtsrechnung von 3 % Skonto nicht einfach 3 % auf den Barverkaufspreis aufschlagen?",
      options: [
        "Skonto ist immer ein Festbetrag.",
        "Die 3 % beziehen sich auf den höheren Zielverkaufspreis.",
        "Skonto wird vom Gewinn berechnet.",
        "Der Barverkaufspreis enthält keine Kosten."
      ],
      answer: 1,
      explanation: "Der kleinere Barverkaufspreis entspricht 97 % des Zielverkaufspreises."
    },
    {
      id: "ver-03",
      module: "verkauf",
      type: "number",
      prompt: "Barverkaufspreis 208 €, Kundenskonto 3 %. Wie hoch ist der Zielverkaufspreis? Runde auf Cent.",
      suffix: "€",
      answer: 214.43,
      tolerance: 0.01,
      explanation: "208 € / 0,97 = 214,43 €."
    },
    {
      id: "ver-04",
      module: "verkauf",
      type: "number",
      prompt: "Zielverkaufspreis 214,43 €, Kundenrabatt 8 %. Wie hoch ist der Listenverkaufspreis netto? Runde auf Cent.",
      suffix: "€",
      answer: 233.08,
      tolerance: 0.02,
      explanation: "214,43 € / 0,92 = 233,08 €."
    },
    {
      id: "ver-05",
      module: "verkauf",
      type: "choice",
      prompt: "Welcher Merksatz ist korrekt?",
      options: [
        "Rückwärts rechnet man immer mal zwei.",
        "Abgezogene Prozente werden auf den kleineren Wert addiert.",
        "Bei der Rückwärtsrechnung teilt man durch den Restprozentsatz.",
        "Rabatt und Skonto sind dasselbe."
      ],
      answer: 2,
      explanation: "Bei 3 % Abzug wird durch 0,97 geteilt, bei 8 % Abzug durch 0,92."
    },
    {
      id: "ver-06",
      module: "verkauf",
      type: "number",
      prompt: "Ein Listenverkaufspreis netto beträgt 250 €. Nach 8 % Rabatt: Wie hoch ist der Zielverkaufspreis?",
      suffix: "€",
      answer: 230,
      tolerance: 0.01,
      explanation: "250 € × 0,92 = 230 €."
    },
    {
      id: "ver-07",
      module: "verkauf",
      type: "number",
      prompt: "Ein Zielverkaufspreis beträgt 230 €. Nach 3 % Skonto: Wie hoch ist der Barverkaufspreis?",
      suffix: "€",
      answer: 223.1,
      tolerance: 0.01,
      explanation: "230 € × 0,97 = 223,10 €."
    },
    {
      id: "ver-08",
      module: "verkauf",
      type: "choice",
      prompt: "Worauf wird ein Gewinnzuschlag in der Verkaufskalkulation üblicherweise gerechnet?",
      options: [
        "Auf die Selbstkosten",
        "Auf den Kundenrabatt",
        "Auf die Umsatzsteuer",
        "Auf den Skontobetrag"
      ],
      answer: 0,
      explanation: "Selbstkosten plus Gewinn ergeben den Barverkaufspreis."
    },
    {
      id: "exc-01",
      module: "excel",
      type: "choice",
      prompt: "Was passiert, wenn die Formel =B11/2 eine Zeile nach unten kopiert wird?",
      options: [
        "Sie bleibt immer =B11/2.",
        "Sie wird zu =B12/2.",
        "Sie wird zu =C11/2.",
        "Excel löscht die Formel."
      ],
      answer: 1,
      explanation: "B11 ist ein relativer Bezug und passt sich beim Kopieren an."
    },
    {
      id: "exc-02",
      module: "excel",
      type: "choice",
      prompt: "Welcher Bezug bleibt beim Kopieren in jede Richtung vollständig fest?",
      options: ["B2", "$B2", "B$2", "$B$2"],
      answer: 3,
      explanation: "$B$2 fixiert sowohl Spalte B als auch Zeile 2."
    },
    {
      id: "exc-03",
      module: "excel",
      type: "choice",
      prompt: "Mit welchem Zeichen beginnt eine Excel-Formel?",
      options: ["#", "=", "%", "&"],
      answer: 1,
      explanation: "Excel erkennt Eingaben mit führendem Gleichheitszeichen als Formel."
    },
    {
      id: "exc-04",
      module: "excel",
      type: "choice",
      prompt: "Welche Formel addiert die Werte von B2 bis B10?",
      options: ["=SUMME(B2:B10)", "=PLUS(B2-B10)", "=B2:B10", "=ADD(B2;B10)"],
      answer: 0,
      explanation: "Der Doppelpunkt beschreibt den zusammenhängenden Zellbereich B2 bis B10."
    },
    {
      id: "exc-05",
      module: "excel",
      type: "choice",
      prompt: "In B2 steht ein fester Lagerkostensatz. Welche Formel eignet sich in C5, damit B2 beim Herunterziehen fest bleibt?",
      options: ["=A5*B2", "=A5*$B$2", "=$A$5*B5", "=A$5/B2"],
      answer: 1,
      explanation: "Der Kostensatz wird mit $B$2 absolut fixiert, während A5 mitwandert."
    },
    {
      id: "exc-06",
      module: "excel",
      type: "choice",
      prompt: "Welche Prüfung ist nach einer Excel-Berechnung besonders wichtig?",
      options: [
        "Nur die Schriftfarbe kontrollieren",
        "Ergebnis, Einheit und Größenordnung plausibilisieren",
        "Jede Zelle fett formatieren",
        "Die Datei sofort schließen"
      ],
      answer: 1,
      explanation: "Excel führt Formeln aus, erkennt aber keine fachlich unplausiblen Ausgangswerte."
    },
    {
      id: "exc-07",
      module: "excel",
      type: "number",
      prompt: "In B10 stehen 12.000 Stück. Die Formel in C10 lautet =B10/2. Welcher Wert erscheint?",
      suffix: "Stück",
      answer: 6000,
      tolerance: 0.01,
      explanation: "Die Formel halbiert den Wert aus B10."
    },
    {
      id: "exc-08",
      module: "excel",
      type: "choice",
      prompt: "Was ist ein guter Einsatz für die WENN-Funktion?",
      options: [
        "Eine Bedingung prüfen und je nach Ergebnis unterschiedliche Werte ausgeben",
        "Nur Schriftgrößen ändern",
        "Eine Arbeitsmappe umbenennen",
        "Bilder komprimieren"
      ],
      answer: 0,
      explanation: "WENN besteht aus Prüfung, Wert-wenn-wahr und Wert-wenn-falsch."
    },
    {
      id: "pru-01",
      module: "pruefung",
      type: "choice",
      prompt: "Der Operator lautet 'begründen'. Was wird erwartet?",
      options: [
        "Nur ein Ergebnis ohne Erklärung",
        "Eine Aussage mit nachvollziehbaren Argumenten",
        "Ausschließlich eine Formel",
        "Die Aufgabenstellung abschreiben"
      ],
      answer: 1,
      explanation: "Eine Begründung verbindet die Entscheidung mit passenden fachlichen Argumenten."
    },
    {
      id: "pru-02",
      module: "pruefung",
      type: "choice",
      prompt: "Welche Reihenfolge macht einen Rechenweg gut nachvollziehbar?",
      options: [
        "Ergebnis, dann raten",
        "Formel, Werte einsetzen, rechnen, Ergebnis mit Einheit",
        "Nur Taschenrechneranzeige",
        "Einheit, ohne Zahlen"
      ],
      answer: 1,
      explanation: "Diese Reihenfolge macht Ansatz und Ergebnis überprüfbar."
    },
    {
      id: "pru-03",
      module: "pruefung",
      type: "choice",
      prompt: "Welche Aussage zu 'Fremdlagerung ist immer günstiger' ist fachlich richtig?",
      options: [
        "Sie stimmt ohne Ausnahme.",
        "Sie hängt von Kosten, Fläche, Dauer und qualitativen Faktoren ab.",
        "Sie stimmt nur bei großen Flächen.",
        "Sie kann nicht geprüft werden."
      ],
      answer: 1,
      explanation: "Kostenfunktionen und betriebliche Anforderungen entscheiden im konkreten Fall."
    },
    {
      id: "pru-04",
      module: "pruefung",
      type: "number",
      prompt: "Fremdlager: 28 € je m². Wie hoch sind die Kosten bei 750 m²?",
      suffix: "€",
      answer: 21000,
      tolerance: 0.01,
      explanation: "750 × 28 € = 21.000 €."
    },
    {
      id: "pru-05",
      module: "pruefung",
      type: "number",
      prompt: "Eigenlager: 9.000 € fix plus 14 € je m². Wie hoch sind die Kosten bei 750 m²?",
      suffix: "€",
      answer: 19500,
      tolerance: 0.01,
      explanation: "9.000 € + 750 × 14 € = 19.500 €."
    },
    {
      id: "pru-06",
      module: "pruefung",
      type: "number",
      prompt: "28x = 9.000 + 14x. Wie groß ist die kritische Lagerfläche? Runde auf volle m².",
      suffix: "m²",
      answer: 643,
      tolerance: 0.5,
      explanation: "9.000 / 14 = 642,86, gerundet 643 m²."
    },
    {
      id: "pru-07",
      module: "pruefung",
      type: "choice",
      prompt: "Was bedeutet Kapitalbindung im Lager?",
      options: [
        "Kapital ist in Beständen gebunden und steht nicht anderweitig zur Verfügung.",
        "Kapital wird automatisch verzinst.",
        "Alle Waren sind kostenlos.",
        "Das Lager besitzt keine Risiken."
      ],
      answer: 0,
      explanation: "Eingelagertes Vermögen kann nicht gleichzeitig für andere Zwecke eingesetzt werden."
    },
    {
      id: "pru-08",
      module: "pruefung",
      type: "choice",
      prompt: "Was gehört in einen vollständigen Antwortsatz nach einer Kostenrechnung?",
      options: [
        "Nur 'fertig'",
        "Entscheidung, Betrag oder Differenz und Bezug zur Fragestellung",
        "Ausschließlich ein Prozentzeichen",
        "Nur die eingesetzte Formel"
      ],
      answer: 1,
      explanation: "Der Antwortsatz übersetzt das Rechenergebnis zurück in die betriebliche Entscheidung."
    }
  ],
  badges: [
    {
      id: "first-step",
      title: "Erster Schritt",
      description: "Die erste Aufgabe richtig gelöst.",
      condition: "correct",
      value: 1
    },
    {
      id: "xp-100",
      title: "Punktejäger",
      description: "100 XP gesammelt.",
      condition: "xp",
      value: 100
    },
    {
      id: "xp-500",
      title: "Büro-Profi",
      description: "500 XP gesammelt.",
      condition: "xp",
      value: 500
    },
    {
      id: "module-one",
      title: "Lernfeld geknackt",
      description: "Ein Lernfeld vollständig abgeschlossen.",
      condition: "modules",
      value: 1
    },
    {
      id: "module-all",
      title: "Allrounder",
      description: "Alle Lernfelder vollständig abgeschlossen.",
      condition: "modules",
      value: 5
    },
    {
      id: "streak-three",
      title: "Drangeblieben",
      description: "An drei Tagen in Folge gelernt.",
      condition: "streak",
      value: 3
    },
    {
      id: "sprint",
      title: "Prüfungsstarter",
      description: "Einen Prüfungs-Sprint beendet.",
      condition: "sprints",
      value: 1
    }
  ]
};

