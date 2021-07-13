# DoorDash Design Technologist Exercise

Arnold Sandoval • 7/13/2021

## Overview
This project contains a BottomSheet modal component which allows users to use touch events to change its state.

## Getting Started

This project uses [Storybook](https://storybook.js.org), [TypeScript](https://www.typescriptlang.org/), [SCSS](https://sass-lang.com/) and [JSDoc](https://jsdoc.app/) for the purpose of documenting the BottomSheet component.

1. Clone this repository
2. Install project dependencies: `yarn install`. I like yarn, but npm will work just as well.
3. Start the Storybook: `yarn storybook`.
4. If the project doesn't automatically open, navigate to [localhost:6006](http://localhost:6006) in your web browser of choice.


## Reviewer Notes

- This README can be found there as well for convenience.
- Storybook renders stories within an iframe element. While it is excellent for manipulating props -- it isn't perfect when using components like the BottomSheet. If you use it on your mobile phone, it will function a bit wonky. 
    - _**Please load the iframe source directly when using the touch interaction**_. You can do this easily by prepending `iframe.html` to the query param string from the page you wish to test.
- If you are on the iOS 15 Beta (like I am), you'll notice Safari has moved the address bar to the bottom of the screen ([see screenshot](https://cln.sh/lUGFDo)). As a result, it tends to interfere with this kind of BottomSheet interaction. While it still works, it can be a jarring experience, as the address bar collapses and expands depending on any given gesture.
- The useHeight hook is not something I wrote, and I deserve no credit for it. It was extracted from this [CSS Tricks](https://css-tricks.com/making-sense-of-react-spring/) article. It uses [ResizeObserver](), which is _really_ cool, but has no [IE support](https://caniuse.com/resizeobserver). In a production setting, a polyfill will likely be required for it.

## Requirements

The purpose of this section is to distill this exercise in to a quick list I can work off of. It is based off of the detailed [Design Technologist Take Home Project Prompt](https://docs.google.com/document/d/1pM7M4XAnvGIZuYV9ofXyyAiKUuN1gE02ow8zwe5nPgM/edit) and prototype [Code Sandbox](https://8kr7zyl4r2.codesandbox.io/) but also includes some additional, personal requirements.

1. The component should have three states, they are as follow:
    - A dismissed, or off-screen state.
    - A collapsed, or short/minimized state. In this state the component content may be cut off.
    - An expanded, or tall/maximized state.
2. The BottomSheet has a main content are of its own which is scrollable if the content exceeds the bounds of the available/visible content space. The user should be able to scroll the content area, without scrolling the main application behind it.
3. The BottomSheet should be dismissable via a button within it and, optionally by clicking or tapping outside its bounds.
4. The component should provide necessary callbacks so a developer can leverage it for their own purposes.
5. It should contain apropriate WAI-ARIA attributes.
6. **This project should take no more than 3-4 hours**
    - I went over on this by just under an hour, see [Notes > Why I went over time](#why-i-went-over-time)

## Notes

The purpose of this section is to walk through some of the thoughts and possible discussion questions I had as I was building the component.

<br />

### Go beyond WAI-ARIA
The time allowed didn't allow me to implement accessibility features I would have liked, such as focus-trapping and appropriate keybinding. I would implement these features using React hooks, think `useFocusTrap` and `useKeyPress`. Also of note, when the modal is inactive the BottomSheet contents are still focusable. This not only an accessibility issue, but also a broader usability issue, which would have to be fixed prior to shipping to a production environment.

Additionally, I have questions about the touch interaction and what a VoiceOver or TalkBack user would expect. My primary concern is that this component could interfere with assistive touch on mobile devices. Some questions for discussion: 

- Would this component interfere with assistive touch features on the device? Is this at all a concern? (I think it probably is)
- What are some ways we can mitigate that to ensure an optimal experience for users with disabilities? 
- Could a feature query like [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) be the solution in conjunction with removing touch events? 

I would be interested in doing more exploration on these questions!

### The backdrop
Time didn't permit me to implement it as I would have liked. If I were to do it, I would likely create a separate backdrop component that relies on React's Context API. The display and opacity of this component could be altered anywhere in our system (or app!) using the context mentioned above provided.

### CSS & Authoring Convention
The pseudo-BEM convention you see in my CSS is the Odyssey standard and is super familiar to me, given that it's how I write my CSS at Okta. I have issues with it, the class names can get lengthy, and in hindsight, I probably should have written it differently. If I could start over, I would probably use Emotion (which I have experience with as well!) - doing so would allow me to achieve the same level of encapsulation as what I wrote while also colocating it with the React component code.

### Why I went over time
As I hit the 3.5-hour mark, I realized that the last thing I had to implement was the `isOpen` prop. I quickly realized that my code was written to assume that the modal was opened by default. Therefore I had to adjust how I calculated the size and different positions for short and tall instances and provide the open/close behavior based on the `isOpen` prop presented.

## Thank you!
If you read every word of this, thank you! 🙌
