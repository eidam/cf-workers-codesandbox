export default {
    testEnvironment: "miniflare",
    // Configuration is automatically loaded from `.env`, `package.json` and
    // `wrangler.toml` files by default, but you can pass any additional Miniflare
    // API options here:
    testEnvironmentOptions: {
        modules: true,
        bindings: { KEY: "value" },
        kvNamespaces: ["TEST_NAMESPACE"]
    },
    transform: {
        "^.+\\.c?(t|j)sx?$": [
            "esbuild-jest",
            {
            "sourcemap": true
            }
        ]
    },
};
  