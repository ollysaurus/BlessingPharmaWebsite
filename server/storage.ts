import { 
  type User, 
  type InsertUser, 
  type Product, 
  type InsertProduct,
  type TeamMember,
  type InsertTeamMember,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  getTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private teamMembers: Map<string, TeamMember>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.teamMembers = new Map();
    this.contactSubmissions = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample products
    const sampleProducts: Product[] = [
      {
        id: randomUUID(),
        name: "Advanced Cardiac Monitor",
        description: "Professional-grade cardiac monitoring system with real-time ECG analysis and wireless connectivity.",
        price: "2499.00",
        category: "Cardiology",
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fdaApproved: "true",
        inStock: 15,
        featured: "true",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Surgical Instrument Kit",
        description: "Complete sterile surgical instrument set with precision-crafted stainless steel tools.",
        price: "899.00",
        category: "Surgery",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fdaApproved: "true",
        inStock: 8,
        featured: "true",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Medication Storage Unit",
        description: "Climate-controlled pharmaceutical storage with automated inventory management.",
        price: "3299.00",
        category: "Pharmacy",
        imageUrl: "https://pixabay.com/get/g4cdc60cc9f4adf9759524146ef2c5fc5cb7c3da558f66489ec8e26fd87b8f5b2873691e299b82767ba2efada53a329f08b809386e6b2ca8a6ae9659d94cbea96_1280.jpg",
        fdaApproved: "true",
        inStock: 5,
        featured: "true",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Portable Ultrasound System",
        description: "High-resolution portable ultrasound with cardiac imaging capabilities.",
        price: "18999.00",
        category: "Cardiology",
        imageUrl: "https://pixabay.com/get/ga68fde689996ab88cd676135e7ef480921d40d1168e8edac90bdc6703389205d1fcd7197e2f87046ac9815217e824d3aeec4ce7513c056b77fce7c4ed3794b2b_1280.jpg",
        fdaApproved: "true",
        inStock: 3,
        featured: "false",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Digital BP Monitor",
        description: "Professional-grade automatic blood pressure monitor with memory.",
        price: "299.00",
        category: "General Supplies",
        imageUrl: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fdaApproved: "true",
        inStock: 25,
        featured: "false",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "Automated Defibrillator",
        description: "Professional AED with voice prompts and ECG monitoring.",
        price: "2899.00",
        category: "Emergency",
        imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        fdaApproved: "true",
        inStock: 12,
        featured: "false",
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        name: "IV Infusion Pump",
        description: "Programmable infusion pump with safety features and alerts.",
        price: "4299.00",
        category: "Pharmacy",
        imageUrl: "https://pixabay.com/get/g02e8a0e10f135aa6ab8138788205d485f5f53bb55a143bdd58b78698b2148e8b76b9f7a3efb177c688b313e052d4b79c6cfe9f876196e7e53563f17bf024d9c2_1280.jpg",
        fdaApproved: "true",
        inStock: 7,
        featured: "false",
        createdAt: new Date(),
      },
    ];

    sampleProducts.forEach(product => {
      this.products.set(product.id, product);
    });

    // Sample team members
    const sampleTeamMembers: TeamMember[] = [
      {
        id: randomUUID(),
        name: "Dr. Sarah Johnson, MD",
        title: "CEO & Founder",
        credentials: "Emergency Medicine, Board Certified\n15+ years Healthcare Experience",
        imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        bio: "Dr. Johnson founded MedSupply Pro with a vision to provide reliable medical equipment to healthcare facilities nationwide.",
        order: 1,
      },
      {
        id: randomUUID(),
        name: "Michael Rodriguez, PharmD",
        title: "Chief Operations Officer",
        credentials: "Licensed Pharmacist\n12+ years Supply Chain Management",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        bio: "Michael oversees our supply chain operations ensuring timely delivery of medical supplies to our clients.",
        order: 2,
      },
      {
        id: randomUUID(),
        name: "Dr. Lisa Chen, RN, MSN",
        title: "Quality Assurance Director",
        credentials: "Master's in Nursing\n10+ years Quality Management",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        bio: "Dr. Chen ensures all our products meet the highest quality standards and regulatory compliance.",
        order: 3,
      },
    ];

    sampleTeamMembers.forEach(member => {
      this.teamMembers.set(member.id, member);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured === "true");
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      createdAt: new Date()
    };
    this.products.set(id, product);
    return product;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).sort((a, b) => a.order - b.order);
  }

  async createTeamMember(insertMember: InsertTeamMember): Promise<TeamMember> {
    const id = randomUUID();
    const member: TeamMember = { ...insertMember, id };
    this.teamMembers.set(id, member);
    return member;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      submittedAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort((a, b) => 
      (b.submittedAt?.getTime() || 0) - (a.submittedAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
