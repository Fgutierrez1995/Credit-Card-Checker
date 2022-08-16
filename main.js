// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


//function will check if array of credit cards is valid
//based on the Luhn algorithm
const validateCred = card => {
    let sum = 0;
    let totalEvenArray = 0;
    let totalOddArray = 0;
    //reversing card array
    let reverseCard = []
    for (var num of card)
    {
        reverseCard.unshift(num)
    }
    //iterating through the rerverse array skipping 0 index which is the check digit
    for (let i = 1; i < reverseCard.length; i++)
    {
        //checking all odd numbers in the array
        if (i % 2 === 1)
        {
            // assigning every odd number in the array to var oddArray and multiply it by 2;
            let oddArray = reverseCard[i] * 2;
            //checking if oddArray is greater than 9, if so subtract 9.
            if (oddArray > 9)
            {
                oddArray = oddArray - 9;   
            }
            //console.log(`i: ${i} array: ${reverseCard[i]} oddArray: ${oddArray}` )
            totalOddArray += oddArray;
        }
        else
        {
            let evenArray = reverseCard[i];
            //console.log(`i: ${i} array: ${reverseCard[i]} evenArray: ${evenArray}` )
            totalEvenArray += evenArray;
        }

    }
    //getting total sum value based on the Luhn algorithm
    sum = totalEvenArray + totalOddArray;
    //if the sum of the numbers remainder is 0, then the output is true based on the Luhn algorithm
    return card[card.length -1] === 10 - (sum % 10);

};

//This functions role is to check through the nested array 
//for which numbers are invalid, and return 
//another nested array of invalid cards.
const findInvalidCards = (batch) =>
{
    //creating empty array for invalid card numbers
    let invalidCards = [];
    //running through array of cards
    for (var cards of batch)
    {
        //calling validateCred function on cards and adding the invalid cards to the array
        if(!validateCred(cards))
        {
            invalidCards.push(cards);
        }
    }
    return invalidCards;
};


//checking functions

for (let i = 0; i < batch.length; i++)
{
    console.log(validateCred(batch[i]));
};

const invalidCards = findInvalidCards(batch);
for (let i = 0; i < invalidCards.length; i++){
    console.log(invalidCards[i])
};

