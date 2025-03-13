let choice = 0;

let student = [];

function createList(){
    let n = +parseInt(prompt("Enter number of students: "));
    for (let i = 1; i <= n; i++){
        let add = prompt("Enter student " + i);
        student.push(add)
    }
    console.log(student);
}

function showStudent(){
    let show = student.map((name) => name);
    console.log(show);
}


function findStudent(){
    let searchName = prompt("Enter student name want to find: ");
    let find = student.filter((name) => name === searchName);
    if(find.length === 0){
        console.log("cant find student");
    }
    console.log(find);
}

function deleteStudent(){
    let searchName = prompt("Enter name want to delete: ");
    let deleteName = student.filter((name) => searchName !== name);
    console.log(deleteName);
   
}
do {
    choice = +parseInt(prompt(`       1. Nhập danh sách sinh viên.
       2. Hiển thị danh sách sinh viên 
       3. Tìm sinh viên theo tên
       4. Xóa sinh viên khỏi danh sách
       5. Exit
       `))

    switch(choice){
        case 1:
            createList();
            break;

        case 2:
            showStudent();
            break;

        case 3:
            findStudent();
            break;

        case 4:
            deleteStudent();
            break;
    }
}while(choice != 5);