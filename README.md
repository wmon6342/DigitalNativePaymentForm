# DigitalNativePaymentForm

Appendix A – User Stories


ID 
Stakeholder 
User Story
1 
Commercial  Director
As a user I need to be able to insert my name into the form
2 
Commercial  Director
As a user I need to be able to insert my email into the form
3 
Commercial  Director
As a user I need to be able to insert my Credit/Debit Card into the form
4 
Commercial  Director
As the Commercial Director I need users to only be able to enter valid names
5 
Commercial  Director
As the Commercial Director I need users to only be able to enter valid email  address
6 
Commercial  Director
As the Commercial Director I need users to only be able to enter valid credit  card
6 
Marketing  
Director
As the marketing director I need the page to conform to our branding  guidelines and use our brand colours: Green RGB 137,200,46 Hex 89c82e  Grey RGB 60,60,59 Hex 3c3c3b Pink RGB 231,0,100 Hex 700064
7 
Marketing  
Director
As the marketing director I need the page to be consistent with our other  pages i.e., using the same Calibri font and text size, centred horizontally and  vertically and to match the wireframe below:

8 
CTO 
As CTO I need the application to reduce the load on the back-end server,  validation should be done on page.
9 
CTO 
As CTO I need to ensure all applications can be accessed by all users, the  application needs to conform to w3c accessibility initiative. Introduction to  Web Accessibility | Web Accessibility Initiative (WAI) | W3C 
Checklist of Checkpoints for Web Content Accessibility Guidelines 1.0  (w3.org)
10 
CTO 
As CTO I need the application for follow our UX (User Experience) guide so  that each user has the best possible experience. This should include any  issues being highlighted to the user when they are still entering a field of as  soon as possible after.  
Correct fields should be shown as DN green, errors shown in DN Pink. 
11 
CTO 
As CTO I need to ensure that any data capture is secure and there is no risk of  database corruption through SQL injection. Only standard upper / lower case.  letters and printable characters: !#$%&'*+-/=?^_`{|}~ should be allowed in  all fields.
12 
CTO 
As CTO I need to ensure that all accepted credit cards conform to the LUHN  algorithm. 
13 
CTO 
As CTO I need to ensure that all applications can run on all common  browsers, devices and screen sizes.
14 
CTO 
As CTO for this exercise, I need an Email to test@dn-uk.com be sent  containing the validated information when a user presses a ‘Submit’ button. 





Appendix B Simplified Test Suite Template 
Below is a simplified Test Suite Template that contains the test cases that need to be completed. 
Copy this into Excel. Tools such as Jir0a and Azure DevOps are often used to track tests for User Stories.
Test 
Case 
ID
User  
Story  
ID
Acceptance Condition 
Preconditions 
Test Data 
Steps /  
Instructions
Expected Results 
Actual Results 
Pass  
/ Fail
Notes
1 
1 
‘John Doe’ is a valid name 
Web page showing  
validation screen is  
loaded. 
Web page contains input capable ‘Name’ field. 
John Doe 
Enter ‘John  
Doe’ into Name  field.
On leaving the field  (tab or mouse  
away) the name  
field entry box  
turns green.
Name field has turned green
Pass


2
2
‘john.doe@mail.com’ is a valid email address.
  Web page showing validation screen loaded. 
Input ‘Email’ field loaded.
john.doe@mail.com
Enter ‘john.doe@mail.com’ into Email field.
On completion the input Email box turns green.
Email Field has turned green
Pass


3
3
‘1234 5678 1234 5678’ is a valid card number. 
Web page showing validation screen loaded.
Input ‘Card Number’ field loaded.
1234 5678 1234 5678
Enter ‘1234 5678 1234 5678’ into Card Number field.
On completion the input Card Number box turns green.
Card Number field has turned green
Pass


4
4
‘J0hn.D0e’ is not a valid name.
Web page showing  
validation screen is  
loaded. 
Web page contains input capable ‘Name’ field. 
Appropriate RegEx in HTML pattern field.
J0hn.D0e
Enter ‘J0hn.D0e’ into Name field.
On leaving the field the name field entry box turns red.
Name field turned red
Pass


