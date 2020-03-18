module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  let result = [];
  for (member of members) {
    if (typeof member == 'string') {
      result.push(member.trim().charAt(0).toUpperCase());
    }
  }
  if (result.length > 0) {
    let teamName = result.sort().join('');
    return teamName;
  }
  return false;
};