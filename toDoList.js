let val = document.addEventListener("submit", listDetails);
const apiUrl = 'https://crudcrud.com/api/29a5d7fa60e5431c9af142bd3f74aa7b/admin'; 

async function listDetails(event){
    event.preventDefault();
    let ItemName= document.getElementById('Item').value 
    let Description = document.getElementById('Description').value; 

    let obj={
        ItemName: ItemName, 
        Description: Description
    }
    try { 
        const response = await axios.post("https://crudcrud.com/api/29a5d7fa60e5431c9af142bd3f74aa7b/admin", obj) 
 
        showProductOnScreen(response.data) 
 
    } 
 
    catch (error) { 
        console.log(error); 
    } 
}  

window.addEventListener('DOMContentLoaded',  
async () => { 
    const respnse = await axios.get("https://crudcrud.com/api/29a5d7fa60e5431c9af142bd3f74aa7b/admin") 
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
        delete toObject._id; 
        childe1lem.innerHTML=childelem.textContent; 
          await axios.put(`${apiUrl}/${obj._id}`,toObject); 

        parent1elem.appendChild(childe1lem); 
        parentelem.removeChild(childelem)
      }; 
      childe1lem.innerHTML=childe1lem;
      parentelem.appendChild(childelem); 
    childelem.appendChild(btn1);
    childelem.appendChild(btn2); 
}

