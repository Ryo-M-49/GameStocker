module.exports = {
    plugins: ['stylelint-scss', 'stylelint-order'], // stylelint-order を使う
    extends: [
      'stylelint-config-standard',  //ベースとなるルール
      'stylelint-prettier/recommended',
    ],
    rules: {
      'order/properties-alphabetical-order': true, //ABC順に並べる
      'at-rule-no-unknown': null, //scss関係のやつ
      'scss/at-rule-no-unknown': true, //scss関係のやつ
      "react-hooks/exhaustive-deps": 'disabled'
    }
  };