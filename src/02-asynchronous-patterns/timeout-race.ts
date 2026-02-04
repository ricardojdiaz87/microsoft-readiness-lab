/**
 * PATTERN: Promise.race (TheTimeout Guard)
 * GOAL: Protect the application from slow external services.
 */

async function fetchWithTimeout(serviceName: string, simulatedDelay: number) {
  const TIMEOUT_LIMIT= 3000 // 3 seconds left

 // The actual work
 const fetchTask = new Promise(res =>
  setTimeout(() => res(`✅ ${serviceName} data received`), simulatedDelay)
    );

// The "Clock" that will reject if time runs out
const timeoutTask = new Promise((_,rej) =>
  setTimeout(()=> rej(new Error(`⌛ TIMEOUT: ${serviceName} took too long!`)), TIMEOUT_LIMIT)
    );

    try {
      // Whoever finishes first win!
      const result = await Promise.race([fetchTask, timeoutTask]);
      console.log(result);
    }catch (error: any) {
      console.error(error.message);
    }
}

async function runRaceLab() {
  console.log("🏁 Starting Race Lab...");

  // 1. This one should succeed (2s < 3s)
  await fetchWithTimeout("Fast-Database", 2000);

  // 2. This one should fail (5s > 3s)
  await fetchWithTimeout("Slow-Legacy-Sever", 5000);

}
runRaceLab();