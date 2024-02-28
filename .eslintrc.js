module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:styled-components-a11y/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "styled-components-a11y"
    ],
    "rules": {
        "react/prop-types": "off",
        "styled-components-a11y/click-events-have-key-events": "off",
        "styled-components-a11y/no-static-element-interactions":"off",
        "no-unused-vars": "warn"
    }
}
