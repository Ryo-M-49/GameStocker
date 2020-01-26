module.exports = {

    extends: ['google', 'plugin:prettier/recommended'], // WordPressのコーディング規約をベースにする
    plugins: ['react'], // React関係のルールを指定するのに必要
    parser: 'babel-eslint', // JSXとかでエラー出るのを回避。env の es6:true もこれにより不要になる
    parserOptions: {
        sourceType: 'module', // import などを使うときに必要
        ecmaFeatures: {
            experimentalObjectRestSpread: true, // 非推奨項目も注意してくれる？（あんまよくわかってない）
            jsx: true,  //JSX を使うときに必要（ reactプラグインいれてるからいらないかも...？ ）
        },
    },
    rules: {
        'no-var': 'error', //varを許可しない
        'no-console': 'off', // console.logがあってもエラーにしない
        'require-jsdoc': 'off', // Docコメントなくてもエラーにしない
        'valid-jsdoc': 'off', // Docコメントの書き方についてとやかくいわせない
        camelcase: ['warn', { properties: 'never' }], // オブジェクトのキーはキャメルじゃなくてよい
        'react/jsx-uses-vars': 1, // これを使うとJSXで使ってる変数がno-useとして認識されるのを防げた
        "react/jsx-uses-react": 1, //Reactをimportしてもno-var-useエラーが出ないように
    },
};