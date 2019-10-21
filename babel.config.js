module.exports = {
    "presets": [
        "@babel/preset-react",
        [
            "@babel/preset-env",
            {
                "modules": "commonjs", // 模块使用 es modules ，不使用 commonJS 规范，具体看文末附录
                // "useBuiltIns": 'usage', // 默认 false, 可选 entry , usage
            }
        ]
    ]
}
