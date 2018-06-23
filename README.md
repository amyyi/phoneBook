# build project

>npm i
gulp build
open index.html


# feature

1. 驗證電話輸入欄位是否輸入輸字
2. 每個欄位發生 focus 時狀態為正在輸入
3. 每個欄位發生 blur 時會檢查欄位是否已輸入值，若沒有則狀態是尚未填寫，若有值則狀態為已填寫
4. 當按下 ＋ 號按鈕時，若有欄位尚未填寫，則會 alert 視窗說明目前有欄位尚位填寫，並自動選取未填寫之欄位。
5. 按下新增後，底下會秀出聯絡人清單。
6. 點選刪除後，會秀出 MessageBox 詢問是否刪除。
7. 點選篩刪除後，刪除此聯絡人清單。

# run test
npm test

# unit test
1. 正常開啟 MessageBox
2. 正常關閉 MessageBox
3. 正常顯示 MessageBox 說明文字
4. 點擊 select bar 可正常開啟選項

