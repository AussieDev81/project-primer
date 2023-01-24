# Project Primer
![GitHub forks](https://img.shields.io/github/forks/AussieDev81/project-primer?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/AussieDev81/project-primer?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/AussieDev81/project-primer?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/AussieDev81/project-primer?style=for-the-badge)

A simple extension that helps speed up development time by simplifying repetitive tasks we do over and over again.

## Features
### Rapid file creation
Quickly create a web project skeleton with the following structure simply by selecting `Primer: Create Web Skeleton` in the command palette.
```ps 
│   index.html
│
└───assets
    ├───css
    │       styles.css
    │
    ├───images
    └───js
            scripts.js
```

The following shows the file contents created...
1. index.html
    ```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="color-scheme" content="light">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/css/styles.css">
        <title>Home</title>
    </head>

    <body>
        <div class="container">

            <!-- Happy coding! -->

        </div>
        <script src="./assets/js/scripts.js"></script>
    </body>

    </html>
    ```
2. styles.css
    ```css
    /* Ubuntu font */
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
    /* Font awesome 6 */
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');

    :root {
        --brand-color: #F62F63;
        --dark-color: #171435;
        --mid-color: #8F8AC0;
        --light-color: #FFFFFF;
    }

    body {
        box-sizing: border-box;
        font-family: 'Ubuntu';
        color: var(--dark-color);
        margin: 0;
    }
    ```
3. scripts.js
    ```js
    //scripts.js

    ```

### Code snippets
There are also code snippets that can be used in existing files to help speed up code development time, including:
| **Trigger** | **Action**                                                                            |
|-------------|---------------------------------------------------------------------------------------|
| `!html`     | generates a basic HTML code snippet                                                   |
| `!html+`    | creates a basic HTML snippet with links to css and js files                           |
| `!css`      | creates a css snippet with `:root` and `body` elements and basic settings             |
| `!js-form`  | generates a basic JavaScript `submit` event listener and captures the form element    |
| `!js-event` | generates a more generic event listener which allows you to specify the listener type |



## Known Issues

At this point there are no known issues, but future issues will be added here.

## Release Notes

This extension is currently on its first release.  
Suggestions and/or contributions are welcome.

### 1.0.0

Initial release