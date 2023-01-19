import Team from '../Team';
import Character from '../Character';

test(('В команду (набор Set) должен добавиться персонаж без повтора'), () => {
  const player1 = new Character('Андрей', 'Swordsman');
  const player2 = new Character('Иван', 'Magician');
  const team = new Team();
  team.add(player1);
  team.add(player2);

  const arr = [player1, player2];
  const expected = new Set(arr);

  expect(team.members).toEqual(expected);
  expect(() => team.add(player1)).toThrowError(`${player1} уже существует в наборе`);
  expect(() => team.add(player2)).toThrowError(`${player2} уже существует в наборе`);
});

test(('В команду (набор Set) должны добавиться все персонажи без повтора'), () => {
  const name = 'Petrov';

  const player1 = new Character('Андрей', 'Bowman');
  const player2 = new Character('Иван', 'Daemon');
  const player3 = new Character('Владислав', 'Magician');
  const player4 = new Character('Александр', 'Swordsman');
  const player5 = new Character('Алексей', 'Undead');
  const player6 = new Character('Дмитрий', 'Zombie');
  const team = new Team();

  const arr = [player1, player2, player3, player4, player5, player6];
  const expected = new Set(arr);

  team.addAll([player5, player5, player5, player6, player4, player6, player2, player6,
    player2, player3, player1, player2]);
  expect(team.members).toEqual(expected);
});

test(('Набор Set должен стать массивом после метода toArray()'), () => {
  const player1 = new Character('Андрей', 'Bowman');
  const player2 = new Character('Иван', 'Daemon');
  const player3 = new Character('Владислав', 'Magician');
  const player4 = new Character('Александр', 'Swordsman');
  const team = new Team();
  team.addAll([player1, player2, player3, player4]);

  const expected = [player1, player2, player3, player4];

  expect(team.toArray()).toEqual(expected);
});