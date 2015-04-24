function getCategories()
{
    var objrequest1 = new XMLHttpRequest();
    var allCatUrl = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    //Checks that the object has returned data 
    objrequest1.onreadystatechange = function() 
    { 
        if (objrequest1.readyState == 4 && objrequest1.status == 200) 
        { 
            var allCatOutput = JSON.parse(objrequest1.responseText); 
            GenerateAllCategories(allCatOutput); 
        } 
    } 
     
     
    //Initiate the server request 
    objrequest1.open("GET", allCatUrl, true); 
    objrequest1.send(); 
}

function GenerateAllCategories(result) 
{ 
    var count = 0; 
    var displayCatText = "<table><tr><th>Category ID</th><th>Category Name</th><th>Category Description</th></tr>";  //Create a table header ; 
     
    //Loop to extract data from the response object 
    for (count = 0; count < result.GetAllCategoriesResult.length; count++) 
    { 
       
       displayCatText += "<tr><td>" + result.GetAllCategoriesResult[count].CID + "</td><td>" + result.GetAllCategoriesResult[count].CName + "</td><td>" + result.GetAllCategoriesResult[count].CDescription + "</td></tr>"; 
    } 
     
    document.getElementById("Categorylabel").innerHTML = displayCatText;
    displayCatText += "</table>"; 
} 

function CreateCategory()
{
    var objrequest2 = new XMLHttpRequest();
    var createCatURL = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";
    
    //Gather data
    
    var categoryName = document.getElementById("catName").value;
    var categoryDescr = document.getElementById("catDescript").value;
    
    //Create new category string
    
    var newCategory = '{"CName":"' + categoryName + '","CDescription":"' + categoryDescr +'"}';
    
    objrequest2.onreadystatechange = function()
    {
        if (objrequest2.readyState == 4 && objrequest2.status == 200)
        {
            var createResult = JSON.parse(objrequest2.responseText)
            OperationResult(createResult);
        }
    }
    
    //Start AJAX request
    objrequest2.open("POST",createCatURL,true);
    objrequest2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objrequest2.send(newCategory);
    
}


function OperationResult(output)
{
     if (output.WasSuccessful == 1)
    {
        document.getElementById("catResultLabel").innerHTML = "The operation was successful!";
    }
    
    else
    {
        document.getElementById("catResultLabel").innerHTML = "The operation was NOT successful." + "<br>" + output.Exception;
    }
}

function UpdateDescription()
{
    var objrequest3 = new XMLHttpRequest();
    var updateURL = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    //Collect New Description
    
    var categoryID = document.getElementById("catID").value;
    var Description = document.getElementById("updatedescrlabel").value;
    
    //Create new Description string
    
    var newDescription = '{"CID":"' + categoryID + '","CDescription":"' + Description +'"}';
    
     objrequest3.onreadystatechange = function()
    {
        if (objrequest3.readyState == 4 && objrequest3.status == 200)
        {
            var updateResult = JSON.parse(objrequest3.responseText)
            updateOperationResult(updateResult);
        }
    }
    
    
    //Start AJAX request
    objrequest3.open("POST",updateURL,true);
    objrequest3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objrequest3.send(newDescription);
}

function updateOperationResult(output)
{
        if (output.WasSuccessful == 1)
    {
        document.getElementById("updateResultlabel").innerHTML = "The operation was successful!";
    }
    
    else
    {
        document.getElementById("updateResultlabel").innerHTML = "The operation was NOT successful." + "<br>" + output.Exception;
    }

}

function DeleteCategory()
{
     var objRequest4 = new XMLHttpRequest();
  var deleteURL = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory/";
  deleteURL += document.getElementById("delCatID").value;
  
  
     //Checks that the object has returned data 
    objRequest4.onreadystatechange = function() 
    { 
        if (objRequest4.readyState == 4 && objRequest4.status == 200) 
        { 
            var deleteResult = JSON.parse(objRequest4.responseText); 
            deleteOperationResult(deleteResult); 
        }
        
    }
    
    //Initiate the server request 
    objRequest4.open("GET", deleteURL, true);
    objRequest4.send();
    
    
}


    function deleteOperationResult(output)
    {
    
    if (output.DeleteCategoryResult.WasSuccessful == 1)
    {
        document.getElementById("deleteResult").innerHTML = "The operation was successful!"
    }
    
    else
    {
        document.getElementById("deleteResult").innerHTML = "The operation was NOT successful." + "<br>" + output.Exception;
    }
    
    }
    

function SelectSection()
{
    if (document.getElementById("selection").value == "Display Section 1")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
     }
     
     else if (document.getElementById("selection").value == "Display Section 2")
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
     }
     else if (document.getElementById("selection").value == "Display Section 3")
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
     }
     
     else if (document.getElementById("selection").value == "Display Section 4")
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "visible";
        document.getElementById("section5").style.visibility = "hidden";
     }
     
      else if (document.getElementById("selection").value == "Display Section 5")
      {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "visible";
     }
     
     else
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
      
     }
}

