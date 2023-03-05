$input = $_FILES['audio_data']['tmp_name']; //temporary name that PHP gave to the uploaded file
$output = $_FILES['audio_data']['name'].".mpg"; //letting the client control the filename is a rather bad idea

//move the file from temp name to local folder using $output name
if(move_uploaded_file($input, $output))
    exit('Audio file Uploaded');

/*Display the file array if upload failed*/
exit(print_r($_FILES));