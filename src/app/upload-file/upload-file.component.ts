import {Component, OnInit} from '@angular/core';
import {FileUploadService} from '../services/file-upload.service';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.less']
})
export class UploadFileComponent implements OnInit {

    selectedImage: File;
    selectedPdf: File;

    xAxis: number;
    yAxis: number;

    constructor(private fileUploadService: FileUploadService) {
    }

    ngOnInit() {
    }



    onSubmit() {
        const formData = new FormData();
        formData.append('pdf', this.selectedPdf, this.selectedPdf.name);


        this.fileUploadService.upload(formData, this.xAxis, this.yAxis).subscribe(res => console.log(res));

    }


    onSelectPdf(event) {
        this.selectedPdf = <File> event.target.files[0];
        console.log('pdf', this.selectedPdf);

    }

    onSelectImage(event) {
        this.selectedImage = <File> event.target.files[0];
    }


}

