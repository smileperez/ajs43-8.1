export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error(`${char} уже существует в наборе`);
    }
    this.members.add(char);
  }

  addAll(char) {
    char.forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return [...this.members];
  }
}
