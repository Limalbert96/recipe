import { Injectable } from '@angular/core';

declare var toastr: any

@Injectable()
export class ToasterService {

  constructor() { }

  Success(title: String, message ?: String){
    toastr.success(message, title);
  }

  Warning(title: String, message ?: String){
    toastr.warning(message, title);
  }

  Error(title: String, message ?: String){
    toastr.error(message, title);
  }

  Info(message ?: String){
    toastr.info( message);
  }


 
}
