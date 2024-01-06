
var websiteName=document.getElementById("siteName");
var websiteURL=document.getElementById("siteURL");



var websiteContainer=[];


if(localStorage.getItem("web")!=null)
{
    websiteContainer=JSON.parse(localStorage.getItem("web"));
    displayWeb(websiteContainer);
}

function addWebsite()
{
   
    if(validateWeb()==true)
    {
        var webObject=
        {
            webName:websiteName.value,
            webURL:websiteURL.value,
        };
        websiteContainer.push(webObject);
        localStorage.setItem("web",JSON.stringify(websiteContainer));
        displayWeb(websiteContainer);
        clearWeb();
    }
    else
    {
        alert("URL is unvalid");
    }


}

function displayWeb(arr)
{
   var cartona=``;
   for(var i=0;i<websiteContainer.length;i++)
   {
     cartona+=`
      <tr>
       <td>${i}</td>
       <td>${arr[i].webName}</td>
       <td><button class="btn btn-info"><a target="-blank" href="${arr[i].webURL}">Visit</a></button></td>
       <td><button class="btn btn-info" onclick="deleteWeb(${i});">Delete</button></td>
      </tr>
     `
   }
   document.getElementById("tableBody").innerHTML=cartona;
}

function clearWeb()
{
    websiteName.value="";
    websiteURL.value="";
}

function deleteWeb(index)
{
   websiteContainer.splice(index,1);
   localStorage.setItem("web",JSON.stringify(websiteContainer));
   displayWeb(websiteContainer);
}



function validateWeb()
{
    var regex=/https:\/\/.{2,}\.com\//; 
    return regex.test(websiteURL.value);
}

