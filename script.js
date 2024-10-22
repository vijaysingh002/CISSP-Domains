document.addEventListener("DOMContentLoaded", function() {
    const text = "CISSP"; // Text to type out
    const element = document.getElementById("typewriter");

    if (element) { // Check if the element exists
        function typeWriter() {
            let index = 0;
            element.innerHTML = ''; // Clear content before typing starts

            function type() {
                if (index < text.length) {
                    element.innerHTML += text.charAt(index);
                    index++;
                    setTimeout(type, 150); // Typing speed: 150ms per letter
                } else {
                    // After typing completes, restart the process after 1 second
                    setTimeout(typeWriter, 1000); 
                }
            }

            type(); // Start typing
        }

        typeWriter(); // Initial typing effect
    }

    // Matrix-style Falling Code Effect
    const canvas = document.getElementById("matrixCanvas");

    if (canvas) { // Check if the canvas element exists
        const ctx = canvas.getContext("2d");

        // Responsive font size based on window width
        let fontSize = Math.max(Math.floor(window.innerWidth / 50), 12); // Minimum font size of 12
        let columns;
        let drops = [];

        // Function to resize the canvas and reinitialize drops based on screen size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            fontSize = Math.max(Math.floor(window.innerWidth / 50), 12); // Adjust font size dynamically
            initializeDrops();
        }

        // Initial canvas size
        resizeCanvas();

        // Resize the canvas whenever the window is resized or zoomed
        window.addEventListener("resize", () => {
            resizeCanvas();
        });

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";

        // Function to initialize the drops based on the screen size
        function initializeDrops() {
            columns = canvas.width / fontSize;
            drops = Array(Math.floor(columns)).fill(0);
        }

        // Function to draw the matrix effect
        function drawMatrix() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Slight transparency for smooth falling effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00FF00"; // Green matrix code
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, index) => {
                const text = letters.charAt(Math.floor(Math.random() * letters.length));
                const x = index * fontSize;
                ctx.fillText(text, x, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[index] = 0;
                }

                drops[index]++;
            });
        }

        setInterval(drawMatrix, 50);
    }
});
