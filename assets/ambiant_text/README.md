   **Ambiant Text Feature Documentation**

   **Overview**

   This feature adds contextual or atmospheric text elements around specified story elements. The text is initially faint and only becomes visible on hover, providing optional context, foreshadowing, or clues.

   **Usage**

   1. **Include Files:** Add the `ambiant-text.css` and `ambiant-text.js` files to your project. Link the CSS in the `<head>` of your HTML and include the JavaScript file at the end of the `<body>` or in the `<head>` with the `defer` attribute.

   2. **Define Ambiant Text Configurations:** In the `ambiantTextConfigs` object within `ambiant-text.js`, add your configurations. Each configuration consists of:
      - `selector`: A CSS selector targeting the elements where you want to add ambiant text. 
      - `content`: The HTML string or a function returning an HTML string for the ambiant text.

      ```javascript
      // Example configuration
      ambiantTextConfigs = {
        '.mysterious': {
          content: '<span style="font-style: italic;">Secrets...</span>'
        },
        // ... more configurations
      };
      ```

   3. **Apply to Elements:** Add the appropriate classes or use selectors that match your configurations to the elements in your story.

      ```html
      <p class="story-element mysterious">
        The old house stood on the hill...
      </p>
      ```

   4. **Positioning:** The `positionAmbiantElement` function in `ambiant-text.js` handles positioning. You can modify this function to customize the positioning logic.

   **Customization**

   - **CSS Styling:** You can further customize the appearance of the ambiant text by modifying the styles in `ambiant-text.css`.
   - **Positioning Logic:** Adjust the `positionAmbiantElement` function to implement different positioning strategies.
   - **Dynamic Content:** Use functions for the `content` property in your configurations to generate ambiant text dynamically based on context or data.

