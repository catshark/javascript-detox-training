jest is a unit testing framework
It was created by facebook
It was intended to be used with react framework
Jest is used in most of the JS frameworks/testing

Jest is a 3rd party module. Jest should be installed as dev dependency


Steps to install Jest:
=====================
1) create a new folder
2) npm init -y
3) npm install --save-dev jest
4) change script value to 'jest'
5) The above step implies that when we run 'npm run test', jest will be invoked
    Jest will check for any test cases and if present will run it

We generally organise test cases into groups known as test suites
With respect to Jest, we create test suite using 'describe' function
'describe' function takes two arguments

1) name of test suite
2) A function which further consists of test cases 

To creata a test case we make use of test function, which takes two argments

1) name/description of the test case 
2) function which will include the logic of the test case

expect function is provided by jest and it is used to take result as argument and perform various matches
to skip a test we can put 'x' before 'test'

running single test npm run test -f 'truth.test.js' -- -t "String" > the -f is the file name and after the -t is matching part of the test case
