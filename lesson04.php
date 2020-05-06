<!DOCTYPE html>
<html lang = "en-US"> 
<head>
  <meta charset = "UTF-8" />
  <title>helloWorld</title>
</head>
<body>
    <?php 
        $testing = 5; 
        print gettype( $testing ); 
        print " "; 
        print $testing;
        print "<br/>"; 
        
        $testing = "five"; 
        print gettype( $testing ); 
        print " "; 
        print $testing; 
        print "<br/>"; 
        
        $testing = 5.2; 
        print gettype( $testing ); 
        print " "; 
        print $testing; 
        print "<br/>"; 
        
        $testing = true; 
        print gettype( $testing ); 
        print " "; 
        print $testing; 
        print "<br/>"; 
        
        print "<br/>"; 
        $var1 = 5; 
        $var2 = 10; 
        if($var1 < $var2)
        {
            print "var1 is less than var2";
        }
        elseif ($var1 > $var2)
        {
            print "var1 is greater than var2"; 
        }
        elseif ($var1 == $var2)
        {
            print "var1 is equal to var2";
        }
    ?>

</body>
</html>