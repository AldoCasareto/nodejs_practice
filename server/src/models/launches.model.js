const launches = new Map();

const latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-10b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: false,
};

launches.set(launch.flightNumber, launch);

export function existsLaunchWithId(id) {
  return launches.has(id);
}

export function getAllLaunches() {
  return Array.from(launches.values());
}

export function addNewLaunch(launch) {
  const flightNumber = latestFlightNumber + 1;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ['zero to mastery', 'nasa'],
      flightNumber: flightNumber,
    })
  );
}

export function abortLaunchById(id) {
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}
