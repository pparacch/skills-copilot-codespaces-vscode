function skillMembers() {
    var members = [];
    var member = {
        name: 'John',
        age: 30,
        skills: ['JavaScript', 'CSS', 'HTML']
    };
    members.push(member);
    members.push({
        name: 'Peter',
        age: 35,
        skills: ['JavaScript', 'CSS', 'HTML']
    });
    return members;
}