Types of Test(Automated Test)
==============================

- Unit Testing
    Focus is on testing the individual building blocks of an application such as class component or a functional component.
    Each unit or building block is tested in isolation, independent of other units
    Dependencies are mocked
    Run in a short span of time and make it easier to pinpoint failures.
    Relatively easier to write and maintain

- Integration Test
    Focus in on testing combination of unit and ensuring they work together
    Take longer than unit tests

- End to End Test
    Focus is on testing entire end-to-end flow and ensuing it works as designed from start to end
    Involves in a real UI, a rela backend database, real services etc.
    Take the longest duration of time as it cover most amount of code
    Have a cost implication as we interact with real APIs that may charge based on number of requests

RTL Philosphy
The more your test rememble the way your software is used, the more confidence they can give you.
RTL strikes a balance between unit test and E2E tests

Anatomy of a test
=================
test(name, fn, timeout)
    - name: used to identify the test
    - fn: function that contains the expectations to test
    - timeout- optional argument for specifying how long to wait before aborting the test, default is 5 sec


Test Driven Development
=======================
Its a software development process where you write tests before writing the software code.
Once the tests have been written, you then write the code to ensure the tests pass.

1. create test that verify the functionality of a specific feature(at this point test will fail)
2. write code that will run the test successfully when re-executed
3. refactor the code for optimization while ensuring the test continue to pass


test.only
test.skip
describe.only
describe.skip
nesting in describe


Code Coverage
=============
- statement coverage
- branch coverage
- function coverage
- line coverage

# npm run coverage

Assertions: 
- While writing test, we often need to check that values meet certain conditions
- Assertions decides whether a test passes or fails
- With jest asserrtions are carried out with global expect method
- We use expect with a matcher function (e.g toBeInTheDocument) to assert something about the value

Matchers in jest : 
- docs for matchers in jest --> https://jestjs.io/docs/using-matchers
- jest-dom installed with CRA- when to use which matcher function --> https://github.com/testing-library/jest-dom

What to test 
============
- test component renders
- test components renders with props
- test component renders in different states
- test component react to events

What not to test 
================
- implementation details
- third party code
- code not important from user point of view


RTL Queries
===========
To find single element on page we have
- getBy
- queryBy
- findBy

To find multiple elements on page we have
- getAllBy
- queryAllBy
- findAllBy

The Suffix can be one of :
- Role
- Labeltext
- PlaceHolderText
- Text
- DisplayValue
- AltText
- Title
- TestId

getBy / findBy / queryBy
--------------------------

<details>
  <summary> getBy and getAllBy </summary>
This class of queries return the matching node for a query and throw a descriptive error if no element is matched or more than 1 element is matched <br />
    
1. gettByRole options    
<br />

# name: the accessible name is for simple cases equal to 
a. label of a form element  
b. text content of a button  
c. value of aria-label attribute  

# other options- level(heading), hidden, selected, checked, pressed


2. getByLabelText  
This will search for the label that matches the given text, then find the element associated with that label.


3. getByPlaceholderText  
This will search for all elements with a placeholder attribute and finds one that matches the given text

4. getByText  
This will search for all elements that have a text node with textContent matching the given text.  <br />
Typically, we would use this to find paragraph, div or span element.

5. getByDisplayValue  
This returns the input,textarea or select element that has the matching display value.


6. getByAltText  
returns the element that has the given alt text <br />
It only supports the element that has an alt attribute like <img>, <input>,<area> or custom HTML elements

7. getByTitle  
return the element that has the matching title attribute.

8. getByTestId  
return the element that has the matching data-testid attribute.

<br />
<ins>Priority Order for Queries</ins>
<br />
gettByRole -> getByLabelText -> getByPlaceholderText -> getByText -> getByDisplayValue  <br />
these above 5 should cover the most, after these 5 ae below:  <br />
getByAltText -> getByTitle -> getByTestId  <br />  


RTL- getBy and getAllBy Queries
===============================
getByRole()  and getAllByRole()  
getByLabelText()  and getAllByLabelText()  
getByPlaceholderText and getAllByPlaceholderText  
getByText and getAllByText  
getByDisplayValue and getAllByDisplayValue  
getByAltText and getAllByAltText  
getByTitle and getAllByTitle  
getByTestId and getAllByTestId  

<ins>textMatch</ins>
<br />

the first arg we passed in all the query method is a string  <br />
however in reality the arg it takes is called textMatch.  <br />
textMatch is either - string, regex or function  <br />

a. string  <br /> 
    e.g <div>Hello World</div>  <br />
        screen.getByText('Hello World'); // full string match  <br />
        screen.getByText('llo Worl', {exact: false}); // substring match  <br />
        screen.getByText('Hello World', {exact: false});  // ignore case  <br />

b. regex  <br />
    e.g <div>Hello World</div>  <br />
        screen.getByText(/World/); // sub-string match  <br />
        screen.getByText(/world/i); // substring match- ignore case  <br />
        screen.getByText(/^hello world$/i);  // full string match- ignore case  <br />

c. custom function  <br />
Syntax- (content?:string, element?: Element|null) => boolean  <br />
e.g screen.getByText((content) => content.startsWith('Hello'))  <br />
</details>

<details>
  <summary>queryBy and queryAllBy </summary>

queryBy and queryAllBy
======================
we saw getBy/getAllBy but in case element is not present then getBy/getAllBy will throw error so in those case we can  
use queryBy/queryAllBy - it return null or emptyArray if element is not found

