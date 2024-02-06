const getInitialValuesForUser = (body) => {
  const res = { ...body };
  if (!body?.listOfHabits) {
    res.listOfHabits = [];
  }
  if (!body?.activityHistory) {
    res.activityHistory = [];
  }
  if (!body?.email) {
    res.email = "";
  }

  return res;
};

module.exports = { getInitialValuesForUser };
