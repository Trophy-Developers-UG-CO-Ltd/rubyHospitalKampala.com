import API_ENDPOINTS from "./endpoints";

/**
 * Fetch homepage payload
 */
export async function fetchHomepage() {
  try {
    const response = await fetch(API_ENDPOINTS.HOMEPAGE, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    if (!response.ok) throw new Error("Failed to fetch homepage");
    return await response.json();
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return null;
  }
}

/**
 * Fetch all doctors
 */
export async function fetchDoctors() {
  try {
    const response = await fetch(API_ENDPOINTS.DOCTORS, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch doctors");
    return await response.json();
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return null;
  }
}

/**
 * Fetch doctor by slug
 */
export async function fetchDoctorBySlug(slug: string) {
  try {
    const response = await fetch(API_ENDPOINTS.DOCTOR_BY_SLUG(slug), {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch doctor");
    return await response.json();
  } catch (error) {
    console.error("Error fetching doctor:", error);
    return null;
  }
}

/**
 * Fetch all specialties
 */
export async function fetchSpecialties() {
  try {
    const response = await fetch(API_ENDPOINTS.SPECIALTIES, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch specialties");
    return await response.json();
  } catch (error) {
    console.error("Error fetching specialties:", error);
    return null;
  }
}

/**
 * Fetch specialty by slug
 */
export async function fetchSpecialtyBySlug(slug: string) {
  try {
    const response = await fetch(API_ENDPOINTS.SPECIALTY_BY_SLUG(slug), {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch specialty");
    return await response.json();
  } catch (error) {
    console.error("Error fetching specialty:", error);
    return null;
  }
}

/**
 * Fetch FAQs
 */
export async function fetchFAQs() {
  try {
    const response = await fetch(API_ENDPOINTS.FAQS, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error("Failed to fetch FAQs");
    return await response.json();
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return null;
  }
}
