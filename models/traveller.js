const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => {return journey = journey.transport;
  });
  const transportList = [...new Set(result)];
};

module.exports = Traveller;
