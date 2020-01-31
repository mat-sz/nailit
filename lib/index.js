'use strict';

/**
 * Asynchronously generate a thumbnail.
 * @param {String} imageUrl URL to the image, can be anything accepted by the src attribute on <img>. Images from a foreign origin will result in a SecurityError being thrown.
 * @param {Number} maxSize Maximum width or height (px). Default: 250.
 * @param {Boolean} cover When true this will cause the thumbnail to be a square and image will be centered with its smallest dimension becoming as large as maxDimension and the overflow being cut off. Default: false.
 * @param {String} outputType Mimetype of the output. Default: image/jpeg.
 * @param {Number} outputQuality Quality of the output. Default: 0.7.
 * @param {Boolean} outputBlob Should output be a Blob object. Default: false.
 * @returns Promise that resolves with data URI or a Blob object if outputBlob is set to true.
 */
function nailIt(imageUrl, maxSize = 250, cover = false, outputType = 'image/jpeg', outputQuality = 0.7, outputBlob = false) {
    return new Promise((resolve, reject) => {
        let image = new Image();

        image.onload = () => {
            let canvas = document.createElement('canvas');
            let scale = 1;
            let x = 0;
            let y = 0;
            let width = 0;
            let height = 0;

            if (cover) {
                if (image.width > image.height) {
                    scale = maxSize/image.height;
                    width = image.width * scale;
                    height = maxSize;
                    x = -1 * (width - maxSize)/2;
                } else {
                    scale = maxSize/image.width;
                    width = maxSize;
                    height = image.height * scale;
                    y = -1 * (height - maxSize)/2;
                }

                canvas.width = maxSize;
                canvas.height = maxSize;
            } else {
                // If any of the dimensions of the given image is higher than our maxSize
                // scale the image down, otherwise leave it as is.
                scale = Math.min(Math.min(maxSize/image.width, maxSize/image.height), 1);

                width = image.width * scale;
                height = image.height * scale;
        
                canvas.width = width;
                canvas.height = height;
            }

            try {
                canvas.getContext('2d').drawImage(image, x, y, width, height);

                if (outputBlob) {
                    canvas.toBlob((blob) => resolve(blob), outputType, outputQuality);
                } else {
                    resolve(canvas.toDataURL(outputType, outputQuality));
                }
            } catch (e) {
                // Probably caused by a tainted canvas (i.e. a resource from a foreign origin.)
                reject(e);
            }
        };

        image.onerror = (err) => {
            // The image couldn't be loaded.
            reject(err);
        };

        image.src = imageUrl;
    });
}

module.exports = nailIt;