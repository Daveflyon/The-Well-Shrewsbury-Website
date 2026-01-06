# Website Feedback Analysis

This document organizes the feedback received from Kate, James, Mohamed, Harry, and Peter regarding the new website draft.

## 1. Content & Information Accuracy

### General
*   **Phone Numbers:** Remove the landline number (01743 - 249804). Use only the mobile number (07910 - 359454). Ensure this is updated in the footer and contact pages. (Harry, Peter)
*   **Bible Verse:** Add John 7:37 ("If anyone thirsts, let him come to Me and drink...") as it was on the old website. (Mohamed)
*   **History:** Add a brief history in the "About" section: "The church was originally birthed in 1990 by some American missionaries who returned to the USA in 2005. Since then it has been pastored by Pete Bellingham from 2009 to 2022 and he now pastors our sister church in Oswestry. From 2022 until now the church is pastored by Harry Price and James Pilsworth who are supported by the current leadership team." (Mohamed, James)

### Plan Your Visit / When & Where
*   **Service Times:**
    *   Doors open at 10:20 AM (Must be strictly adhered to). (James)
    *   **Add:** Bible Club and Youth Group start at 10:30 AM. (Kate, James)
    *   **Age Ranges:**
        *   Children’s Bible Club: 3-12
        *   Youth Group: 13-19+ (James)
*   **Parking:**
    *   Add "The Gap" and "Frankwell" (free and closer).
    *   Clarify "Abbey Foregate" is an NCP car park? (Kate) -> James suggests mentioning The Gap, multi-storey, and Frankwell. Harry notes Frankwell is free.
    *   *Action:* Update parking suggestions to include Frankwell (free), The Gap, and town centre car parks (paid).
*   **Accessibility:**
    *   Current wording implies full accessibility.
    *   *Correction:* "The building we rent is not fully accessible for wheelchair users. Please contact us for further information." (No lifts or ramps). (Kate, James, Harry)
*   **Welcome Team:** Remove reference to a welcome team at the main doors if one doesn't exist. (Harry)
*   **Mother & Baby Room:** Note that it is currently congested with podcast equipment and has no toys. (Harry)
*   **Need Support / Lifts:** Remove the "Need Support" box regarding lifts due to limited manpower. (Kate, James, Harry)

### Next Steps / Serving / Missions
*   **Serving Opportunities:**
    *   Clarify that for new members, the focus is on blessing them first.
    *   *Suggested Wording:* "As a Church Leadership team we actively encourage people to get out involved in the life and running of the church. However for new members, our heart is to bless you, get to know you and let you drink from the Living water at The Well to start with." (James)
    *   **Environment Care:** Rename to "Church Cleaning" to avoid confusion with eco-activism. (Peter)
*   **Missions:**
    *   **Countries:** Remove China. Add: UK and Europe, Honduras, Sierra Leone, Kenya, Egypt, Israel, Montenegro, and North Korea (via Open Doors). (Harry, Peter)
    *   **Bank Details:** The Mission Fund is missing the account number. (Harry) -> *Need to ask user for this.*

### Connect / Contact
*   **Spelling:** Change "Inquiries" to "Enquiries" (British English). (Peter)
*   **Form Destination:** Clarify where sent messages go. (Harry) -> *Technical check needed.*

## 2. Design & Layout

*   **Footer Visibility:** Make the service time and address at the bottom of each page bigger and easier to see. (Kate, James)
*   **Coming Soon:** Add a "Coming Soon" section for "New Believers Bible Study". (James, Kate)

## 3. Technical / Functional

*   **Images:** User noted they will add logo and original pictures later. (Mohamed)
*   **Mobile First:** Feedback confirms the clean, modern look is appreciated.

## Action Plan

1.  **Update `constants.ts`:**
    *   Update phone numbers.
    *   Update parking info.
    *   Update leadership/history info (if stored there).
    *   Update Mission Fund countries.
2.  **Update `PlanYourVisit.tsx`:**
    *   Update accessibility text.
    *   Update parking text.
    *   Update "When & Where" to include Bible Club/Youth Group times and ages.
    *   Remove "Need Support" section.
    *   Update "Mother & Baby" section.
    *   Remove "Welcome Team" reference.
3.  **Update `About.tsx`:**
    *   Add History section.
    *   Add Bible Verse.
4.  **Update `NextSteps.tsx`:**
    *   Update Serving text (New members policy).
    *   Rename "Environment Care" to "Church Cleaning".
    *   Update Missions list.
    *   *Query:* Need Mission Fund Account Number.
5.  **Update `Contact.tsx`:**
    *   Fix spelling "Enquiries".
    *   Remove landline.
6.  **Update `Footer.tsx`:**
    *   Increase font size for address/time.
    *   Ensure mobile number is used.
7.  **Create "Coming Soon" Section:**
    *   Add to `Sundays.tsx` or `NextSteps.tsx` for "New Believers Bible Study".

## Questions for User

1.  What is the **Account Number** for the Mission Fund? (Sort code is 40-27-15).
2.  Where should the contact form emails be sent? (Currently likely a placeholder or needs backend setup).
