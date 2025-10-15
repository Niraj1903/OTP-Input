````markdown
# OTP Input Component

This is a React component for handling OTP (One-Time Password) input, designed for easy integration into your projects where users need to enter OTP. The component includes features like automatic focus transition between input fields, input validation, and handling the backspace functionality.

---

## Features

- **Multi-Digit OTP**: Supports a customizable number of OTP digits (default is 5).
- **Automatic Focus Transition**: Focuses on the next input field after entering a digit.
- **Backspace Navigation**: Moves focus to the previous input field when backspace is pressed in an empty input.
- **Input Validation**: Only numeric input is allowed.
- **Responsive Design**: The component is fully responsive and works well on different screen sizes.

---

## Installation

1. Clone or download the repository.

   ```bash
   git clone https://github.com/Niraj1903/OTP-Input
   ```
````

2. Navigate to the project folder and install dependencies.

   ```bash
   cd otp-input
   npm install
   ```

3. Start the application.

   ```bash
   npm run dev
   ```

---

## Usage

To use the OTP input component in your project, simply import it and use it as follows:

```jsx
import Otp from "./Otp";

function App() {
  return (
    <div>
      <Otp />
    </div>
  );
}

export default App;
```

You can customize the number of OTP digits by adjusting the `COUNT` constant inside the `Otp` component.

```js
const COUNT = 5; // Change this to adjust the number of OTP digits.
```

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **useState, useEffect, useRef Hooks**: React hooks used for managing state, side effects, and referencing DOM elements.

---

## Customization

- **Styling**: The component uses Tailwind CSS for styling. You can customize the classes in the JSX to match your project's design guidelines.
- **Digit Count**: The default digit count is 5, but you can modify the `COUNT` constant to change the number of OTP fields.
- **Input Length**: The input length is restricted to one character per field, but you can modify this if needed.

---

## Demo

You can try out the demo of this OTP input component here:
[Live Demo](https://otp-input-reactjs.netlify.app/)

---

## License

This project is open-source and available under the MIT License.

---

## Author

**Niraj**
[GitHub Profile](https://github.com/Niraj1903)

```

```
