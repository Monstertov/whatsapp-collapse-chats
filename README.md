# WhatsApp Collapse Chats

<p align="center">
  <a href="https://www.google.com/chrome/" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/Chrome-4285F4?logo=googlechrome&logoColor=white" alt="Chrome" /></a>
  <a href="https://www.firefox.com/" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/Firefox-FF7139?logo=firefoxbrowser&logoColor=white" alt="Firefox" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/CSS-1572B6?logo=css3&logoColor=white" alt="CSS" /></a>
</p>

Browser extension that adds a collapse button to WhatsApp Web, so you can hide the chat list and give the open chat the full screen. It remembers your choice.

## Chrome

The extension in the repository root.

1. Open `chrome://extensions` and turn on Developer mode.
2. Click **Load unpacked** and select this folder.

## Firefox and Zen

The `firefox/` folder holds a compact variant built for narrow, tiled windows:

- Collapsible chat list, collapsed by default. Picking Chats, Calls, Status or another section in the nav rail opens it again.
- The nav rail is slimmed from 64px to 40px, with the toggle at the top.
- WhatsApp's 748px minimum width is removed, so the page fits small windows without overflowing.

### Build

```sh
cd firefox
mkdir -p dist
zip -X dist/whatsapp-compact.xpi manifest.json content.js style.css icon.png
```

### Install

The add-on is not signed by Mozilla.

- **Temporary**: open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on** and select `firefox/manifest.json`. It is removed when the browser restarts.
- **Permanent**: requires a browser that allows unsigned add-ons, such as Zen, Firefox Developer Edition or Nightly. Set `xpinstall.signatures.required` to `false` in `about:config`, then open `dist/whatsapp-compact.xpi` in the browser.
