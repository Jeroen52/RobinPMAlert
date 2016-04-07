# RobinPMAlert
Messages all inactive people in your Reddit robin room

#### For [reddit's 2016 April Fools Day prank](https://www.reddit.com/robin/)

This script sends the following messages to offline users in your Robin room:

```
The merge is about to happen! So, put on your browser and autovote (https://redd.it/4cymxq) or just vote stay yourself now.  www.reddit.com/robin
```
You can customize the message to fit your room's merge schedule.
The script has a rate limit so that you don't get banned. The userlists are fetched directly from the room, and the results are shuffled to spread the messages evenly across all AFK users, even when multiple people are running the same script.

## Installation
Install a userscript extension such as greasemonkey or tampermonkey:  
Click here: http://tampermonkey.net


Then, click this link to install the script:  
https://github.com/Jeroen52/RobinPMAlert/raw/master/RPMA.user.js

After that, go to your messages:
https://www.reddit.com/message/compose/

The script should start automatically filling the forms and sending messages about the merge. The rate is around 1 message every 25 seconds, so you might think that it doesn't work while it in fact does.

If you get a bunch of code instead of it installing, you can copy and paste the code as a new script in greasemonkey/tampermonkey.
