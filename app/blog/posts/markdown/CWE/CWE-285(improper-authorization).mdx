https://cwe.mitre.org/data/definitions/285.html
When the application don't check properly (or simply don't check) whether an actor is authorized to access some resource or perfome some action.

##### Example:
The following function in SQL, that process an arbitrary query
```php
function runEmployeeQuery($dbName, $name){

mysql_select_db($dbName,$globalDbHandle) or die("Could not open Database".$dbName);   
$preparedStatement = $globalDbHandle->prepare('SELECT * FROM employees WHERE name = :name');  
$preparedStatement->execute(array(':name' => $name));  
return $preparedStatement->fetchAll();

}  
  
$employeeRecord = runEmployeeQuery('EmployeeDB',$_GET['EmployeeName']);
```
Is not confirm whether the "EmployeeDB" parameter is authorized to do so. 
##### Example2
This example could be used in an application for send private messages
```perl
sub DisplayPrivateMessage {

my($id) = @_;  
my $Message = LookupMessageObject($id);   #Assume that LookupMessageObject() ensures that the $id argument is numeric,
print "From: " . encodeHTML($Message->{from}) . "<br>\n";  
print "Subject: " . encodeHTML($Message->{subject}) . "\n";  
print "<hr>\n";  
print "Body: " . encodeHTML($Message->{body}) . "\n";

}  
  
my $q = new CGI;  
_# For purposes of this example, assume that 
  
  
if (! AuthenticateUser($q->param('username'), $q->param('password'))) {

ExitError("invalid username or password");

}  
  
my $id = $q-> param('id');  
DisplayPrivateMessage($id);
```
This is trying to first to authenticate the user first and then decide whether a private message should be displayed.