use queryByRole for testing ele not present
 const startLearningButton = screen.queryByRole('button', {  // use queryByRole for negative
      name: 'Start learning',
 })
expect(startLearningButton).not.toBeInTheDocument()
</details>

<details>
  <summary> findBy and findAllBy  </summary>
    
Appearance/Disappearance
what if elements are not present in DOM at beginning but appear after sometime
e.g data fetched from server will be rendered after a few miliseconds

- findBy: 
    - return a promise which resolves when an element is found which matches the given query
    - the promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms

- findAllBy: 
    - return a promise which resolves to an array of elements when any elements are found which matches the given query
    - the promise is rejected if no elements are found after a default timeout of 1000ms

</details>


# Debugging
-----------
 a. screen.debug() --> to visualize formatted state of DOM tree  <br />

 b. logRoles --> to print list of all implicit aria-roles  <br />
        const view= render(<Skills skills={skills} />)   <br />
        logRoles(view.container)
<br />

# Testing Playground
--------------------

> get the chrome extension -> use pointer and get query for elements  <br />


User Interaction
-----------------
A click using a mouse or a keypress using a keyboard, the application has to respond to such interactions.  <br />
Hence the test should ensure the interations should be handled as expected.  <br />


user-event
----------
A companion library for testing that simulates user interactions by dispatching the events that would happen if the interaction took place in browser.  <br />
It is recommended way.


fireEvent vs user-event
-----------------------
fireEvent is a method from RTL which is used to dispatch DOM events  
user-events simulates full interactions which may fire multiple events and do additional checks along the way  
e.g we can dispatch the change events on an input field using fireEvent  
<br />

When a user types into a textbox the element has to be focussed and then keyboard and input events are fired and the selection  <br />
and the value on the element are manipulated as they type.

<br />

user-events allows you to describe a user-interaction instead of a concrete event. It add visibility and interactibilty checks and manipulates the  <br />
DOM just like  user interaction in the browser would do.  <br />
e.g it would not let a user click a hidden element or type in a disabled textbox

in package.json we can see user event has version 13 (as we have CRA version)  <br />
"@testing-library/user-event": "^13.5.0",

<br />
the latest is 14 so we need to upgrade it and so give below command in terminal  <br />

> yarn upgrade @testing-library/user-event@latest


Pointer Interactions - (Counter Component Increment Button Click)
-----------------------------------------------------------------
click() is not Pointer API, its a Convenience API that internally calls Pointer API  
Convinience API is what we typically use while writing test case.  
For mouse interactions apart from click - we have dblClick() and tripleClick()  

For Mouse movement there is -->  hover() and unhover()

# Pointer APIs:
-------------
    pointer({keys: '[MouseLeft]'}) - mouse left click
    pointer({keys: '[MouseLeft][Mouseright]'}) - left click followed by a right click
    pointer('[MouseLeft][Mouseright]') - can pass string if key is only arg to function
    pointer('[MouseLeft>]') - press button without releasing it 
    pointer('[/MouseLeft]') - release previously pressed button



Keyboard Interactions-(Counter Component Input Textbox and Set Button Click)
============================================================================
type() and tab() are not part of keyboard API
- type : is a Utility API
- tab : is a Convience API

other Utility API are :
- clear() : clears an editable element
    e.g
<br />  
```javascript
test('clear', async() => {
    render(<textarea defaultValue="Hello, World!" />)
    await userEvent.clear(screen.getByRole('textbox'))
    expect(screen.getByRole('textbox')).toHaveValue('')
})
```

<br />

- selectOptions: select elements in dropdown or listbox

- deselectOptions: deselect elements in dropdown or listbox

- upload() - to uplaod file

Apart from Convience and Utility APIs, we also have Clipboard APIs  

Clipboard APIs  
--------------  
- copy()  
- cut()  
- paste()  

All these 3 APIs are not sufficient to the use case then we can use Keyboard APIs  
Keyboard API- simulate interaction with keyboard

-------------------------------------------
keyboard('foo') // translates to : f,o,o  
keyboard('{Shift>}A{/Shift}') // translates to - Shift(down), A, Shift(Up)  


Section6- Providers
====================
ThemeProvider- MuiMode.tsx component 
need material ui package installation so 

Add these 3 in package.json dependencies and then do npm install
"@mui/material": "^5.9.3",
"@emotion/react": "^11.10.0",
"@emotion/styled": "^11.10.0"
(we will also copy code for AppProvider, MuiMode and test-Utils)
npm start we can see dark mode in browser

in component <AppProviders />-  if we change mode to light we can see light mode in browser

now test case for this:
Custom Render Function
----------------------
Please check code and comments in MuiMode.test.tsx 

Custom React Hook
------------------
Create React Hook - src - hooks- useCounter
Please check comments in useCounter.test.tsx


Section7- Mocking
=================
# Mocking function :  => CounterTwo component -  src- components-CounterTwo.tsx
jest.fn()
Please check-  CounterTwo.test.tsx


# Mocking HTTP request :  => Users component - src- components-Users.tsx
We need to mock HTTP request as real API hit can be costly, so we have package - MSW (Mock Service Worker) for this.
- MSW -> API mocking libbrary thta uses service worker API to intercept actual request. It is very feature rich.

MSW Setup
---------
npm i msw --save-dev
src -> new folder "mocks" and new file -> "server.ts"
docs- https://mswjs.io/docs/api/setup-server/







