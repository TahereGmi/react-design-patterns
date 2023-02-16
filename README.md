# React-design-patterns
Exercises of React Design Patterns from LinkedInLearning courses

## What is react design patterns?
Design patterns are effective solutions for common application development challenges.
The design patterns we talk about in this course are not the Gang of Four OOP design patterns.

1 - `Layout components`: React components that deal primarily with arranging other components on the page
examples: split screens, lists and items, modals
**The idea of layout components is our components shouldn’t know where they’re being displayed.

2 - `Container components`: React components that take care of all of data loading for their child components . Our components shouldn’t know where their data is coming from.

3 - `Controlled and Uncontrolled components`: Very common pattern in react. 
- UnControlled: components that keep track of their own states and release data when some events occurs(that is, the submit event or HTML forms). Really the only times  we get data out of the component is when me event occurs. (Form with submit button)

- Controlled: components that do not keep track of their own state - all state passed in as props (that is , when we use the useState Hook with text input). Parent is the one that taking cares of keeping track of state and that state is then usually passed through to a controlled component as a prop of some part.

4 - `Higher order components`: A component that returns another component instead of JSX. 
Why we want to create HOCs? 	
- They used for sharing complex behavior between multiple components (much like container components)
- Adding extra functionality to existing components.

5 - `Custom hooks patterns`: Special hooks that we define ourselves, and that usually combine the functionality of one or more existing React hooks like “useState” or “useEffect”.
custom hooks used for:
- Sharing complex behavior between multiple components (much like with HOCs and container components)

6 - `Functional programming`:
A method of organizing code in the a way that:
1. Minimizes mutation and state change
2. Keeps functions independent of external data (pure functions)
3. Treats functions as first class citizens
    - Applications of FP in React:
    - Controlled components
    - Function components
    - Higher-order Components (their functions return another components)
    - Recursive components : Components that refers themselves inside the body of component
    - Partially applied components
    - Component Composition

7 - `Conditional Rendering`: In the process of writing React components, the need often arises to render a certain JSX code based on the state. This is achieved through conditional rendering and it's very useful as it allows you to create distinct components based on your needs and then render only the ones that are required by the application.
- For instance, conditional rendering can be used to display different messages to the user based on the login status of the user. The message will be subject to the value of the prop *isLoggedIn*.
