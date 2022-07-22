import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: 'input[type=file]',
  exportAs: 'inputFile',
})
export class InputFileDirective {
 /*  @Output() dataURL = new EventEmitter<string | ArrayBuffer | null>();
  files: FileList | undefined;
  constructor() {}

  @HostListener('change', ['$event'])
  onFileChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.files = files;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.dataURL.emit(reader.result);
    };
  } */
}

@Component({
  selector: 'file-button',
  template: `<button mat-button color="primary">{{ label }}</button>`,
})
export class FileButtonComponent {
  @Input() label = 'select';
  constructor(public elementRef: ElementRef) {}
}

@Component({
  selector: 'input[type=file]',
  exportAs: 'inputFile',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class FileInputComponent {
  /* @Input() inputLabel: string = 'Please select a file';
  @ViewChild(FileButtonComponent) fileButton!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log('it is called')
  }
  @HostBinding() hidden = true;

  ngOnInit() {
    this.addButtonToView();
  }
  openFile() {
    (this.element.nativeElement as HTMLInputElement).click();
  }

  addButtonToView() {
    const componentInstance =
      this.viewContainerRef.createComponent(FileButtonComponent).instance;
    componentInstance.label = this.inputLabel;
    const button = componentInstance.elementRef.nativeElement;
    button.addEventListener('click', this.openFile.bind(this));
    this.renderer.insertBefore(
      this.element.nativeElement.parentNode,
      button,
      this.element.nativeElement.nextSibling
    );
  }

  ngOnDestroy() {
    (this.fileButton?.nativeElement as HTMLButtonElement)?.removeEventListener(
      'click',
      this.openFile.bind(this)
    );
  } */
}
