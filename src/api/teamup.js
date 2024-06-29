// utils/teamup.js
export async function fetchTeamupEvents(startDate, endDate, apiKey) {
    const url = `https://api.teamup.com/ks6hsdke3o6zttnynw/events?startDate=${startDate}&endDate=${endDate}`;
    // const url = `https://api.teamup.com/ks73ad7816e7a61b3a/events?startDate=${startDate}&endDate=${endDate}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Teamup-Token': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }
  