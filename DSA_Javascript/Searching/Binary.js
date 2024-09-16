function binarySearch(arr, no) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let middle = Math.floor((low + high) / 2);

        if (arr[middle] === no) {
            return `Element found at index ${middle}`;
        }
        else if (arr[middle] < no) {
            low = middle + 1;
        }
        else {
            high = middle - 1;
        }
    }

    return "Element not found";
}

const arr = [5, 9, 17, 23, 25, 45, 59, 63, 71, 89];  // Sorted array
const no = 59;  // Target value

console.log(binarySearch(arr, no));  // Output: Element found at index 6
