// Business Logic

function ToDo(toDo, date, subtask, note){
  this.toDo = toDo;
  this.date = date;
  this.subtask = subtask;
  this.note = note;
}

ToDo.prototype.toDoDate = function(){
  return this.toDo + " " + this.date;
};

$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    // debugger;
    var inputtedToDo = $("input#new-toDo").val();
    var inputtedDueDate = $("input#new-dueDate").val();
    var inputtedSubTask = $("input#new-subTask").val();
    var inputtedNote = $("input#new-note").val();

    var newToDo = new ToDo(inputtedToDo, inputtedDueDate, inputtedSubTask, inputtedNote);

    $("#toDoList").append( "<ul><span class='toDoDate'>" +newToDo.toDoDate() + "</span>" + "<a class ='remove'>Remove</a></ul>");

    $("input#new-toDo").val("");
    $("input#new-dueDate").val("");
    $("input#new-subTask").val("");
    $("input#new-note").val("");

    $(".toDoDate").last().click(function(){
      $("#show-toDoList").show();
      $("#show-toDoList h2").text(newToDo.toDo);
      $(".date").text(newToDo.date);
      $(".subTask").text(newToDo.subtask);
      $(".note").text(newToDo.note);

    });

    // $("#toDoList").submit(function(event){
    //   event.preventDefault();
    $(".remove").last().click(function(){
      $(this).parent().remove();
      $("#show-toDoList").hide();

    });
  });
});
