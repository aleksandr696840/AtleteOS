type Language = "en" | "ru";

class LanguageStore {
  private language: Language = "en";

  getLanguage(): Language {
    return this.language;
  }

  setLanguage(language: Language) {
    this.language = language;

    window.dispatchEvent(
      new CustomEvent<Language>("languageChanged", {
        detail: language,
      })
    );
  }
}

export const languageStore = new LanguageStore();