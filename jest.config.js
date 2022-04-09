export default {
    testEnvironment: "miniflare",
    transform: {
        "^.+\\.c?(t|j)sx?$": [
            "esbuild-jest",
            {
            "sourcemap": true
            }
        ]
    },
};
  