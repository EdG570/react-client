import $ from 'jquery';

export default class {
  constructor() {
    this.baseUrl  = 'http://localhost:3000/todos';
    
    this.get = this.getRequest;
  }
  
  getRequest(path, params) {
    $.getJSON(path, (data) => {
      console.log('success');
    })
      .done(() => {
        console.log("second success");
      })
      .fail(() => {
        console.log('error');
      })
      .always(() => {
        console.log("Complete");
      });
  } 
}

