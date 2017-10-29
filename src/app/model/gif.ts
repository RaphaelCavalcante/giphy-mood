export class Gif {
    type: string;
    id: string;
    url: string;
    slug: string;
    constructor (values: Object = {}) {
        Object.assign(this, values);
    }
}