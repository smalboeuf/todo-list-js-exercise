

// Create a new task by adding to the arrays
// A new task will be created as incomplete

const newTask = function (title, description) {
  let task = {
    title,
    description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " ": " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };

  return task;

}

// DRIVER CODE BELOW

const task1 = newTask("Clean litter box", "Remove the dirt from the litter box and then clean it with soap");
const task2 = newTask("Do laundry", "You know the drill");
const tasks = [task1, task2];

task1.markCompleted();
task1.logState();

