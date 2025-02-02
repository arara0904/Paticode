# Paticode
自作文字コード表と、コンパイルに使用したコードです。参考までに。

# 使用方法
### unicodeUtil.js（手動のほうが早い場合もある）
unicodeで初期化。ファイル名はcodeTable.json
```
node unicodeUtil.js init
```
一覧表示
```
node unicodeUtil.js show
```
テーブルごと表示
```
node unicodeUtil.js showt 12
```
１文字表示
```
node unicodeUtil.js showc 12AB
```
テーブルごと削除
```
node unicodeUtil.js delt 12
```
複数テーブル削除
```
node unicodeUtil.js delmt 12 1A
```
json形式で追加
```
node unicodeUtil.js addj 11FF test.json
```
### findChar.js
UTF-8形式のファイルに使用されている文字をリストアップする。ファイルは無限に指定できる。毎回初期化される。ファイル名はfoundChar.json
```
node findChar.js aaa.txt bbb.txt ccc.txt
```
### encode.js
UTF-8形式のファイルを指定したコード表でエンコード。ファイル名はencoded.txt
```
node encode.js  aaa.txt code.json
```
### decode.js
UTF-8形式のファイルを指定したコード表でデコード。ファイル名はdecoded.txt
```
node decode.js  aaa.txt code.json
```