async function runParallelLab(){
  console.log("Initializing concurrent requests...");
  const start = Date.now();

  // Simulating 3 different API calls (2 seconds each)
  const task1 = new Promise(res => setTimeout(()=> res("Patien Info"),2000));
  const task2 = new Promise(res => setTimeout(()=> res("Lab Results"),2000));
  const task3 = new Promise(res => setTimeout(()=> res("X-Rays"),2000));

  // The MAGIC: We wait for all of them together
  const results = await Promise.all([task1,task2,task3]);

  const end = Date.now();
 
  console.log("✅ All data arrived:", results);
  console.log(`⏱️ Total time: ${(end - start) / 1000} seconds`);
}

runParallelLab();