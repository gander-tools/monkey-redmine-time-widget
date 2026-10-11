# ⏱️ Redmine Time Widget

A userscript that shows, right on a Redmine issue page, **how much time has been logged** on the issue (and its subtasks) and **how much is left** of the estimate.

## ✨ What it does

- 📊 Sums the time logged on the issue and its subtasks.
- 🎯 Counts only the activities you choose (e.g. just *Development*).
- ⏳ Shows how much time is left of the estimate, or by how much it was exceeded.

## 🔌 How it works

The widget talks to your Redmine through its **API** and needs **your API key**. The key is stored only in your browser (in the userscript manager) and is sent only to your own Redmine. You can find it in Redmine under *My account → API access key*, and you can remove it any time with the **×** next to the sum.

> The Redmine administrator has to enable the REST web service (*Administration → Settings → Integrations → Enable REST web service*; in Redmine 6.1 and newer. In older versions, such as 5, it is on the *API* tab).

## 🚀 Installation

1. Install a userscript manager: [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Download `monkey-redmine-time-widget.user.js` from the [latest release](https://github.com/gander-tools/monkey-redmine-time-widget/releases/latest) and open it in the browser.
3. Open any issue in your Redmine. On first use paste your API key, pick the activities to count and click **Save**.

## 🧑‍💻 Development

```sh
npm ci
npm run dev    # dev server with a userscript install URL
npm run build  # builds dist/monkey-redmine-time-widget.user.js
```

## 📄 License

[MIT](LICENSE) © Adam Gąsowski
