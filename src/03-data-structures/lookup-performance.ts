/**Module 03: Data Structures Efficiency
 * PATTERN: Hash Map (01) vs. Array (On)
 */

const patientCount = 10000;
const patientsArray: any[] =[];
const patiensMap = new Map();

console.log(`📦 Generating ${patientCount} patient records...`);

// Filling our "Databse"
for (let i = 0; i < patientCount; i++){
  const id = `PAT-${i}`;
  const data = {id, name: `Patien ${i}`, status: "Stable"};
  patientsArray.push(data);
  patiensMap.set(id, data);
}
const targetId = "PAT-9999"; // we look for the last one to test the wordt-case scenario

console.log("---Performance Battle---");

// 1. Array Lookup (Must check every element one by one)
console.time("⏱️ Array Search (Sequential)");
const patienA = patientsArray.find(p => p.id === targetId);
console.timeEnd("⏱️ Array Search (Sequential)");

// 2. Map lookup ( Direct access via Memory Adress) 
console.time("🚀 Map Search (Hash Table)");
const patientM = patiensMap.get(targetId);
console.timeEnd("🚀 Map Search (Hash Table)");