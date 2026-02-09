# Specification

## Summary
**Goal:** Build a multi-page website for KMI Fellowship of Churches (with references to Elohim’s International Revival Center where provided) featuring a consistent brand theme, key ministry/visitor information, a “The Gathering at 6” event page, leadership/governance content, and a leadership appointment request form with backend persistence.

**Planned changes:**
- Create a multi-page site with navigation and pages/sections for: Home/Welcome, Who We Are, Our Mission, What to Expect When You Visit, Our Ministries, Community Outreach, Connect With Us (with explicit placeholders for service times, location/contact details, live stream/sermons link, and social media links).
- Add a dedicated “The Gathering at 6” page/section with the provided launch date (February 22), recurrence (every second & fourth Sunday), time (6:00 PM), location details, and “What to Expect” bullet list.
- Add a Leadership & Governance page/section containing the Presiding Prelate bio header/summary for Dr. Virgil Leo Postell Jr., the full governance structure lists/notes, Tribunal descriptions, and the Accountability & Legal Compliance statement.
- Add “Chief Apostle & Prophet Availability” section on the Leadership page with a calendar-like availability UI, a 3-state legend (Available / Out of Office / Limited Availability), and the provided note about requests requiring confirmation.
- Implement a “Schedule a Meeting with Leadership” appointment request form with the exact fields/options, client-side validation, and a clear success state.
- Persist submitted appointment requests in a Motoko canister and provide a backend query method to retrieve submissions for basic verification/testing.
- Apply the provided brand color palette and UI usage guide across header/nav, footer, buttons, links, hover states, scripture/quote blocks, and event highlights; maintain a cohesive typography/spacing theme site-wide.
- Add primary CTAs that route to: “Plan Your Visit” (visit/expectations content), “Watch Live” (placeholder destination on Connect), and “Schedule a Meeting” (appointment form).

**User-visible outcome:** Visitors can navigate a styled KMI Fellowship of Churches website, view event details for “The Gathering at 6,” read leadership/governance information (including availability), and submit a validated leadership meeting request via a form that confirms submission.
