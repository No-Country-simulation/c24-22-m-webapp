export const fetchPets = async (filters) => {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`/api/pets?${queryParams}`);
    if (!response.ok) throw new Error("Error fetching pets");
    return response.json();
  };
