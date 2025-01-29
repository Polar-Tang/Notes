https://portswigger.net/web-security/sql-injection/union-attacks/lab-retrieve-multiple-values-in-single-column

A single qoutes is causing anomalous and a simple union injection `'UNION+SELECT+NULL,NULL-- ` it's supported, then confirmed it's a Postgre rdbms `'UNION+SELECT+NULL,version()--`.
#### What's different of the previous lab?
This lab’s setup is likely designed to simulate a more secure system than [[lab-retrieve-data-from-other-tables]] by enforcing column restrictions to prevent straightforward `UNION SELECT` attacks with multiple columns.
Whenever we use union select it should match the number of columns in the original query, and the columns should align with the data type, the null type might bypass this because. It doesn’t impose a specific data type, so it fit into any data type.
But this time if we don't use the first column as null type the application is throwing an error, let's use union select to select username do `'+UNION+SELECT+null,+username+FROM+users--`
#### Solution
To retrieve both we need to use operators to concatenate, so we could use and "`||`" and concatenate like `username || '~' || password` combines the `username` and `password` into a single string, with `~` as a separator.`'+UNION+SELECT+null,username||'~'||password+FROM+users--` 
This way, the `NULL` in the first position satisfies the column requirement without triggering a type mismatch, while the concatenation in the second position allows for multiple values to be retrieved as one.