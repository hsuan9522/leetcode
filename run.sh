#!/bin/bash

read -p "Input folder name: " folderName
# 因為資料夾名稱含空白所以要雙引號包起來
mkdir -p "$folderName"
cp -R ./template/ "./$folderName"
cd "$folderName"
read -p "Input Function name: " functionName
sed -i '' "s/functionName/$functionName/g" index.js
sed -i '' "s/functionName/$functionName/g" index.test.js