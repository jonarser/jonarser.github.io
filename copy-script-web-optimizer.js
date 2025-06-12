// copy-script.js
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-btn');
    const statusElement = document.getElementById('status');
    
    // Text to be copied
    const textToCopy = "This text will be copied to your clipboard!";
    
    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                statusElement.textContent = "Text copied to clipboard!";
                statusElement.style.color = "green";
            })
            .catch(err => {
                statusElement.textContent = "Copy failed: " + err;
                statusElement.style.color = "red";
            });
    });
});
