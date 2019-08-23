
# Class 03

## More 3rd party modules

### lodash

- [unique](https://lodash.com/docs/4.17.15#uniq)
- [order by](https://lodash.com/docs/4.17.15#orderBy)
- [start case](https://lodash.com/docs/4.17.15#startCase)

### moment

- [parse](https://momentjs.com/docs/#/parsing/string-format/)

## Synchronous vs Async and the Node context

In the browser we have the window and the various things exposed to us though that. In node we have a lot of modules that are available/installed by default.

[docs](https://nodejs.org/docs/latest-v9.x/api/)
[fs](https://nodejs.org/docs/latest-v9.x/api/fs.html)

### Set timeout

### fs

- [write file](https://nodejs.org/docs/latest-v9.x/api/fs.html#fs_fs_writefile_file_data_options_callback)
- [read file](https://nodejs.org/docs/latest-v9.x/api/fs.html#fs_fs_readfile_path_options_callback)

### request

[docs](https://github.com/request/request)

## Homework

### Pull data from the below routes with request

[sample api](https://jsonplaceholder.typicode.com/)

- [posts](https://jsonplaceholder.typicode.com/posts)
- [todos](https://jsonplaceholder.typicode.com/todos)

1) hit the posts route and print the first one to the console
2) hit the todos route and print the number of todos that are not completed

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
