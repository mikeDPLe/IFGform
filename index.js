
var customerSignatureHolder = new Array
var employeeSignatureHolder = new Array

function auth() {

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    var authUsername = "Admin"
    var authPassword = "1234"
    
    if(username == authUsername && password == authPassword ) {

         document.getElementById("installForm").style.display = "inline"
         document.getElementById("authForm").style.display = "none"
         
    }
    

}

function step1()
{
    document.getElementById("installForm").style.display = "none";
    document.getElementById("specForm").style.display = "inline"
}

function step2() {

    var minTravelWidth = document.getElementById("travel_width").value
    var minTravelHeight = document.getElementById("travel_height").value
    var productWidth = document.getElementById("product_width").value
    var productHeight = document.getElementById("product_height").value

    var tWidthNumber = parseFloat(minTravelWidth)
    var tWidthUnit = minTravelWidth.replace(/([0-9\.])/g,'')
    var tHeightNumber = parseFloat(minTravelHeight)
    var tLengthUnit = minTravelHeight.replace(/([0-9\.])/g,'')
    var pWidthNumber = parseFloat(productWidth)
    var pWidthUnit = productWidth.replace(/([0-9\.])/g,'')
    var pHeightNumber = parseFloat(productHeight)
    var pLengthUnit = productHeight.replace(/([0-9\.])/g,'')
   
  if(tWidthNumber && tHeightNumber && pWidthNumber && pHeightNumber) {
      var x = compareDimension(tWidthNumber,tHeightNumber,pWidthNumber,pHeightNumber)
      switch(x) {
          case 0: 
          document.getElementById("specForm").style.display = "none";
          document.getElementById("specPass").style.display = "block";
          document.getElementById("b2").addEventListener('click', step3)
          break;
          default: 
          document.getElementById('specFail').style.display = "block";
          document.getElementById("specForm").style.display = "none";
      }
   } 
   
}

function step3(){
    document.getElementById("specPass").style.display ="none"
    document.getElementById("successInstall").style.display="inline"
    document.getElementById("signatureDiv").style.display="inline"
  
    var canvas = document.getElementById("signature-pad");
    var signaturePad = new SignaturePad(canvas);
    
    document.getElementById('clear').addEventListener('click', function(){
        signaturePad.clear()
    })
    document.getElementById('done').addEventListener('click', function() {
        var valid = 0;
        var errorField = "";      
        var customerNameField = document.getElementById("customer_name").value
        console.log(customerNameField)
        if(customerNameField === "") {
            errorField += "Please type in customer's name"
            valid += 1
        }
        if(signaturePad.isEmpty()) {    
           errorField += " <br> Please enter a signature"
           valid += 1
        }
        document.getElementById('errorMsg').innerHTML = errorField
        console.log(errorField)
        console.log(valid)
        if(valid == 0) {
            var data = signaturePad.toDataURL()
            b = {
                customer: customerNameField,
                signatureURI: data,
                specFailed: false,
                step: "acceptDelivery"
            }
            customerSignatureHolder.push(b)
            document.getElementById("successInstall").style.display="none"
            document.getElementById("signatureDiv").style.display="none"
            complete()

        }
    })
}

function dimensionFail_1 (){
    document.getElementById("specFail").style.display = "none";
    document.getElementById("travelDisclaimertext").style.display = "inline";
    document.getElementById("signatureDiv1").style.display = "inline";

    var canvas = document.getElementById("signature-pad1");
    var signaturePad = new SignaturePad(canvas);
    
    document.getElementById('clear1').addEventListener('click', function(){
        signaturePad.clear()
    })
    document.getElementById('done1').addEventListener('click', function validatePad() {
        var valid = 0;
        var errorField = "";      
        var customerNameField = document.getElementById("customer_name1").value
        console.log(customerNameField)
        if(customerNameField === "") {
            errorField += "Please type in customer's name"
            valid += 1
        }
        if(signaturePad.isEmpty()) {    
           errorField += " <br> Please enter a signature"
           valid += 1
        }
        document.getElementById('errorMsg1').innerHTML = errorField
        console.log(errorField)
        console.log(valid)
        if(valid == 0) {
            var data = signaturePad.toDataURL()
            var b = {
                customer: customerNameField,
                signatureURI: data,
                specFailed: true,
                step: "acceptTransfer"
            }
            customerSignatureHolder.push(b)
            console.log(customerSignatureHolder)
            document.getElementById("signatureDiv1").style.display = "none"
            dimensionFail_2()
         
        }
    })
}

