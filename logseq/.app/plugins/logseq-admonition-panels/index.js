function main() {
    logseq.Editor.registerSlashCommand(
        'Admon - Info',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-info Information')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Tips',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-tips Tips')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Warning',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-warning Warning!')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Failure',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-failure Failure!')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Bug',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-bug Bug')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Quote',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-quote Quote')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - DANGER',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-danger DANGER')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Success',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-success Success')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - Question',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-question Question')
        },
    )
    logseq.Editor.registerSlashCommand(
        'Admon - List',
        async () => {
          await logseq.Editor.insertAtEditingCursor('#admon-lists List')
        },
    )
    logseq.provideStyle(String.raw`
/* ======    ADMONITIONS     ====== */

a.tag[data-ref*="admon-"], a.tag[data-ref*="admon-"]:not(.katex .tag) {
    background: transparent !important;
    border: 0px solid !important;
    font-size: 0px !important;
    box-shadow: none !important;
}

/* ======   3rd Party Theme Fixes ====== */
:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block {
    border-bottom-width: 0px !important;
}

/*  =====   MAIN GUI VIEW   ===== */

/* This will hide the bullet for admonition panels */

/* Hide brackets for page-refs in panels */
[data-refs-self*='admon-'] > div > div > div > div > div > .block-content-inner .page-reference .bracket {
    display: none;
}
/* Hide background colors on page-ref hover */
[data-refs-self*='admon-'] > div > div > div > div > div > .block-content-inner .page-reference:hover {
    background: transparent;
}
/* fixes bullet location */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-lists'] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 .bullet-container, .content > .blocks-container > div > div > .ls-block[data-refs-self*="admon-lists"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 .bullet-container {
    position: relative;
    top: -4px;
}

/* Create the top bar */
:is(.content > .blocks-container) .ls-block[data-refs-self*='admon-'] > div > div > div > div > div > .block-content-inner {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 12px;
    border-radius: var(--cl-border-minor);
    border-left: 4px solid;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    font-weight: 500;
    border-top-left-radius: 2px;
    margin-top: 5px;
}
/* This will create the body for blocks that contain multiple lines */
:is(.content > .blocks-container) .ls-block[data-refs-self*='admon-'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-body {
    background: var(--ls-secondary-background-color);
    border-left: 4px solid;
    border-top-left-radius: 0px;
    padding: 15px 10px;
    box-shadow: var(--cl-box-shadow);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    margin-bottom: 10px;
}
/* Settings for our Icons in the title bar */
a.tag[data-ref*="admon-"]:after {
    display: block;
    font-size: 22px;
    background: transparent !important;
    font-family: 'tabler-icons';
    font-weight: 100;
    position: relative;
    top: 2px;
    margin-right: 5px;
}

/* Adds support for properties defined in admonition panels */

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    border: 0px solid;
    margin-top: 0px;
    margin-bottom: -2px;
    border-left: 4px solid;
    border-radius: 0px;
    padding-left: 41px;
    padding-bottom: 15px;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties > div:first-child {
  margin-top: -7px;
  border-top: 1px dotted var(--ls-block-bullet-color);
  padding-top: 5px;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-'] .block-properties > div {
    padding-left: 0px;
}
/* Style block properties bullets */
:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties > div::marker {
    color: var(--ls-block-bullet-color);
}

/* ===  Panel for Child Blocks  === */
:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children-left-border {
    background: transparent;
}
:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children {
    border: 0px solid;
}
/* Adjust the first child blocks margin to align with top-bar */
:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block:first-child > .flex {
    margin-top: -6px;
    padding-top: 10px;
    border-top-left-radius: 0px;
}
:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block:last-child > .flex {
    padding-bottom: 10px;
    border-radius: 2px;
}
:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block:first-child {
    margin-top: 2px;
}

:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex {
    background: var(--ls-secondary-background-color);
    border-left: 4px solid;
    margin-left: 17px;
    margin-top: -5px;
    margin-right: 8px;
    padding: 2px 0px;
}

:is(.content > .blocks-container) .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex > .block-content-wrapper {
    background: var(--ls-secondary-background-color);
    margin-left: -8px;
    margin-right: 0px;
    padding-left: 5px;
    width: 100%;
}
/* Forces the bullet to fill the height space of the block */

/*  =====   REFERENCES PANEL   ===== */

/* This will hide the bullet for admonition panels */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-'] > div > div > a > .bullet-container {
    display: flex;
}

/* Create the top bar */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-'] > div > div > div > div > div > .block-content-inner {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 12px;
    border-radius: var(--cl-border-minor);
    border-left: 4px solid;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    font-weight: 500;
    border-top-left-radius: 2px;
    margin-top: 5px;
}
/* This will create the body for blocks that contain multiple lines */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-body {
    background: var(--ls-tertiary-background-color);
    border-left: 4px solid;
    border-top-left-radius: 0px;
    padding: 15px 10px;
    box-shadow: var(--cl-box-shadow);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    margin-bottom: 10px;
}
/* Settings for our Icons in the title bar */
a.tag[data-ref*="admon-"]:after {
    display: block;
    font-size: 22px;
    background: transparent !important;
    font-family: 'tabler-icons';
    font-weight: 100;
    position: relative;
    top: 2px;
    margin-right: 5px;
}

/* Hide each results background color */
.ls-block[data-refs-self*='admon-'] .lazy-visibility > .fade-enter > .color-level > .flex > .initial > div {
    background: transparent;
}

/* ===  Panel for Child Blocks  === */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children-left-border {
    background: transparent;
}
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children {
    border: 0px solid;
}
/* Adjust the first child blocks margin to align with top-bar */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block:first-child > .flex {
    margin-top: -4px;
    padding-top: 10px;
}
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block:last-child > .flex {
    padding-bottom: 10px;
    border-radius: 2px;
}
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex {
    background: var(--ls-tertiary-background-color);
    border-left: 4px solid;
    margin-left: 17px;
    margin-right: 8px;
    padding: 2px 0px;
}

.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex {
    margin-top: -5px;
}

.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex > .block-content-wrapper {
    background: var(--ls-tertiary-background-color);
    margin-left: -8px;
    margin-right: 0px;
    padding-left: 5px;
}

/*      ===== LISTS PANEL =====     */
/* Hide Title in Query */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-lists'] > .block-children-container > .block-children > .ls-block > .flex > .block-content-wrapper .foldable-title, .content > .blocks-container > div > div > .ls-block[data-refs-self*="admon-lists"] > .block-children-container > .block-children > .ls-block > .flex > .block-content-wrapper .foldable-title, .ls-block[data-refs-self*="admon-lists"] > .block-children-container > .block-children > .ls-block > .flex > .flex > .flex > .flex-1 > .block-content > .flex > .flex-1 > .inline > .dsl-query > .lazy-visibility > .fade-enter > .custom-query > .flex > .content > .foldable-title, .ls-block[data-refs-self*="admon-lists"] > .block-children-container > .block-children > .ls-block > .flex > .flex > .flex > .flex-1 > .block-content > .flex > .flex-1 > .inline > .dsl-query > .lazy-visibility > .fade-enter > .custom-query > .flex > .initial > div .foldable-title {
  display: none;
}

/* Hide Borders & Remove Padding/Margins on .color-level panels */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-lists'] .lazy-visibility > .fade-enter > .color-level > .flex > .initial > div, .ls-block[data-refs-self*="admon-lists"] .lazy-visibility > .fade-enter > .color-level > .flex > .initial > div {
  border: 0px;
  padding: 0px;
  margin: 0px;
}

.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-lists'] .color-level.rounded, .ls-block[data-refs-self*="admon-lists"] .color-level.rounded {
  margin: 0px !important;
  padding: 0px;
}

.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-lists'] .lazy-visibility > .fade-enter > .color-level > .flex > .initial > div .breadcrumb, .ls-block[data-refs-self*="admon-lists"] .lazy-visibility > .fade-enter > .color-level > .flex > .initial > div .breadcrumb {
  display: none;
}

/* hide parent bullet for list panels */
.color-level > .flex > .initial > div > .blocks-container > .lazy-visibility > .fade-enter > .ls-block[data-refs-self*='admon-lists'] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 .bullet-container, .content > .blocks-container > div > div > .ls-block[data-refs-self*="admon-lists"] > .block-children-container > .block-children > .ls-block > .flex > .mr-1 .bullet-container {
  display: none;
}

/* === Kanban View by Cannibalox === */
/* */
[data-refs-self*='kanban'] > .block-children-container > .block-children {
    display: inline-flex;
    position: relative;
    margin: 0 10px;
    border: 0;
    overflow-x: auto;
}
/* column */
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block {
    display: inline-block;
    padding: 0;
    margin-right: 10px;
    border-radius: 4px;
    background-color: var(--ls-secondary-background-color);
    max-width: -webkit-fill-available;
    min-width: auto;
    width: inherit;
    border: 1px solid var(--ls-border-color);
}
/* header */
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .flex-row {
    background-color: var(--ls-secondary-background-color);
    border-bottom: 1px solid var(--ls-border-color);
    padding: 4px 6px;
}
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .flex-row
    > .block-content-wrapper {
    width: 100%;
}
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .flex-row
    > .block-content-wrapper
    > .flex {
    overflow: hidden;
}
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .flex-row
    .inline,
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .flex-row
    .inline
    .page-ref {
    font-weight: bold;
}
[data-refs-self*='kanban'] .todo-master-progress-bar {
    max-width: 90%;
}
/* content */
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .block-children-container {
    margin: 0 !important;
}
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block::before {
    display: none;
}
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block:last-child {
    margin-bottom: 0;
}
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .flex-row
    > .mr-1 {
    display: none;
}
[data-refs-self*='kanban']
    > .block-children-container
    > .block-children
    > .ls-block
    > .block-children-container
    > .block-children {
    padding: 10px 0;
    border: 0;
}

/*  ===== KANBANS ======  */
.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-"] .block-content-inner {
    background: transparent !important;
    border-left: 0px solid !important;
}
.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex {
    background: transparent;
    border-left: 0px solid;
    margin: 0px;
    padding: 0px;
    margin-left: -10px;
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-"] > .block-children-container > .block-children > .ls-block > .flex > .block-content-wrapper {
    background: transparent;
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-"] > .flex.flex-row.pr-2 {
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    text-align: center;
    padding: 0px;
}

/*  ===== Colors & Settings for each panel =====    */

/*          LISTS            */

[data-refs-self*="admon-lists"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(124, 77, 255) !important;
}
[data-refs-self*='admon-lists'] > div > div > div > div > div > .block-content-inner {
    background: rgb(124, 77, 255, 0.2) !important;
    border-left-color: rgb(124, 77, 255) !important;
}
[data-refs-self*='admon-lists'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(124, 77, 255) !important;
}

[data-refs-self*='admon-lists'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(124, 77, 255) !important;
}

a.tag[data-ref="admon-lists"]:after {
    content: "\eb6b";
    color: rgb(124, 77, 255);
}
:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-lists'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(124, 77, 255, 0.2);
    border-color: rgb(124, 77, 255);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-lists"] > .flex.flex-row.pr-2 {
    background: rgb(124, 77, 255, 0.2);
}

/*          TIPS            */
[data-refs-self*="admon-tips"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(0, 191, 165) !important;
}
[data-refs-self*='admon-tips'] > div > div > div > div > div > .block-content-inner {
    background: rgb(0, 191, 165, 0.2) !important;
    border-left-color: rgb(0, 191, 165) !important;
}
[data-refs-self*='admon-tips'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(0, 191, 165) !important;
}

[data-refs-self*='admon-tips'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(0, 191, 165) !important;
}

a.tag[data-ref="admon-tips"]:after {
    content: "\ec2c";
    color: rgb(0, 191, 165);
}
:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-tips'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(0, 191, 165, 0.2);
    border-color: rgb(0, 191, 165);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-tips"] > .flex.flex-row.pr-2 {
    background: rgb(0, 191, 165, 0.2);
}

/*          WARNING            */
[data-refs-self*="admon-warning"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(255, 145, 0) !important;
}
[data-refs-self*='admon-warning'] > div > div > div > div > div > .block-content-inner {
    background: rgb(255, 145, 0, 0.2);
    border-left-color: rgb(255, 145, 0) !important;
}
[data-refs-self*='admon-warning'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(255, 145, 0) !important;
}

[data-refs-self*='admon-warning'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(255, 145, 0) !important;
}

a.tag[data-ref="admon-warning"]:after {
    content: "\ea06";
    color: rgb(255, 145, 0) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-warning'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(255, 145, 0, 0.2);
    border-color: rgb(255, 145, 0);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-warning"] > .flex.flex-row.pr-2 {
    background: rgb(255, 145, 0, 0.2);
}

/*          INFO            */
[data-refs-self*="admon-info"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(0, 184, 212) !important;
}
[data-refs-self*='admon-info'] > div > div > div > div > div > .block-content-inner {
    background: rgb(0, 184, 212, 0.2) !important;
    border-left-color: rgb(0, 184, 212) !important;
}
[data-refs-self*='admon-info'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(0, 184, 212) !important;
}

[data-refs-self*='admon-info'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(0, 184, 212) !important;
}

a.tag[data-ref="admon-info"]:after {
    content: "\eac5";
    color: rgb(0, 184, 212) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-info'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(0, 184, 212, 0.2);
    border-color: rgb(0, 184, 212);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-info"] > .flex.flex-row.pr-2 {
    background: rgb(0, 184, 212, 0.2);
}

/*          SUCCESS            */
[data-refs-self*="admon-success"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(0, 200, 83) !important;
}
[data-refs-self*='admon-success'] > div > div > div > div > div > .block-content-inner {
    background: rgb(0, 200, 83, 0.2) !important;
    border-left-color: rgb(0, 200, 83) !important;
}
[data-refs-self*='admon-success'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(0, 200, 83) !important;
}

[data-refs-self*='admon-success'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(0, 200, 83) !important;
}

a.tag[data-ref="admon-success"]:after {
    content: "\ea5e";
    color: rgb(0, 200, 83) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-success'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(0, 200, 83, 0.2);
    border-color: rgb(0, 200, 83);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-success"] > .flex.flex-row.pr-2 {
    background: rgb(0, 200, 83, 0.2);
}

/*          QUESTION            */
[data-refs-self*="admon-question"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(100, 221, 23) !important;
}
[data-refs-self*='admon-question'] > div > div > div > div > div > .block-content-inner {
    background: rgb(100, 221, 23, 0.2) !important;
    border-left-color: rgb(100, 221, 23) !important;
}
[data-refs-self*='admon-question'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(100, 221, 23) !important;
}

[data-refs-self*='admon-question'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(100, 221, 23) !important;
}

a.tag[data-ref="admon-question"]:after {
    content: "\ec9d";
    color: rgb(100, 221, 23) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-question'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(100, 221, 23, 0.2);
    border-color: rgb(100, 221, 23);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-question"] > .flex.flex-row.pr-2 {
    rgb(100, 221, 23, 0.2);
}

/*          FAILURE            */
[data-refs-self*="admon-failure"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(255, 82, 82) !important;
}
[data-refs-self*='admon-failure'] > div > div > div > div > div > .block-content-inner {
    background: rgb(255, 82, 82, 0.2) !important;
    border-left-color: rgb(255, 82, 82) !important;
}
[data-refs-self*='admon-failure'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(255, 82, 82) !important;
}

[data-refs-self*='admon-failure'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(255, 82, 82) !important;
}

a.tag[data-ref="admon-failure"]:after {
    content: "\eb55";
    color: rgb(255, 82, 82) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-failure'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(255, 82, 82, 0.2);
    border-color: rgb(255, 82, 82);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-failure"] > .flex.flex-row.pr-2 {
    background: rgb(255, 82, 82, 0.2);
}

/*          DANGER            */
[data-refs-self*="admon-danger"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(255, 23, 68) !important;
}
[data-refs-self*='admon-danger'] > div > div > div > div > div > .block-content-inner {
    background: rgb(255, 23, 68, 0.2) !important;
    border-left-color: rgb(255, 23, 68) !important;
}
[data-refs-self*='admon-danger'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(255, 23, 68) !important;
}

[data-refs-self*='admon-danger'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(255, 23, 68) !important;
}

a.tag[data-ref="admon-danger"]:after {
    content: "\ec2f";
    color: rgb(255, 23, 68) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-danger'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(255, 23, 68, 0.2);
    border-color: rgb(255, 23, 68);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-danger"] > .flex.flex-row.pr-2 {
    rgb(255, 23, 68, 0.2);
}

/*          BUG            */
[data-refs-self*="admon-bug"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(245, 0, 87) !important;
}
[data-refs-self*='admon-bug'] > div > div > div > div > div > .block-content-inner {
    background: rgb(245, 0, 87, 0.2) !important;
    border-left-color: rgb(245, 0, 87) !important;
}
[data-refs-self*='admon-bug'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(245, 0, 87) !important;
}

[data-refs-self*='admon-bug'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(245, 0, 87) !important;
}

a.tag[data-ref="admon-bug"]:after {
    content: "\ea48";
    color: rgb(245, 0, 87) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-bug'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(245, 0, 87, 0.2);
    border-color: rgb(245, 0, 87);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-bug"] > .flex.flex-row.pr-2 {
    background: rgb(245, 0, 87, 0.2);
}

/*          QUOTE            */
[data-refs-self*="admon-quote"] > .block-children-container > .block-children > .ls-block > .flex {
    border-color: rgb(158, 158, 158) !important;
}
[data-refs-self*='admon-quote'] > div > div > div > div > div > .block-content-inner {
    background: rgb(158, 158, 158, 0.2) !important;
    border-left-color: rgb(158, 158, 158) !important;
}
[data-refs-self*='admon-quote'] > div > div > div > div > div > .block-content-inner .page-ref {
    color: rgb(158, 158, 158) !important;
}

[data-refs-self*='admon-quote'] > div > div > div > div > div > .block-body {
    border-left-color: rgb(158, 158, 158) !important;
}

a.tag[data-ref="admon-quote"]:after {
    content: "\efbe";
    color: rgb(158, 158, 158) !important;
}

:is(.content > .blocks-container, .color-level) .ls-block[data-refs-self*='admon-quote'] > .flex > .flex > .flex > .flex-1 > .block-content > .block-properties {
    background: rgb(158, 158, 158, 0.2);
    border-color: rgb(158, 158, 158);
}

.ls-block[data-refs-self*="kanban"] > .block-children-container > .block-children > .ls-block[data-refs-self*="admon-quote"] > .flex.flex-row.pr-2 {
    background: rgb(158, 158, 158, 0.2);
}

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
