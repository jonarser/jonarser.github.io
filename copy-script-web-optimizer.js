// copy-script.js
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-btn');
    const statusElement = document.getElementById('status');
    
    // Text to be copied
    const textToCopy = "IOGHBJKJY&^&TGJHGJGHJHKLHBVCFYGUHLBVCHGYFTHGCVM<HKJLKLHGFDFYITFUYOGIHJ:LK:LJKBHJVGCFDXRSW$W#EYTDFJKBNMLK:OIPYT^&*&^(**){PIOJKLKBHJVGHFDRUTIUYOUOJPOKL:LJKHJVGHFDTYR&TIOYIUPOIJKLJKBHJVGHCFGDRTYTIYOIUHOJLKNJBKHJVGHCFGXDTRUYIFUYGI";
    
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
