# Code Institute Milestone Project Experience 297

![N|Solid](https://i.imgur.com/e0lZKtB.jpg)

Whether you're at work, on the road or at the beach, you can easily view what's in your immediate surrounding.

# Experience 297 | Here, Near and Everywhere!
Experience 297 will forever change the way you and local business Experience Aruba. With our Proximity/Location Based Experience App you will be able to search, view and interact with everything and everyone around you. Our Experience is categorized in Three Flavors:

  - Here 
  - Near 
  - Everywhere 

# Here
  - We Definitely believe that you should be on the Map.

# Near
  - Your overall experience goes beyond your physical location.

# Everywhere
  - We know how dedicated you are on impacting our community.


#### Who, What, When and Why:
 - Who: A spectacular presentation from an innovator and futurist.
 - When: Everything started in August 2018 with a simple yet impactful presentation
 - Why: As I started my Developing Enthousiasm I thought, how can I impact my community?
 - What: Well everything currently is internet & mobile, so why not make Convenience an Experience. And at that moment I thought about a Location Based Experience where I can create experience with everything and/or everyone on the island of Aruba.
  
# UX
1. Explain on the website about the experience I want to create with the "Experience 297 App" 
2. Explain how the end-user will interact with the website
3. User should be able to seamlessly navigate through all sections and pages.

# Newly Added Website Interactive Features & Functionalities
* Added Sign-in Page
* Added Sign-up Page
* Landing Page Optimization
* Page Transition Effect
* JavaScrip, JQuery and API Integration
* ChatBot Integration to enhance Interaction.

# Features
* User will be introduced to Aruba's first Location Based Experience Solution.
* User will grasp the experience within a few minutes. 
* End-User will be illustrated 3 different screen captures from our Experience 297 App.
* Users include End-User and Businesses.
* Business User will get all information regarding our package(s) and will be able to click on button in order to be re-directed to the Sign Up Page.  
* Easy Flow & Browsing Interaction With A One Page Transition Design
* One Page Scroll Effect Transition
  But I have to admit, I was able to add the CSS `scroll-behavior: smooth;` how ever this option doesn't work on all browsers:

  - [x] Chrome
  - [x] Internet Explorer
  - [x] Mozilla Firefox
  - [x] Opera
  - [ ] Safari (unfortunately not compatible)

* Image(s) View
* Contact Us


# Technologies Used

* HTML5
* CSS
* Bootstrap 4
* JavaScript
* JQuery

# Testing

As mentioned in the course everything should be developed from the "Mobile First Approach" and definitely be intuitive and interactive. Whith this in mind I searched different websites and sources in order to develop to the best of my capabilities. After developing the single index.html one page scroll, the Interactive Milestone Challenge pushed me to challenge myself. So, I created 2 additional pages where I created a Sign-In and Sign-Up page. I ran a few tests on different devices and different browsers in order to confirm that everything works within the specs and line of codes.

1. Go to the "Landing" Page
    1. Go to the Landing Page from Google Chrome Web Browser.
    2. Page will have a image background on load and will load a background video with parralax effect and added an `linear-gradient` effect.
    3. Navigation Bar will have the class "navbar" which has a transparent background. 
       The navbar will transition when js/transition.js file script line of code `if(!entry.isIntersecting)` is triggered.
    4. Added Logo above text and added additional CSS to enhance button && button:hover.
    5. The Image will remain fixed in the background and you will see the scrolling effect it creates by staying in place.
    6. Header Logo, Title and Button adjusts/reacts to specific min/max screen size.

2. Go to the "About" Page
    1. Go to the "About" Page from Google Chrome Web Browser.
    2. Inspect the different device aspect/screeen size ratios.
    3. Columns Will adjusts/reacts to specific min/max screen size, I decided to maintain a single transition from     deviding into 3 columns of devices with a screen size bigger than 900px and  switching to a full width at min width of 900px. The reason for this is that I would like to keep a uniformed look instead of breaking down to 2 columns and a single column beneath.
    4. Changed Image to illustrate cross-platform compatibility. 

3. Go to the "Pricing" Page
    1. Go to the "Pricing" Page from Google Chrome Web Browser.
    2. Inspect the different device aspect/screeen size ratios.
    3. Pricing Page has been totally re-freshed in order to show interactivity while on`:hover`effect. I also added font-awesome icons to enhance UX.

4. Go to the "Promotions" Page
    1. Go to the "Promotions" Page from Google Chrome Web Browser.
    2. Inspect the different device aspect/screeen size ratios.
    3. Promotion Slider will adjust to the screen size accordingly and includes swiping capability for handheld devices enhancing the overall experience.

5. Go to the "Contact" Page
    1. Go to the "Contact" Page from Google Chrome Web Browser.
    2. Inspect the different device aspect/screeen size ratios.
    3. The "Contact" Page has been completely redesigned with the Logo and Address being side-by-side with the Google Maps JavaScript API
    4. Click on the "Mobile" icon in order to place a phone call.
    5. Click on the "Paper Plane" icon in order to send an email.
    6. Click on the "Facebook" icon in order to be forwarded to the Facebook Page.
    7. When User reaches bottom of the page it will trigger `if(Math.ceil(scrolled) === scrollable) {alert('Thank You for Visiting My Page!!');` alert everytime.
            }`

6. Go to the "Sign-Up" Page
    1. Go to the "Sign-Up" Page from Google Chrome Web Browser.
    2. Inspect the different device aspect/screeen size ratios.
    3. The "Sign-Up" Page was developed in order to incorporate JavaScript and JQuery actions and functionalities. A form has been created, which a user will enter their "name", "email", "password" and "re-enter password".
    4. As instructed in the module, I have successfully integrated EmailJS in my project.
    5. After filling the form and button click it will trigger `emailjs.send("gmail", "experience_297",`, which will "GET" `{{from_name}} && {{from_email}}`, afterwards EmailJS will trigger an email response via Gmail with the generated template to the email provided and admin email as confirmation of form submission. Email Triggered Successfully, also user will be prompted an alert `alert("Your Submission Has Been Successfully Processed", response);`. 

7. Go to the "Sign-In" Page
    1. Go to the "Sign-In" Page from Google Chrome Web Browser.
    2. Inspect the different device aspect/screeen size ratios, Images will resize to acommodate size ratios and in some instances for smaller devices Logo and Phone images will not be displayed.
    3. The "Sign-In" Page was developed in order to incorporate JavaScript and JQuery actions and functionalities. A form has been created, which a user will enter their "email" and "password". 
    4. After filling the form and button click it will trigger `form.addEventListener('submit', (e) => {})`, which will "GET" and "POST" values in the web-browser's address bar url ('username' and 'password').

8. ChatBot Integration 
    1. In order to go the EXTRA MILE for my Milestone Project I decided to include a ChatBot named "Code Institute 297", in order to interact with Code Institute Assesment Team.
    2. Expected Behaviour from the the ChatBot "Code Institute 297".
    3. ChatBot has been configured in "If" this "Then" that:
      * Default Greeting: Hi, Welcome to a brand New Experience!! Powered by Code Institute ... Check out our flyer and let us know how can we assist?
      * I need some more information! 
    4. However, some fuctionalities have been configured as Custom Payload "JSON". For Example if you type in the Chat Box: 
      * How do I sign up?
      * How did you build this website?
      * What do you mean with proximity platform? <--> This Option will show a custom card option
      * More Info on Package
      * What Happens to the menu bar when I scroll down from the top? Because it is transparent.
      * Where do I SignIn and what happens when I submit?
      * How did you manage to send the user an email after successfully signing up?
    5. After filling the form and button click it will trigger `form.addEventListener('submit', (e) => {})`, which will "GET" and "POST" values in the web-browser's address bar url ('username' and 'password').


# Deployment 
* The Deployment Code has been directly pulled from the development/testing code on github. 
* Git Repo was deployed on GitPages link: https://ck00lman.github.io/cimpexperience297/
* Git Repo/Pages were hooked/connected on Netlify 
* Nelify domain link: https://zen-euler-295b8c.netlify.com
* Configured My Own Domain on GoDaddy (www.experience297.org) to point DNS to Netlify
* Configured Let's Encrypt to provide an SSL for the Domain experience297.org
* Configured and Connected Netlify Domain to Deploy and Publish via Domain: https://www.experience297.org
* Website Page(s) & Domain is Live ready to be assessed by Code Institute Team.

# Credits

* Google Fonts: https://fonts.google.com
* Font Awesome: https://fontawesome.com
* Pixabay: https://www.pixabay.com
* Pexels: https://www.pexels.com
* Color Hex: http://www.color-hex.com
* Pine Tools: https://pinetools.com
* Pixlr Photo Editor: https://pixlr.com
* Photo Resizer: https://www.photoresizer.com
* jQuery: https://code.jquery.com/
* W3Newbie Tutorials: https://w3newbie.com/w3newbie-tutorials/
* W3School (HTML, CSS, and Bootstrap): https://www.w3schools.com/default.asp
* Bootstrap 4 Responsive Pricing Table Snippet: https://startbootstrap.com/snippets/pricing-table/
* Code Institute Modules: Course Resources from Modules 2, 3, 4, 5 and 6.
* Stackoverflow: https://stackoverflow.com/ 
* GitHub: https://www.github.com
* Animate.CSS: https://animate.style/

### Content
* All Text Content on website is part of the Experience 297 App which I own and will be introducing soon.

### Media
* Pixabay: https://www.pixabay.com
* Google: https://www.google.com
* Pexels: https://www.pexels.com
* Poster My Wall: https://www.postyermywall.com
* AppLaunchPad: https://www.theapplauchpad.com
* Imgur: https://www.imgur.com

### Acknowledgements
* I received inspiration from the following website(s):
    * HTML5 UP: https://html5up.net/
    * W3Newbie Tutorials: https://w3newbie.com/w3newbie-tutorials/
    * TEMPLATED: https://templated.co/
    * The Theme Wagon: https://themewagon.com/theme_tag/free/
    * Easy Tutorials: https://www.youtube.com/channel/UCkjoHfkLEy7ZT4bA2myJ8xA
    * Stackoverflow: https://stackoverflow.com/
    * CSS-Tricks: https://www.css-tricks.com
    * Dark Code: https://www.darkcode.info/ 
    * True Coder: https://youtu.be/t-EMinSz_Tk
    * Sitepoint Community: https://www.sitepoint.com
    * Kommunicate: https://www.kommunicate.io
    * GitHub: https://www.github.com
    * Animate.CSS: https://animate.style/