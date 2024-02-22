<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart</title>
    <link rel="stylesheet" href="raj.css">
    <script src="practice1.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css"
        integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <h2>Cart Items</h2>
    <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Check if the cart is not empty
            if (isset($_SESSION['cart']) && !empty($_SESSION['cart'])) {
                $cart = $_SESSION['cart'];
                $totalPrice = 0;
                
                // Loop through the cart items and display them
                foreach ($cart as $item) {
                    echo "<tr>";
                    echo "<td>" . $item['name'] . "</td>";
                    echo "<td>" . $item['price'] . "</td>";
                    echo "</tr>";
                    
                    // Calculate the total price
                    $totalPrice += $item['price'];
                }
                
                // Display the total price
                echo "<tr>";
                echo "<td><strong>Total:</strong></td>";
                echo "<td><strong>" . $totalPrice . "</strong></td>";
                echo "</tr>";
            } else {
                echo "<tr><td colspan='2'>Cart is empty</td></tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>
