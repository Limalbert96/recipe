import { Injectable } from '@angular/core';

declare var toastr: any

@Injectable()
export class ToasterService {

  constructor() { }

  Success(title: String, message ?: String){
    toastr.success(title, message);
  }

  Warning(title: String, message ?: String){
    toastr.success(title, message);
  }

  Error(title: String, message ?: String){
    toastr.success(title, message);
  }

  Info(message ?: String){
    toastr.success( message);
  }


 
}
