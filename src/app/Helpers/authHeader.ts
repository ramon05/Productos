import { HttpHeaders } from "@angular/common/http";


export function authHeader() {
    const headers: HttpHeaders = new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Basic ' + btoa('palacio:EYsp1lolTFo=')
      });

    return headers; 
}