function dimensionFail_2() {
    document.getElementById("EmployeeSignatureDiv").style.display="inline"
    document.getElementById("signatureDiv").style.display = "none";
    var canvas = document.getElementById("e-signature-pad");
    var signaturePad = new SignaturePad(canvas);
    
    document.getElementById('e-clear').addEventListener('click', function(){
        signaturePad.clear()
    })
    document.getElementById('e-done').addEventListener('click', function() {
        var valid = 0;
        var errorField = "";      
        var customerNameField = document.getElementById("employee_name").value
        console.log(customerNameField)
        if(customerNameField === "") {
            errorField += "Please type in employee's name"
            valid += 1
        }
        if(signaturePad.isEmpty()) {    
           errorField += " <br> Please enter a signature"
           valid += 1
        }
        document.getElementById('e-errorMsg').innerHTML = errorField
        if(valid == 0) {
            var data = signaturePad.toDataURL()
            var b = {
                employee: customerNameField,
                signatureURI: data,
                specFailed: true,
                step: "acceptTransfer"
            }
            employeeSignatureHolder.push(b);
            document.getElementById("travelDisclaimertext").style.display = "none";
            document.getElementById("EmployeeSignatureDiv").style.display="none"
            document.getElementById("specPass").style.display = "block";
            document.getElementById("b2").addEventListener('click', dimensionFailcomplete)
        }
    })


}

function dimensionFailcomplete () { 
    document.getElementById("specPass").style.display = "none";
    document.getElementById("problemInstall").style.display = "inline";
    document.getElementById("signatureDiv").style.display = "inline";
    var canvas = document.getElementById("signature-pad");
    var signaturePad = new SignaturePad(canvas);
    document.getElementById("customer_name").value = ""
    document.getElementById('done').addEventListener('click', function validatePad1() {
        var valid = 0;
        var errorField = "";      
        var customerNameField = document.getElementById("customer_name").value
        console.log(customerNameField)
        if(customerNameField === "") {
            errorField += "Please type in customer's name"
            valid += 1
        }
        if(signaturePad.isEmpty()) {    
           errorField += " <br> Please enter a signature"
           valid += 1
        }
        document.getElementById('errorMsg').innerHTML = errorField
        if(valid == 0) {
            var data = signaturePad.toDataURL()
            var b = {
                customer: customerNameField,
                signatureURI: data,
                specFailed: true,
                step: "acceptDelivery"
            }
            customerSignatureHolder.push(b);
            document.getElementById("signatureDiv").style.display = "none";
            document.getElementById("problemInstall").style.display = "none"
            complete()
        }
    })
    
}

function complete (){
    document.getElementById("resultPage").style.display = "inline"
    customerParent = document.getElementById("customer_info")
    employeeParent = document.getElementById('employee_info')
    console.log('csh', customerSignatureHolder)
    console.log('esh', employeeSignatureHolder)
    customerSignatureHolder.forEach(tempFunction)
    employeeSignatureHolder.forEach(tempFunction2)
  
function tempFunction(customer) {
   console.log('what', customer)
   childElement = document.createElement('div')
   appendChildElement = customerParent.appendChild(childElement)
   appendChildElement.innerHTML = "Customer name:" + customer.customer
   childElement2 = document.createElement('img')
   appendChildElement2 = childElement.appendChild(childElement2)
   appendChildElement2.src = customer.signatureURI;

}
function tempFunction2 (employee) {
    console.log('when', employee)
    childElement = document.createElement('div');
    appendChildElement = employeeParent.appendChild(childElement)
    appendChildElement.innerHTML = "Employee name:" + employee.employee;
    childElement2 = document.createElement('img')
    appendChildElement2 = childElement.appendChild(childElement2)
    appendChildElement2.src = employee.signatureURI;
}

}
function restart() {
    window.location.reload()
    isReload = true;
    console.log(isReload)
}

function compareDimension(tWidth, tHeight, pWidth, pHeight) {
    var result = 0

    console.log(tWidth,tHeight,pWidth,pHeight)
    
    if(!(pWidth <= tWidth) || !(pWidth <= tHeight) )
    {
        result += 1
    }
    if(!(pHeight <= tWidth) || !(pWidth <= tHeight) )
    {
        result += 1
    }
    
    return result
}




