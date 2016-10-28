# Ping-Pong

### by Ryan Mathisen 10/28/16

### Specifications
* Program will accept a number input from user
* Program will limit range of number that can be entered
* Program will return a range of numbers from 1 to the user inputted number
  * Example Input: 5
  * Example Output: [1, 2, 3, 4, 5]
* Each number returned to user will be instantiated on a new line, as if counting
* Numbers divisible by 3 will be replaced with the word "ping"
 * Example Input: 4
 * Example Output: [1, 2, "ping", 4]
* Numbers divisible by 5 will be replaced with the word "pong"
 * Example Input: 10
 * Example Output: [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong"]
* Numbers divisible by 15 are replaced with "ping-pong"
  * Example Input: 45
  * Example Output: [... , 44, "ping-pong", 46, 47, ... ]
* User may enter a new number, which will clear the originally returned range and display the new one
