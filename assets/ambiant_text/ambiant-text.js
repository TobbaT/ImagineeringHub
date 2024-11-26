function applyAmbiantTextConfig() {
    for (let selector in ambiantTextConfigs) {
        const config = ambiantTextConfigs[selector];
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            let content = config.content;
            if (typeof content === 'function') {
                content = content(); // Execute if it's a function
            }

            const ambiantElement = document.createElement('div');
            ambiantElement.classList.add('ambiant-text'); // Add the class for styling
            ambiantElement.innerHTML = content;

            // Position the ambiantElement randomly or strategically (more on this below)
            positionAmbiantElement(ambiantElement, element); 
            element.appendChild(ambiantElement);

        });
    }
}

function applyAmbiantTextEmbedded() {
    document.querySelectorAll('.ambiant-text').forEach(element => {
        const parent = element.parentElement;
        if (parent) {
            positionAmbiantElement(element, parent);
        }
    });
}

function applyAmbiantText() {
    applyAmbiantTextEmbedded();
    applyAmbiantTextConfig();
}


function positionAmbiantElement(element, anchor) {
    // Get the dimensions of the anchor element and the viewport
    const anchorRect = anchor.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    // Calculate vertical position within the anchor's height
    const verticalPosition = Math.random() * (anchorRect.bottom - anchorRect.top - elementRect.height) + anchorRect.top;

    // Determine horizontal side and position
    const placeOnRight = Math.random() < 0.5;
    let horizontalPosition;

    if (placeOnRight) {
        horizontalPosition = anchorRect.right + Math.random() * (viewportWidth - anchorRect.right - elementRect.width);
    } else {
        horizontalPosition = Math.max(0, Math.random() * (anchorRect.left - elementRect.width));
    }

    // Apply the calculated positions to the element
    element.style.position = 'absolute';
    element.style.top = `${verticalPosition}px`;
    element.style.left = `${horizontalPosition}px`;

    // Optional: Ensure the element stays entirely in the viewport
    if (horizontalPosition + elementRect.width > viewportWidth) {
        element.style.left = `${viewportWidth - elementRect.width}px`;
    }
}



// Call the function to apply ambiant text when the document is ready
document.addEventListener('DOMContentLoaded', applyAmbiantText); 
