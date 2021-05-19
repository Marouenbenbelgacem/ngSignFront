import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    SERVER_URL: string = 'http://localhost:8080/fileUpload/upload';

    constructor(private http: HttpClient) {
    }

    public upload(formData: FormData, xAxis: number, yAxis: number) {
        console.log('file', formData);

        return this.http.post<any>(this.SERVER_URL + '?xAxis=' + xAxis + '&yAxis=' + yAxis, formData, {
            reportProgress: true,
            observe: 'events',
        });
    }
}
