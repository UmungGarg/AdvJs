let val = document.addEventListener("submit", listDetails);
const apiUrl = 'https://crudcrud.com/api/86c7129a8ae84899b00da34de4f4fdf8/admin'; 

async function listDetails(event){
    event.preventDefault();
    let ItemName= document.getElementById('Item').value 
    let Description = document.getElementById('Description').value; 

    let obj={
        ItemName: ItemName, 
        Description: Description,
        flag: "UnDone"
    }
    try { 
        const response = await axios.post("https://crudcrud.com/api/86c7129a8ae84899b00da34de4f4fdf8/admin", obj) 
 
        showProductOnScreen(response.data) 
 
    } 
 
    catch (error) { 
        console.log(error); 
    } 
}  

window.addEventListener('DOMContentLoaded',  
async () => { 
    const respnse = await axios.get("https://crudcrud.com/api/86c7129a8ae84899b00da34de4f4fdf8/admin") 
    try  
    { 
        for (let i = 0; i < respnse.data.length; i++) { 
            showProductOnScreen(respnse.data[i]) 
        } 
    } 
 
    catch (err) { 
        console.log(err) 
    } 
 
})

function showProductOnScreen(obj) { 
    let parentelem = document.getElementById('remainingList'); 
    let childelem = document.createElement('li'); 
    childelem.textContent = obj.ItemName + '---' + obj.Description;

    let parent1elem = document.getElementById('doneList'); 
    let childe1lem = document.createElement('li'); 

    let btn1 = document.createElement('button'); 
    btn1.textContent = 'Done'; 
    btn1.style.color = 'green'; 
    btn1.style.marginLeft = '20px';
 
    let btn2 = document.createElement('button'); 
    btn2.textContent = 'X'; 
    btn2.style.color = 'red';
    btn2.style.marginLeft = '20px';

    btn1.onclick = async () => { 
        childelem.removeChild(btn1);
    childelem.removeChild(btn2);
        let toData = await axios.get(`${apiUrl}/${obj._id}`); 
        let toObject = toData.data; 
        toObject.flag="Done";
        delete toObject._id; 
        childe1lem.innerHTML=childelem.textContent; 
          await axios.put(`${apiUrl}/${obj._id}`,toObject); 

        parent1elem.appendChild(childe1lem); 
        parentelem.removeChild(childelem)
      }; 

      parentelem.appendChild(childelem); 
    childelem.appendChild(btn1);
    childelem.appendChild(btn2); 
    if(obj.flag=="Done"){
        parentelem.removeChild(childelem);
        parent1elem.appendChild(childelem);
        childelem.removeChild(btn1);
        childelem.removeChild(btn2);
        
    }
}

