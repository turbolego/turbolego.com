---
id: 379
title: 'ChatCodes in the google plus chat!'
date: '2012-12-19T01:53:50+00:00'
author: turbolego
layout: revision
guid: 'http://turbolego.com/367-revision/'
permalink: '/?p=379'
---

Alright, so this is my first attempt to get chatcodes to work in the google plus chat, and i think i’m on to something!

First off, i checked the dimentions of the chat-window, since i don’t want to make gigantic chatcodes where the user(s) have to expand the window to see the code.

[![Screen Shot 2012-12-19 at 12.38.06 AM](https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-12.38.06-AM-170x300.png)](https://turbolego.com/?attachment_id=368)These are the max-dimentions i found:

Width:

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, 38 commas  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 21 underscores  
00000000000000000000 22 numbers  
aaaaaaaaaaaaaaaaaaaa 22 letters (lower-case)  
BBBBBBBBBBBBBBBB 17 letters (Upper-case)

Height:

10 letters/symbols/numbers (anything)

[![Screen Shot 2012-12-19 at 2.04.33 AM](https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.04.33-AM-300x159.png)](https://turbolego.com/?attachment_id=369)If you post a new message to someone, the default size is f.ex. 17 upper-case letters in width and 10 letters in height, so this was my target size. Then, i looked for some ascii-art generators, and found this one: [http://www.degraeve.com/img2txt.php](http://www.degraeve.com/img2txt.php "http://www.degraeve.com/img2txt.php")

[![Screen Shot 2012-12-19 at 2.22.33 AM](https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.22.33-AM1-300x246.png)](https://turbolego.com/?attachment_id=371)Using one letter and color-html, i was able to make a ascii-art version of the “awesome smiley” picture. Then, i checked out what kind of formatting the google plus chat could provide, and found that if you typed:

\*something here\* = **something here**

\_something here\_ = *something here*

-something here- = <del>something here</del>

[![Screen Shot 2012-12-19 at 2.27.00 AM](https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.27.00-AM-300x220.png)](https://turbolego.com/?attachment_id=372)So, i then went in my favorite text-editor, pasted in the colorised html code, and gave the text a light background so that i could see what i was doing. Then, i added “\*”, “-” or “\_” depending on the color. This is the first code i came up with:

```
-AAAAAA-*AAAAA*-AAAAAA-
-AAAA-*A*_AAAAAAA_*A*-AAAA-
-AA-*AA*_AAAAAAAAA_*AA*-AA-
-AA-*A*_AAAAAAAAAAA_*A*-AA-
-A-*AA*-A-*A*_AAAAA_-AA-*A*_AA_*A*-A-<a href="https://turbolego.com/?attachment_id=374" rel="attachment wp-att-374"><img alt="Screen Shot 2012-12-19 at 2.28.49 AM" class="alignright size-medium wp-image-374" decoding="async" height="300" loading="lazy" sizes="(max-width: 173px) 100vw, 173px" src="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.28.49-AM1-173x300.png" srcset="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.28.49-AM1-173x300.png 173w, https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.28.49-AM1.png 232w" width="173"></img></a>
-A-_A_-AA-*AA*_AAA_-AAA-*A*_AAA_-A-
*A*_A_-AAAA-_AAA_-AAAA-*A*_AA_*A*
*A*_A_*AAAA*_AAA_*AAAAA*_AA_*A*
*A*_AAAAAAAAAAAAAAA_*A*
*A*_A_*AAAAAAAAAAA*_AAA_*A*
*A*_AA_*AAAAAAAAAAA*_AA_*A*
-A-_AA_*AAAAAAAAAAA*_AA_-A-
-A-*A*_AA_*AAAAAAAAA*_AA_*A*-A-
-AA-*A*_A_*AAAAAAAAA*_A_*A*-AA-
-AA-*AA*_A_*AAAAAA*_AA_*AA*-AA-
-AAAA-*A*_AAAAAAA_*A*-AAAA-
-AAAAAA-*AAAAA*-AAAAAA-
```

This code looked like crap, so i decided to change the letter “A” to something else…

```
-[][][][][][]-*[][][][][]*-[][][][][][]-
-[][][][]-*[]*_[][][][][][][]_*[]*-[][][][]-
-[][]-*[][]*_[][][][][][][][][]_*[][]*-[][]-
-[][]-*[]*_[][][][][][][][][][][]_*[]*-[][]-<a href="https://turbolego.com/?attachment_id=375" rel="attachment wp-att-375"><img alt="Screen Shot 2012-12-19 at 2.30.55 AM" class="alignright size-medium wp-image-375" decoding="async" height="300" loading="lazy" sizes="(max-width: 174px) 100vw, 174px" src="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.30.55-AM-174x300.png" srcset="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.30.55-AM-174x300.png 174w, https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.30.55-AM.png 234w" width="174"></img></a>
-[]-*[][]*-[]-*[]*_[][][][][]_-[][]-*[]*_[][]_*[]*-[]-
-[]-_[]_-[][]-*[][]*_[][][]_-[][][]-*[]*_[][][]_-[]-
*[]*_[]_-[][][][]-_[][][]_-[][][][]-*[]*_[][]_*[]*
*[]*_[]_*[][][][]*_[][][]_*[][][][][]*_[][]_*[]*
*[]*_[][][][][][][][][][][][][][][]_*[]*
*[]*_[]_*[][][][][][][][][][][]*_[][][]_*[]*
*[]*_[][]_*[][][][][][][][][][][]*_[][]_*[]*
-[]-_[][]_*[][][][][][][][][][][]*_[][]_-[]-
-[]-*[]*_[][]_*[][][][][][][][][]*_[][]_*[]*-[]-
-[][]-*[]*_[]_*[][][][][][][][][]*_[]_*[]*-[][]-
-[][]-*[][]*_[]_*[][][][][][]*_[][]_*[][]*-[][]-
-[][][][]-*[]*_[][][][][][][]_*[]*-[][][][]-
-[][][][][][]-*[][][][][]*-[][][][][][]-
```

This is the best so far, and takes up a little less space than the upper-case letter “A” (max 17 letters wide). So i made another version, 22 letters wide:

```
<a href="https://turbolego.com/?attachment_id=376" rel="attachment wp-att-376"><img alt="Screen Shot 2012-12-19 at 2.36.03 AM" class="alignright size-medium wp-image-376" decoding="async" height="300" loading="lazy" sizes="(max-width: 146px) 100vw, 146px" src="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.36.03-AM-146x300.png" srcset="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.36.03-AM-146x300.png 146w, https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.36.03-AM.png 233w" width="146"></img></a>-[][][][][][][][]-*[][][][][][]*-[][][][][][][][]-
-[][][][][]-*[][][]*_[][][][][][]_*[][][]*-[][][][][]-
-[][][][]-*[][]*_[][][][][][][][][][]_*[][]*-[][][][]-
-[][][]-*[]*_[][][][][][][][][][][][][][]_*[]*-[][][]-
-[][]-*[]*_[][][][][][][][][][][][][][][][]_*[]*-[][]-
-[]-*[][][][][]*_[][][][][][][]_*[][][]*_[][][]_*[][]*-[]-
-[]-*[]*_[]_-[][]-*[][]*_[][][][][]_*[]*-[][]-*[][]*_[][][]_*[]*-[]-
-[]-*[][]*-[][]-*[][][]*_[][][]_*[]*-[][][]-*[][][]*_[][]_*[]*-[]-
*[]*_[]_*[]*-[][][][]-*[]*_[][][]_*[]*-[][][][][]-*[]*_[][][]_*[]*
*[]*_[]_*[]*-[][][][]-*[]*_[][][]_*[]*-[][][][][]-*[]*_[][][]_*[]*
*[]*_[][][][][][][][][][][][][][][][][][][][]_*[]*
*[]*_[][][][][][][][][][][][][][][][][][][][]_*[]*
*[]*_[][]_*[][][][][][][][][][][][][][]*_[][][][]_*[]*
*[]*_[][][]_*[][][][][][][][][][][][][][]*_[][][]_*[]*
-[]-*[]*_[][]_*[][][][][][][][][][][][][][]*_[][]_*[]*-[]-
-[]-*[]*_[][]_*[][][][][][][][][][][][][]*_[][][]_*[]*-[]-
-[]-*[][]*_[][]_*[][][][][][][][][][][][]*_[][]_*[][]*-[]-
-[][]-*[]*_[][]_*[][][][][][][][][][][]*_[][][]_*[]*-[][]-
-[][][]-*[]*_[][]_*[][][][][][][][][]*_[][][]_*[]*-[][][]-
-[][][][]-*[][]*_[][]_*[][][][][]*_[][][]_*[][]*-[][][][]-
-[][][][][]-*[][][]*_[][][][][][]_*[][][]*-[][][][][]-
-[][][][][][][][]-*[][][][][][]*-[][][][][][][][]-
```

[![Screen Shot 2012-12-19 at 2.39.33 AM](https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.39.33-AM-300x131.png)](https://turbolego.com/?attachment_id=377)This is the last attempti’ve made so far, and could be the beginning of chatcodes on google plus in 3 “colors”. After further inspection, i found that the max length of “\[\]” is 25. Meaning you can take any picture to [http://www.degraeve.com/img2txt.php](http://www.degraeve.com/img2txt.php "http://www.degraeve.com/img2txt.php"), select the settings in the picture to the right, then, copy the ascii-code into a text-editor that can handle html-color (like TextEdit on mac) and add “\*”, “\_” or “-” around the text of different colors…

This is the largest “awesome smiley” google plus chatcode i’ve made so far, have fun posting it around, and have fun making more of these!

If you make a code, please post it in the ChatCodes group on google plus: [http://gplus.to/ChatCodes](http://gplus.to/ChatCodes "http://gplus.to/ChatCodes")

```
<a href="https://turbolego.com/?attachment_id=378" rel="attachment wp-att-378"><img alt="Screen Shot 2012-12-19 at 2.49.45 AM" class="alignright size-medium wp-image-378" decoding="async" height="300" loading="lazy" sizes="(max-width: 126px) 100vw, 126px" src="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.49.45-AM-126x300.png" srcset="https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.49.45-AM-126x300.png 126w, https://turbolego.com/wp-content/uploads/2012/12/Screen-Shot-2012-12-19-at-2.49.45-AM.png 228w" width="126"></img></a>-[][][][][][][][][]-*[][][][][][][]*-[][][][][][][][][]-
-[][][][][][]-*[][][]*_[][][][][][][]_*[][]*-[][][][][][][]-
-[][][][][]-*[][]*_[][][][][][][][][][][]_*[][]*-[][][][][]-
-[][][][]-*[]*_[][][][][][][][][][][][][][][]_*[]*-[][][][]-
-[][][]-*[]*_[][][][][][][][][][][][][][][][][]_*[]*-[][][]-
-[][]-*[]*_[][][][][][][][][][][][][][][][][][][]_*[]*-[][]-
-[]-*[][][][]*-[]-*[][]*_[][][][][][]_*[][]*-[]-*[][]*_[][][]_*[]*-[][]-
-[]-*[]*_[]_*[]*-[][]-*[][]*_[][][][][]_*[]*-[][][]-*[][][]*_[][][]_*[]*-[]-
-[]-*[][]*-[][][]-*[][][]*_[][][][]_*[]*-[][][]-*[][][]*_[][][]_*[]*-[]-
*[]*_[]_*[]*-[][][][][]-*[]*_[][][][]_-[][][][][][]-*[]*_[][][][]_*[]*
*[]*_[]_*[]*-[][][][][]-*[]*_[][][][]_-[][][][][][]-*[]*_[][][][]_*[]*
*[]*_[][]_*[][][][][][]*_[][][][]_*[][][][][][][]*_[][][][]_*[]*
*[]*_[][][][][][][][][][][][][][][][][][][][][][][]_*[]*
*[]*_[][][][][][][][][][][][][][][][][][][][][][][]_*[]*
*[]*_[][][]_*[][][][][][][][][][][][][][][][]*_[][][][]_*[]*
*[]*_[][][]_*[][][][][][][][][][][][][][][][]*_[][][]_*[][]*
-[]-*[]*_[][]_*[][][][][][][][][][][][][][][][]*_[][][]_*[]*-[]-
-[]-*[]*_[][][]_*[][][][][][][][][][][][][][][]*_[][][]_*[]*-[]-
-[][]-*[]*_[][]_*[][][][][][][][][][][][][][]*_[][][]_*[]*-[][]-
-[][]-*[]*_[][][]_*[][][][][][][][][][][][][]*_[][]_*[][]*-[][]-
-[][][]-*[]*_[][][]_*[][][][][][][][][][][]*_[][][]_*[]*-[][][]-
-[][][][]-*[]*_[][][]_*[][][][][][][][][]*_[][]_*[][]*-[][][][]-
-[][][][][]-*[][]*_[][][]_*[][][][]*_[][][][]_*[][]*-[][][][][]-
-[][][][][][][]-*[][]*_[][][][][][]_*[][][]*-[][][][][][][]-
-[][][][][][][][][]-*[][][][][][][]*-[][][][][][][][][]-
```