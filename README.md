# Hacker-Themed CISSP Domains Webpage

This project is a hacker-themed webpage that visually presents information about the CISSP domains with engaging and interactive effects. It features a **Matrix-style falling code background**, a **typewriter effect** for the title, and incorporates glowing and glitch animations. The content is neatly organized with centered, justified text to enhance readability. The design is fully responsive, providing a modern, hacker-style aesthetic across all devices.

---

## Table of Contents
- Project Structure  
- Features  
- How to Run  
- Files Overview  
  - index.html  
  - styles.css  
  - script.js  
- Customization  

---

## Project Structure

- **index.html**: Defines the core structure of the webpage.  
- **styles.css**: Handles the visual styling, including the Matrix background, glowing effects, and text formatting.  
- **script.js**: Implements the typewriter effect for the title and the Matrix falling code animation.  

---

## Features

- **Matrix-style Falling Code Effect**: A canvas element that renders falling green code, similar to the famous "Matrix" movie effect.  
- **Typing Effect**: The title "CISSP" is typed out letter by letter, simulating a typewriter effect.  
- **Glowing and Glitch Animations**: Domain headings have a glitchy animation, and the content box has a glowing purple border for a futuristic look.  
- **Fully Responsive Design**: Adjusts the layout and font sizes automatically based on the screen size.  
- **Centered and Justified Text**: The descriptions are centered and justified for a clean and professional look.  

---

## How to Run

- Download or clone the repository to your local machine.  
- Open the `index.html` file in any modern browser.  
- Enjoy the interactive webpage featuring the Matrix-style background and other effects.  

---

## Files Overview

### index.html

The `index.html` file contains the overall structure of the webpage. It includes:

- A `<canvas>` element that displays the Matrix falling code background.  
- A `<div>` element with the class `hacker-box` that holds the CISSP domains and their descriptions.  
- Each CISSP domain is structured using the `domain-item` class, which includes a heading (`<h2>`) and a description (`<p>`).  

**Example Structure**:
```html
<div class="domain-item">
    <h2>Security and Risk Management</h2>
    <p>This domain focuses on identifying and managing risks to an organization’s information systems. It includes developing security policies, conducting risk assessments, and ensuring compliance with laws and regulations.</p>
    <p><b>Example: </b>Implementing a policy that requires encryption for all sensitive customer data to mitigate the risk of a data breach.</p>
</div>
```

### styles.css

This file controls the appearance and layout of the webpage. Key aspects include:

- **Body Styling**: The background is set to black, and the 'Courier New' font is used to create a hacker-like aesthetic.  
- **Canvas Styling**: The canvas for the Matrix-style falling code spans the full screen width and height and stays behind the content.  
- **Hacker Box Styling**: The main content box has a glowing purple border, shadow, and opacity effect, giving it a futuristic look.  
- **Text Styling**: The text for each domain is centered and justified, while the headings have a glitch animation.  

**CSS Snippet**:
```css
body {
    background-color: black;
    font-family: 'Courier New', Courier, monospace;
}

.hacker-box {
    background-color: rgba(0, 0, 0, 0.7);
    border: 2px solid #ff00ff;
    padding: 20px;
    max-width: 900px;
    margin: 40px auto;
    box-shadow: 0 0 15px #ff00ff;
    text-align: center;
    animation: glowCycle 5s infinite alternate;
}

@keyframes glowCycle {
    0% { box-shadow: 0 0 15px #ff00ff; }
    100% { box-shadow: 0 0 45px #ff00ff; }
}
```

### script.js

The JavaScript file (`script.js`) manages two main features:

- **Typing Effect**: A typewriter effect that types out the word "CISSP" letter by letter, pausing and restarting after completion.  
- **Matrix-Style Falling Code**: The script generates random letters and numbers that fall down the screen, mimicking the Matrix-style effect.

**Typewriter Function**:
```js
const text = "CISSP";
const element = document.getElementById("typewriter");

function typeWriter() {
    let index = 0;
    element.innerHTML = '';

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        } else {
            setTimeout(typeWriter, 1000); // Restart typing effect after completion
        }
    }

    type();
}
```

**Matrix Code Effect**:
```js
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00"; // Green matrix code
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = index * fontSize;
        ctx.fillText(text, x, y * fontSize);
        drops[index]++;
    });
}
```

---

## Customization

- **Text and Headings**: You can modify the content of the domain names and descriptions directly in `index.html`.  
- **Colors and Animations**: Adjust the colors for the Matrix effect, text, and glowing animations in `styles.css`.  
- **Typing Text**: In `script.js`, change the value of `const text` to display a different title or word.  

