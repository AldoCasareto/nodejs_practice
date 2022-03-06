const launches = new Map();

const latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  destination: 'Kepler-10b',
  customer: ['ZTM', 'NASA'],
  upcoming: true,
  success: false,
};

launches.set(launch.flightNumber, launch);

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
