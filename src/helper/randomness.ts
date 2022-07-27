/**
 * **randomness()**
 * is an function that takes a `suffle` argument which is an array of numbers
 * and shuffles the numbers into the array.
 * Returns the array at random.
 *
 * @param suffle is an Array of numbers.
 * @returns {number[]} the array with randomness.
 */

function randomness(suffle: number[]): number[] {
  // loop on all elements
  for (let i = suffle.length - 1; i > 0; i--) {
    // choosing random element
    const j = Math.floor(Math.random() * (i + 1));
    // repositioning elemento
    [suffle[i], suffle[j]] = [suffle[j], suffle[i]];
  }
  // Returning array with randomness
  return suffle;
}

export default randomness;
