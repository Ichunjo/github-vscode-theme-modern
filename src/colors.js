const lightColors = require("@primer/primitives/dist/docs/functional/themes/light.json");
const lightHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/light-high-contrast.json");
const lightColorblindColors = require("@primer/primitives/dist/docs/functional/themes/light-colorblind.json");
const darkColors = require("@primer/primitives/dist/docs/functional/themes/dark.json");
const darkHighContrastColors = require("@primer/primitives/dist/docs/functional/themes/dark-high-contrast.json");
const darkColorblindColors = require("@primer/primitives/dist/docs/functional/themes/dark-colorblind.json");
const dimmedColors = require("@primer/primitives/dist/docs/functional/themes/dark-dimmed.json");

function getColors(theme) {
  let rawColors;
  switch (theme) {
    case "light":
      rawColors = lightColors;
      break;
    case "light_high_contrast":
      rawColors = lightHighContrastColors;
      break;
    case "light_colorblind":
      rawColors = lightColorblindColors;
      break;
    case "dark":
      rawColors = darkColors;
      break;
    case "dark_high_contrast":
      rawColors = darkHighContrastColors;
      break;
    case "dark_colorblind":
      rawColors = darkColorblindColors;
      break;
    case "dark_dimmed":
      rawColors = dimmedColors;
      break;
    default:
      throw new Error(`Colors are missing for value: ${theme}`);
  }

  return transformToNestedStructure(rawColors);
}

function transformToNestedStructure(flatColors) {
  const nested = {
    scale: {
      black: flatColors["bgColor-black"]?.value || "#010409",
      white: flatColors["bgColor-white"]?.value || "#ffffff",
      gray: [],
      blue: [],
      green: [],
      yellow: [],
      orange: [],
      red: [],
      purple: [],
      pink: [],
      coral: []
    },
    fg: {},
    canvas: {},
    border: {},
    accent: {},
    danger: {},
    attention: {},
    success: {},
    severe: {},
    done: {},
    sponsors: {},
    neutral: {},
    btn: {
      primary: {}
    },
    ansi: {},
    codemirror: {},
    primer: {
      border: {}
    }
  };

  Object.keys(flatColors).forEach(key => {
    const val = flatColors[key]?.value;
    if (val === undefined) return;

    switch (key) {
      case "fgColor-accent":
        nested.accent.fg = val;
        break;
      case "bgColor-accent-emphasis":
        nested.accent.emphasis = val;
        break;
      case "bgColor-accent-muted":
        nested.accent.subtle = val;
        nested.accent.muted = val;
        break;

      case "fgColor-danger":
        nested.danger.fg = val;
        break;
      case "bgColor-danger-emphasis":
        nested.danger.emphasis = val;
        break;
      case "bgColor-danger-muted":
        nested.danger.muted = val;
        nested.danger.subtle = val;
        break;

      case "fgColor-attention":
        nested.attention.fg = val;
        break;
      case "bgColor-attention-emphasis":
        nested.attention.emphasis = val;
        break;
      case "bgColor-attention-muted":
        nested.attention.muted = val;
        break;

      case "fgColor-success":
        nested.success.fg = val;
        break;
      case "bgColor-success-emphasis":
        nested.success.emphasis = val;
        break;
      case "bgColor-success-muted":
        nested.success.muted = val;
        break;

      case "fgColor-severe":
        nested.severe.fg = val;
        break;
      case "bgColor-severe-muted":
        nested.severe.subtle = val;
        break;

      case "bgColor-done-muted":
        nested.done.subtle = val;
        break;

      case "bgColor-sponsors-muted":
        nested.sponsors.subtle = val;
        break;

      case "bgColor-neutral-emphasis":
        nested.neutral.emphasis = val;
        nested.neutral.emphasisPlus = val;
        break;
      case "bgColor-neutral-muted":
        nested.neutral.muted = val;
        nested.neutral.subtle = val;
        break;

      case "codeMirror-activeline-bgColor":
        nested.codemirror.activelineBg = val;
        break;

      case "borderColor-accent-emphasis":
        nested.primer.border.active = val;
        break;

      case "bgColor-default":
        nested.canvas.default = val;
        break;
      case "overlay-bgColor":
      case "bgColor-overlay":
        nested.canvas.overlay = val;
        break;
      case "bgColor-inset":
        nested.canvas.inset = val;
        break;
      case "bgColor-muted":
        nested.canvas.subtle = val;
        break;

      case "borderColor-default":
        nested.border.default = val;
        break;
      case "borderColor-muted":
        nested.border.muted = val;
        break;

      default:
        if (key.startsWith("fgColor-")) {
          const prop = key.replace("fgColor-", "");
          if (prop === "default") nested.fg.default = val;
          else if (prop === "muted") nested.fg.muted = val;
          else if (prop === "subtle") nested.fg.subtle = val;
          else if (prop === "onEmphasis") nested.fg.onEmphasis = val;
        } else if (key.startsWith("control-fgColor-placeholder")) {
          if (!nested.fg.subtle) nested.fg.subtle = val;
        } else if (key.startsWith("button-")) {
          const btnProp = key.replace("button-", "");
          if (btnProp === "primary-bgColor-rest") nested.btn.primary.bg = val;
          else if (btnProp === "primary-bgColor-hover") nested.btn.primary.hoverBg = val;
          else if (btnProp === "primary-fgColor-rest") nested.btn.primary.text = val;
          else if (btnProp === "default-bgColor-rest") nested.btn.bg = val;
          else if (btnProp === "default-bgColor-hover") nested.btn.hoverBg = val;
          else if (btnProp === "default-bgColor-active") nested.btn.activeBg = val;
          else if (btnProp === "default-fgColor-rest") nested.btn.text = val;
        } else if (key.startsWith("color-ansi-")) {
          const ansiColor = key.replace("color-ansi-", "");
          if (ansiColor === "black") nested.ansi.black = val;
          else if (ansiColor === "black-bright") nested.ansi.blackBright = val;
          else if (ansiColor === "white") nested.ansi.white = val;
          else if (ansiColor === "white-bright") nested.ansi.whiteBright = val;
          else if (ansiColor === "red") nested.ansi.red = val;
          else if (ansiColor === "red-bright") nested.ansi.redBright = val;
          else if (ansiColor === "green") nested.ansi.green = val;
          else if (ansiColor === "green-bright") nested.ansi.greenBright = val;
          else if (ansiColor === "yellow") nested.ansi.yellow = val;
          else if (ansiColor === "yellow-bright") nested.ansi.yellowBright = val;
          else if (ansiColor === "blue") nested.ansi.blue = val;
          else if (ansiColor === "blue-bright") nested.ansi.blueBright = val;
          else if (ansiColor === "magenta") nested.ansi.magenta = val;
          else if (ansiColor === "magenta-bright") nested.ansi.magentaBright = val;
          else if (ansiColor === "cyan") nested.ansi.cyan = val;
          else if (ansiColor === "cyan-bright") nested.ansi.cyanBright = val;
        } else if (key.startsWith("display-") && key.includes("-scale-")) {
          const parts = key.split("-");
          if (parts.length >= 4 && parts[0] === "display" && parts[2] === "scale") {
            const color = parts[1];
            const index = parseInt(parts[3], 10);
            if (!isNaN(index) && nested.scale[color]) {
              nested.scale[color][index] = val;
            }
          }
        }
        break;
    }
  });

  if (!nested.fg.subtle) nested.fg.subtle = nested.fg.muted;
  if (!nested.canvas.overlay) nested.canvas.overlay = nested.canvas.default;
  return nested;
}

module.exports = {
  getColors,
};
