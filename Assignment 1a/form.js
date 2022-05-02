function Save(){
    let first_name,last_name,email,comments;

    first_name=document.getElementById("first").value;
    last_name=document.getElementById("last").value;
    email=document.getElementById("email").value;
    comments=document.getElementById("comments").value;
    
    //array to store JSON data
    let contact_records=new Array();

    //contacts is the key in localStorage
    contact_records=JSON.parse(localStorage.getItem("contacts"))?JSON.parse(localStorage.getItem("contacts")):[]

    //push the data to array
    contact_records.push({
        "first_name":first_name,
        "last_name":first_name,
        "email":email,
        "comments":comments
    })

    //set the item in the local storage
    localStorage.setItem("contacts",JSON.stringify(contact_records));
}