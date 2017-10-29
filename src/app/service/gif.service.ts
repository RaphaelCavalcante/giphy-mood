import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Gif} from '../model/gif';
import {environment} from '../../app/environment';
import 'app/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const GIF_URL = environment.gif_url;
const API_KEY = environment.api_key;
@Injectable()
export class GifService {

    constructor (private http: Http) {}

    private handleError(error: Response| any) {
        console.error('An error ocurred', error);
        return Observable.throw(error);
    }
    addFilter(mood: string, filter: string): Observable<Gif[]> {
        const url = `${GIF_URL}${mood}+${filter}&api_key=${API_KEY}&limit=10`;
        return this.http
        .get(url)
        .map(response => {
            const gifs = response.json();
            return gifs.data.map((gif: Gif) => new Gif(gif));
        }).
        catch(this.handleError);
    }
    getByMood(mood: string): Observable<Gif[]> {
        const url = `${GIF_URL}${mood}&api_key=${API_KEY}&limit=10`;
        return this.http
        .get(url)
        .map(response => {
            const gifs = response.json();
            let gifArray = gifs.data;
            return gifArray;
        }).
        catch(this.handleError);
    }
}
