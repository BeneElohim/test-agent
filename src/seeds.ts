// src/utils/seed.ts
import { Crawler, seed } from './crawler-utils';  // Assume you have a crawler-utils file

export default async function seedKnowledgeBase(url: string, limit: number, indexName: string, options: any) {
  try {
    const documents = await seed(url, limit, indexName, options);
    return documents;
  } catch (error) {
    console.error("Error seeding knowledge base:", error);
    throw error;
  }
}
