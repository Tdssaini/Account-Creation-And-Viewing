public class CreateAccountCompController {
    
    /*
    * @Param Account
    * @Return String
    *
    * This method takes Account as a Input and insert that account into database
    * Once inserted we are taking the AccountId from that account and returning back.
    */
    @AuraEnabled
    public static String saveAccount(Account account){
        insert account;
        return String.valueOf(account.Id);
    }
}