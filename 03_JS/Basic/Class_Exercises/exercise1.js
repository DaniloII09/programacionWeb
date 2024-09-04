let Junito = {
  events : [],
  accident : false
};

let journal = [
  {
    events : ["wake up", "eat", "sleep"],
    accident : false
  },
  {
    events : ["sleep", "sleep", "sleep"],
    accident : false
  },
  {
    events : ["beer", "eat", "JC"],
    accident : true
  }
]

function addEntry(events, accident) {
  journal.push({events, accident});
}

addEntry(["eat", "JC", "sleep"], true);