<?php
    $CN = mysqli_connect("localhost","root","");
    $DB=mysqli_select_db($CN,"itinerease");

    $ticketID = $_POST['ticketID'];
    $userID = $_POST['userID'];
    $title = $_POST['title'];
    $date = $_POST['date'];

    $IQ="insert into ticket(ticketID, userID, title, date) values($ticketID,$userID,'$title',$date)"

    $R = mysqli_query($CN,$IQ);

    if($R)
    {
        $Message = "Ticket has been successfully added! :-)";
    }
    else
    {
        $Message = "Error adding ticket to database :-(";
    }
    echo($Message);
?>