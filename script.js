function sortearEquipes() {
    const namesInput = document.getElementById('names');
    const names = namesInput.value.split(',').map(name => name.trim());
  
    if (names.length !== 10) {
      alert('Insira exatamente 10 nomes.');
      return;
    }
  
    const shuffledNames = shuffleArray(names);
  
    const team1 = shuffledNames.slice(0, 5);
    const team2 = shuffledNames.slice(5);
  
    const team1Div = document.getElementById('team1');
    const team2Div = document.getElementById('team2');
  
    team1Div.innerHTML = `<h2>Team 1:</h2><ul>${teamList(team1)}</ul>`;
    team2Div.innerHTML = `<h2>Team 2:</h2><ul>${teamList(team2)}</ul>`;
  }
  
  function teamList(team) {
    return team.map(name => `<li style="margin-bottom: 15px; color: white">${name}</li>`).join('');
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  