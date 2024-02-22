document.getElementById('file-input').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    var files = event.target.files; // Retrieve the selected files
    var selectedFilesContainer = document.getElementById('selected-files');

    selectedFilesContainer.innerHTML = ''; // Clear the container

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        var fileItem = document.createElement('div');
        fileItem.textContent = file.name;
        selectedFilesContainer.appendChild(fileItem);
    }
}
