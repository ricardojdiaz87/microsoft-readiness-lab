/**
 * MODULE 04: Advanced TypeScript Architectures
 * PATTERNS: Generic Repository Pattern
 * USE CASE: Type-safe data orchestrtion for SaaS platforms
 * This architecture ensures that any entity (Patient, Order, LabResult)
 * follows a strict contract while maintining O(1) performance.
 */

// 1. Foundation: Base Interface for all system entities
interface BaseEntity {
  id: string;
  createdAt: Date;
}

// 2. Data Modeling: structures Adress type for nested integrity
interface PhysicalAddress {
  street: string;
  city: string;
  zipCode: string;
}

// 3. Domain Model: Patient entity extending the base
interface Saas_Patient extends BaseEntity{
 name: string;
  diagnosis: string;
  location: PhysicalAddress;
  phoneNumber?: string;

}

// 4. The Contract: define how any repository must behave
interface IRepository<T extends BaseEntity> {
  save(item: T): void;
  getById(id: string): T | undefined;
  getAll(): T[];
}

// 5. The Engine: Generic implementation using a Map for O(1) lookups
class GenericRepository<T extends BaseEntity> implements IRepository<T> {
  private items: Map<string, T> = new Map();
/** 
 * Save or updates an entity in the reoistory.
 * Time Complexity: O(1)
*/
  public save(item: T): void {
    this.items.set(item.id, item);
    console.log(`✅ [System]: Entity [${item.id}] persisted successfully.`);
  }
  /** 
   * Retirves an entity by its unique ID.
   * Time Complexity: O(1)
  */
  public getById(id: string): T | undefined {
    return this.items.get(id);
  }
  /**
   * Returns all entities in the repository
   */
  public getAll(): T[] {
    return Array.from(this.items.values());
  }
}


// --- EXECUTION & VERIFICATION LAB ---

const patientRepo = new GenericRepository<Saas_Patient>();

patientRepo.save({
  id: "PA-2026",
  name: "Ricardo Diaz",
  diagnosis: "Architecting Scalable Systems",
  createdAt: new Date(),
  location: {
    street: "123 Tech Avenue",
    city: "Columbus",
    zipCode: "43085"
  },
  phoneNumber: "+1-555-0199"
});

console.log("\n--- Verification ---");
console.log("Record Found:", patientRepo.getById("PA-2026")?.name);