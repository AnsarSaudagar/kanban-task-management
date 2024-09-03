/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/{app.component.html, app.component.ts}",
    "./src/app/header/{header.component.html, header.component.ts}",
    "./src/app/modal/{modal.component.html, modal.component.ts}",
    "./src/app/modal/modal-subtask/{modal-subtask.component.html, modal-subtask.component.ts}",
    "./src/app/modal/status-dropdown/{status-dropdown.component.html, status-dropdown.component.ts}",
    "./src/app/side-bar/{side-bar.component.html, side-bar.component.ts}",
    "./src/app/side-bar/side-bar-link/{side-bar-link.component.html, side-bar-link.component.ts}",
    "./src/app/main-section/{main-section.component.html, main-section.component.ts}",
    "./src/app/main-section/content-column/{content-column.component.html, content-column.component.ts}",
    "./src/app/main-section/content-column/task-card/{task-card.component.html, task-card.component.ts}",
    "./src/app/main-section/content-column/add-task-modal/{add-task-modal.component.html, add-task-modal.component.ts}",
    "./src/app/main-section/content-column/add-task-modal/add-task-modal-subtask/{add-task-modal-subtask.component.html, add-task-modal-subtask.component.ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

