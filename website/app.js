(function () {
  "use strict";

  const STORAGE_KEY = "bm-lernportal-progress-v1";
  const POINTS_PER_LEVEL = 200;
  const content = window.BM_CONTENT;
  const app = document.getElementById("app");
  const welcomeModal = document.getElementById("welcome-modal");
  const settingsModal = document.getElementById("settings-modal");
  const toastRegion = document.getElementById("toast-region");

  const defaultState = {
    name: "",
    xp: 0,
    answered: {},
    mistakes: [],
    unlockedBadges: [],
    streak: 0,
    lastStudyDate: "",
    sprints: 0
  };

  let state = loadState();
  let currentView = "dashboard";
  let session = null;

  function normalizeState(value) {
    const candidate = value && typeof value === "object" ? value : {};
    return {
      ...defaultState,
      ...candidate,
      name: typeof candidate.name === "string" ? candidate.name.slice(0, 24) : "",
      xp: Number.isFinite(Number(candidate.xp)) ? Math.max(0, Number(candidate.xp)) : 0,
      answered:
        candidate.answered && typeof candidate.answered === "object" && !Array.isArray(candidate.answered)
          ? candidate.answered
          : {},
      mistakes: Array.isArray(candidate.mistakes) ? candidate.mistakes.filter(questionById) : [],
      unlockedBadges: Array.isArray(candidate.unlockedBadges)
        ? candidate.unlockedBadges.filter((id) => content.badges.some((badge) => badge.id === id))
        : [],
      streak: Number.isFinite(Number(candidate.streak)) ? Math.max(0, Number(candidate.streak)) : 0,
      lastStudyDate: typeof candidate.lastStudyDate === "string" ? candidate.lastStudyDate : "",
      sprints: Number.isFinite(Number(candidate.sprints)) ? Math.max(0, Number(candidate.sprints)) : 0
    };
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return normalizeState(saved);
    } catch (error) {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateHeader();
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatNumber(value, maximumFractionDigits = 2) {
    return new Intl.NumberFormat("de-DE", { maximumFractionDigits }).format(value);
  }

  function levelInfo() {
    const level = Math.floor(state.xp / POINTS_PER_LEVEL) + 1;
    const current = state.xp % POINTS_PER_LEVEL;
    return { level, current, target: POINTS_PER_LEVEL };
  }

  function questionById(id) {
    return content.questions.find((question) => question.id === id);
  }

  function moduleById(id) {
    return content.modules.find((module) => module.id === id);
  }

  function moduleProgress(moduleId) {
    const questions = content.questions.filter((question) => question.module === moduleId);
    const solved = questions.filter((question) => state.answered[question.id]?.correct).length;
    return {
      solved,
      total: questions.length,
      percent: questions.length ? Math.round((solved / questions.length) * 100) : 0
    };
  }

  function totalProgress() {
    const solved = Object.values(state.answered).filter((entry) => entry.correct).length;
    return {
      solved,
      total: content.questions.length,
      percent: Math.round((solved / content.questions.length) * 100)
    };
  }

  function completedModules() {
    return content.modules.filter((module) => moduleProgress(module.id).percent === 100).length;
  }

  function updateHeader() {
    const info = levelInfo();
    const name = state.name || "Azubi";
    document.getElementById("header-name").textContent = name;
    document.getElementById("header-avatar").textContent = name.slice(0, 1).toUpperCase();
    document.getElementById("header-xp").textContent = formatNumber(state.xp, 0);
    document.getElementById("header-level").textContent = info.level;
  }

  function setActiveNavigation(view) {
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.view === view);
    });
  }

  function navigate(view, options = {}) {
    currentView = view;
    session = null;
    setActiveNavigation(view);

    if (view === "dashboard") renderDashboard();
    if (view === "modules") renderModules();
    if (view === "mistakes") renderMistakes();
    if (view === "achievements") renderAchievements();
    if (view === "module") renderModule(options.moduleId);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderDashboard() {
    const info = levelInfo();
    const progress = totalProgress();
    const nextModule =
      content.modules.find((module) => moduleProgress(module.id).percent < 100) || content.modules[0];

    app.innerHTML = `
      <section class="hero-section page-shell">
        <div class="hero-copy">
          <p class="eyebrow">Willkommen zurück, ${escapeHtml(state.name || "Azubi")}</p>
          <h1>Heute wird aus<br><em>„fast verstanden“</em><br>ein sicherer Punkt.</h1>
          <p class="hero-text">
            Trainiere in kurzen Einheiten, sammle XP und nimm deine Fehler
            direkt in die nächste Runde mit.
          </p>
          <div class="hero-actions">
            <button class="primary-button" data-action="continue" data-module="${nextModule.id}">
              Weiterlernen
            </button>
            <button class="secondary-button" data-action="sprint">Prüfungs-Sprint starten</button>
          </div>
        </div>
        <div class="hero-dashboard" aria-label="Dein Lernfortschritt">
          <div class="level-orbit">
            <div class="level-ring" style="--progress: ${Math.round((info.current / info.target) * 360)}deg">
              <span>Level</span>
              <strong>${info.level}</strong>
            </div>
            <span class="orbit-dot orbit-one"></span>
            <span class="orbit-dot orbit-two"></span>
          </div>
          <div class="hero-stat-row">
            <article>
              <span>Gesamt</span>
              <strong>${progress.percent}%</strong>
              <small>${progress.solved} von ${progress.total} Aufgaben</small>
            </article>
            <article>
              <span>Lernserie</span>
              <strong>${state.streak}</strong>
              <small>${state.streak === 1 ? "Tag" : "Tage"} in Folge</small>
            </article>
          </div>
        </div>
      </section>

      <section class="page-shell section-block">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Deine Lernfelder</p>
            <h2>Such dir deine nächste Mission aus.</h2>
          </div>
          <button class="text-link" data-action="all-modules">Alle Lernfelder ansehen →</button>
        </div>
        <div class="module-grid compact">
          ${content.modules.slice(0, 4).map(moduleCard).join("")}
        </div>
      </section>

      <section class="page-shell focus-grid section-block">
        <article class="focus-card dark-card">
          <div>
            <p class="eyebrow light">Prüfungsmodus</p>
            <h2>Zehn Fragen.<br>Ein klarer Stand.</h2>
            <p>Ein zufälliger Mix aus allen Lernfeldern zeigt dir, wo du schon sicher bist.</p>
          </div>
          <button class="light-button" data-action="sprint">Sprint starten</button>
        </article>
        <article class="focus-card mistake-card">
          <div class="focus-mark" aria-hidden="true">↺</div>
          <div>
            <p class="eyebrow">Fehler sind Daten</p>
            <h2>${state.mistakes.length} ${state.mistakes.length === 1 ? "Aufgabe wartet" : "Aufgaben warten"}.</h2>
            <p>Trainiere genau die Aufgaben, die noch nicht sitzen.</p>
          </div>
          <button class="secondary-button" data-action="mistakes">Fehlertraining öffnen</button>
        </article>
      </section>
    `;

    bindAppActions();
  }

  function moduleCard(module) {
    const progress = moduleProgress(module.id);
    return `
      <article class="module-card ${module.color}">
        <div class="module-topline">
          <span class="module-code">${module.code}</span>
          <span class="module-mark" aria-hidden="true">${module.mark}</span>
        </div>
        <h3>${module.title}</h3>
        <p>${module.short}</p>
        <div class="module-progress">
          <div class="progress-track"><span style="width: ${progress.percent}%"></span></div>
          <small>${progress.solved}/${progress.total} gelöst</small>
        </div>
        <button class="card-link" data-action="open-module" data-module="${module.id}">
          Lernfeld öffnen <span aria-hidden="true">→</span>
        </button>
      </article>
    `;
  }

  function renderModules() {
    const progress = totalProgress();
    app.innerHTML = `
      <section class="page-shell page-intro">
        <p class="eyebrow">Lernfelder</p>
        <h1>Fünf Wege zur<br>Prüfungssicherheit.</h1>
        <p>
          Starte mit dem Thema, das gerade im Unterricht läuft, oder schließe
          gezielt eine Lücke. Bereits gelöste Aufgaben bleiben markiert.
        </p>
        <div class="overall-progress">
          <div>
            <strong>${progress.percent}%</strong>
            <span>Gesamtfortschritt</span>
          </div>
          <div class="progress-track large"><span style="width: ${progress.percent}%"></span></div>
        </div>
      </section>
      <section class="page-shell section-block">
        <div class="module-grid">
          ${content.modules.map(moduleCard).join("")}
        </div>
      </section>
    `;
    bindAppActions();
  }

  function renderModule(moduleId) {
    const module = moduleById(moduleId);
    if (!module) {
      navigate("modules");
      return;
    }
    const progress = moduleProgress(module.id);
    const questions = content.questions.filter((question) => question.module === module.id);

    app.innerHTML = `
      <section class="module-hero ${module.color}">
        <div class="page-shell module-hero-inner">
          <button class="back-button" data-action="all-modules">← Alle Lernfelder</button>
          <div class="module-hero-grid">
            <div>
              <p class="eyebrow">${module.code}</p>
              <h1>${module.title}</h1>
              <p>${module.short}</p>
              <div class="hero-actions">
                <button class="primary-button" data-action="practice-module" data-module="${module.id}">
                  ${progress.solved ? "Weiter üben" : "Training starten"}
                </button>
                <span class="module-status">${progress.solved}/${progress.total} Aufgaben gelöst</span>
              </div>
            </div>
            <div class="module-hero-mark" aria-hidden="true">${module.mark}</div>
          </div>
        </div>
      </section>

      <section class="page-shell lesson-layout section-block">
        <div>
          <p class="eyebrow">Kurz erklärt</p>
          <h2>Das musst du verstanden haben.</h2>
        </div>
        <div class="lesson-list">
          ${module.lessons.map((lesson, index) => `
            <article class="lesson-card">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>${lesson.title}</h3>
                <p>${lesson.text}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="page-shell takeaway-card section-block">
        <div>
          <p class="eyebrow light">Merksätze</p>
          <h2>Für den Kopf und den Rand deiner Lösung.</h2>
        </div>
        <ul>
          ${module.takeaways.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="page-shell practice-callout section-block">
        <div>
          <p class="eyebrow">Jetzt anwenden</p>
          <h2>${questions.length} Aufgaben warten auf dich.</h2>
          <p>Für jede erstmals richtig gelöste Aufgabe erhältst du 25 XP.</p>
        </div>
        <button class="primary-button" data-action="practice-module" data-module="${module.id}">
          Training starten
        </button>
      </section>
    `;
    bindAppActions();
  }

  function startPractice(questionIds, title, mode) {
    const ids = questionIds.length ? [...questionIds] : content.questions.map((question) => question.id);
    session = {
      ids,
      title,
      mode,
      index: 0,
      correct: 0,
      attempts: 0,
      answeredCurrent: false,
      startedAt: Date.now()
    };
    renderPractice();
  }

  function renderPractice() {
    if (!session) return;
    const question = questionById(session.ids[session.index]);
    const module = moduleById(question.module);
    const position = session.index + 1;

    app.innerHTML = `
      <section class="practice-shell page-shell">
        <header class="practice-header">
          <button class="back-button" data-action="leave-practice">← Training verlassen</button>
          <div>
            <span>${session.title}</span>
            <strong>${position} / ${session.ids.length}</strong>
          </div>
        </header>
        <div class="progress-track practice-progress">
          <span style="width: ${Math.round(((position - 1) / session.ids.length) * 100)}%"></span>
        </div>

        <article class="question-card">
          <div class="question-meta">
            <span class="question-module ${module.color}">${module.code}</span>
            <span>${state.answered[question.id]?.correct ? "Schon einmal gelöst" : "Bis zu 25 XP"}</span>
          </div>
          <h1>${question.prompt}</h1>
          <form id="answer-form">
            ${renderAnswerInput(question)}
            <button class="primary-button answer-button" type="submit">Antwort prüfen</button>
          </form>
          <div id="feedback" class="feedback" hidden></div>
        </article>
      </section>
    `;

    document.querySelector('[data-action="leave-practice"]').addEventListener("click", () => navigate("dashboard"));
    document.getElementById("answer-form").addEventListener("submit", checkAnswer);
  }

  function renderAnswerInput(question) {
    if (question.type === "number") {
      return `
        <label class="number-answer">
          <span>Deine Antwort</span>
          <span class="number-input-wrap">
            <input
              id="number-answer"
              name="answer"
              type="text"
              inputmode="decimal"
              autocomplete="off"
              required
              aria-describedby="number-hint"
            >
            <strong>${question.suffix || ""}</strong>
          </span>
          <small id="number-hint">Tausenderpunkte sind optional, Dezimaltrennzeichen darf Komma oder Punkt sein.</small>
        </label>
      `;
    }

    return `
      <fieldset class="choice-list">
        <legend class="sr-only">Wähle eine Antwort</legend>
        ${question.options.map((option, index) => `
          <label class="choice-option">
            <input type="radio" name="answer" value="${index}" required>
            <span class="choice-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
          </label>
        `).join("")}
      </fieldset>
    `;
  }

  function parseGermanNumber(value) {
    const normalized = value.trim().replace(/\s/g, "").replace(/\.(?=\d{3}(?:\D|$))/g, "").replace(",", ".");
    return Number(normalized);
  }

  function checkAnswer(event) {
    event.preventDefault();
    if (!session || session.answeredCurrent) return;

    const question = questionById(session.ids[session.index]);
    const form = new FormData(event.currentTarget);
    const rawAnswer = form.get("answer");
    let isCorrect = false;

    if (question.type === "number") {
      const value = parseGermanNumber(String(rawAnswer));
      isCorrect = Number.isFinite(value) && Math.abs(value - question.answer) <= (question.tolerance || 0);
    } else {
      isCorrect = Number(rawAnswer) === question.answer;
    }

    session.attempts += 1;
    const feedback = document.getElementById("feedback");
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;

    if (isCorrect) {
      session.answeredCurrent = true;
      session.correct += 1;
      const firstCorrect = !state.answered[question.id]?.correct;
      const gained = firstCorrect ? 25 : 0;
      state.answered[question.id] = {
        correct: true,
        solvedAt: new Date().toISOString()
      };
      state.mistakes = state.mistakes.filter((id) => id !== question.id);
      if (gained) {
        state.xp += gained;
        updateStreak();
      }
      checkBadges();
      saveState();

      feedback.innerHTML = `
        <div>
          <strong>${firstCorrect ? `Richtig! +${gained} XP` : "Richtig gelöst!"}</strong>
          <p>${question.explanation}</p>
        </div>
        <button class="primary-button" id="next-question" type="button">
          ${session.index === session.ids.length - 1 ? "Auswertung ansehen" : "Nächste Aufgabe"}
        </button>
      `;
      document.getElementById("next-question").addEventListener("click", nextQuestion);
    } else {
      if (!state.mistakes.includes(question.id)) state.mistakes.push(question.id);
      saveState();
      feedback.innerHTML = `
        <div>
          <strong>Noch nicht ganz.</strong>
          <p>Prüfe Grundwert, Rechenweg und Einheit. Du kannst direkt noch einmal antworten.</p>
        </div>
      `;
      showToast("Die Aufgabe wurde deinem Fehlertraining hinzugefügt.");
    }
  }

  function nextQuestion() {
    if (!session) return;
    if (session.index >= session.ids.length - 1) {
      finishSession();
      return;
    }
    session.index += 1;
    session.attempts = 0;
    session.answeredCurrent = false;
    renderPractice();
  }

  function finishSession() {
    if (!session) return;
    if (session.mode === "sprint") {
      state.sprints += 1;
      checkBadges();
      saveState();
    }
    const result = session.correct;
    const total = session.ids.length;
    const percent = Math.round((result / total) * 100);
    const message =
      percent >= 90 ? "Sehr sicher." :
      percent >= 70 ? "Gute Grundlage." :
      percent >= 50 ? "Du bist auf dem Weg." :
      "Jetzt kennst du deine nächsten Themen.";

    app.innerHTML = `
      <section class="result-section page-shell">
        <div class="result-score" style="--result: ${percent * 3.6}deg">
          <span>${percent}%</span>
        </div>
        <p class="eyebrow">Training abgeschlossen</p>
        <h1>${message}</h1>
        <p>Du hast ${result} von ${total} Aufgaben in dieser Runde gelöst.</p>
        <div class="result-actions">
          <button class="primary-button" data-action="mistakes">Fehler weitertrainieren</button>
          <button class="secondary-button" data-action="dashboard">Zur Startseite</button>
        </div>
      </section>
    `;
    session = null;
    bindAppActions();
  }

  function shuffled(array) {
    const copy = [...array];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const random = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[random]] = [copy[random], copy[index]];
    }
    return copy;
  }

  function startSprint() {
    const ids = shuffled(content.questions.map((question) => question.id)).slice(0, 10);
    startPractice(ids, "Prüfungs-Sprint", "sprint");
  }

  function renderMistakes() {
    const questions = state.mistakes.map(questionById).filter(Boolean);
    app.innerHTML = `
      <section class="page-shell page-intro">
        <p class="eyebrow">Fehlertraining</p>
        <h1>Hier wird aus<br>„falsch“ ein <em>„kann ich“</em>.</h1>
        <p>
          Falsch beantwortete Aufgaben landen automatisch hier. Sobald du sie
          richtig löst, verschwinden sie aus der Liste.
        </p>
      </section>
      <section class="page-shell section-block">
        ${questions.length ? `
          <div class="mistake-overview">
            <div>
              <strong>${questions.length}</strong>
              <span>offene ${questions.length === 1 ? "Aufgabe" : "Aufgaben"}</span>
            </div>
            <button class="primary-button" data-action="practice-mistakes">Alle trainieren</button>
          </div>
          <div class="mistake-list">
            ${questions.map((question) => {
              const module = moduleById(question.module);
              return `
                <article>
                  <span class="question-module ${module.color}">${module.code}</span>
                  <div>
                    <h2>${question.prompt}</h2>
                    <p>${module.title}</p>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        ` : `
          <div class="empty-state">
            <span aria-hidden="true">✓</span>
            <h2>Deine Fehlerliste ist leer.</h2>
            <p>Stark. Starte ein neues Lernfeld oder einen Prüfungs-Sprint.</p>
            <button class="primary-button" data-action="all-modules">Zu den Lernfeldern</button>
          </div>
        `}
      </section>
    `;
    bindAppActions();
  }

  function renderAchievements() {
    checkBadges(false);
    const info = levelInfo();
    app.innerHTML = `
      <section class="page-shell page-intro">
        <p class="eyebrow">Erfolge</p>
        <h1>Fortschritt, den<br>du sehen kannst.</h1>
        <p>XP gibt es nur beim ersten richtigen Lösen einer Aufgabe. Wiederholen lohnt sich trotzdem.</p>
      </section>
      <section class="page-shell achievement-summary section-block">
        <article>
          <span>Level</span>
          <strong>${info.level}</strong>
          <small>${info.current} / ${info.target} XP bis zum nächsten Level</small>
          <div class="progress-track"><span style="width: ${Math.round((info.current / info.target) * 100)}%"></span></div>
        </article>
        <article>
          <span>Gesamt-XP</span>
          <strong>${formatNumber(state.xp, 0)}</strong>
          <small>durch erstmals gelöste Aufgaben</small>
        </article>
        <article>
          <span>Lernfelder</span>
          <strong>${completedModules()} / ${content.modules.length}</strong>
          <small>vollständig abgeschlossen</small>
        </article>
      </section>
      <section class="page-shell section-block">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Abzeichen</p>
            <h2>Deine Meilensteine.</h2>
          </div>
        </div>
        <div class="badge-grid">
          ${content.badges.map((badge, index) => {
            const unlocked = state.unlockedBadges.includes(badge.id);
            return `
              <article class="badge-card ${unlocked ? "unlocked" : "locked"}">
                <span class="badge-symbol" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>${unlocked ? "Freigeschaltet" : "Noch gesperrt"}</small>
                  <h3>${badge.title}</h3>
                  <p>${badge.description}</p>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function badgeConditionMet(badge) {
    if (badge.condition === "xp") return state.xp >= badge.value;
    if (badge.condition === "correct") return totalProgress().solved >= badge.value;
    if (badge.condition === "modules") return completedModules() >= badge.value;
    if (badge.condition === "streak") return state.streak >= badge.value;
    if (badge.condition === "sprints") return state.sprints >= badge.value;
    return false;
  }

  function checkBadges(showNotifications = true) {
    content.badges.forEach((badge) => {
      if (!state.unlockedBadges.includes(badge.id) && badgeConditionMet(badge)) {
        state.unlockedBadges.push(badge.id);
        if (showNotifications) showToast(`Abzeichen freigeschaltet: ${badge.title}`);
      }
    });
  }

  function updateStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (state.lastStudyDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = yesterday.toISOString().slice(0, 10);
    state.streak = state.lastStudyDate === yesterdayKey ? state.streak + 1 : 1;
    state.lastStudyDate = today;
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    toastRegion.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3600);
  }

  function bindAppActions() {
    app.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "continue" || action === "open-module") navigate("module", { moduleId: button.dataset.module });
        if (action === "all-modules") navigate("modules");
        if (action === "sprint") startSprint();
        if (action === "mistakes") navigate("mistakes");
        if (action === "dashboard") navigate("dashboard");
        if (action === "practice-module") {
          const module = moduleById(button.dataset.module);
          const ids = content.questions
            .filter((question) => question.module === module.id)
            .map((question) => question.id);
          startPractice(ids, module.title, "module");
        }
        if (action === "practice-mistakes" && state.mistakes.length) {
          startPractice(state.mistakes, "Fehlertraining", "mistakes");
        }
      });
    });
  }

  function openSettings() {
    document.getElementById("settings-name").value = state.name;
    document.getElementById("settings-stats").innerHTML = `
      <div><strong>${state.xp}</strong><span>XP</span></div>
      <div><strong>${totalProgress().solved}</strong><span>gelöst</span></div>
      <div><strong>${state.unlockedBadges.length}</strong><span>Abzeichen</span></div>
    `;
    settingsModal.hidden = false;
    document.getElementById("settings-name").focus();
  }

  function closeSettings() {
    settingsModal.hidden = true;
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `bm-lernstand-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function importProgress(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      try {
        const imported = JSON.parse(reader.result);
        state = normalizeState(imported);
        saveState();
        closeSettings();
        navigate("dashboard");
        showToast("Lernstand wurde importiert.");
      } catch (error) {
        showToast("Die Datei konnte nicht gelesen werden.");
      }
    });
    reader.readAsText(file);
    event.target.value = "";
  }

  function resetProgress() {
    const confirmed = window.confirm("Möchtest du deinen gesamten Lernstand auf diesem Gerät löschen?");
    if (!confirmed) return;
    state = { ...defaultState, name: state.name };
    saveState();
    closeSettings();
    navigate("dashboard");
    showToast("Dein Lernstand wurde zurückgesetzt.");
  }

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => navigate(button.dataset.view));
  });

  document.getElementById("profile-button").addEventListener("click", openSettings);
  document.getElementById("settings-close").addEventListener("click", closeSettings);
  document.getElementById("save-name").addEventListener("click", () => {
    const value = document.getElementById("settings-name").value.trim();
    state.name = value || "Azubi";
    saveState();
    closeSettings();
    renderDashboard();
    showToast("Name gespeichert.");
  });
  document.getElementById("export-progress").addEventListener("click", exportProgress);
  document.getElementById("import-progress").addEventListener("change", importProgress);
  document.getElementById("reset-progress").addEventListener("click", resetProgress);

  document.getElementById("start-button").addEventListener("click", () => {
    const value = document.getElementById("student-name").value.trim();
    state.name = value || "Azubi";
    saveState();
    welcomeModal.hidden = true;
    renderDashboard();
  });

  document.getElementById("guest-button").addEventListener("click", () => {
    state.name = "Azubi";
    saveState();
    welcomeModal.hidden = true;
    renderDashboard();
  });

  document.getElementById("student-name").addEventListener("keydown", (event) => {
    if (event.key === "Enter") document.getElementById("start-button").click();
  });

  settingsModal.addEventListener("click", (event) => {
    if (event.target === settingsModal) closeSettings();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !settingsModal.hidden) closeSettings();
  });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    });
  }

  updateHeader();
  renderDashboard();
  if (!state.name) {
    welcomeModal.hidden = false;
    document.getElementById("student-name").focus();
  }
})();
