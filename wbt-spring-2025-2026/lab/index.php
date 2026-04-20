<?php
//1
$length=5;
$width=10;
$area = $length + $width;
$parimetetr = 2*($length + $width);

echo "Length = $length <br> ";
echo "Width = $width <br> ";
echo "The area of a Rectangle = $area<br>";
echo "Perimeter of Rectangle= $parimetetr<br><br>";




//2
$amount = 100;
$vat= $amount * 0.15;
$total= $amount + $vat;

echo "Amount= $amount <br>";
echo "Vat(15%)= $vat <br>";
echo "Total amount= $total <br><br>";



//3
$number =6;
if($number%2== 0){
    echo "$number is even<br><br>";
}
else{
    echo " $number is odd<br><br>";
}


//4
$a=10;
$b=15;
$c=20;

if($a>= $b && $a>=$c){
    echo "Largest number is : $a<br><br>";
}
elseif ($b>= $a && $b>=$c) {
    echo "Largest number is : $b <br><br>";
} 
else {
   echo "Largest number is : $c<br><br>";
}


//5

for ($i = 10; $i <= 100; $i++) {
    if ($i % 2 != 0) {
        echo $i . " ";
    }
}



//6
$arr = array(2, 25, 100, 33, 96, 16, 45);
$search = 33;
$found = false;

for ($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] == $search) {
        echo "<br><br>Element found at index: " . $i;
        $found = true;
        break;
    }
}

if ($found == false) {
    echo "Element not found";
}



//7

echo "1 no pattern <br>";
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "*";
    }
    echo "<br>";
}

echo "<br>";

echo "2 no pattern <br>";
for ($i = 3; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j . " ";
    }
    echo "<br>";
}

echo "<br>";

echo "3 no pattern <br>";
$char = 'A';
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo $char . " ";
        $char++;
    }
    echo "<br>";
}

?>
