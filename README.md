# Coding Challenge
<!-- This is a template for your Readme. Please keep the headings but remove the instructional text, and replace the video with your own screen recording. -->
## My Solution In Action
<!-- Add your screen recording here. You can drag the video from your local folder to this page to add it automatically.  -->

https://github.com/ralotusin/coding-challenge-socrest/assets/128768603/77edaf59-723a-4f35-94fc-03479ab11fb8


## What I Built
  >  Complete the task as if for a real client project.  

Web application to help users filter news topics of interest.

* Users can enter a topic, and the app will display recent news stories and update them on new releases.
  - How will I get news
    + https://newsapi.org/s/australia-news-api
  - Limitation: 
    + 100 requests per day 
    + Search all articles and get live top headlines 
    + Articles available with 24 hour delay 
    + Search articles up to a month old 
    + CORS enabled for localhost 

* Choose programming languages and frameworks to showcase strengths.
  - Javascipt, Next.js, tailwind css

## How I Built It
I used javascript, Next.js, and tailwind css to create a simple web application.

```bash
run npm install
npm run dev
# create .env.local
# add NEWS_API_KEY="e236630228ab459187557d1033ef99b1" into .env.local
```

I implemented Next.js version 13.4 with an "app" directory and "serverActions." This allowed me to structure separate layouts for the client side and server side.
To manage the response, I utilized the useState hook, which led me to create the "Body" component. For the initial state, I utilized serverActions from the main layout to call the API. Subsequently, when the client clicks the filter button, the server API will be triggered with the specified filter string parameter.



```javascript
// @/components/body.tsx
"use client"; // declaration for using react hooks and more
...
import { useState } from "react";
...
// initNews is the initial API reaponse props from main Page.tsx
const [news, setNews] = useState<Article[] | null>(initNews);

// @/services/getNews.ts
"use server"; // declaration for all of functions are using on server
import "server-only"; // safety check for serverActions
```

<!-- 
Explain the languages, frameworks or other tools you used.

You can add screenshots of your code or tool here. Just drag the image from your local folder to this page to add it automatically.
![Sunset_in_El_Porto,_California_(8074300769)](https://github.com/cincodemayo/test/assets/54873082/6b4f3618-09a8-4974-845b-ef888fdcb4bf)

You can also add code snippets.
```python
def hello_world():
  print('Hello world!')
```
-->

## Why I Built It This Way
I had to build fullstack application because I cannot call news API from frontend with CORS issue.
And Next.js is my ideal choice for the fullstack web applications with built-in routing, automatic code splitting, and CSS-in-JS support further streamline development, while a strong community and documentation provide valuable resources for building the web application.

## What I Would Do Differently
<!-- Given more time or another opportunity, would you do something different? Lay out your ideas or plans here. -->
I would like to implement lazy loading news contents. So, when client scroll the page, and it will show 10 by 10 or more pages.
Also I want to add local storage hooks that can save search histories, favorite and more features.
