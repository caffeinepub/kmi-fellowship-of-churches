# Specification

## Summary
**Goal:** Display the uploaded ministry seal images on the Our Ministries page and ensure they load reliably as static frontend assets.

**Planned changes:**
- Add a clearly labeled "Ministry Seals" section to the /ministries (Our Ministries) page.
- Render the uploaded seal-related images in a responsive grid layout that adapts from 1 column on mobile to multiple columns on larger screens.
- Make each seal image clickable to view a larger version (e.g., open in new tab or a lightbox-style overlay) and provide meaningful alt text.
- Include all provided seal-related image files as frontend static assets and reference them via stable public paths (handling filenames with spaces so they load in production).

**User-visible outcome:** Visitors to /ministries can see the "Ministry Seals" section with the uploaded seal artwork displayed as clickable images that resize cleanly across devices without broken links.
