# SalsifyChallenge
Salsify API Coding Challenge

## Overview

The objective of this assignment was to develop a server in any language that could handle an HTTP GET request of a line in a file. The response would either be a status of 200 with the coresponding text or a status of 413 if the line was out of bounds.

## My Solution

I chose to use Javascript solely because of express.js and it's framework for handling requests. The textfile gets parsed and divided up by "\n" which it is then stored in an array called fileArr. When a request gets called the server checks if the line number is greater than or equal to the size of the array. If it is it returns an empty string ("") and a status of 413 if it's less than the size then it takes the line at that index and sends that along with a status of 200.

## Analysis (Large Files vs. A lot of Connections)

The way I tested my program was I made a bash program that made a curl request to my loopback IP where I called a random number from 0-1,000,000 for the line number. I have a sleep timer on that so I could see what happens if I made it sleep less and less. The results were that It handled well even when I didn't have it sleep and when I got the textfile size up to almost a 1GB. I didn't make the textfile any bigger since my linux environment on my computer is only ~10GB. To handle a lot of requests I used the SetImmediate() function in the express library which works similar to that of an async function which let I/O go before doing any process work. I know every line is the same line of text but that doesn't make a difference since it sill has to look up the line at that index.

## How did I know what I was doing?/How long did it take?/What would I do if I had unlimated time?

### How did I know what I was doing?

I mainly used stackoverflow for most of questions and the express website's library. It's been a while since I've coded in Javascript but I had to make a RESTful API for another class in Javascript so I figured I'd use this again.

### How long did this take?

(1 hour - 1.5 hours) to make the server
(30 minutes) to make the test script because $RANDOM wasn't working properly and I had to lookup an example

Overall - 2 hours

### What would I do if I had unlimated time?

If I had unlimated time I would try and use a JSON object instead of an array which would be grouped by the line index but inside of that parent would have the line and a counter of how many times that line got called. I would then do some work where I would rearrange the line indeces by which line is getting the most requests. I would rearrange maybe every minute or after n calls. This would require some memory management because you need to pause API requests while you're manipulating the JSON object

## How to Execute

1. the ./build.sh does nothing since javascript doesn't need to be compiled so just run ./run.sh
2. You then have 3 options.
    * curl 127.0.0.1:8082/lines/[linenumber]
    * http://127.0.0.1:8082/lines/200
    * or run ./testing.sh
