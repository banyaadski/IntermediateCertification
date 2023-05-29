const dataProd = [
    {
        "image": "img/model6.svg",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "cartImg": "img/cartAdd.svg",
        "cartName": "Add to Cart",
        "id": 1
    },
    {
        "image": "img/model7.svg",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "cartImg": "img/cartAdd.svg",
        "cartName": "Add to Cart",
        "id": 2
        
    },
    {
        "image": "img/model8.svg",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "cartImg": "img/cartAdd.svg",
        "cartName": "Add to Cart",
        "id": 3
        
    },
    {
        "image": "img/model9.svg",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "cartImg": "img/cartAdd.svg",
        "cartName": "Add to Cart",
        "id": 4
    },
    {
        "image": "img/model10.svg",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "cartImg": "img/cartAdd.svg",
        "cartName": "Add to Cart",
        "id": 5      
    },
    {
        "image": "img/model11.svg",
        "name": "ELLERY X M'O CAPSULE",
        "info": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": 52.00,
        "cartImg": "img/cartAdd.svg",
        "cartName": "Add to Cart",
        "id": 6      
    }
]


const dataProduct = [
    {
        "image": "cartItem1.svg",
        "name": "MANGO  PEOPLE  T-SHIRT",
        "price": 400,
        "color": "black",
        "size": "M",
        "quantity": 2,
        "item_cross": "img/Vector (2).svg"
    },
    {
        "image": "cartItem2.svg",
        "name": "MANGO  PEOPLE  T-SHIRT",
        "price": 100,
        "color": "black",
        "size": "L",
        "quantity": 1,
        "item_cross": "img/Vector (2).svg"
    }
]

const boxEl = document.querySelector('.box-content');
          const itemsElem = document.querySelector('.items');
          
          dataProd.forEach(element => {
              const itemElement = document.createElement('div');
              itemElement.classList.add('item');
              itemsElem.appendChild(itemElement);
  
              const imgEl = document.createElement('img');
              imgEl.setAttribute('src', element.image);
              imgEl.classList.add('item');
              itemElement.appendChild(imgEl);
  
              const aEl = document.createElement('a');
              aEl.classList.add('item_text');
              aEl.textContent = element.name;
              itemElement.appendChild(aEl);
  
              const pEl = document.createElement('p');
              pEl.classList.add('item_parag');
              pEl.textContent = element.info;
              itemElement.appendChild(pEl);
  
              const h2El = document.createElement('h2');
              h2El.classList.add('item_price');
              h2El.textContent = `$${element.price}`;
              itemElement.appendChild(h2El);

              

              const cartButEl = document.createElement('button');
              cartButEl.classList.add('item_button');
              cartButEl.setAttribute('id', element.id);
              cartButEl.textContent = `${element.cartName}`;
              itemElement.appendChild(cartButEl);

              const cartButImgEl = document.createElement('img');
              cartButImgEl.setAttribute('src', element.cartImg);
              cartButImgEl.classList.add('item_svg');
              cartButEl.appendChild(cartButImgEl);
          });

const otherInfoEl = document.querySelector('.other_info');
const cartItemsDiv = document.createElement('div');
cartItemsDiv.classList.add('cartItem');
const textEl = document.createElement('h1');
textEl.classList.add('cart_item_text');
textEl.textContent = 'Cart Items';
cartItemsDiv.appendChild(textEl);


const itemElem = document.querySelector('.item');

const cartButton = document.querySelectorAll('.item_button');


cartButton.forEach(element => {
    element.addEventListener('click', function (e) {
        boxEl.insertBefore(cartItemsDiv,otherInfoEl);
        // const itemsElem = document.querySelector('.items');

        const cartItemEl = document.querySelector('.cartItem');
        const mainCartel = document.createElement('div');
        mainCartel.classList.add('cart');
        cartItemEl.append(mainCartel);
        let count = 0;
        dataProduct.forEach(element => {
            count++;
            const createItemEl = document.createElement('div');
            createItemEl.classList.add('cart__item');

            const createItemInfoEl = document.createElement('div');
            createItemInfoEl.classList.add('cart__info');

            mainCartel.appendChild(createItemEl);
            createItemEl.appendChild(createItemInfoEl);
    
            const aNameEl = document.createElement('a');
            aNameEl.classList.add('cart__info_name');
            aNameEl.textContent = element.name;


            const aCrosEl = document.createElement('a');
            aCrosEl.setAttribute('href', '#')
            aCrosEl.classList.add('cart__info_cross');
            const imgAcross = document.createElement('img');
            imgAcross.setAttribute('src', element.item_cross);



            const pColorEl = document.createElement('p');
            pColorEl.classList.add('cart__info_text');
            pColorEl.textContent = `Color: ${element.color}`;


            const pPriceEl = document.createElement('p');
            pPriceEl.classList.add('cart__info_text');
            pPriceEl.textContent = `Price: $${element.price}`;

            const pSizeEl = document.createElement('p');
            pSizeEl.classList.add('cart__info_text');
            pSizeEl.textContent = `Size: ${element.size}`;

            const pQuantityEl = document.createElement('p');
            pQuantityEl.classList.add('cart__info_text');
            const inputEl = document.createElement('input');
            inputEl.classList.add('cart__info_quantity');
            inputEl.setAttribute('type', 'number');
            inputEl.setAttribute('placeholder', element.quantity)
            pQuantityEl.textContent = `Quantity:`;
            

            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', element.image);

            createItemEl.insertBefore(imgEl,createItemInfoEl)
            createItemInfoEl.appendChild(aNameEl);
            createItemInfoEl.appendChild(aCrosEl);
            aCrosEl.append(imgAcross);
            pQuantityEl.append(inputEl);
            createItemInfoEl.appendChild(pColorEl);
            createItemInfoEl.appendChild(pPriceEl);
            createItemInfoEl.appendChild(pSizeEl);
            createItemInfoEl.appendChild(pQuantityEl);

            console.log(aCrosEl);
            
            aCrosEl.addEventListener('click', function (e) {
                cartItemEl.remove();
            });
        });
    });
});



