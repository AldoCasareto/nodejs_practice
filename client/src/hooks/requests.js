const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  const res = await fetch(`${API_URL}/planets`);
  return await res.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  const res = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await res.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.

  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch),
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'delete',
    });
  } catch (error) {
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
