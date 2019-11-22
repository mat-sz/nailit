# nailIt

Easily generate thumbnails on the client-side. Works well with React.

## Why?

* To reduce server load.
* To allow client-side encryption of the thumbnails (in case of a secure file storage system).
* To create thumbnails inside of an Electron app.

## Installation

npm: *npm install nailit*

yarn: *yarn add nailit*

## Example

```js
import nailIt from 'nailit';

async function example() {
    // You can use any URL that can be used as a src="" inside of an <img> tag.
    // Images from a foreign origin (with no or an improper Access-Control-Allow-Origin configuration) will result in a SecurityError being thrown.
    let url = await nailIt('./photo.jpg');

    // The result is a data URL that can be used with an <img> element as well.
}
```

## Live demo

https://matsz.dev/nailit-demo/

Code: https://github.com/mat-sz/nailit-demo