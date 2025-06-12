document.addEventListener('DOMContentLoaded', () => {
    const mainMessageElement = document.getElementById('mainMessage');
    const messageContainer = document.getElementById('messageContainer');

    // --- Phase 1: "You have been hacked" ---
    mainMessageElement.textContent = "You have been hacked";
    mainMessageElement.style.color = '#ff0000'; // Red for "hacked"
    mainMessageElement.style.textShadow = '0 0 15px #ff0000';

    setTimeout(() => {
        // --- Phase 2: Matrix Effect (0s and 1s) ---

        // Hide the initial message gracefully
        mainMessageElement.classList.add('hidden');

        // Create the matrix effect container
        const matrixEffectDiv = document.createElement('div');
        matrixEffectDiv.id = 'matrixEffect';
        matrixEffectDiv.classList.add('matrix-effect');
        document.body.appendChild(matrixEffectDiv); // Add to body, not messageContainer

        // Generate a lot of 0s and 1s to fill the screen
        const chars = '01';
        let matrixContent = '';
        const numChars = (window.innerWidth * window.innerHeight) / 100; // Estimate number of chars needed

        for (let i = 0; i < numChars; i++) {
            matrixContent += chars[Math.floor(Math.random() * chars.length)] + ' ';
        }
        matrixEffectDiv.textContent = matrixContent;

        // Show the matrix effect with a slight delay to allow message to hide
        setTimeout(() => {
            matrixEffectDiv.classList.add('show');
        }, 500); // Give the message a bit of time to fade out

        setTimeout(() => {
            // --- Phase 3: "Just Kidding" ---

            // Hide the matrix effect
            matrixEffectDiv.classList.remove('show');
            // Remove the matrix div after it fades out (or immediately if you prefer)
            setTimeout(() => {
                matrixEffectDiv.remove();
            }, 1000); // Wait for the fade-out transition

            // Show "Just Kidding" message
            mainMessageElement.textContent = "Just Kidding!";
            mainMessageElement.style.color = '#0f0'; // Back to green
            mainMessageElement.style.textShadow = '0 0 10px #0f0';
            mainMessageElement.classList.remove('hidden'); // Make it visible again

        }, 5000); // 5 seconds after matrix starts

    }, 5000); // 5 seconds after "You have been hacked" appears
});