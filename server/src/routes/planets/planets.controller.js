import habitablePlanets from '../../models/planets.model.js';

function getAllPlanets(req, res) {
  return res.status(200).json(habitablePlanets);
}

export default getAllPlanets;
