# Class 2

##  Holy trinity (map, filter, reduce)

- try to implement filter on your own

## Node/command line programs

When we are running command line programs, we often need to display things to users. It is common to fomat the output in fun ways:

```
 OOO  K  K  CCC        d             
O   O K K  C           d             
O   O KK   C    ooo  ddd eee rrr  ss 
O   O K K  C    o o d  d e e r    s  
 OOO  K  K  CCC ooo  ddd ee  r   ss  
                                     
```

Program for generating ascii text: http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20

- write a program that logs the length of the class-1-data.json file, the number of males, then number of females, and the cumulative age of everyone
- shipping label for each person

## Modules

Programmers like to organize their code. We mainly accomplish this by splitting up code into small, specific files, and then import those files when we need them. In node we can split up and export things by using [modules](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)

- move your shipping label code to another file, then use it in another file

## 3rd party modules

- [lodash](https://lodash.com/docs), [moment](https://momentjs.com/)
- [npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
- package.json, src, node_modules, and README.md

## Homework

### Marketing Mailer

We want to send a mailer to all females less than 30 years old, use the class-1-data.json file, filter for said individuals, and console.log a mailer for those individuals asking if they would like to buy their favorite toy. Mention that a sale for that toy is ending in 7 days (but give them the date that is 7 days from now, i.e use moment)

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

Setup all the above properly, i.e try to seperate stuff into their own files, npm init a new project, include a README, etc.