let val = document.addEventListener('submit', productDetails);

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
        const response = await axios.post("https://crudcrud.com/api/7d8cbcaf76b048d7b90a7f5264e43d7c/admin", obj)

        showProductOnScreen(response.data)

    }

    catch (error) {
        console.log(error);
    }

}

window.addEventListener('DOMContentLoaded', 
async () => {
    const respnse = await axios.get("https://crudcrud.com/api/7d8cbcaf76b048d7b90a7f5264e43d7c/admin")
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

    childelem.textContent = obj.ItemName + '---' + obj.Description + '---' + obj.Price+ '---' + obj.Quantity;

    let btn1 = document.createElement('button');
    btn1.textContent = 'Buy1';
    btn1.style.marginLeft = '20px';

    let btn2 = document.createElement('button');
    btn2.textContent = 'Buy2';
    btn2.style.marginLeft = '40px';

    let btn3 = document.createElement('button');
    btn3.textContent = 'Buy3';
    btn3.style.marginLeft = '50px';

    btn1.onclick = async () => {
        await axios.put(`https://crudcrud.com/api/7d8cbcaf76b048d7b90a7f5264e43d7c/admin/${obj._id}`, obj);
        try{
        obj.Quantity = obj.Quantity-1;
        childelem.textContent = obj.ItemName + '---' + obj.Description + '---' + obj.Price+ '---' + obj.Quantity;
      } catch (err) {
        console.log(err);
      }
    };

      btn2.onclick = async () => {
        await axios.put(`https://crudcrud.com/api/7d8cbcaf76b048d7b90a7f5264e43d7c/admin/${obj._id}`, obj);
        try{
        obj.Quantity = obj.Quantity-2;
        childelem.textContent = obj.ItemName + '---' + obj.Description + '---' + obj.Price+ '---' + obj.Quantity;
      } catch (err) {
        console.log(err);
      }
    };

    btn3.onclick = async () => {
        await axios.put(`https://crudcrud.com/api/7d8cbcaf76b048d7b90a7f5264e43d7c/admin/${obj._id}`, obj);
        try{
        obj.Quantity = obj.Quantity-3;
        childelem.textContent = obj.ItemName + '---' + obj.Description + '---' + obj.Price+ '---' + obj.Quantity;
      } catch (err) {
        console.log(err);
      }
    };

    parentelem.appendChild(childelem);
    childelem.appendChild(btn1);
    childelem.appendChild(btn2);
    childelem.appendChild(btn3);
}