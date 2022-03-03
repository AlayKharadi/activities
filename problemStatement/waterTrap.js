// waterTrap = function (height) {
//     //total unit of the water that can be stored
//     let sum = 0;

//     //no need to check first & last as they are open on one side already
//     for (let i = 1; i < (height.length - 1); i++) {
//         //find the tallest building on the left of the given index
//         let maxL = i;
//         for (let j = 0; j < i; j++) {
//             maxL = (height[maxL] > height[j]) ? maxL : j;
//         }
//         //Now, find the tallest building on the right of the given index
//         let maxR = i;
//         for (let j = i + 1; j < height.length; j++) {
//             maxR = (height[maxR] > height[j]) ? maxR : j;
//         }

//         //Now that we have both the heights check for the minimum of both the height
//         //and add that to the total unit of water that can be trapped
//         //but also deduct height of the current platform as well as it won't be able to store water
//         sum = sum + (((height[maxL] > height[maxR]) ? height[maxR] : height[maxL]) - height[i]);
//     }

//     return sum;
// }

// waterTrap = function (height) {
//     //get the length of the array
//     let size = height.length;

//     //declare two array with same size that defines
//     //height of tallest building on the left size of the given index (including current position as well)
//     let leftArray = new Array(size);
//     //height of tallest building on the right side of the given index (including the current position as well)
//     let rightArray = new Array(size);

//     //first for left 
//     leftArray[0] = height[0];
//     //last for the right
//     rightArray[size - 1] = height[size - 1];
//     //would be same as their repsective values as we don't have anything on the outside of them

//     for (let i = 1; i < size; i++) {
//         leftArray[i] = (height[i] > leftArray[i - 1]) ? height[i] : leftArray[i - 1];
//     }

//     for (let i = size - 2; i >= 0; i--) {
//         rightArray[i] = (height[i] > rightArray[i + 1]) ? height[i] : rightArray[i + 1];
//     }

//     //get the min height from the both side(left & right) to check how much water can be trapped for that index
//     //also remove the respective height of that particular position as its not useful
//     return height.reduce((acc, value, index) => {
//         return (acc + (((leftArray[index] > rightArray[index]) ? rightArray[index] : leftArray[index]) - value));
//     }, 0);
// }

waterTrap = function (height) {
    //total unit of the water
    let sum = 0;
    //maximum height of the building on left accroding to the current index
    let maxL = 0;
    //maximum hegiht of the building on right according to the current index
    let maxR = 0;

    //starting index
    let left = 0;
    //end index
    let right = height.length;
    //start from the start left and right, approach towards center from both sides

    while (left < right) {
        //compare the height of the building on the left and right
        //whichever building has less height we can add that much water for that particular index
        if (height[left] < height[right - 1]) {
            //check for the max height
            //if its bigger than max height assign it to max
            //go towards center
            if (height[left] > maxL) {
                maxL = height[left];
            } else {
                //otherwise add water for that purticular point
                sum = sum + (maxL - height[left]);
            }
            left++;
        } else {
            //check for the max height
            //if its bigger than max height assign it to max
            //go towards center
            if (height[right - 1] > maxR) {
                //otherwise add water for that purticular point
                maxR = height[right - 1]
            } else {
                sum = sum + (maxR - height[right - 1]);
            }
            right--;
        }
    }
    return sum;
}

console.log("amout of the water that can be trapped is " + waterTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

console.log("amout of the water that can be trapped is " + waterTrap([4, 2, 0, 3, 2, 5]));


