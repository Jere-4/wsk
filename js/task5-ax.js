const API_BASE = 'https://restaurant-api.metropolia.fi';

const table = document.getElementById('restaurant-table');
const dialog = document.getElementById('restaurant-dialog');
const closeBtn = document.getElementById('close-dialog');

const dialogName = document.getElementById('dialog-name');
const dialogAddress = document.getElementById('dialog-address');
const dialogPostal = document.getElementById('dialog-postal');
const dialogCity = document.getElementById('dialog-city');
const dialogPhone = document.getElementById('dialog-phone');
const dialogCompany = document.getElementById('dialog-company');

const menuContainer = document.createElement('div');
menuContainer.id = 'dialog-menu';
dialog.appendChild(menuContainer);

async function fetchRestaurants() {
  try {
    const response = await fetch(`${API_BASE}/restaurants`);
    if (!response.ok) throw new Error('Failed to fetch restaurants');
    const restaurants = await response.json();

    restaurants.sort((a, b) => a.name.localeCompare(b.name));
    renderRestaurantTable(restaurants);
  } catch (error) {
    alert('Error loading restaurant data: ' + error.message);
  }
}

function renderRestaurantTable(restaurants) {
  restaurants.forEach((restaurant) => {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const addressCell = document.createElement('td');

    nameCell.textContent = restaurant.name;
    addressCell.textContent = restaurant.address;

    row.appendChild(nameCell);
    row.appendChild(addressCell);

    row.addEventListener('click', () => {
      document
        .querySelectorAll('#restaurant-table tr')
        .forEach((r) => r.classList.remove('highlight'));
      row.classList.add('highlight');

      dialogName.textContent = restaurant.name;
      dialogAddress.textContent = restaurant.address;
      dialogPostal.textContent = restaurant.postalCode;
      dialogCity.textContent = restaurant.city;
      dialogPhone.textContent = restaurant.phone;
      dialogCompany.textContent = restaurant.company;

      fetchMenu(restaurant._id);

      dialog.showModal();
    });

    table.appendChild(row);
  });
}

async function fetchMenu(restaurantId) {
  try {
    const response = await fetch(
      `${API_BASE}/restaurants/${restaurantId}/menu`
    );
    if (!response.ok) throw new Error('Failed to fetch menu');
    const menuData = await response.json();

    menuContainer.innerHTML = "<h3>Today's Menu</h3>";

    if (menuData.length === 0) {
      menuContainer.innerHTML += '<p>No menu available for today.</p>';
      return;
    }

    const ul = document.createElement('ul');
    menuData.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} (${item.price})`;
      ul.appendChild(li);
    });
    menuContainer.appendChild(ul);
  } catch (error) {
    menuContainer.innerHTML = `<p>Error loading menu: ${error.message}</p>`;
  }
}

closeBtn.addEventListener('click', () => {
  dialog.close();
});

fetchRestaurants();
