// Nested Objects - It refers to objects that are contained within other objects.
// This means that the value of one of the keys(properties) of an object is another object.It is a useful way to organize data.
// Example
console.log("Welcome to The Smart School");
console.log("-".repeat(30));
let school = {
    name: "The Smart School",
    location: "12-A Gulshan Park Garden Town Karachi Pakistan",
    contactNumber: +923312929287,
    emailId: "TSS123@hotmail.com",
    faculty: {
        principalName: "Asma Hussain",
        totalAdminStaff: 12,
        totalTeachers: 45,
        totalLowerStaff: 8,
    },
    studentCounselorName: "Hina Gulzar",
    sections: {
        montessori: {
            classes: "PG, Nursery & KG",
            uniformColor: "Civil Dress",
            timings: "9:00 am till 12:00 pm",
            subjects: ["English", "Maths", "Arts"],
            fees: 4000,
            extracurricularActivities: ["Sports", "Special Days Celebration", "Music Class"],
            isOpen5Days: true,
        },
        primary: {
            classes: "Class 1 till 5",
            uniformColor: "Green & White",
            timings: "8:00 am till 1:00pm",
            subjects: ["English", "Maths", "Urdu", "Science", "Social Studies", "Computer"],
            fees: 5500,
            extracurricularActivities: ["Sports", "Arts", "Music", "Annual Day Celebration"],
            isOpen5Days: true,
        },
        secondary: {
            classes: "Class 6 till Matric",
            uniformColor: "Green & White",
            timings: "8:00 am till 1:30pm",
            subjects: ["English", "Maths", "Urdu", "Science", "Social Studies", "Computer", "Biology", "Physics"],
            fees: 6300,
            extracurricularActivities: ["Sports", "Arts", "Music", "Annual Day Celebration"],
            isOpen5Days: true,
        },
    },
    totalClassRooms: 30,
    libraries: 2,
    playGrounds: 2,
    canteens: 2,
    scienceLab: 1
};
school.studentCounselorName = "Saniya Rahim";
console.log(`School Name: ${school.name} , School Address: ${school.location} , School Email ID: ${school.emailId}`);
//console.log(Object.keys(school));
//console.log(Object.values(school));
//console.log(Object.entries(school),(school.sections.montessori),(school.sections.primary),(school.sections.secondary));
console.log("Montessori Section:", school.sections.montessori);
console.log("Student Counselor Name:", school.studentCounselorName);
console.log("Primary Section:", school.sections.primary);
console.log("Secondary Section:", school.sections.secondary);
console.log("Total No of Class Rooms:", school.totalClassRooms);
// console.log("Montessori Class Subjects:" , school.sections.montessori.subjects );
// console.log("Primary class Subjects:" , school.sections.primary.subjects);
// console.log("Secondary class Subjects:" , school.sections.secondary.subjects);
console.log("School Contact # :", school.contactNumber);
export {};
