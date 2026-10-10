class User {
  #name; // use # to private atribut for template into other object
  #username;
  #email;
  static total = 0; //atribut class
  //constructor
  constructor(name, username, email) {
    ((this.name = name),
      (this.username = username),
      (this.email = email),
      User.total++);
  }

  //get with method get()
  get name() {
    return this.#name;
  }

  //set with method set()
  set name(newName) {
    this.#name = newName;
  }

  get username() {
    return this.#username;
  }

  set username(newUsername) {
    if (!newUsername) {
      console.log("username can't empty");
    }

    this.#username = newUsername;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (newEmail === null) {
      console.log("email can't empty");
    }

    if (!newEmail.includes("@")) {
      console.log("Email harus mengandung @");
      return;
    }
    if (!emailRegex.test(newEmail)) {
      console.log("Format email tidak valid");
      return;
    }

    this.#email = newEmail;
  }

  //method class
  login() {
    console.log("login successfull");
    console.log(`Welcome ${this.name}`);
  }

  static totalUser() {
    return `Total user = ${User.total}`;
  }
}

class Admin extends User {
  #role; //atribut admin
  constructor(name, username, email, role) {
    super(name, username, email); //inherit
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  deleteUser(target) {
    console.log(`${this.name} menghapus ${target}`);
  }
}

const user_example = new User("Suki", "SukiLiar", "suki@email.com");
const user_example_2 = new User("Hehe", "L", "haha@email.com");
// user_example.email = "sukiemail";
user_example.login();
user_example_2.login();
console.log(User.totalUser());

const admin = new Admin("Admint", "Admin", "admin@admin.com", "superadmin");
admin.login(); // diwarisi dari User
admin.deleteUser("Budi"); // khusus Admin
console.log(admin.role);
