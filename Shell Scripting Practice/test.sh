#!/bin/bash

#declare a variable
variable="Hi There! This is my first bash script";

#For loop will print each word from "variable" seperatly.
for word in $variable
do
    echo $word
done;

#Will print current working directory.
echo "Your current working directory is:" $PWD;

#Checks for a directory called "new", and prints a message to the console.
[ -d "./new" ] && echo "directory exist" || echo "directory does not exist";