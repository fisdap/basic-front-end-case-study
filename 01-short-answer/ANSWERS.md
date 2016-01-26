Name: Heather Lutz

What, if any, is your thinking about or experience with testing your code? This can be unit testing, qa testing, or functional testing.
	I run on the theory of code a little, test a little. I test in small pieces so there should be few to no grand curtain drops, and any errors should not be ignored. A lot of my testing is done manually through logging to the console and Google Dev Tools (network logs and the debugger). I also use Webstorm as my IDE, which also has a debugger that can be run for node.js on the back end. The debugger allows me to set up breakpoints, step in and out of code, and step over functions. 



What are your go-to sources of learning when you want to learn something new? Describe how you learn best.
	When I want to learn a new language, I generally look at Code School or Code Academy to see if either site as an introductory course on the language. I can usually make it through one of these courses in a few hours, and that gives me an overview of how the language I am learning compares to the languages I already know. If no online course exists, I start looking at some of the basic structures of the language. For instance, what does an array or map look like in the new language? How can you print to the console? What is the general syntax used? As I look this information up (or cover it in the online course), I work through examples and compare what I think is going to happen as I run the code, and compare that to what actually happens. I also take notes and keep a log book of information as I come across it. 

	<!-- This past weekend, I dove into some PHP, and used this exact process. I was able to compare what I know of JavaScript arrays, objects, and object constructors, and apply that to PHP arrays, associative arrays, and classes. Once I had the general patterns down, I looked up information as needed on sites like Stack Overflow. One of the major things I looked up as I was doing the third part of this case study was array_rand(). Originally, I was using rand() to randomly generate a number between 0 and the length of the array, then echoing that index number of the array. array_rand() shortened this somewhat. In addition to Stack Overflow, I pick up information from videos (Youtube), blogs, and documentation. I also have a fairly large network of family, friends, and former classmates and instructors who can offer help. -->

	When I learn, I generally look for resources that provide examples or videos as I learn best by actually running through the code myself. While I can certainly read straight documentation and apply that to my code, the process is a good deal smoother if I have a template to work from.     



Talk about a time when you dealt with some particularly tricky Javascript.
	
	While doing my personl project, there was quite a bit of logic involved on the client side, and one particular portion of the Javascript was quite memorable. I designed an application that would track character equipment for a boardgame that lasted over several months. Each character could equip designated equipment for that character, so long as the character had space. For example, if a character held an item in the character's left and right hand, I had to develop logic that would prevent the user from using a piece of equipment that would require both hands (because the character's hands were full). 

	First, I developed logic to determine what items were already equipped by using a series of if/else statements. If the div in the html contained nothing, then a key indicating that slot would be assigned a value of 'none', and be pushed into an array for storage. Else, if that slot did contain an item, the key for that slot would be assigned the name of the item and be pushed into the array. After going through a pair of if/else statements for each emptly slot, I ended up with an array containing objects that contained keys for each position, and values declaring whether that position was empty (none) or contained an item. An example of one of these if/else statements is:

		              <!--   if (response.data[i].acc1==null){
                    		accessory1 = 'none';
                		}else {
                    		accessory1=response.data[i].acc1;
                		}  -->

    Once I knew which positions were full, I had to handle the user trying to equip a weapon. This used a combination of switch and if/else statments. Using a switch, I set the expression for the switch to the item type, which was designated by a number. There was also a total variable which kept track of items carried by adding up each of these numbers. Once the switch determined which item type was trying to be inputed, an if/else statement within the switch determined which slot was empty based on the data stored in the object mentioned above, and whether or not the character could carry more items. If there were no empty slots, or the character couldn't carry further items, then an alert was generated notifing the user of the issue. This code looked something like this:


           <!--      case (type='1'):
                type=parseInt($scope.type);

                if(type + total >2) {
                    alert("You cannot carry another item. Unequip one of your current items.");
                } else{
                        if ($scope.equipFactory.getEquip().syndraellh == 'none') {
                            $scope.equipFactory.updateEquip($scope.user, $scope.game, $scope.character, $scope.name, $scope.equipid, 'left_hand');
                        }else if ($scope.equipFactory.getEquip().syndraelrh == 'none'){
                            $scope.equipFactory.updateEquip($scope.user, $scope.game, $scope.character, $scope.name, $scope.equipid, 'right_hand');
                        }
                    }

                break; -->
	



Talk about a time when you struggled with a css or browser bug.
	While working on my husband's website, I had the opportunity to set up a carousel. Thankfully, I already had some JQuery code for a carousel, so that worked great. However, I wanted to layer text and the next/previous buttons to control the slides on top of the carousel with a z-index. I tried to give the buttons and text a higher z-index than their parent elements and nothing happened. After some digging, I discovered that z-index will not have any effect on a static element; there needs to be some positioning involved. After setting the position to relative on the elements with the z-index, it worked. I also discovered that the parent container needs to have a relative position in order for a child with absolute position to be correctly placed within the parent. I ran into this issue when trying to get the company logo positioned in the top left corner of the site's header. 


What is your IDE or Editor of choice? What to do you like about it?
	As stated above, I primarily use WebStorm, and I like it quite a bit. It is helpful to have the command line available from within the IDE, and not only the command line, but the opportunity to have multiple terminal sessions open at once. This allows me to run the debugger, Grunt, Mongo, and nodemon simultaniously. I also like that WebStorm stores preference information for how the code appears on the screen. This makes seeing the code and errors much easier, and it helps when your group is working off of a set of code standards. It's good to have some of the standards information such as indents preset. WebStorm also catches some code syntax errors automatically and underlines them, which helps. In addition to WebStorm, I have worked in Sublime Text and Atom. 


What technology are you most excited to work with over the next two years?
	There are several technologies I am really excited about. As Angular begins to switch over to Angular2, I am looking forward to grasping some of the changes and picking up TypeScript. In the long run, I would like to look into Java and Swift. First, because both languages are used in developing for mobile apps. While I have had some experience with Ionic, it would be nice to have a better understanding of some of the code used for apps. I am interested in apps in part because of curiosity, and more broadly because I think apps do a lot for accessibility. I also want to cover Java because it is fairly flexible, has been around for a while, and is statically typed. After covering Javascript and its flexibility, Java could be an interesting contrast. 

