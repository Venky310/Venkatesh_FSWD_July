let userData=[
    {
            id: 1,
            name: "Venky",
            active: true,
            subjects: ["1html","1css","1javascript"],
            marks: {
                    "11html":10,
                    "11css":10,
                    "11javascript":10
            }
    },
    {
            id: 2,
            name: "Gautham",
            active: true,
            subjects: ["2html","2css","2javascript"],
            marks: {
                    "22html":10,
                    "22css":10,
                    "22javascript":10
            }
    }, 
    {
            id: 3,
            name: "Arun",
            active: true,
            subjects: ["3html","3css","3javascript","3bootstrap"],
            marks: {
                    "33html":10,
                    "33css":10,
                    "33javascript":10,
                    "33bootstrap":10
            }
    }

]

let count=userData.length;
console.log(count);
console.log(userData);

for(let i=0;i<count;i++){
    console.log("id = ",userData[i].id);
    console.log("name = ",userData[i].name);
    console.log("active = ",userData[i].active);


    let allsub=userData[i].subjects;
    let lenalsub=allsub.length;
    console.log("subjects = ",allsub.join(" / "));
    

    let indivmarks=userData[i].marks;
    let indivkeys=Object.keys(indivmarks);
    let indivmark=Object.values(indivmarks);
    let arrMarks1=indivkeys.map((e,i)=>e+" : "+indivmark[i]);
    console.log("Marks = ",arrMarks1.join(" / "));
}
