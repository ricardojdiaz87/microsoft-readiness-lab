/**
 * MODULE 03: Data Structures
 * PATTERN: Set (Unique Constraints & O(1) Mermbership)
 */

// Simulating a "dirty" list of patient Ids from an internal source
const rawData = ["ID-1","ID-2","ID-1","ID-3","ID-2","ID-4","ID-1"];


const uniquePatients = new Set(rawData);

console.log("--- Unique Registry Lab ---");
console.log("📝 Raw Data Count:", rawData.length);
console.log("💎 Unique Patient Count:", uniquePatients.size);

// To convert it back to a clean array for a JSON reponse:
const cleanArray = [...uniquePatients];
console.log("📋 Clean Registry Array:", cleanArray);

console.time("🔍 Set Membership Check");
const exists = uniquePatients.has("ID-3");
console.timeEnd("🔍 Set Membership Check");

console.log(`Check Result: ${exists}`);