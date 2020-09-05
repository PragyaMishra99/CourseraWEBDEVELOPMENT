Hello Leena
Good Bye Tina
Good Bye Mina
Good Bye Yeena
Hello dff
Hello sdfs
Hello harry
Hello dffd
Hello dsfd
Good Bye fdfd
WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!
*/


(function () {

var names = ["Leena", "dff", "yeena", "Larry", "sdfs", "fdfd", "harry", "Mina", "dffd", "Tina"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();


