Name: Benjamin Thvedt 



What, if any, is your thinking about or experience with testing your code? This can be unit testing, qa testing, or functional testing.



Full Disclosure: In my actual work, in practice I just refresh the page over and over again and see if everything does what it's supposed to do. Mostly I just write code snippets and hit refresh. I've never used a formal testing framework on the job.

However outside of work, I've experimented with some small tutorials and libraries for unit testing a couple times, so I at least have an idea of the concept. And it doesn't take much imagination to see where it could be not only beneficial, but even essential, depending on the environment. For larger or more collaborative environments, I imagine a test driven development process can streamline and formalize the process from going to concept to code, drastically reduce unexpected behaviors, and make it easier to track down the unexpected behaviors that still manage to surface. 

Bugs are scary. One bug, just one, can torpedo a large amount of effort. The bigger the effort, the scarier the bug, and the more essential a proven testing process becomes. So that, as well as providing some structure to a development process, is where it could be valuable. Anyway, that's my thinking!


Talk about a time when you dealt with some particularly tricky JavaScript.



We've all probably have had memories of annoying spaghetti jQuery or have the experience to know that writing code without a clear goal in mind can lead to a quagmire (I know I've done it).

And personally, this is kinda funny, when I first started working, I .. I didn't know about the JavaScript console. I don't know how I didn't know, and it probably took me longer than it should have to discover it... so anyway, at first, writing JavaScript was pretty tough.

Well I eventually discovered the console and things got a little easier. But I remember the last time I truly got nervous was a few months ago while working on a side project (the JavaScript I do for work is usually pretty straight forward). 

So I was working on this side project (I hope to finish it one of these days). It was a site that does flash cards, yeah I know there are a few of those already, but I wanted to make mind different. So that's why I was doing it.

So, to get the flashcards to animate like I wanted them to, I stacked 3 divs on top of each other with absolute positioning. The one being shown was the “current card”, the two ones that weren't being shown were the “previous” and “next card”. Then I applied classes conditionally with transitions that gave approximated the visual experience of flipping through a deck. I was pretty happy with what I could do with this setup, but did get kinda tricky because the divs that were supposed to be representing the first, previous, and next card were always changing around.

Anyway for the next step I wrote a callback that got Json from the server and in the front end logic I made it so that each card's information was an object in an array. Then I had to match the appropriate card object in the array to the appropriate div and display it as I flipped through the cards. That got tricky because which div was supposed to be which was always changing, but also so was the index of the array at the same time and I remember it was tricky to match up.

Then I made it so that the user could add cards anywhere and delete cards from anywhere, so the array of cards could change too, and .. ended up getting really stuck. It got to the point where I was afraid I wasn't going to be able to make it work, that I would have to go back and start over from an earlier point.

Well I eventually got everything working, I don't remember how, but that was the last time I was truly afraid that a bunch of code I spent a long time writing wouldn't work.

The process could have been made easier by really planning and understanding the logic before I started writing code. I was just writing code by the seat of my pants. Isuppose when it comes to things that can get complicated, it's easy to get stuck, if I'm doing things that way.



Talk about a time when you struggled with a css or browser bug.


So this happened not long ago.

There is this one website where every month I get requests for a bunch of small tweaks. Ive been working on it for a while, and the amount of changes I've made to the site have really built up.

Anyway, the Client who owns the site got an iPad, and really likes it. Her browser of choice is Chrome. I don't think that Chrome for the iPad really has any native debugging tools (I could be wrong but I've looked and didn't find any), so naturally, given a very very heavily tweaked site plus a Client who now only likes to use Chrome on her iPad, well the situation was primed for an interesting bug to pop up.

And it happened. I got an email saying that links on the site were broken. But only for iPad and Chrome. I busted out my iPad and sure enough, on the site you had to tap the links several times to get them to work. It wasn't a problem for regular users, but when I was logged in as an Admin it was happening.

Well, the first thing I did was find a little tool to help me debug (it was called Weinre, it lets you browse a site on your iPad over a local network while you can have the developer console open on your computer) so I got it set up and everything. Naturally as soon as I got it working I realized there was actually an easier way to track down the bug.

I had missed some important clues. The bug only occurred when the user was logged in. The client had an admin role, so that narrowed down the places to look. 

So I started disabling things that I thought could possibly be only affecting the front end for admins. and by the time I had disabled the third or fourth thing, the links started working again. The thing I disabled was unessential for the Client anyway, so I simply disabled it for her specifically, and then I thought I was done. Naturally, the next step was to send out emails bragging that I had fixed the bug and bragging about how smart I was for fixing it.

So, imagine my surprise when the reply was “Um.. the bug's not fixed”

I had found a bug related to links, specific to Chrome on the iPad, and fixed it. It was reasonable to think I was done, right? Turns out there was a SECOND bug causing links to not work, but like the first one, it ONLY happended for Chrome on the iPad for logged in Admins, and THAT was the one they actually wanted me to fix. Turns out it only showed up on a specific page in the Admin section related to the profiles for new site users and that's why I missed it, I didn't know it was on that one page. 

So, nothing on that page was working. Not just links (which is all the email mentioned) but everything. Anyway, I started by looking for all the JavaScript that I had written that was only applied to that one particular page. Like I said, I had done a LOT of requests for that site, (in a haphazard and random fashion of course, but that's just how requests came in), and there was like 3 JavaScript files being all applied to that one particular page.

Well a long time ago the Client's staff were getting confused on that page so she made a request and part of it was to include a couple tool tips that could pop up in specific situations. To make them pop up in the right place, I wrote some code keeping track of the mouse position. There was a line that logged the mouse position to the console that I had forgotten to get rid of. 

Turns out that for some reason, it was this line that was making certain things untappable on that particular page if you were using iPad Chrome! Talk about random. And because it only showed up for one particular browser on one particular device, it had gone unnoticed for a while. Anyway once I deleted that line, everything worked again. 



What is your IDE or Editor of choice? What to do you like about it?



I use Sublime Text. I've looked at some IDEs such as NetBeans and Eclipse, but Sublime Text does everything I need however so that's what I've been using. I like the fact that you can download plugins for it, the syntax highlighting for many different languages, and some of the themes are pleasing to my eye which is nice for something that I stare at a lot. Actually, I don't use many of the fancy features it has (and it does have a lot) but it's nice knowing that they are there.



What technology are you most excited to work with over the next two years?



I'm excited about a bunch of technologies. Well to get straight to it, I suppose I'm most excited about the continual development going on in the JavaScript space. New front end frameworks, new libraries like D3 (actually I don't know how new it is but that particular library captured my imagination for a while), I've done plenty of messing around with Node, and who knows what cool stuff that might come out in the next couple years? I mean, I gotta focus on what I've gotta do day to day, but hopefully I can land in a situation where the stuff that I WANT to focus on and the stuff that I actually DO focus on become more aligned in the future. And in the extreme general sense... I like to create things, and I've made investments in becoming a coder, so anything that helps me create in that area is going to capture my interest. 

Also I look forward to learning much more about more intensive coding work, from principles of Object Oriented design on the back end, to formalized development methodologies, to interesting projects, to learning about algorithms, design patterns, and hopefully having the opportunities to develop and grow as a professional. I suppose that's what really interests me the most.

I also want to explore cross platform frameworks like Cordova, explore app development for mobile devices, try out the Oculus rift, learn more about networking and servers, and try some new languages. So there's those things too.

