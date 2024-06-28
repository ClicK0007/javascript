function email(lastname, domainName) {
    return `${this.name}${lastname}@${domainName}.com`;
  }
  
  const student = {
    name: "amey",
    age: 24,
  };
  
  const teacher = {
    name: "Peter",
    age: 44,
  };
  
  // Create bound functions
  const studentEmail = email.bind(student, "korde", "gmail"); 
  // This will just bind the function and you have to call it later
  const teacherEmail = email.bind(teacher, "parker", "outlook");
  
  // Call the bound functions
  console.log(email.bind(student, "korde", "gmail")()); // ameykorde@gmail.com
  console.log(studentEmail()); // ameykorde@gmail.com
  console.log(teacherEmail()); // Peterparker@outlook.com
  
  