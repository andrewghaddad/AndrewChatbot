
/**
 * Detects the user's intent based on simple keyword matching.
 * @param query User's input text
 * @returns Intent type
 */
export function detectIntent(query) {
  const lowerQuery = query.toLowerCase();

  // Resume / Experience related
  const resumeKeywords = ['resume', 'background', 'experience', 'cv', 'work history', 'cover letter', 'job', 'position', 'company'];
  if (resumeKeywords.some((word) => lowerQuery.includes(word))) {
    return 'Resume';
  }

  // About me
  const aboutKeywords = ['about', 'who', 'you', 'yourself', 'bio', 'biography', 'what is', 'name', 'college', 'major', 'minor', 'degree', 'graduate', 'grad'];
  if (aboutKeywords.some((word) => lowerQuery.includes(word))) {
    return 'AboutMe';
  }

  // Contact information
  const contactKeywords = ['contact', 'email', 'phone', 'reach', 'call', 'mobile', 'number', 'address', 'text'];
  if (contactKeywords.some((word) => lowerQuery.includes(word))) {
    return 'Contact';
  }

  // Default fallback
  return 'Unknown';
}