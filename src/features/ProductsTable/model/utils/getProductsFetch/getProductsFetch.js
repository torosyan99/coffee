export async function getProductsFetch() {
  try {
    const res = await fetch("/api/prices");

    if (!res.ok) {
      throw Error(res.message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}
