public with sharing class QuoteController {
    public QuoteController() {
    }

    @AuraEnabled(cacheable=true)
    public static QuoteDto getQuoteDetails(String recordId){
        try {
            List<Quote__c> quote = [ SELECT Id, Name, StartDate__c, EndDate__c from Quote__c where Id = :recordId];
            QuoteDto quoteDetails = new QuoteDto(quote[0]);
            return quoteDetails;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}