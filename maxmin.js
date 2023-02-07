/*
1. Given an array of integers, return the highest and lowest numbers in the array (without using Math.max() or Math.min())
  1. Some example inputs and outputs would look like the below:
    1. [2, 4, 1, 0, 2, -1] should return the array [-1, 4]
    2. [20, 50, 12, 6, 14, 8] should return the array [6, 50]
    3. [100, -100] should return the array [-100, 100]

*/ 

let comma_separated_values = prompt("Enter comma separated array values");
let value_array = comma_separated_values.replace(/\s/g, '').split(',').map(Number)

let min_max_array = [Math.min(...value_array), Math.max(...value_array)];


alert(`The min/max are: ${min_max_array}`)