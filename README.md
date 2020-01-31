# nailIt

Easily generate thumbnails on the client-side. Works well with React.

## Why?

* To reduce server load.
* To allow client-side encryption of the thumbnails (in case of a secure file storage system).
* To create thumbnails inside of an Electron app.

## Usage

```js
nailIt(imageUrl, maxSize, cover, outputType, outputQuality, outputBlob)
```

| Argument      | Default value | Description                                                            |
|---------------|---------------|------------------------------------------------------------------------|
| imageUrl      | None          | An URL to the image, can't come from a foreign origin without CORS.    |
| maxSize       | 250           | Maximum width or height. The image will be resized to have both width and height be less or equal to this value. |
| cover         | false         | When set to true the image will be constrained to aspect ratio 1:1 and centered. |
| outputType    | image/jpeg    | Can be set to any mimetype supported by `<canvas>`. |
| outputQuality | 0.7           | Smaller values result in smaller file sizes. |
| outputBlob    | false         | When set to true the function will resolve with a Blob containing the thumbnail, otherwise it'll resolve with a data URI. |

The function returns either a Blob or a data URI based on the `outputBlob` argument.

## Installation

npm: `npm install nailit`

yarn: `yarn add nailit`

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