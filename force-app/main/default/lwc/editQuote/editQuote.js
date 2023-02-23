/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, wire, track } from "lwc";
import getQuoteDetails from '@salesforce/apex/QuoteController.getQuoteDetails';
import { updateRecord } from "lightning/uiRecordApi";

export default class EditQuote extends LightningElement {
  @api recordId;
  quoteData = {
    name: '',
    startDate: '',
    endDate: ''
  };

  @wire(getQuoteDetails, {recordId: '$recordId'})
  wiredQuote ({error, data}) {
      if (error) {
      } 
      else if (data) {
        console.log(data)
        this.quoteData = data;
      }
  }

  handleSave(){
    const inputData = this.template.querySelectorAll('lightning-input');
    
  }

  renderedCallback() {
  }
}
