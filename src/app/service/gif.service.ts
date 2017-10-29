import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Gif} from '../model/gif';

@Injectable()
export class GifService {
    private gif_url= 'http://api.giphy.com/v1/gifs/search?q=';
    private api_key= 'Kb9VU3XzdpY8K9hKRblhYb7bSjeSG0kK';

    constructor (private http: Http) {}

    private handleError(error: any): Promise<any> {
        console.error('An error ocurred', error);
        return Promise.reject(error.message || error);
    }
    addFilter(mood: string, filter: string): Promise<Gif[]> {
        const url = `${this.gif_url}${mood}+${filter}&api_key=${this.api_key}&limit=10`;
        return this.http
        .get(url).toPromise()
        .then(response => response.json().data as Gif[])
        .catch(this.handleError);
    }
    getByMood(mood: string): Promise<Gif[]> {
        const url = `${this.gif_url}${mood}&api_key=${this.api_key}&limit=10`;
        console.log(url);
        let gifs: Promise<Gif[]> = this.http
        .get(url).toPromise()
        .then(response => response.json().data as Gif[])
        .catch(this.handleError);
        console.log(gifs[0].slug);
        return gifs;
    }
}
