/**
 * MODULE 03: Data Structures
 * PATTERN: Frequency Counter ( Optimization) 
 */

const diagnoses = ["Flu", "Cold", "Covid", "Flu", "Flu", "Covid", "Cold", "Infection"];

function countDiagnoses(list: string[]){
  const stats = new Map<string, number>();

  for (const item of list){
    // if it exists, increment. If not, start at 1.
    const currentCount = stats.get(item) || 0;
    stats.set(item, currentCount +1);
  }
  return stats;
}
const result = countDiagnoses(diagnoses);

console.log("📊 Diagnosis Statistics:");
result.forEach((count,name)=>{
console.log(`${name}: ${count}`);
});