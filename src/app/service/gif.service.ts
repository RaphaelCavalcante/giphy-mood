import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Gif} from '../model/gif';

@Injectable()
export class GifService{
    private gifsUrl='api/gif';
    constructor(private http:Http){}
    getGifsByMood(mood:string):Promise<Gif>{
        const url=`${this.gifsUrl}/${mood}`;
        return this.http.get(url).toPromise().then(response=>response.json().data as Gif);
    }
}
