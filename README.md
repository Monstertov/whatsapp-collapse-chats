# WhatsApp Collapse Chats

<p align="center">
  <a href="https://web.whatsapp.com/" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/WhatsApp-25D366?logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
  <a href="https://www.google.com/chrome/" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/Chrome-4285F4?logo=googlechrome&logoColor=white" alt="Chrome" /></a>
  <a href="https://www.firefox.com/" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/Firefox-FF7139?logo=firefoxbrowser&logoColor=white" alt="Firefox" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img src="https://custom-icon-badges.demolab.com/badge/CSS-1572B6?logo=css3&logoColor=white" alt="CSS" /></a>
</p>

Browser extension that makes WhatsApp Web fit narrow, tiled windows. It remembers your choice.

- Collapsible chat list, collapsed by default. Picking Chats, Calls, Status or another section in the nav rail opens it again.
- The nav rail is slimmed from 64px to 40px, with the toggle at the top.
- WhatsApp's 748px minimum width is removed, so the page fits small windows without overflowing.

## Layout

| Folder | Browsers |
| --- | --- |
| `chrome/` | Chrome, Chromium, Brave, Edge and other Chromium-based browsers |
| `firefox/` | Firefox, Zen and other Firefox-based browsers |

Both folders share the same `content.js` and `style.css`. Only the manifest differs. Keep the two copies in sync when changing them.

## Install in Chrome

1. Open `chrome://extensions` and turn on **Developer mode**.
2. Click **Load unpacked** and select the `chrome/` folder.

The extension stays installed across restarts.

## Install in Firefox or Zen

The add-on is not signed by Mozilla, so there are two options.

### Temporary

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on** and select `firefox/manifest.json`.

It is removed when the browser restarts.

### Permanent

This requires a browser that allows unsigned add-ons, such as Zen, Firefox Developer Edition or Firefox Nightly. Regular Firefox releases always require signing.

1. Build the package:

   ```sh
   cd firefox
   mkdir -p dist
   zip -X dist/whatsapp-compact.xpi manifest.json content.js style.css icon.png
   ```

2. Open `about:config` and set `xpinstall.signatures.required` to `false`.
3. Open `firefox/dist/whatsapp-compact.xpi` in the browser, for example by dragging it into a window, and click **Add**.

Turning off signature checks applies to every add-on, so only install add-ons from sources you trust.
