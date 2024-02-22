<?php
if (isset($_POST['submit'])) {
    $files = $_FILES['files'];

    // Destination directory to store the uploaded files
    $targetDirectory = 'uploads/';

    // Iterate through each uploaded file
    for ($i = 0; $i < count($files['name']); $i++) {
        $fileName = basename($files['name'][$i]);
        $targetPath = $targetDirectory . $fileName;

        // Move the uploaded file to the desired location
        if (move_uploaded_file($files['tmp_name'][$i], $targetPath)) {
            echo "File $fileName uploaded successfully.<br>";
        } else {
            echo "Error uploading file $fileName.<br>";
        }
    }
}
?>
