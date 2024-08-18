import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalChunkErrorHandlerService implements ErrorHandler {

    constructor() { }
    handleError(error: any): void {
        console.error('An error occurred:', error.message);
        console.error(error);
    }
}
