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
  glossary: [
    {
      id: "ausbildungsvertrag",
      term: "Ausbildungsvertrag",
      category: "LF 1",
      short: "Der Vertrag regelt Beginn, Dauer, Probezeit, Vergütung, Ausbildungsziel sowie Rechte und Pflichten in der Ausbildung.",
      detail: "Der Ausbildungsvertrag ist die rechtliche Grundlage der Berufsausbildung. Er hält fest, was Betrieb und Auszubildende voneinander erwarten dürfen und müssen. Wichtig sind zum Beispiel Ausbildungsdauer, Probezeit, Ausbildungsvergütung, Urlaub, Ausbildungsort und Hinweise auf Tarifverträge oder Betriebsvereinbarungen.",
      example: "Wenn ein Azubi wissen möchte, wie lange die Probezeit dauert oder welche Vergütung vereinbart wurde, ist der Ausbildungsvertrag die erste Anlaufstelle.",
      quiz: {
        question: "Wozu dient ein Ausbildungsvertrag vor allem?",
        options: [
          "Er ersetzt alle gesetzlichen Regelungen.",
          "Er hält die wichtigsten Rechte und Pflichten der Ausbildung fest.",
          "Er ist nur eine freiwillige Betriebsliste.",
          "Er legt ausschließlich die Pausenzeiten im Betrieb fest."
        ],
        answer: 1,
        explanation: "Der Ausbildungsvertrag dokumentiert die zentralen Ausbildungsbedingungen und ergänzt die gesetzlichen Vorgaben."
      }
    },
    {
      id: "aufbauorganisation",
      term: "Aufbauorganisation",
      category: "LF 1 / LF 11",
      short: "Sie zeigt, welche Stellen, Abteilungen, Zuständigkeiten und Weisungswege es in einem Betrieb gibt.",
      detail: "Die Aufbauorganisation beschreibt die Struktur eines Unternehmens. Sie beantwortet Fragen wie: Wer ist wofür zuständig? Wer darf wem Anweisungen geben? Welche Abteilungen arbeiten zusammen? Häufig wird sie in einem Organigramm dargestellt.",
      example: "Im Organigramm erkennt man, ob die Buchhaltung direkt der Geschäftsführung oder einer kaufmännischen Leitung unterstellt ist.",
      quiz: {
        question: "Welche Frage beantwortet die Aufbauorganisation am ehesten?",
        options: [
          "Wie hoch ist der Lagerbestand?",
          "Wer ist im Betrieb wofür zuständig?",
          "Welcher Preis steht im Angebot?",
          "Wann wird die nächste Bestellung ausgelöst?"
        ],
        answer: 1,
        explanation: "Die Aufbauorganisation beschreibt Zuständigkeiten, Stellen und Weisungsbeziehungen im Betrieb."
      }
    },
    {
      id: "bueroprozess",
      term: "Büroprozess",
      category: "LF 2",
      short: "Ein geplanter Arbeitsablauf im Büro, zum Beispiel Post bearbeiten, Termine koordinieren oder Dokumente ablegen.",
      detail: "Büroprozesse sollen Aufgaben im Büro effizient, nachvollziehbar und zuverlässig machen. Dazu gehören klare Arbeitsschritte, passende Zuständigkeiten, geeignete Software und Regeln zur Ablage, Datensicherheit und Kommunikation.",
      example: "Eine eingehende Kundenanfrage wird erfasst, an die zuständige Person weitergeleitet, beantwortet und anschließend dokumentiert.",
      quiz: {
        question: "Was macht einen guten Büroprozess aus?",
        options: [
          "Er ist zufällig und hängt nur von der Tagesform ab.",
          "Er ist klar strukturiert, nachvollziehbar und effizient.",
          "Er vermeidet jede Dokumentation.",
          "Er darf nicht mit Software unterstützt werden."
        ],
        answer: 1,
        explanation: "Büroprozesse sollen wiederholbare Arbeitsschritte übersichtlich und zuverlässig organisieren."
      }
    },
    {
      id: "zeitmanagement",
      term: "Zeitmanagement",
      category: "LF 2",
      short: "Methoden, mit denen Aufgaben geplant, priorisiert und Störungen im Arbeitsalltag reduziert werden.",
      detail: "Zeitmanagement hilft dabei, Aufgaben realistisch zu planen und Wichtiges von Unwichtigem zu trennen. Typische Hilfen sind To-do-Listen, Terminpläne, Pufferzeiten, ABC-Analyse und Eisenhower-Prinzip.",
      example: "Eine dringende Kundenreklamation wird sofort bearbeitet, während eine interne Ablageaufgabe auf einen ruhigeren Zeitpunkt verschoben wird.",
      quiz: {
        question: "Was ist ein Ziel von Zeitmanagement?",
        options: [
          "Alle Aufgaben gleichzeitig beginnen.",
          "Aufgaben sinnvoll planen und priorisieren.",
          "Termine erst nach Ablauf kontrollieren.",
          "Störungen grundsätzlich ignorieren."
        ],
        answer: 1,
        explanation: "Zeitmanagement sorgt dafür, dass wichtige Aufgaben bewusst geplant und bearbeitet werden."
      }
    },
    {
      id: "datensicherheit",
      term: "Datensicherheit",
      category: "LF 2",
      short: "Schutz von Daten vor Verlust, unbefugtem Zugriff, Veränderung oder Missbrauch.",
      detail: "Datensicherheit betrifft technische und organisatorische Maßnahmen. Dazu gehören sichere Passwörter, Zugriffsrechte, Backups, sorgfältige Ablage, aktuelle Software und ein bewusster Umgang mit vertraulichen Informationen.",
      example: "Eine Personalakte wird nur für berechtigte Personen freigegeben und regelmäßig gesichert.",
      quiz: {
        question: "Welche Maßnahme gehört zur Datensicherheit?",
        options: [
          "Passwörter offen auf den Bildschirm kleben.",
          "Backups erstellen und Zugriffsrechte beachten.",
          "Kundendaten in privaten Chats weiterleiten.",
          "Alle Dateien ohne Ordnerstruktur speichern."
        ],
        answer: 1,
        explanation: "Backups und klare Zugriffsrechte helfen, Daten verfügbar und geschützt zu halten."
      }
    },
    {
      id: "angebot",
      term: "Angebot",
      category: "LF 3 / LF 4",
      short: "Eine verbindliche Erklärung, eine Ware oder Dienstleistung zu bestimmten Bedingungen liefern zu wollen.",
      detail: "Ein Angebot enthält meist Artikel oder Leistung, Menge, Preis, Lieferzeit, Zahlungsbedingungen und Gültigkeit. Wird ein verbindliches Angebot rechtzeitig und unverändert angenommen, kann daraus ein Kaufvertrag entstehen.",
      example: "Ein Lieferant bietet 50 Bürostühle zu je 89 Euro netto mit Lieferung innerhalb von zwei Wochen an.",
      quiz: {
        question: "Was gehört typischerweise in ein kaufmännisches Angebot?",
        options: [
          "Nur der Firmenname des Kunden.",
          "Leistung, Menge, Preis sowie Liefer- und Zahlungsbedingungen.",
          "Ausschließlich ein Werbeslogan.",
          "Nur die private Telefonnummer des Verkäufers."
        ],
        answer: 1,
        explanation: "Ein Angebot muss die wesentlichen Bedingungen enthalten, damit der Kunde entscheiden kann."
      }
    },
    {
      id: "auftragsbestaetigung",
      term: "Auftragsbestätigung",
      category: "LF 3",
      short: "Sie bestätigt dem Kunden, dass ein Auftrag angenommen wurde und zu welchen Bedingungen er ausgeführt wird.",
      detail: "Eine Auftragsbestätigung ist besonders wichtig, wenn vorher kein verbindliches Angebot vorlag oder wenn sich Angaben ändern. Sie schafft Klarheit über Menge, Preis, Liefertermin und weitere Bedingungen.",
      example: "Nach einer telefonischen Bestellung sendet der Betrieb eine Auftragsbestätigung, damit beide Seiten dieselben Daten haben.",
      quiz: {
        question: "Warum wird eine Auftragsbestätigung häufig genutzt?",
        options: [
          "Um die vereinbarten Auftragsdaten nachvollziehbar festzuhalten.",
          "Um eine Rechnung grundsätzlich ungültig zu machen.",
          "Um den Kundenkontakt zu beenden.",
          "Um die Lieferung ohne Dokumente zu ersetzen."
        ],
        answer: 0,
        explanation: "Die Auftragsbestätigung dokumentiert, was bestellt wurde und zu welchen Bedingungen geliefert wird."
      }
    },
    {
      id: "lieferschein",
      term: "Lieferschein",
      category: "LF 3 / LF 4",
      short: "Ein Begleitdokument zur Lieferung, das Art und Menge der gelieferten Waren aufführt.",
      detail: "Der Lieferschein hilft beim Wareneingang und bei der Kontrolle der Lieferung. Er enthält meist Lieferant, Empfänger, Artikelbezeichnungen, Mengen und Lieferdatum. Preise stehen dort häufig nicht im Mittelpunkt.",
      example: "Beim Wareneingang wird der Lieferschein mit der tatsächlich gelieferten Ware verglichen.",
      quiz: {
        question: "Wofür wird ein Lieferschein besonders genutzt?",
        options: [
          "Für die Kontrolle, ob die gelieferte Ware zur Bestellung passt.",
          "Für die Berechnung der Einkommensteuer.",
          "Als Ersatz für alle Lagerkennzahlen.",
          "Als Werbeanzeige für neue Kunden."
        ],
        answer: 0,
        explanation: "Der Lieferschein unterstützt die Prüfung von Art und Menge der gelieferten Waren."
      }
    },
    {
      id: "rechnung",
      term: "Rechnung",
      category: "LF 3 / LF 4",
      short: "Dokument, mit dem eine Lieferung oder Leistung abgerechnet und zur Zahlung gestellt wird.",
      detail: "Eine Rechnung enthält wichtige Angaben wie Verkäufer, Käufer, Rechnungsdatum, Leistung, Menge, Preis, Umsatzsteuer und Zahlungsziel. Vor der Zahlung sollte sie sachlich und rechnerisch geprüft werden.",
      example: "Die Buchhaltung prüft, ob Preis, Menge und Umsatzsteuer mit Bestellung, Lieferschein und Vertrag übereinstimmen.",
      quiz: {
        question: "Was sollte vor dem Bezahlen einer Rechnung geprüft werden?",
        options: [
          "Nur die Schriftart.",
          "Ob Leistung, Menge, Preis und Steuerangaben stimmen.",
          "Ob die Rechnung möglichst bunt ist.",
          "Ob der Kunde einen Werbebrief erhalten hat."
        ],
        answer: 1,
        explanation: "Rechnungen werden sachlich und rechnerisch geprüft, bevor eine Zahlung veranlasst wird."
      }
    },
    {
      id: "beschaffungsprozess",
      term: "Beschaffungsprozess",
      category: "LF 4",
      short: "Ablauf von Bedarfsermittlung, Lieferantensuche, Angebotsvergleich, Bestellung, Wareneingang und Bezahlung.",
      detail: "Der Beschaffungsprozess sorgt dafür, dass benötigte Güter oder Dienstleistungen rechtzeitig, wirtschaftlich und in passender Qualität verfügbar sind. Dabei werden auch Nachhaltigkeit, Verträge und mögliche Störungen berücksichtigt.",
      example: "Ein Betrieb ermittelt den Bedarf an Druckerpapier, vergleicht Angebote, bestellt und prüft nach Lieferung Menge und Qualität.",
      quiz: {
        question: "Welche Reihenfolge passt zum Beschaffungsprozess?",
        options: [
          "Rechnung bezahlen, Bedarf ermitteln, Angebot vergleichen.",
          "Bedarf ermitteln, Angebote vergleichen, bestellen, Wareneingang prüfen.",
          "Lieferung reklamieren, bevor bestellt wurde.",
          "Marketing planen, Bewerbung schreiben, Mahnung senden."
        ],
        answer: 1,
        explanation: "Beschaffung beginnt mit dem Bedarf und endet typischerweise mit Prüfung und Zahlung."
      }
    },
    {
      id: "nutzwertanalyse",
      term: "Nutzwertanalyse",
      category: "LF 4",
      short: "Ein Verfahren, um Angebote nach mehreren qualitativen und quantitativen Kriterien zu vergleichen.",
      detail: "Bei der Nutzwertanalyse werden Kriterien festgelegt, gewichtet und bewertet. So lassen sich Lieferanten nicht nur nach dem Preis, sondern auch nach Qualität, Lieferzeit, Service oder Nachhaltigkeit vergleichen.",
      example: "Ein günstiger Lieferant kann schlechter abschneiden, wenn Qualität und Lieferzuverlässigkeit deutlich schwächer sind.",
      quiz: {
        question: "Wann ist eine Nutzwertanalyse besonders sinnvoll?",
        options: [
          "Wenn nur ein einziges Kriterium zählt.",
          "Wenn mehrere Kriterien gewichtet verglichen werden sollen.",
          "Wenn keine Entscheidung getroffen werden darf.",
          "Wenn Preise grundsätzlich verboten sind."
        ],
        answer: 1,
        explanation: "Die Nutzwertanalyse macht Entscheidungen mit mehreren Kriterien nachvollziehbar."
      }
    },
    {
      id: "kaufvertrag",
      term: "Kaufvertrag",
      category: "LF 4",
      short: "Ein Vertrag, bei dem eine Sache oder Leistung gegen Zahlung eines Kaufpreises übertragen wird.",
      detail: "Ein Kaufvertrag kommt durch zwei übereinstimmende Willenserklärungen zustande: Angebot und Annahme. Daraus entstehen Pflichten, zum Beispiel Lieferung mangelfreier Ware und Zahlung des Kaufpreises.",
      example: "Ein Büro bestellt 20 Monitore und der Lieferant nimmt die Bestellung an. Dann muss geliefert und bezahlt werden.",
      quiz: {
        question: "Wodurch kommt ein Kaufvertrag grundsätzlich zustande?",
        options: [
          "Durch Angebot und Annahme.",
          "Durch eine zufällige Lieferung ohne Einigung.",
          "Durch eine Lagerkarte.",
          "Durch jede interne Notiz."
        ],
        answer: 0,
        explanation: "Ein Kaufvertrag entsteht durch zwei inhaltlich übereinstimmende Willenserklärungen."
      }
    },
    {
      id: "wareneingangskontrolle",
      term: "Wareneingangskontrolle",
      category: "LF 4",
      short: "Prüfung, ob gelieferte Waren vollständig, richtig und äußerlich unbeschädigt angekommen sind.",
      detail: "Bei der Wareneingangskontrolle werden Lieferung, Lieferschein und Bestellung verglichen. Typische Prüfpunkte sind Menge, Artikel, sichtbare Schäden, Termin und gegebenenfalls Qualität. Abweichungen sollten dokumentiert und gemeldet werden.",
      example: "Sind 100 Ordner bestellt, aber nur 90 geliefert worden, wird die Abweichung festgehalten und geklärt.",
      quiz: {
        question: "Was ist bei der Wareneingangskontrolle fachlich sinnvoll?",
        options: [
          "Beschädigungen ignorieren und sofort einlagern.",
          "Lieferung mit Bestellung und Lieferschein vergleichen.",
          "Nur den Preis im Katalog prüfen.",
          "Die Ware ohne Prüfung weiterverkaufen."
        ],
        answer: 1,
        explanation: "Die Wareneingangskontrolle prüft, ob Art, Menge und Zustand der Lieferung stimmen."
      }
    },
    {
      id: "optimale-bestellmenge",
      term: "Optimale Bestellmenge",
      category: "LF 4",
      short: "Die Bestellmenge, bei der Bestellkosten und Lagerhaltungskosten zusammen möglichst niedrig sind.",
      detail: "Je größer eine Bestellung ist, desto seltener muss bestellt werden. Gleichzeitig steigt aber der durchschnittliche Lagerbestand. Die optimale Bestellmenge sucht den wirtschaftlichen Ausgleich zwischen Bestellkosten und Lagerhaltungskosten.",
      example: "Viele kleine Bestellungen senken Lagerbestände, verursachen aber mehr Bestellvorgänge.",
      quiz: {
        question: "Was wird bei der optimalen Bestellmenge minimiert?",
        options: [
          "Nur die Anzahl der Mitarbeitenden.",
          "Die Summe aus Bestellkosten und Lagerhaltungskosten.",
          "Ausschließlich der Verkaufspreis.",
          "Die Zahl der Kundenkontakte."
        ],
        answer: 1,
        explanation: "Die optimale Bestellmenge betrachtet den Zielkonflikt zwischen Bestell- und Lagerkosten."
      }
    },
    {
      id: "lagerkennzahlen",
      term: "Lagerkennzahlen",
      category: "LF 4",
      short: "Zahlen wie Durchschnittsbestand, Umschlagshäufigkeit, Lagerdauer und Lagerzinsen zur Beurteilung eines Lagers.",
      detail: "Lagerkennzahlen machen sichtbar, wie wirtschaftlich Lagerbestände sind. Eine hohe Umschlagshäufigkeit bedeutet meist, dass Waren schneller verkauft oder verbraucht werden und weniger Kapital gebunden ist.",
      example: "Aus Wareneinsatz und durchschnittlichem Lagerbestand lässt sich die Umschlagshäufigkeit berechnen.",
      quiz: {
        question: "Was zeigt eine hohe Umschlagshäufigkeit häufig an?",
        options: [
          "Waren liegen sehr lange unverändert im Lager.",
          "Bestände werden schneller umgesetzt.",
          "Es gibt keine Lagerkosten mehr.",
          "Die Rechnung muss nicht geprüft werden."
        ],
        answer: 1,
        explanation: "Eine hohe Umschlagshäufigkeit weist auf einen schnelleren Warenumschlag hin."
      }
    },
    {
      id: "skonto",
      term: "Skonto",
      category: "LF 4 / LF 9",
      short: "Ein Preisnachlass, wenn eine Rechnung innerhalb einer kurzen Frist bezahlt wird.",
      detail: "Skonto soll schnelle Zahlungen fördern. Der Käufer spart einen kleinen Prozentsatz, wenn er innerhalb der Skontofrist zahlt. Für den Betrieb ist wichtig zu prüfen, ob die Skontonutzung wirtschaftlich und liquiditätsmäßig möglich ist.",
      example: "Zahlungsbedingung: 2 Prozent Skonto bei Zahlung innerhalb von 10 Tagen, sonst 30 Tage netto.",
      quiz: {
        question: "Was bedeutet Skonto?",
        options: [
          "Ein Zuschlag für späte Zahlung.",
          "Ein Nachlass für schnelle Zahlung innerhalb der Skontofrist.",
          "Ein Rabatt nur für Werbung.",
          "Eine Lagerkennzahl."
        ],
        answer: 1,
        explanation: "Skonto ist ein Zahlungsnachlass, wenn fristgerecht schnell bezahlt wird."
      }
    },
    {
      id: "marketing-mix",
      term: "Marketing-Mix",
      category: "LF 5",
      short: "Die abgestimmte Kombination von Marketinginstrumenten, etwa Produkt-, Preis-, Kommunikations- und Vertriebspolitik.",
      detail: "Der Marketing-Mix hilft Unternehmen, Kunden gezielt anzusprechen und ein Angebot erfolgreich am Markt zu platzieren. Im Büromanagement spielen besonders Preis- und Kommunikationspolitik sowie Kundenbindung eine wichtige Rolle.",
      example: "Ein Betrieb kombiniert einen Einführungspreis mit Social-Media-Werbung und persönlicher Beratung.",
      quiz: {
        question: "Was beschreibt der Marketing-Mix?",
        options: [
          "Die Mischung verschiedener Marketinginstrumente.",
          "Nur den Lagerort der Waren.",
          "Ausschließlich den Arbeitsvertrag.",
          "Eine gesetzliche Pausenregelung."
        ],
        answer: 0,
        explanation: "Der Marketing-Mix bündelt mehrere absatzpolitische Instrumente zu einem abgestimmten Konzept."
      }
    },
    {
      id: "kundenbindung",
      term: "Kundenbindung",
      category: "LF 5 / LF 7",
      short: "Maßnahmen, die dafür sorgen, dass Kunden zufrieden bleiben und wieder beim Unternehmen kaufen.",
      detail: "Kundenbindung entsteht durch verlässliche Leistung, gute Kommunikation, Service, faire Problemlösungen und passende Angebote. Beschwerden können eine Chance sein, Vertrauen zurückzugewinnen.",
      example: "Eine Reklamation wird schnell, freundlich und lösungsorientiert bearbeitet, damit der Kunde dem Betrieb treu bleibt.",
      quiz: {
        question: "Welche Handlung unterstützt Kundenbindung am ehesten?",
        options: [
          "Beschwerden grundsätzlich ignorieren.",
          "Kundenanliegen zuverlässig und wertschätzend bearbeiten.",
          "Liefertermine absichtlich offenlassen.",
          "Nach dem Kauf jede Kommunikation abbrechen."
        ],
        answer: 1,
        explanation: "Zuverlässiger Service und wertschätzende Kommunikation stärken die Kundenbeziehung."
      }
    },
    {
      id: "personalbedarf",
      term: "Personalbedarf",
      category: "LF 8",
      short: "Die Menge und Qualifikation an Mitarbeitenden, die ein Betrieb für seine Aufgaben benötigt.",
      detail: "Personalbedarf kann quantitativ und qualitativ betrachtet werden. Quantitativ geht es um die Anzahl der Personen, qualitativ um Kompetenzen, Erfahrungen und Anforderungen an eine Stelle.",
      example: "Wenn viele neue Aufträge eingehen, braucht der Betrieb vielleicht mehr Mitarbeitende im Kundenservice mit guten Kommunikationskenntnissen.",
      quiz: {
        question: "Was bedeutet qualitativer Personalbedarf?",
        options: [
          "Die benötigten Fähigkeiten und Qualifikationen.",
          "Ausschließlich die Zahl der Schreibtische.",
          "Nur die Höhe des Lagerbestands.",
          "Die Anzahl der Rechnungen pro Monat."
        ],
        answer: 0,
        explanation: "Qualitativer Personalbedarf beschreibt, welche Kompetenzen für eine Aufgabe benötigt werden."
      }
    },
    {
      id: "liquiditaet",
      term: "Liquidität",
      category: "LF 9",
      short: "Die Fähigkeit eines Unternehmens, fällige Zahlungen rechtzeitig leisten zu können.",
      detail: "Liquidität ist überlebenswichtig: Ein Unternehmen kann nur dann handlungsfähig bleiben, wenn es Rechnungen, Löhne, Mieten und Kredite fristgerecht bezahlen kann. Dazu müssen Einzahlungen und Auszahlungen geplant und überwacht werden.",
      example: "Ein Betrieb mahnt offene Kundenrechnungen, um genügend Geld für eigene Lieferantenrechnungen zu haben.",
      quiz: {
        question: "Wann ist ein Unternehmen liquide?",
        options: [
          "Wenn es alle Zahlungen rechtzeitig leisten kann.",
          "Wenn es keine Kunden hat.",
          "Wenn es nur große Lagerbestände besitzt.",
          "Wenn es keine Rechnungen schreibt."
        ],
        answer: 0,
        explanation: "Liquidität bedeutet Zahlungsfähigkeit zum jeweiligen Fälligkeitstermin."
      }
    },
    {
      id: "finanzierung",
      term: "Finanzierung",
      category: "LF 9",
      short: "Beschaffung von Kapital, um Investitionen oder laufende Zahlungen zu ermöglichen.",
      detail: "Finanzierung kann zum Beispiel durch Darlehen, Kontokorrentkredit, Lieferantenkredit, Leasing, Factoring, Beteiligung oder Selbstfinanzierung erfolgen. Die passende Form hängt von Kosten, Risiko, Laufzeit und Zweck ab.",
      example: "Für neue Büroausstattung prüft ein Betrieb, ob Leasing oder ein Bankdarlehen wirtschaftlicher ist.",
      quiz: {
        question: "Welche Aussage zur Finanzierung stimmt?",
        options: [
          "Es gibt nur eine einzige Finanzierungsform.",
          "Finanzierungsformen unterscheiden sich etwa nach Kosten, Laufzeit und Risiko.",
          "Finanzierung betrifft nie Investitionen.",
          "Skonto ist dasselbe wie ein langfristiges Darlehen."
        ],
        answer: 1,
        explanation: "Finanzierungsentscheidungen müssen mehrere wirtschaftliche und rechtliche Kriterien berücksichtigen."
      }
    },
    {
      id: "deckungsbeitrag",
      term: "Deckungsbeitrag",
      category: "LF 10",
      short: "Betrag, der nach Abzug der variablen Kosten vom Verkaufserlös zur Deckung der Fixkosten bleibt.",
      detail: "Der Deckungsbeitrag zeigt, welchen Beitrag ein Produkt oder Auftrag zur Deckung fixer Kosten und zum Gewinn leistet. Er ist wichtig für Entscheidungen über Zusatzaufträge, Preisuntergrenzen und Gewinnschwelle.",
      example: "Verkaufspreis 50 Euro, variable Kosten 30 Euro: Der Deckungsbeitrag beträgt 20 Euro.",
      quiz: {
        question: "Wie berechnet man den Deckungsbeitrag pro Stück?",
        options: [
          "Fixkosten plus Umsatzsteuer.",
          "Verkaufserlös minus variable Kosten.",
          "Lagerbestand geteilt durch Wareneinsatz.",
          "Rechnungsbetrag plus Skonto."
        ],
        answer: 1,
        explanation: "Der Deckungsbeitrag ergibt sich aus Erlös abzüglich variabler Kosten."
      }
    },
    {
      id: "geschaeftsprozess",
      term: "Geschäftsprozess",
      category: "LF 11",
      short: "Eine zusammenhängende Folge von Tätigkeiten, die ein betriebliches Ergebnis erzeugt.",
      detail: "Geschäftsprozesse beschreiben, wie Arbeit im Betrieb abläuft. Man unterscheidet häufig Kernprozesse, die direkt Wert für Kunden schaffen, und Unterstützungsprozesse, die diese Arbeit ermöglichen.",
      example: "Von der Kundenanfrage über Angebot, Auftrag, Lieferung und Rechnung läuft ein typischer Auftragsprozess.",
      quiz: {
        question: "Was ist ein Geschäftsprozess?",
        options: [
          "Eine zusammenhängende Folge betrieblicher Tätigkeiten.",
          "Nur ein einzelner Preis auf einer Rechnung.",
          "Ein privater Kalendertermin.",
          "Eine zufällige Sammlung alter Dateien."
        ],
        answer: 0,
        explanation: "Geschäftsprozesse verbinden mehrere Arbeitsschritte zu einem betrieblichen Ablauf."
      }
    },
    {
      id: "reisekostenabrechnung",
      term: "Reisekostenabrechnung",
      category: "LF 12",
      short: "Abrechnung der Kosten, die bei einer Geschäftsreise entstanden sind.",
      detail: "Eine Reisekostenabrechnung fasst zum Beispiel Fahrtkosten, Übernachtungskosten, Verpflegungsmehraufwand und sonstige Belege zusammen. Sie muss nachvollziehbar dokumentiert und nach betrieblichen Regeln geprüft werden.",
      example: "Nach einer Messe werden Bahnticket, Hotelrechnung und Taxi-Beleg gesammelt und abgerechnet.",
      quiz: {
        question: "Was gehört typischerweise zu einer Reisekostenabrechnung?",
        options: [
          "Belege für Fahrt, Unterkunft und weitere Reisekosten.",
          "Die Lagerkarte eines Artikels.",
          "Nur ein Organigramm.",
          "Ausschließlich eine Werbeanzeige."
        ],
        answer: 0,
        explanation: "Reisekosten müssen mit passenden Belegen und Angaben nachvollziehbar abgerechnet werden."
      }
    },
    {
      id: "projektstrukturplan",
      term: "Projektstrukturplan",
      category: "LF 13",
      short: "Eine Übersicht, die ein Projekt in Teilaufgaben und Arbeitspakete gliedert.",
      detail: "Der Projektstrukturplan macht sichtbar, welche Aufgaben im Projekt erledigt werden müssen. Er hilft bei Terminplanung, Verantwortlichkeiten, Ressourcenplanung und Kontrolle des Projektfortschritts.",
      example: "Für eine Schulveranstaltung werden Arbeitspakete wie Raum, Einladung, Technik, Catering und Auswertung festgelegt.",
      quiz: {
        question: "Wozu dient ein Projektstrukturplan?",
        options: [
          "Er gliedert ein Projekt in überschaubare Aufgabenpakete.",
          "Er ersetzt jede Kommunikation im Team.",
          "Er berechnet automatisch den Skontoabzug.",
          "Er ist nur für die Wareneingangskontrolle gedacht."
        ],
        answer: 0,
        explanation: "Der Projektstrukturplan zerlegt das Projekt in planbare und kontrollierbare Arbeitspakete."
      }
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
