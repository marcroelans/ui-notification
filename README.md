<p align="center"><img src="assets/logo.png" width="300" height="auto"></p>

---

Ui-Notification is a simple vanilla js component for simple messages in the browser.

## Install / Import

### via npm

Install the package
``` sh
npm i ui-notification --save
```

``` javascript
import { init as UiNotifcationInit } from 'ui-notification';
```


### via script

Download the file **ui-notification.js** in the `js/dist/` folder and place it into your html file.

```html
...
<body>

  ...
  <script src="ui-notification.js"></script>
  <script>
    // use here
  </script>

</body>
```

## API
To create a notifcation component you just need to call the init function.
There are three arguments. Title and subtitle needs to be passes into the function.
The third one is an optional argument. Here you can pass your options.
It returns the created prototype inheritance.

`init(title <String>, subtitle <String>, config <Object>)`

Here is an example with every available option with its default value.

``` javascript
  init(
    'Hello World',
    'This is a cool component',
    {
      root: document.querySelector('body'), // can be any html element
      shadow: false, // true | false
      closable: true, // true | falsses
      duration: null, // Number > 0 | null
      shouldDestroy: true, // true | false
    }
  );
```
