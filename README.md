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

6 - `Functional programming`
