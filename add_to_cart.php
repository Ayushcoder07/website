<?php
session_start();

if (isset($_POST['item'])) {
    $itemName = $_POST['item'];
    
    // Create the cart if it doesn't exist
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = array();
    }
    
    // Add the item to the cart
    $item = array(
        'name' => $itemName,
        'price' => 0 // Set the price of the item here
    );
    $_SESSION['cart'][] = $item;
    
    // Return a response to indicate success
    echo "Item added to cart.";
} else {
    // Return an error response
    echo "Error: Item not specified.";
}
?>
