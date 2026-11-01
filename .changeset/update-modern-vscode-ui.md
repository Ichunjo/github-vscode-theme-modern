---
"github-vscode-theme": patch
---

Update theme tokens for modern VS Code UI features and upgrade dependencies:
- Migrate to `@primer/primitives` v11 (`11.10.0`) with backward-compatible token transformation layer
- Upgrade to `@vscode/vsce` and resolve dependency vulnerabilities (0 audit vulnerabilities)
- Support VS Code Modern UI layout (`surface.*`, `modernUI.*`, `modernActivityBar.*`, `modernEditorTab.*`, `editor.border`)
- Support top/bottom Activity Bar layout (`activityBarTop.*`)
- Support Command Center title bar widget (`commandCenter.*`)
- Support editor and tree sticky scroll (`editorStickyScroll.*`, `tree.stickyScroll.*`, `peekViewEditorStickyScroll.*`)
- Fix definition peek window transparent sticky scroll contrast
- Support VS Code Copilot & Chat UI (`chat.*`, `inlineChat.*`)
- Support Multi-Diff editor and diff editor unchanged regions (`multiDiffEditor.*`, `diffEditor.unchangedRegion*`)
- Support modern editor indent guides (`editorIndentGuide.background1`, `activeBackground1`)
- Support context menu & keybinding styling (`menu.*`, `keybindingLabel.*`)
- Support modern tab selection and drag & drop (`tab.selected*`, `tab.dragAndDropBorder`)
- Fix `symbolIcon.constantForeground` array value bug in dark themes
- Update `GitHub Dark Dimmed` foreground color to match github.com
