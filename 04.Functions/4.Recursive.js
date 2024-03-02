/*
 * Author: Marc Ciruelos Santos
 * Date: 02-03-2024
 * Description: Recursive => Example: Cooldown
 */

async function cooldown(seconds) {
  
  // Base condition
  if (seconds < 0) { return }

  // Wait 1 second and show the remaining seconds 
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(seconds)

  // Call to cooldown again 
  cooldown(seconds - 1)
}

// Call to cooldown funcion with 25 seconds.
cooldown(25)