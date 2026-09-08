let teams = [
  {
    id: 1,
    tname: "Rusty",
    tl: "Ashish Raj Singh",
    email: "ashishraj@gmail.com",
    members: 6,
  },
  {
    id: 2,
    tname: "Code Warriors",
    tl: "Rohit Kumar",
    email: "rohitkumar@gmail.com",
    members: 5,
  },
];

let nextId = 3;

export const getAllTeams = () => teams;
export const getTeamById = (id) => teams.find((team) => team.id === id);
export const addTeam = (newTeam) => {
  const team = {id: nextId++, ...newTeam};
  teams.push(team);
  return team;
};

export const updateTeamById = (id, updatedTeam) => {
  const team = getTeamById(id);
  if(!team) return null;
  Object.assign(team, updatedTeam);
  return team;
};

export const deleteTeamById = (id) => {
    const index = teams.findIndex((team) => team.id === id);
    if(index == -1) return false;
    teams.splice(index, 1);
    return true;
};
