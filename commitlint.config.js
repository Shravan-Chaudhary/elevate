module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "subject-case": [2, "always", "sentence-case"],
    "scope-enum": [
      2,
      "always",
      ["server", "web", "root", "client", "docs", "packages", "ci"],
    ],
  },
};
