//My own resume data in JSON
let resumeData=[
    {
        name:"Arshath Ameen",
        phone: 8124934431,
        email:"ameen.desk@gmail.com",
        linkedIn: "https://www.linkedin.com/in/mohamed-arshath-ameen-085336173/",

        role:"FSD",
        workExperience:"2 years",
        previousCompany: "TCS",
        summary:"bla.. bla... bla...",
        projects: {project1:"Emailgenerator", project2: "todoList"},
        skills:["JAVA","C++","JS","python"]
        }
];
// for loop
for(let i=0;i<resumeData.length;i++){
    console.log(resumeData[i]);
}
//forEach
resumeData.forEach((item)=>{console.log(item)});
//forIn

for (index in resumeData){
    console.log(resumeData[index]);
}

//for of

for(value of resumeData){
    console.log(value);
}