import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
};

export function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, 'data', 'kepler_data.csv'))
      .pipe(parse({ comment: '#', columns: true }))
      .on('data', (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on('error', (error) => {
        console.log(error);
        reject(error);
      })

      .on('end', () => {
        console.log(`Found ${habitablePlanets.length} habitable planets.`);
        resolve();
      });
  });
}

export function getAllPlanets() {
  console.log(habitablePlanets);
  return habitablePlanets;
}
