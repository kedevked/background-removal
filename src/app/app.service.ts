import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  private readonly url =
    `https://api.gladia.io/${environment.URL_Key}/image/image/background-removal/`;

  postImage(file: File) {
    const formData = new FormData();
    formData.append('image', file,  file.name);
    console.log('image', formData.get('image'))
    return this.http.post(this.url, formData, {
      responseType: 'arraybuffer',
      headers: new HttpHeaders({
        'X-BLOBR-KEY': environment['X-BLOBR-KEY']
      }),
    });
  }
}