5
5
‘John.doemail.com’ is not a valid email address
 Web page showing validation screen loaded. 
Input ‘Email’ field loaded.
John.doemail.com
Enter ‘John.doemail.com’ into Email field.
On completion the input Email box turns red.
Email field turned red
Pass


6
6
‘1234 $678 1234 $678’ is not a valid card number
Web page showing validation screen loaded. 
Input ‘Card Number’ field loaded. Appropriate RegEx in HTML pattern field.
1234 $678 1234 $678
Enter ‘1234 $678 1234 $678’ into Card field
On completion the input Card Number box turns red
The Card Number field turned red.
Pass


6
6
Page conforms to the brand colors: Green RGB 137,200,46 Hex 89c82e  Grey RGB 60,60,59 Hex 3c3c3b Pink RGB 231,0,100 Hex 700064
Web page showing validation screen loaded.
-
Load webpage, check CSS overview in the DOM.
When the webpage is loaded, the page conforms to the style guide set out by the Marketing Director.
CSS overview showed that I put in the wrong type of pink. Checking this I managed to put the right rgb() input.
Pass


7
7
Wireframe of the submit form to conform to the brand style guide (the image below as reference):



Web page showing validation screen loaded.
Name: [placeholder text]
Email: [placeholder text]
Card Number: [placeholder text]
Load webpage.
When the webpage is loaded, the form conforms to the style guide set out by the Marketing Director.
:invalid pseudo-selector marking the entire box in red. Putting input:invalid stops this problem.
Pass


8
8
Validation done on-page
Web page showing validation screen loaded, and form input fields filled in.
John Doe
Fill in the relevant fields.
Form input fields turn red or green depending on validation state.
Fields all submitting when the submit button is pressed.
Pass


9
9
Web content conforms to w3c accessibility guidelines.
Web page loaded with form input fields.
-
Check HTML file for placeholders, alt text fields, color blindness tests
Form conforms to w3c accessibility guidelines
Placeholders are put in place, added a button that changes the background color to white for those Red/Green colorblind
Pass


10
10
Web content following stakeholder UX guides.
Web page has loaded. Input fields have been filled in.
John Doe
johndoe@mail.com
1234 5678 1234 5678


Enter the test data into the test fields
If test data not in required pattern, text field is DN pink. If correct pattern, field is DN green.
All correct patterns imputed and seen in DN green.
Pass


11…
11
SQL database is safe from SQL injection character patterns. Only uppercase/lowercase and  !#$%&'*+-/=?^_`{|}~ allowed in all fields.
Webpage loaded with form input fields.
John.D0e in name field.
Enter the test data into the name field
Text field DN pink because of banned characters.
John.D0e in DN red, cannot be validated.
Pass
This does not work when taking into account the card number field and so numbers have to be allowed.
No fields allow more than this pattern regarding this..
12
12
All credit card patterns conform to LUHN algorithm
Webpage loaded and card number input field filled in.
‘79927398713’

‘123’

‘’
Enter the test data into the Card Number field, as well as other data in required format.
Test field DN green as test data is truthy, and is submittable. If not, message needs to be clear that the number must conform to the LUHN algorithm.
799273987713 pattern submittable.

123 does not work.

‘’ does not work.
Pass
Trying to get Javascript getElementByID to work but cannot retrieve value as of yet

Have managed to find a solution using event.preventDefault and changing the placeholder text to say that the text should conform to the LUHN algorithm.. 
13
13
Web page resizable for phone, tablet and PC
Webpage loaded.
-
Resize the screen to simulate multiple devices
Responsive webpage that is understandable on multiple devices. 
When resizing, there is a clear minimum width. 
Pass
Used CSS Grid, resize:both and overflow:auto.
14
14
Email sent to  test@dn-uk.com, onSubmit with validated information.
Web page loaded, test data all filled in and submit button pressed
John Doe
johndoe@mail.com
79927398713
Enter the test data into the form.
Email confirmation. Need a server side language that can handle this type of request.
If method=post, action=’mailto=...’ this is the start of the process as it loads the default email with the sending email address already imputed. However, no data is transmitted
Fail
Will need a server side solution for this.





