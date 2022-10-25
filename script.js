const list = document.getElementById("list"),
      listings = list.getElementsByClassName("list-items")[0],
      listing = listings.getElementsByClassName("list-item")[0];

const items = [{
  img: "https://images.unsplash.com/photo-1503221507150-dcb5a13416ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhY2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  title: "Super Deluxe Speed Racers",
  price: "$19.99",
  rating: "68%",
  tags: ["Racing", "Fast"]
}, {
  img: "https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2F2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  title: "Explorers of the Places",
  price: "$14.99",
  rating: "91%",
  tags: ["Exploration", "Platform"]
}, {
  img: "https://images.unsplash.com/photo-1489223339793-de491ea9108b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFybXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  title: "Army Fighters",
  price: "$59.99",
  rating: "47%",
  tags: ["FPS", "Action", "Multiplayer"]
}, {
  img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWV2YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  title: "Fairy Plotter",
  price: "$39.99",
  rating: "79%",
  tags: ["RPG", "Farming", "Magic"]
}, {
  img: "https://images.unsplash.com/photo-1624125278860-381b6acd3b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvd2JveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  title: "Yeehaw Vindication",
  price: "$9.99",
  rating: "93%",
  tags: ["Open World", "Horses"]
}];

const addTags = (clone, tags) => {
  const wrapper  = clone.getElementsByClassName("tags")[0];
  
  wrapper.innerHTML = "";
  
  tags.map((tag, index) => {
    const item = document.createElement("span"),
          dot = document.createElement("span");

    item.className = "tag";
    dot.className = "dot";

    item.innerText = tag;
    dot.innerText = "·";

    wrapper.appendChild(item);
    
    if(index < tags.length - 1) {
      wrapper.appendChild(dot);
    }
  });
}

for(let i = 0; i < 5; i++) {
  const clone = listing.cloneNode(true),  
        image = clone.getElementsByClassName("list-item-image")[0],
        title = clone.getElementsByClassName("title")[0],
        price = clone.getElementsByClassName("price")[0],
        rating = clone.getElementsByClassName("rating")[0],
        item = items[i];
  
  image.src = item.img;  
  title.innerText = item.title;  
  price.innerText = item.price;
  rating.innerText = item.rating;
  
  addTags(clone, item.tags);
  
  listings.appendChild(clone);
}