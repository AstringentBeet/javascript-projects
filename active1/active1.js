
/*Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run 
out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
Finally, check the amount against your bank account balance to see if you can afford it or not.
You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable
for your "bank account balance.""
You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.

Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. 
You may prompt the user for their bank account balance, for example. Have fun and be creative!*/

    //main function for inititalizing a set number for spending.
    var base1 = function (amount) {
        do {
        let bank = ((Math.random() * 100)*50) + 900;
        amount = bank.toFixed(2);     
      } while (amount < 1000.00);
          return amount;
    }
  
    // main function for initializing taxes.
    const tax =  function(og) {
        let rate = .08;
        rate * og;
        return rate;
    }

    //adds tax deducted price and dollar sign to items.
    var sum = function(add, sub){
        let total = add - sub;
        if(sub === undefined){
            return "$" + add;
        }
        return "$" + total;
    }

    //makes the process of comparing prompts less tedious. 
    let par = function (word) {
        return word.toLowerCase()
    }

    //reduces the amount of individual prompts being made.
    let repeat = function(second){
        second = prompt("should I buy another?");
        while(second == "yes"){
            un -= uno - tax(uno);
            return second;
        }
        if(second == "no"){
            var accessory = function(third){
                third = prompt("What about accesories? They cost" + deux + "bucks a pop.");
                if 
            }
        }
    }

    //fully establishes functions as variables
    var uno = base1();

    //the real juice of the 'bases'. Trois should be filled as the respective company's phone.
    var cycle = function(un, deux, trois){
        let glance = prompt("The new" + trois + "looks nice. But is it worth it?");
        if(par(glance) == "yes"){
            un -= uno - tax(uno);
            repeat();
        } else if(par(glance) == "no") {
            questaire(begin);
        }
    }
                /*while(par(sesame) == "yes"){
                    un -= uno;
                    if(open == "no"){
                        let abra = prompt("What about accesories? " + deux + "bucks a pop.");
                        let kadabra = abra.toLowerCase();
                        if(kadabra == "yes"){

                        }
                    }
                    if(uno <= 100.00){
                        alert("I only have " + last + "left. Only enough for accesories.");
                    }
                }
            } else if       
    } */
    //phone prices
    var phone = 99.99;
    var app = sum(phone + 100.00);
    var goog = sum(phone + 50.00);
    var micro = sum(phone);

    //accesory pricing (didn't see the need to give Microsoft a more expensive acc).
    var acc = 30.00 
    var appacc = sum(acc + 30.00);
    var googacc = sum(acc + 20.00);

    /*function that cycles through commerce-related questions involving the company they want, 
    how many phones they want to purchase, any accesories, and updates their spending threshold*/
    var questaire = function(start) {
        let jest = start.toLowerCase();
        if(jest == "apple"){
            trois = "iPhone"
            cycle(app, acc, trois);
            };

        }

    alert("b0ss: 'Here's your allowance for the company phones.'");
    alert("* hands you " + uno + " dollars.");
    alert("b0ss: It's...what we can afford at the time. Use this to purchase the phones you see fit for the employees.");
    alert("'Don't be afraid to purchase any accesories for the phones as well, so long as you can afford it ;)'");

    //hopefully initiates questaire function.
    var begin = prompt("Alright...there's Apple, Google, and Microsoft; 'The (somewhat) Big Three. Where to first?");
    questaire(begin);