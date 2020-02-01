/**
 * nailIt options.
 * @interface
 */
export interface NailItOptions {
    /**
     * Maximum width or height (px). Default: 250.
     */
    maxSize?: number,

    /**
     * When true this will cause the thumbnail to be a square and image will be centered with its smallest dimension becoming as large as maxDimension and the overflow being cut off. Default: false.
     */
    cover?: boolean,

    /**
     * Mimetype of the output. Default: image/jpeg.
     */
    outputType?: string,

    /**
     * Quality of the output. Default: 0.7.
     */
    outputQuality?: boolean,
}

/**
 * Asynchronously generate a thumbnail.
 * @param {String} imageUrl URL to the image, can be anything accepted by the src attribute on <img>. Images from a foreign origin will result in a SecurityError being thrown.
 * @param {NailItOptions} options Options.
 * @param {Boolean} outputBlob Should output be a Blob object. Default: false.
 * @returns Promise that resolves with data URI or a Blob object if outputBlob is set to true.
 */
export function nailIt(imageUrl: string, options?: NailItOptions): Promise<string>;

/**
 * Asynchronously generate a thumbnail.
 * @param {String} imageUrl URL to the image, can be anything accepted by the src attribute on <img>. Images from a foreign origin will result in a SecurityError being thrown.
 * @param {NailItOptions} options Options.
 * @param {Boolean} outputBlob Should output be a Blob object. Default: false.
 * @returns Promise that resolves with data URI or a Blob object if outputBlob is set to true.
 */
export function nailIt(imageUrl: string, options?: NailItOptions, outputBlob?: false): Promise<string>;

/**
 * Asynchronously generate a thumbnail.
 * @param {String} imageUrl URL to the image, can be anything accepted by the src attribute on <img>. Images from a foreign origin will result in a SecurityError being thrown.
 * @param {NailItOptions} options Options.
 * @param {Boolean} outputBlob Should output be a Blob object. Default: false.
 * @returns Promise that resolves with data URI or a Blob object if outputBlob is set to true.
 */
export function nailIt(imageUrl: string, options?: NailItOptions, outputBlob?: true): Promise<Blob>;

export default nailIt;