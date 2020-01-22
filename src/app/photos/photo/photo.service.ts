import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root' // component raiz
})
export class PhotoService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  listFromUser(userName: string, page:number) {
    return this.http
      .get<Photo[]>(API + '/' + userName + '/photos');

  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http
    .get<Photo[]>(API + `/${userName}/photos`, { params: params });
}
}