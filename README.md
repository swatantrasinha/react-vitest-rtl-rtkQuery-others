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

> npm run coverage


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
============

<details>
  <summary> RTL Queries Types </summary>

<ins>RTL Quesries </ins> - To find single element on page we have  <br />

- getBy
- queryBy
- findBy

To find multiple elements on page we have  <br />
- getAllBy
- queryAllBy
- findAllBy

The Suffix can be one of :  <br />
- Role
- Labeltext
- PlaceHolderText
- Text
- DisplayValue
- AltText
- Title
- TestId

getBy / findBy / queryBy
------------------------

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

</details> 

<hr />

Debugging
===========
 a. screen.debug() --> to visualize formatted state of DOM tree  <br />

 b. logRoles --> to print list of all implicit aria-roles  <br />
 See:  <ins>Skills.test.tsx  </ins>
 
```javascript
import {  logRoles } from '@testing-library/react'
....
....

const view= render(<Skills skills={skills} />)
logRoles(view.container) // display - list of all implicit aria-roles
```

<br />

# Testing Playground
--------------------

> get the chrome extension -> use pointer and get query for elements  <br />

<details>
  <summary> Handling User Interactions </summary>
    
User Interaction
-----------------
A click using a mouse or a keypress using a keyboard, the application has to respond to such interactions.  <br />
Hence the test should ensure the interations should be handled as expected.  <br />


user-event
----------
It is  a companion library for testing that simulates user interactions by dispatching the events that would happen if the interaction took place in browser.
It is recommended way.


fireEvent vs user-event
-----------------------
fireEvent is a method from RTL which is used to dispatch DOM events  
However user-events is superior as it simulates full interactions which may fire multiple events and do additional checks along the way  
e.g we can dispatch the change events on an input field using fireEvent  
<br />

When a user types into a textbox the element has to be focussed and then keyboard and input events are fired and the selection  <br />
and the value on the element are manipulated as they type.

<br />

user-events allows you to describe a user-interaction instead of a concrete event. It add visibility and interactibilty checks and manipulates the  <br />
DOM just like  user interaction in the browser would do.  <br />
e.g it would not let a user click a hidden element or type in a disabled textbox

<ins>Note:</ins> in package.json we can see user event has version 13 (as we have CRA version)  <br />
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
<br />
<ins>Note: </ins> Unless there is a strong use-case to use Pointer API , its always suggested to use Convenience API as its more simple to read and code
<br />


Keyboard Interactions-(Counter Component Input Textbox and Set Button Click)
============================================================================
<ins>Note: </ins> type() and tab() are not part of keyboard API
- type : is a Utility API
- tab : is a Convience API

other Utility API are :
- clear() : clears an editable element
e.g is below :

```javascript

test('clear', async() => {
    render(<textarea defaultValue="Hello World" />)
    await userEvent.clear(screen.getByRole('textbox'))
    expect (screen.getByRole('textbox')).toHaveValue('')
});

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

All these 3 APIs are not sufficient to the use case then we can use Keyboard APIs  <br />
Keyboard API- simulate interaction with keyboard

-------------------------------------------
keyboard('foo') // translates to : f,o,o  
keyboard('{Shift>}A{/Shift}') // translates to - Shift(down), A, Shift(Up)  
</details>

# Section6- Providers
======================
ThemeProvider- MuiMode.tsx component  <br />
need material ui package installation so  <br />

Add these 3 in package.json dependencies and then do  <br />

> npm install  

"@mui/material": "^5.9.3",  
"@emotion/react": "^11.10.0",  
"@emotion/styled": "^11.10.0"  
<br />

(we will also copy code for AppProvider, MuiMode and test-Utils)  

> npm start  <br />
we can see dark mode in browser

in component <AppProviders />-  if we change mode to light we can see light mode in browser

now test case for this:

Custom Render Function
----------------------
<ins>Docs for custom render: </ins> -  https://testing-library.com/docs/react-testing-library/setup  <br />
The docs says :  <br />

It's often useful to define a custom render method that includes things like global context providers, data stores, etc. To make this available globally, 
one approach is to define a utility file that re-exports everything from React Testing Library. You can replace React Testing Library with this file in 
all your imports  <br />

create new file
src --> utils --> test-utils.tsx  <br />

Please check code and comments in MuiMode.test.tsx 

Custom React Hook
------------------
Create React Hook - src - hooks- useCounter  <br />
Please check comments in useCounter.test.tsx  <br/>
Also see -  <ins>why renderHook need to be used in case of custom hook </ins>  
<br />

<ins>Note: </ins> in test case for useCounter we need to use act function. This is because unlike testing for  <br />
<br/>
Counter Component at - src --> components --> sample-test-case-components --> counter --> Counter.test.tsx  <br />

we were wrting assertion for checking value after screen.getBy .... this screen.get from RTL implements act internally  <br />
but here in case of custom hook useCounter there is not screen.getBy as there is no DOM here  <br />
we need to check data in result.current so act is not implemented internally <br />
hence we need to wrap in act explicitly  

Section7- Mocking
=================
<br />

# Mocking function  
<br />
Fle Path => CounterTwo component -  src- components-CounterTwo.tsx  <br />

jest.fn()  <br />

Please check-  CounterTwo.test.tsx
```javascript

test('handlers are called', async () => {
  user.setup()
  const incrementHandler =  vi.fn(); // jest.fn()
  const decrementHandler = vi.fn(); // jest.fn()
  render(
    <CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  )
  const incrementButton = screen.getByRole('button', { name: 'Increment' })
  const decrementButton = screen.getByRole('button', { name: 'Decrement' })
  await user.click(incrementButton)
  await user.click(decrementButton)
  expect(incrementHandler).toHaveBeenCalledTimes(1)
  expect(decrementHandler).toHaveBeenCalledTimes(1)
})

```

# Mocking HTTP request  <br />
File Path :  Users component - src- components-Users.tsx  <br />


We need to mock HTTP request as real API hit can be costly, so we have package - MSW (Mock Service Worker) for this.  <br />

- MSW -> API mocking libbrary thta uses service worker API to intercept actual request. It is very feature rich.

MSW Setup
---------

- install msw as dev dependency  
- create server  
- add handler  
<br />

Docs- https://mswjs.io/docs/api/setup-server/ 

> npm i msw --save-dev  
<br />

src -> new folder "mocks" and new file -> "server.ts"  <br />
<ins> See the docs : </ins>  https://mswjs.io/docs/integrations/node  
To create server -> Copy and paste code from above link in newly created file server.ts  <br />
<br /> 


```javascript
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlers)
```

<br />
here we see an error because handler file is not created and so we need to create it now  <br />











