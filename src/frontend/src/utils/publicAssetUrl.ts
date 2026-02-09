/**
 * Utility to build stable public URLs for static assets.
 * Handles URL encoding for filenames with spaces.
 */
export function publicAssetUrl(path: string): string {
  // Split the path into segments
  const segments = path.split('/');
  
  // URL encode each segment (handles spaces and special characters)
  const encodedSegments = segments.map(segment => encodeURIComponent(segment));
  
  // Join back together
  const encodedPath = encodedSegments.join('/');
  
  // Return the full public asset URL
  return `/assets/${encodedPath}`;
}
