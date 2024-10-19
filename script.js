 /*//ques1
const isEqualto=(a,b) =>  a===100||b===100||(a+b===100);
 



//ques2
const getFileextention = (str) => str.slice(str.lastIndexOf('.'));



//ques3
const moveCharsForward = (str) => 
    str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0)+1))
    .join(''); */

    document.addEventListener('DOMContentLoaded', () => {
        const textElement = document.getElementById('text-element');
        const textLength = textElement.getComputedTextLength();
    
        // Set the stroke-dasharray and stroke-dashoffset based on the text length
        textElement.style.strokeDasharray = textLength;
        textElement.style.strokeDashoffset = textLength;
    
        // Apply the animation after a short delay to allow for DOM rendering
        setTimeout(() => {
            textElement.style.transition = 'stroke-dashoffset 3s ease-in-out';
            textElement.style.strokeDashoffset = '0';
    
            // Optionally fill the text after the line animation completes
            setTimeout(() => {
                textElement.style.fill = 'red';
            }, 3000); // Delay to match stroke animation
        }, 100); // Small delay to ensure everything is rendered before animation starts
    });
    