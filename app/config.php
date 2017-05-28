<?php
define("LOCAL", "http://localhost");
define("WEB", "http://grawlinson.com");
$environment = LOCAL; //change to WEB if you're live
?>
<a href="<?php echo $environment; ?>/relative/path/to/document.html">