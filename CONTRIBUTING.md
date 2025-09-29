<p align="center">
   <picture>
         <source media="(prefers-color-scheme: dark)" srcset="./public/images/logos/en/logo-lime.webp" />
         <source media="(prefers-color-scheme: light)" srcset="./public/images/logos/en/logo-green.webp" />
         <img src="./public/images/logos/en/logo-green.webp" alt="Calm Mood" width="275" height="80"/>
   </picture>
</p>
<h1 align="center">Contributing to Calm Mood</h1>

First off, thanks for considering contributing to **Calm Mood**!

This project exists to help people relax, reduce stress, and reconnect with nature — and your contributions help make it even better.

We welcome all kinds of contributions: code, design, translations, documentation, bug reports, feature ideas, and feedback. This guide explains how you can get involved.

---
## Ways to Contribute
You don’t need to write code to make a valuable contribution! Here are some great ways:
- **Development** – Fix bugs, add new features, or refactor code.
- **Testing / Bug Reports** – Try the app on different devices and report issues if something doesn’t work.
- **Translations** – Help us support more languages.
- **Design / UI Feedback** – Suggest improvements to layout, visuals, or accessibility.
- **Feature Requests** – Share your ideas for improvements by opening a feature request.
- **Community Support** – Answer questions in issues and help others get started.

## Pull Request Guidelines
When submitting a PR:
1. Create a branch from `main`:
   ```bash
   git checkout -b <type>/<short-description>
   # examples: feature/new-sound, fix/typo, i18n/el-greek
   ```
2. Keep commits small and meaningful.
3. Ensure the project builds and passes linting/tests.
4. Update docs (README/CHANGELOG) if you change behavior or add features.
5. Open the PR and describe **what** you changed and **why**.

### Checklist
- [ ] My changes work locally (`npm run dev`).
- [ ] I’ve updated documentation/screenshots if needed.
- [ ] I’ve tested in multiple browsers or devices.
- [ ] My commit messages are clear and signed (`git commit -s`).

> [!TIP]  
> Signed commits are recommended for clarity. You can sign a commit with:  
> ```bash
> git commit -s -m "your message"
> ```

## Development Setup
1. Fork the repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/calm-mood.git
   cd calm-mood
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev # opens the server at http://localhost:3000
   ```
   Then visit `http://localhost:3000`.

PRs are reviewed with kindness and calmness 💚

## Testing
- Make sure all pages load correctly in **light and dark mode**.
- Check responsiveness (desktop, tablet, mobile).
- Verify that translations display properly when switching languages.
- Try the breathing exercise and sound mixer to confirm timing, animations, and volume controls.

## Translating Calm Mood to another language
> [!NOTE]
> - All translations live in the `i18n/` folder.
> - Each language has its own JSON file. Example: `i18n/hy.json` for Armenian.
> - Please keep placeholders (`%s`, `%d`) intact when translating.
> - If unsure about terminology, open a draft PR — maintainers will help review.

1. Make sure to download the base language file from one of these languages
   - [Armenian][armenian-base-json]
   - [English][english-base-json]
2. Translate the content of all keys with your preferred tool
3. Save your edited JSON file as `[lang-code].json` (Examples: `fr.json`, `el.json`, `fa.json`, etc.)
4. Do the following for testing the translation
   - Add the `[lang-code].json` into `i18n/` folder
   - Add the following object into `src/i18n/config.ts`:
     ```ts
      export const languages = [
         // All Existing Languages +
         {code: "<lang-code> (example: el)", countryCode: "<country-code> (example: gr)", label: "<native-name> (example: Ελληνικά)"}
         // ^ This will be your contribution :-)
      ] as const satisfies readonly ILanguage[];
      ```
5. Once Ready, open the Pull Request, so I'll include them in the app after review

## Feedback & Feature Requests
We love new ideas! If you have a suggestion:
1. Check the [issues][issues-url] to see if it already exists.
2. If not, open a [new feature request][new-feature-request-url].
3. Clearly explain the motivation (why it helps users) and, if possible, how it could be implemented (the Feature request template says it all ☺️).

## Community Guidelines
We aim to keep Calm Mood as welcoming and peaceful as the app itself.
- Be respectful and kind — Calm Mood is about **peace and optimism**, not conflict and pessimism.
- Provide constructive feedback (focus on ideas, not people).
- Keep discussions on-topic and inclusive.
- Remember that behind every contribution is a person.
Our [Code of Conduct][code-of-conduct-url] applies to all interactions. By participating, you agree to uphold it.

## 🙌 A Note of Thanks

Contributors are what make Calm Mood thrive. Your time, ideas, and creativity are truly appreciated.
Take a deep breath, enjoy the process, and let’s make something beautiful together. 

<!-- Reference Links -->
[armenian-base-json]: https://github.com/ArsenGabrielyan/calm-mood/blob/main/i18n/hy.json
[english-base-json]: https://github.com/ArsenGabrielyan/calm-mood/blob/main/i18n/en.json
[issues-url]: https://github.com/ArsenGabrielyan/calm-mood/issues
[new-feature-request-url]: https://github.com/ArsenGabrielyan/calm-mood/issues/new?assignees=&labels=&template=feature_request.md&title=
[code-of-conduct-url]: https://github.com/ArsenGabrielyan/calm-mood/blob/main/CODE_OF_CONDUCT.md

> GitHub [@ArsenGabrielyan](https://github.com/ArsenGabrielyan) &nbsp;&middot;&nbsp;
> [Arsen's Website](https://arsen-g.web.app)
