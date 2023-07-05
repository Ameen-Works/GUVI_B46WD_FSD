<?php
// create.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);
  
  // Perform database insert operation or any other action to create the item
  // For simplicity, we'll just store the item in a JSON file
  $items = json_decode(file_get_contents('items.json'), true);
  $newItem = [
    'id' => uniqid(),
    'name' => $data['name']
  ];
  $items[] = $newItem;
  file_put_contents('items.json', json_encode($items));
  
  // Return a success response
  http_response_code(200);
  echo json_encode(['message' => 'Item created successfully']);
}
?>

