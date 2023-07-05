// Function to fetch and display the items
function fetchItems() {
    fetch('read.php')
        .then(response => response.json())
        .then(data => {
            const itemsList = document.getElementById('itemsList');
            itemsList.innerHTML = ''; // Clear existing rows

            // Generate new rows for each item
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>
              <button onclick="updateItem(${item.id}, '${item.name}')">Edit</button>
              <button onclick="deleteItem(${item.id})">Delete</button>
            </td>
          `;
                itemsList.appendChild(row);
            });
        })
        .catch(error => console.log(error));
}

// Function to add a new item
function addItem() {
    const form = document.getElementById('addItemForm');
    const itemName = form.itemName.value;

    fetch('create.php', {
        method: 'POST',
        body: JSON.stringify({ name: itemName }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            if (response.ok) {
                form.reset(); // Clear the form
                fetchItems(); // Refresh the items list
            }
        })
        .catch(error => console.log(error));
}

// Function to update an existing item
function updateItem(itemId, itemName) {
    // Prompt the user for the new item name
    const updatedName = prompt('Enter the updated item name:', itemName);

    if (updatedName) {
        fetch('update.php', {
            method: 'PUT',
            body: JSON.stringify({ id: itemId, name: updatedName }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    fetchItems(); // Refresh the items list
                }
            })
            .catch(error => console.log(error));
    }
}

// Function to delete an item
function deleteItem(itemId) {
    if (confirm('Are you sure you want to delete this item?')) {
        fetch('delete.php', {
            method: 'DELETE',
            body: JSON.stringify({ id: itemId }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                if (response.ok) {
                    fetchItems(); // Refresh the items list
                }
            })
            .catch(error => console.log(error));
    }
}

// Fetch and display the items when the page loads
fetchItems();
