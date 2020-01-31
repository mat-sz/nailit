export function nailIt(imageUrl: string, maxSize?: number, cover?: boolean, outputType?: string, outputQuality?: boolean, outputBlob?: true): Promise<Blob>;
export function nailIt(imageUrl: string, maxSize?: number, cover?: boolean, outputType?: string, outputQuality?: boolean, outputBlob?: false): Promise<string>;
export function nailIt(imageUrl: string, maxSize?: number, cover?: boolean, outputType?: string, outputQuality?: boolean): Promise<string>;
export default nailIt;