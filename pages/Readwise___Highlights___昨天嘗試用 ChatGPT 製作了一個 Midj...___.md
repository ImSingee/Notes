title:: Readwise/Highlights/昨天嘗試用 ChatGPT 製作了一個 Midj...
author:: [[@WuPingJu on Twitter]]
full-title:: 昨天嘗試用 ChatGPT 製作了一個 Midj...
category:: #tweets
url:: https://twitter.com/WuPingJu/status/1643276223211278338
- 昨天嘗試用 ChatGPT 製作了一個 Midjourney Prompt Generator 。
  
  測試後覺得效果不錯，就訂閱了 MJ，開始扮演 text-to-image 的詠唱初學者。
  
  我覺得，讓他們兩個一起協作的效果真的很讚！
  
  寫了一篇文分享我的作法與心得，完整 prompt 請點推文連結
  https://t.co/zUynBy18SS
  
  推文串有簡單摘要
  👇 ([View Tweet](https://twitter.com/WuPingJu/status/1643276223211278338)) #Highlight #[[2023-04-05]]
- 起心動念：
  
  我在演算法推薦的 https://t.co/2kimuxDpJL 帳號上面看到許多我很喜歡的圖，更棒的是，這些圖除了帶有 Prompt 以外，還有某個最基礎的描述。
  
  2/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276225866272768)) #Highlight #[[2023-04-05]]
- 例如：
  digital background, gradient, soft light, low contrast, minimalist, foil holographic --ar 3:2 --v 5 --stop 75 這個 prompt ，作者的描述是： "holographic background"
  
  我就想，我好像可以運用 ChatGPT 的「模仿能力」
  
  https://t.co/8Opyt9p73g
  
  3/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276228567375872)) #Highlight #[[2023-04-05]]
- 我的作法是，把好幾組對應的邏輯關係範例都丟給 ChatGPT ，讓他模仿這樣的「規則」，去處理我輸入的「基本詞彙」。
  
  整個概念白話來說是：「當 user 輸入某個單詞 X ，ChatGPT 就輸出一段與這個單詞 X 相關的擴展描述給 user」。
  
  4/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276231591464961)) #Highlight #[[2023-04-05]]
- 例如，當我輸入 "a cozy dog in the backyard" ，它就會輸出 "a cozy dog in the backyard, playful, greenery, sunlit, bokeh, candid, organic, lush, peaceful, 4k --ar 3:2 --v 5" 給我
  
  5/n 
  
  ![](https://pbs.twimg.com/media/Fs4XB55aYAAK6pQ.jpg) ([View Tweet](https://twitter.com/WuPingJu/status/1643276240990924800)) #Highlight #[[2023-04-05]]
- 當它熟悉了這種對應關係，接下來我只要輸入簡單的詞彙， ChatGPT 不僅可以抓到與這個詞彙相關的描述詞，也可以使用類似的文字風格與編排方式來回覆，所以 prompt 產生器就直接完成了。
  
  6/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276244090511361)) #Highlight #[[2023-04-05]]
- 不過，這個初版的產生器還很粗糙，因為：
  
  • 我只參考了一個人提供的幾組 prompts ，這些圖的風格很接近，例如都有 minimalist, flat, abstract 之類的關鍵字，這樣可能會誤導 ChatGPT。
  
  • 可能還有一些關鍵資訊需要提供，但恰好這些 prompts 都沒有，所以 ChatGPT 也不會憑空生成這些關鍵。
  
  7/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276246657409025)) #Highlight #[[2023-04-05]]
- 若你想要也做一個，我推薦你這樣做：
  
  1. 以我的初版 prompts 作為起點，然後去丟你想要產的東西，交給 ChatGPT 完善細節。
  
  2. 接著，把 ChatGPT 給你的 prompts 拿到 Midjourney 去跑，記得可以自己調整一些比例之類的參數。
  
  8/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276249329172480)) #Highlight #[[2023-04-05]]
- 當你跑出好的結果時，太好了，因為這個好的結果，就是一個現成的，可以強化 prompt 產生器的「範例」，你可以馬上把它更新到產生器裡面。
  
  例如，我用產生器測試了 “car, cyberpunk style”
  
  9/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276251971616769)) #Highlight #[[2023-04-05]]
- 結果 prompt 產生器給了我這段：” cyberpunk style, car, neon, futuristic, glowing, chrome, metallic, smoke, city, monochromatic, hologram “ ，然後跑出的圖是這組我非常滿意的圖
  
  10/n 
  
  ![](https://pbs.twimg.com/media/Fs4XC9ZaQAAu6DZ.jpg) ([View Tweet](https://twitter.com/WuPingJu/status/1643276259542315008)) #Highlight #[[2023-04-05]]
- 只要這樣跑個幾輪，把提供給 ChatGPT 的「範例」換上你實踐過，喜歡的「邏輯對應關係」，你就可以大幅強化這個產生器的能力。
  
  同時，你也可以在這過程中慢慢建立自己對這些描述的偏好，例如，你可以補上一些條件，請他只能選用某幾種風格、或者是避免選用某些風格與關鍵字等等。
  
  11/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276262931062784)) #Highlight #[[2023-04-05]]
- 只要把握「ChatGPT 最擅長模仿文字，所以關鍵在於找出你覺得好的範例，讓他模仿」這樣的核心概念
  
  我相信你也可以做出很棒的 Midjourney prompt 產生器，甚至是用在其他的場合，製作不同類型的產生器。
  
  若這篇文章對你有幫助，讓你做出了很棒的東西，歡迎跟我分享，我很期待收到這樣的回饋！
  
  12/n ([View Tweet](https://twitter.com/WuPingJu/status/1643276265783463936)) #Highlight #[[2023-04-05]]
- 最後附上一張我透過這個產生器產的圖，歡迎猜猜我是用什麼原始關鍵字產的！
  
  若有人猜到（我覺得很難），我會再跟你分享我目前迭代後的 V2 版本 prompt 🤣
  
  13/n 
  
  ![](https://pbs.twimg.com/media/Fs4XDvzacAA-N54.jpg) ([View Tweet](https://twitter.com/WuPingJu/status/1643276273094115328)) #Highlight #[[2023-04-05]]