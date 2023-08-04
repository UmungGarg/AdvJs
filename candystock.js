let val = document.addEventListener('submit', productDetails); 
const apiUrl = 'https://crudcrud.com/api/2ce79dc2d33541e4a9cd6c73e7837ff9/admin'; 
 
async function productDetails(event) { 
     event.preventDefault(); 
    let ItemName = document.getElementById('Item').value; 
    let Description = document.getElementById('Description').value; 
    let Price = document.getElementById('Price').value; 
    let Quantity = document.getElementById('Quantity').value; 
 
    let obj = { 
        ItemName: ItemName, 
        Description: Description, 
        Price: Price, 
        Quantity: Quantity 
    } 
 
    try { 
        const response = await axios.post("https://crudcrud.com/api/2ce79dc2d33541e4a9cd6c73e7837ff9/admin", obj) 
 
        showProductOnScreen(response.data) 
 
    } 
 
    catch (error) { 
        console.log(error); 
    } 
 
} 
 
window.addEventListener('DOMContentLoaded',  
async () => { 
    const respnse = await axios.get("https://crudcrud.com/api/2ce79dc2d33541e4a9cd6c73e7837ff9/admin") 
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
    let parentelem = document.getElementById('outputList'); 
    let childelem = document.createElement('li'); 
    childelem.textContent = obj.ItemName + '---' + obj.Description + '---' + obj.Price+ '---' ; 
 
    const quantityElement = document.createElement('span'); 
    quantityElement.textContent = obj.Quantity; 
    quantityElement.classList.add('Quantity'); 
    childelem.appendChild(quantityElement); 
 
    let btn1 = document.createElement('button'); 
    btn1.textContent = 'Buy1'; 
    btn1.style.marginLeft = '20px'; 
 
    let btn2 = document.createElement('button'); 
    btn2.textContent = 'Buy2'; 
    btn2.style.marginLeft = '40px'; 
 
    let btn3 = document.createElement('button'); 
    btn3.textContent = 'Buy3'; 
    btn3.style.marginLeft = '50px'; 
 
    // let span = Quantity; 
     
    btn1.onclick = async () => { 
      let candyData = await axios.get(`${apiUrl}/${obj._id}`); 
      let candyObject = candyData.data; 
      if(candyObject.Quantity>0){ 
      candyObject.Quantity = ( 
        Number(candyObject.Quantity)-1).toString(); 
        delete candyObject._id; 
        quantityElement.innerHTML=candyObject.Quantity; 
        await axios.put(`${apiUrl}/${obj._id}`,candyObject); 
      } 
      else{ 
        alert('Insufficient quantity'); 
      } 
    }; 
     
      btn2.onclick = async () => { 
        let candyData = await axios.get(`${apiUrl}/${obj._id}`); 
      let candyObject = candyData.data; 
      if(candyObject.Quantity>0){ 
      candyObject.Quantity =  
        candyObject.Quantity-2
        delete candyObject._id; 
        quantityElement.innerHTML=candyObject.Quantity; 
        await axios.put(`${apiUrl}/${obj._id}`,candyObject); 
      } 
      else{ 
        alert('Insufficient quantity. Please enter a valid quantity.'); 
      } 
    }; 
 
    btn3.onclick = async () => { 
 
      let candyData = await axios.get(`${apiUrl}/${obj._id}`); 
      let candyObject = candyData.data; 
      if(candyObject.Quantity>0){ 
      candyObject.Quantity = ( 
        Number(candyObject.Quantity)-3).toString(); 
        delete candyObject._id; 
        quantityElement.innerHTML=candyObject.Quantity; 
        // quantityElement.textContent = candyObject.Quantity; 
        await axios.put(`${apiUrl}/${obj._id}`,candyObject); 
      } 
      else{ 
        alert('Insufficient quantity. Please enter a valid quantity.'); 
      } 
}; 
 
    parentelem.appendChild(childelem); 
    childelem.appendChild(btn1); 
    childelem.appendChild(btn2); 
    childelem.appendChild(btn3); 
}