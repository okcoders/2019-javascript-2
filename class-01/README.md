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

### Marketing Mailer

We want to send a mailer to all females less than 30 years old, use the class-1-data.json file, filter for said individuals, and console.log a mailer for those individuals asking if they would like to buy their favorite toy.

Minimum example:

----------------------------------------
| Hi John,                             |
|                                      |
| Want to buy a top hat?               |
|                                      |
|                                      |
|                                      |
| Best,                                |
| Your friends at Best Top Hats        |
|                                      |
----------------------------------------