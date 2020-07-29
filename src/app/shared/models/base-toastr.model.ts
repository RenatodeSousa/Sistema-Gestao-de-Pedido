import toastr from 'toastr';

export abstract class BaseToastr {

  constructor() { }

  static configuration(): toastr {
    return (toastr.options.progressBar = true) &&
           (toastr.options.preventDuplicates = true) &&
           (toastr.options.closeButton = true);
  }
}
