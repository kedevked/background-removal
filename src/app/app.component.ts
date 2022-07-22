import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'background-removal';
  url: string | ArrayBuffer | null = '';
  urlTransformed: SafeUrl | undefined;
  file: File | undefined;
  @ViewChild('imageContainer') imageContainer!: ElementRef<HTMLDivElement>;
  filter: string = '';
  isLoading = false;
  constructor(
    private appService: AppService,
    private sanitizer: DomSanitizer,
    private renderer: Renderer2
  ) {}

  onFileChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files.length === 0) return;
    this.file = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  removeBackground() {
    console.log('url', this.url);
    this.isLoading = true
    this.appService.postImage(this.file as File).subscribe((data) => {
      this.urlTransformed = this.sanitize(
        'data:image/jpg;base64, ' + this.arrayBufferToBase64(data)
      );
      this.isLoading = false;
    });
  }

  private sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  private arrayBufferToBase64(buffer: ArrayBuffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}
