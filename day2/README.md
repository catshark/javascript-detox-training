Topics:

1) Exception handling
2) Promises - async, await, callbacks
3) Closures
4) Regular expressions


in built errors / exceptions in js as name and message properties within it

-------------- PROMISES ----------------------

Promises acts as a link between the provider and consumer
Consumer will have to wait for a result

--> first we look at callback functions

In JavaScript we can pass function as an argument to another function. This forms the basis of callback function

Asysc makes a function return promise. Await makes a function wait for promise

------------------- EXCEPTIONS ------------------

Exception handling deals with problems which can arise in our code due to reasons like improper input, processing or logic
We try to handle exception. Handling exception means what to do in the case of problems
We can also cause exceptions to take place explicitly

The most common way of handling exceptions is by using try - catch block. Within try block, we put statements which can cause issues. Whenever issue will occur, flow will go to the catch block. Within catch block we can write the handling logic.

throw class is used for custom exceptions in js. Such exceptions are known as custom exceptions or application exceptions

Sometimes we might want to do some processing irrespecitve of whether the exception occurred or not, this can be achieved with the help of the finally block


------------------- REGULAR EXPRESSION ------

Reg expression is a pattern of characters. The general use of Reg Ex is to either extract or replace
Fixed reg ex patterns 

Expression	Description
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified

n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's
n$	Matches any string with n at the end of it
^n	Matches any string with n at the beginning of it
?=n	Matches any string that is followed by a specific string n
?!n	Matches any string that is not followed by a specific string n

.	Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
\s	Find a whitespace character
\S	Find a non-whitespace character
\b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	Find a match, but not at the beginning/end of a word
\0	Find a NULL character
\n	Find a new line character
\f	Find a form feed character
\r	Find a carriage return character
\t	Find a tab character
\v	Find a vertical tab character
\xxx	Find the character specified by an octal number xxx
\xdd	Find the character specified by a hexadecimal number dd

reg expression cheat sheet - https://cheatography.com/davechild/cheat-sheets/regular-expressions/

https://regexr.com/
https://regex-generator.olafneumann.org/