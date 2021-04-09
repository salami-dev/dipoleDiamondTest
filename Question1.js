// array of numbers
let array_of_numbers = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 1, 11],
    [12, 13, 14, 15]
]

// array to hold coordinates of zero elements
let zero_element_positions = []



// begin search for Zero elements
array_of_numbers.forEach(function (items, index, array) {

    // handle improper inputs
    if (!Array.isArray(items)) {
        throw new Error("Invalid Array")
    }

    items.forEach(function (item, sub_index, array) {

        // handle improper inputs
        if (typeof item !== "number") {
            throw new Error("Non Integer Value Supplied In Array")
        }

        // add coordinates to coordinates array if zero element is found
        if (item === 0) {
            zero_element_positions.push([index, sub_index])
        }
    })
})

// check if any zeros were found
// if not, display result, exit loop.
if (zero_element_positions.length === 0) {
    console.log(array_of_numbers);

    process.exit()
}

// begin replacement of rows and columns 
zero_element_positions.forEach(function (item, index, array) {

    let arr_index = item[0]
    let elem_index = item[1]

    // replace entire row with zero
    array_of_numbers[arr_index] = array_of_numbers[arr_index].map(x => 0)

    // replace column with 0
    array_of_numbers.forEach(function (item, index, array) {
        item[elem_index] = 0

    })
})

// output result
console.log(array_of_numbers);