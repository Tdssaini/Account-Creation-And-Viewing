({
    createAccount : function(component, event) {
        var accountName = component.find("accName").get("v.value");
        if(!accountName || 0 === accountName.length || !accountName.trim()){
        	alert("Please Enter Account Name");
            return;
    	}	
        var saveAction = component.get("c.saveAccount");
        saveAction.setParams({ 
            "account": component.get("v.newAccount")
        });
        saveAction.setCallback(this, function(response) {
            if (component.isValid() && response.getState() === "SUCCESS") {
                var accountId = response.getReturnValue();
                if(navigator.userAgent.match('(Mobi)')){
                    var sObectEvent = $A.get("e.force:navigateToSObject");
                    sObectEvent.setParams({
                        "recordId": accountId ,
                        "slideDevName": "detail"
                    });
                    sObectEvent.fire();
                }else{
                    window.location.href = '/'+ accountId;
                }
            }
        });
		$A.enqueueAction(saveAction)
	}
    
})