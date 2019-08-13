# Class 01

### Command Line

Why do you need to learn the command line? 
- command line interfaces come first because GUIs are harder to make and take more time
- you can do things faster from the command line once you learn it

#### Commands:

- pwd
- ls
- mkdir
- touch
- mv
- cp
- cat
- | and grep
- command [flags] argument
- redirection (echo "# 2019-javascript-2" >> README.md)

### Node

Node is an ecosystem for writing server side javascript

- [install](https://nodejs.org/en/download/)

### Programs

What is a program?
so far we have written small web pages, and small chunks of code, that often don't amount to much. What do we need to do to get to program status?

There are lots of different concepts surrounding programs:
- entrypoint (main) and exit
- short lived vs. long running
- push or pull
- pure vs. side effecting (data processing vs. display)

In this module we are going to focus on writing javascript programs that we will run in node


#### Command line programs often try to give pretty output:

```
 OOO  K  K  CCC        d             
O   O K K  C           d             
O   O KK   C    ooo  ddd eee rrr  ss 
O   O K K  C    o o d  d e e r    s  
 OOO  K  K  CCC ooo  ddd ee  r   ss  
                                     
```

### More Higher Order Functions

- forEach
- map
- filter
- reduce

### Exercises 

- keyword exercise
- create some .txt files, add some random data to each file, and then cat and grep each file for the letter "a"
- write a program that logs the length of the class-1-data.json file, the number of males, then number of femails, and the cumulative age of everyone
- shipping label for each person
- try to implement filter on your own

## Homework

### continue learning the command line: 
- [code academy](https://www.codecademy.com/learn/learn-the-command-line) 


### Continue practicing higher order functions

Here is a video Nazeem provided: https://www.youtube.com/watch?v=rRgD1yVwIvE
And here are other resoucrs I sent earlier:
- https://www.freecodecamp.org/news/higher-order-functions-in-javascript-d9101f9cf528/
- https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/
- https://medium.com/humans-create-software/a-dirt-simple-introduction-to-higher-order-functions-in-javascript-b33bf9e19056
- https://medium.com/@js_tut/higher-order-functions-in-javascript-732dc7a1952d

in particular try to understand these two important ones:
- filter
- map

#### Filter

When we have an array of any type of element, we can use filter. Filter will give us back an array with the elements in the original array unmodified, but which a subset of our choosing.

For example, we can have an array of numbers:
[1, 2, 3, 4] and go to only even [2, 4]
or an array of objects:
[{name: "zach", age: 4}, {name: "bob", age: 22}] and go to only aged greater than 10 [{name: "bob", age: 22}]

#### Map

With map we have an array of any kind of element, and we want to modify each element in the array in some way.

For example we can add to each element of a number array
[1, 2, 3, 4] and go to each number + 1 [2, 3, 4, 5]

or go from an array of objects [{name: "zach", age: 4}, {name: "bob", age: 22}] 
and pull out one of the properties ["zach", "bob"]
