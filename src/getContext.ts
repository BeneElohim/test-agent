// src/utils/getContext.ts
import { getEmbeddings, getMatchesFromEmbeddings } from './embedding-utils';  // Assume you have embedding-utils file

export const getContext = async (
  message: string,
  namespace: string,
  maxTokens = 3000,
  minScore = 0.7,
  getOnlyText = true
): Promise<string | any[]> => {
  const embedding = await getEmbeddings(message);
  const matches = await getMatchesFromEmbeddings(embedding, 3, namespace);

  const qualifyingDocs = matches.filter((m) => m.score && m.score > minScore);

  if (!getOnlyText) {
    return qualifyingDocs;
  }

  let docs = matches
    ? qualifyingDocs.map((match) => match.metadata.chunk)
    : [];

  return docs.join("\n").substring(0, maxTokens);
};
